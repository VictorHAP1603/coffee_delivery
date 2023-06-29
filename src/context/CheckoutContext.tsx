import { createContext, useState } from 'react'
import { CheckoutFormType } from '../pages/Checkout/CheckoutForm';
import { paymentMethods } from '../utils/paymentMethods';


interface CheckoutContextProps {
    infoPayment: InfoPaymentProps
    editPaymentMethod: (id: number) => void
    editAddress: (address: CheckoutFormType) => void
}

interface CheckoutProviderProps {
    children: React.ReactNode
}

interface InfoPaymentProps {
    paymentMethod: string | null,
    address: CheckoutFormType | null
}

export const CheckoutContext = createContext<CheckoutContextProps>({} as CheckoutContextProps);

export const CheckoutProvider = ({ children }: CheckoutProviderProps) => {
    const [infoPayment, setInfoPayment] = useState<InfoPaymentProps>({
        paymentMethod: null,
        address: null
    })

    function editPaymentMethod(id: number) {
        const paymentMethodTitle = paymentMethods.find(item => item.id === id)?.title

        setInfoPayment({
            ...infoPayment,
            paymentMethod: paymentMethodTitle!
        })
    }

    function editAddress(address: CheckoutFormType) {
        setInfoPayment({
            ...infoPayment,
            address
        })
    }

    return (
        <CheckoutContext.Provider
            value={{
                infoPayment,
                editPaymentMethod,
                editAddress
            }}
        >
            {children}
        </CheckoutContext.Provider>
    )
}
