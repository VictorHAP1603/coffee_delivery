import { useEffect, useState } from "react";
import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from "react-router-dom";

// components
import { SelectedCoffeesList } from "./SelectedCoffeeList";
import { PriceTotalContainer } from "./PriceTotalContainer";
import { CheckoutAddressInput } from "./CheckoutAddressInput";
import { CheckoutAddressInputMask } from "./CheckoutAddressInputMask";
import { Loading } from "../../../components/Loading";

import {
  CompleteYourOrder,
  SelectedCoffees,
  CheckoutFormContainer,
  CheckoutSubtitle,
  CheckoutAddress,
  CheckoutAddressHeader,
  CheckoutAddressContent,
  CheckoutPayment,
  CheckoutPaymentHeader,
  CheckoutPaymentMethods,
  TypeOfPaymentItem,
  CheckoutSelectedCoffees,
  CheckoutButton,
} from "./style";
import { paymentMethods } from "../../../utils/paymentMethods";
import { useCheckout } from "../../../hooks/useCheckout";
import { useCoffee } from "../../../hooks/useCoffe";

const CheckoutFormSchema = zod.object({
  cep: zod.string().min(9, 'CEP inválido').max(9, 'CEP inválido').nonempty('CEP inválido'),
  street: zod.string().nonempty('Rua inválida'),
  number: zod.string().nonempty('Número inválido'),
  complement: zod.optional(zod.string()),
  neighborhood: zod.string().nonempty('Bairro inválido'),
  city: zod.string().nonempty('Cidade inválida'),
  state: zod.string().nonempty('UF inválido'),
  // paymentMethod: zod.number().nonempty('Selecione uma forma de pagamento')

})

export type CheckoutFormType = zod.infer<typeof CheckoutFormSchema>

export function CheckoutForm() {
  const [paymentMethodActive, setPaymentMethodActive] = useState<number | null>(null)
  const [formMessageError, setFormMessageError] = useState<string | null>(null)
  const [loadingCEP, setLoadingCEP] = useState(false)
  const [loadingSubmit, setLoadingSubmit] = useState(false)

  const CheckoutForm = useForm<CheckoutFormType>({
    resolver: zodResolver(CheckoutFormSchema)
  })

  const { coffeState } = useCoffee()
  const navigate = useNavigate()
  const { editAddress, editPaymentMethod } = useCheckout()

  const { handleSubmit, setValue, watch, formState: { errors } } = CheckoutForm

  const valueCep = watch('cep')

  function handlePaymentMethodActive(id: number) {
    if (paymentMethodActive === id) {
      setPaymentMethodActive(null)
    } else {
      setPaymentMethodActive(id)
      setFormMessageError(null)
    }
  }

  function onSubmitConfirmOrder(data: CheckoutFormType) {

    if (!paymentMethodActive) {
      setFormMessageError('Selecione uma forma de pagamento')
      return
    }

    if (coffeState.coffesAdded && coffeState.coffesAdded.length === 0) {
      setFormMessageError('Adicione pelo menos um café')
      return
    }

    // api de realiazar pedido
    setLoadingSubmit(true)
    setTimeout(() => {
      editAddress(data)
      editPaymentMethod(paymentMethodActive)
      setFormMessageError(null)
      setLoadingSubmit(false)
      navigate('/confirmed-order')
    }, 2000)
  }

  useEffect(() => {

    async function verifyIfCepIsValidAndSearchFields() {
      if (valueCep && valueCep.length === 9) {
        setLoadingCEP(true)
        const cepWithoutMask = valueCep.replace('-', '')

        const json =
          await (await fetch(`https://viacep.com.br/ws/${cepWithoutMask}/json/`)).json()

        setLoadingCEP(false)
        setValue('street', json.logradouro)
        setValue('neighborhood', json.bairro)
        setValue('city', json.localidade)
        setValue('state', json.uf)
      }
    }

    verifyIfCepIsValidAndSearchFields()
  }, [valueCep, setValue])

  return (
    <CheckoutFormContainer onSubmit={handleSubmit(onSubmitConfirmOrder)} className="container">
      <CompleteYourOrder>
        <CheckoutSubtitle>Complete seu pedido</CheckoutSubtitle>

        <CheckoutAddress>
          <CheckoutAddressHeader>
            <MapPinLine size={22} />

            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </CheckoutAddressHeader>

          <FormProvider {...CheckoutForm}>
            <CheckoutAddressContent>
              <CheckoutAddressInputMask
                mask="99999-999"
                type="text"
                placeholder="CEP"
                maskChar={null}
                keyForm="cep"
              >
                {loadingCEP ? <Loading /> : null}
              </CheckoutAddressInputMask>

              <CheckoutAddressInput type="text" placeholder="Rua" keyForm="street" />
              <CheckoutAddressInput type="text" placeholder="Número" keyForm="number" />
              <CheckoutAddressInput type="text" placeholder="Complemento" keyForm="complement" />
              <CheckoutAddressInput type="text" placeholder="Bairro" keyForm="neighborhood" />
              <CheckoutAddressInput type="text" placeholder="Cidade" keyForm="city" />
              <CheckoutAddressInput type="text" placeholder="UF" keyForm="state" />
            </CheckoutAddressContent >
          </FormProvider>

        </CheckoutAddress>

        <CheckoutPayment>
          <CheckoutPaymentHeader>
            <CurrencyDollar size={22} />
            <div>
              <p>Pagamento</p>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
          </CheckoutPaymentHeader>

          <CheckoutPaymentMethods>
            {paymentMethods.map(type => (
              <TypeOfPaymentItem
                className={paymentMethodActive === type.id ? 'active' : ''}
                key={type.id}
                onClick={() => handlePaymentMethodActive(type.id)}
                type="button"
              >
                {type.icon}
                <span>{type.title}</span>
              </TypeOfPaymentItem>
            ))}
          </CheckoutPaymentMethods>

        </CheckoutPayment>

      </CompleteYourOrder >

      <SelectedCoffees>
        <CheckoutSubtitle>Cafés selecionados</CheckoutSubtitle>

        <CheckoutSelectedCoffees>
          <SelectedCoffeesList />
          <PriceTotalContainer />
          <CheckoutButton type="submit">Confirmar Pedido</CheckoutButton>

          {Object.keys(errors).length > 0 && (
            <p className="error">Preencha todos os campos corretamente</p>
          )}

          {Object.keys(errors).length === 0 && formMessageError && (
            <p className="error">{formMessageError}</p>
          )}

          {loadingSubmit && <Loading />}
        </CheckoutSelectedCoffees>
      </SelectedCoffees>

    </CheckoutFormContainer>
  )
}
