import { MapPin, ShoppingCart } from 'phosphor-react';
import { useCoffee } from '../../hooks/useCoffe';

// styles
import { HeaderContainer, Actions, Cart, Location, TotalItensCart } from "./style";

// assets
import CoffeDeliveryImg from '../../assets/img/coffe_delivery_logo.svg';
import { NavLink } from 'react-router-dom';

export function Header() {

    const { totalItensOnCart } = useCoffee()

    return (
        <HeaderContainer>
            <div className="container">
                <NavLink to="/">
                    <img src={CoffeDeliveryImg} alt="" />
                </NavLink>

                <Actions>
                    <Location>
                        <MapPin size={24} weight="fill" />
                        <span>São Paulo, SP</span>
                    </Location>

                    <NavLink to="/checkout">
                        <Cart>
                            <ShoppingCart size={24} weight="fill" />
                            <TotalItensCart className={`${!!totalItensOnCart ? 'active' : ''}`} >{totalItensOnCart}</TotalItensCart>
                        </Cart>
                    </NavLink>
                </Actions>
            </div>
        </HeaderContainer>
    )
}
