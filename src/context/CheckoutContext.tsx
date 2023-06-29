import { createContext, useState } from 'react'
import { CheckoutFormType } from '../pages/Checkout/CheckoutForm';
import { paymentMethods } from '../utils/paymentMethods';


interface CheckoutContextProps {
    paymentMethodSelected: string | undefined
    address: CheckoutFormType | null
    editPaymentMethod: (id: number) => void
    editAddress: (address: CheckoutFormType) => void
}

interface CheckoutProviderProps {
    children: React.ReactNode
}

export const CheckoutContext = createContext<CheckoutContextProps>({} as CheckoutContextProps);

export const CheckoutProvider = ({ children }: CheckoutProviderProps) => {
    const [paymentMethodSelected, setPaymentMethodSelected] = useState<string | undefined>()
    const [address, setAddress] = useState<CheckoutFormType | null>(null)

    function editPaymentMethod(id: number) {
        const paymentMethodTitle = paymentMethods.find(item => item.id === id)?.title
        setPaymentMethodSelected(paymentMethodTitle)
    }

    function editAddress(address: CheckoutFormType) {
        setAddress(address)
    }

    return (
        <CheckoutContext.Provider
            value={{
                paymentMethodSelected,
                address,
                editPaymentMethod,
                editAddress
            }}
        >
            {children}
        </CheckoutContext.Provider>
    )
}
