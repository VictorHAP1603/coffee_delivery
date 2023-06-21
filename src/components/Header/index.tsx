import { MapPin, ShoppingCart } from 'phosphor-react';

import { HeaderContainer, Actions, Cart, Location, TotalItensCart } from "./style";

import CoffeDeliveryImg from '../../assets/img/coffe_delivery_logo.svg';

export function Header() {
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
                        {/* <TotalItensCart>2</TotalItensCart> */}
                    </Cart>
                </Actions>
            </div>
        </HeaderContainer>
    )
}