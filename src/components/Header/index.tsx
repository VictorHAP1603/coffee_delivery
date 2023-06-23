import { MapPin, ShoppingCart } from 'phosphor-react';
import { useCoffee } from '../../hooks/useCoffe';

// styles
import { HeaderContainer, Actions, Cart, Location, TotalItensCart } from "./style";

// assets
import CoffeDeliveryImg from '../../assets/img/coffe_delivery_logo.svg';

export function Header() {

    const { totalItensOnCart } = useCoffee()

    return (
        <HeaderContainer>
            <div className="container">
                <img src={CoffeDeliveryImg} alt="" />

                <Actions>
                    <Location>
                        <MapPin size={24} weight="fill" />
                        <span>São Paulo, SP</span>
                    </Location>

                    <Cart>
                        <ShoppingCart size={24} weight="fill" />
                        <TotalItensCart className={`${!!totalItensOnCart ? 'active' : ''}`} >{totalItensOnCart}</TotalItensCart>
                    </Cart>
                </Actions>
            </div>
        </HeaderContainer>
    )
}
