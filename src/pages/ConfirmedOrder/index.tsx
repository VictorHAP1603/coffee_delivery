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

export function ConfirmedOrder() {

    const { infoPayment } = useCheckout()

    const { address, paymentMethod } = infoPayment

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
                        <p className="bold">{paymentMethod}</p>
                    </div>
                </ConfirmedOrderInfoItem>

            </ConfirmedOrderInfos>

            <ConfirmedOrderImage src={CheckoutSuccessImg} />

        </ConfirmedOrderContent>

    </ConfirmedOrderContainer>
  );
}