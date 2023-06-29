import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import {
    ConfirmedOrderContainer,
    ConfirmedOrderHeader,
    ConfirmedOrderContent,
    ConfirmedOrderInfos,
    ConfirmedOrderImage,
    ConfirmedOrderInfoItem,
} from "./style";

import CheckoutSuccessImg from '../../assets/img/checkout-success.png'
import { useCheckout } from "../../hooks/useCheckout";
import { useEffect } from "react";
import { useCoffee } from "../../hooks/useCoffe";
import { useNavigate } from "react-router-dom";

export function ConfirmedOrder() {

    const { address, paymentMethodSelected } = useCheckout()
    const { cleanCart } = useCoffee()
    const navigate = useNavigate()

    useEffect(() => {
        cleanCart()
    }, [])

    useEffect(() => {
        if (!address && !paymentMethodSelected) {
            navigate('/checkout')
        }
    }, [])

    return (
        <ConfirmedOrderContainer className="container">

            <ConfirmedOrderHeader>
                <h2>Uhu! Pedido confirmado</h2>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </ConfirmedOrderHeader>

            <ConfirmedOrderContent>

                <ConfirmedOrderInfos>

                    <ConfirmedOrderInfoItem>
                        <div>
                            <MapPin size={18} weight="fill" />
                        </div>

                        <div>
                            <p>Entrega em <span className="bold">{address?.street}, {address?.number} {address?.complement}</span></p>
                            <p>{address?.neighborhood} - {address?.city}, {address?.state}</p>
                        </div>
                    </ConfirmedOrderInfoItem>

                    <ConfirmedOrderInfoItem>
                        <div>
                            <Timer size={18} weight="fill" />
                        </div>

                        <div>
                            <p>Previsão de entrega</p>
                            <p className="bold">20 min - 30 min</p>
                        </div>
                    </ConfirmedOrderInfoItem>

                    <ConfirmedOrderInfoItem>
                        <div>
                            <CurrencyDollar size={18} weight="fill" />
                        </div>

                        <div>
                            <p>Pagamento na entrega</p>
                            <p className="bold">{paymentMethodSelected}</p>
                        </div>
                    </ConfirmedOrderInfoItem>

                </ConfirmedOrderInfos>

                <ConfirmedOrderImage>
                    <img src={CheckoutSuccessImg} />
                </ConfirmedOrderImage>

            </ConfirmedOrderContent>

        </ConfirmedOrderContainer>
    );
}
