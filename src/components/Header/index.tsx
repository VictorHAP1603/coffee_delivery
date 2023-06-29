import { MapPin, ShoppingCart } from 'phosphor-react';
import { useCoffee } from '../../hooks/useCoffe';

// styles
import { HeaderContainer, Actions, Cart, Location, TotalItensCart } from "./style";

// assets
import CoffeDeliveryImg from '../../assets/img/coffe_delivery_logo.svg';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { states } from '../../utils/states';
import { Loading } from '../Loading';

interface ParameterCurrentLocationProps {
    coords: {
        latitude: number;
        longitude: number;
    }
}

interface CurrentLocationProps {
    address: {
        state: string;
        city: string;
    }
}

export function Header() {
    const [currentLocation, setCurrentLocation] = useState<CurrentLocationProps>();
    const [errorCurrentLocation, setErrorCurrentLocation] = useState<boolean>(false);
    const [loadingCurrentLocation, setLoadingCurrentLocation] = useState<boolean>(false);

    const { totalItensOnCart } = useCoffee()

    useEffect(() => {
        if (navigator.geolocation) {
            setLoadingCurrentLocation(true);
            navigator.geolocation.getCurrentPosition(
                handleSuccess,
                handleError
            );
        } else {
            console.log('Geolocalização não suportada pelo navegador');
        }
    }, []);

    const handleSuccess = async (position: ParameterCurrentLocationProps) => {
        setErrorCurrentLocation(false);

        const { latitude, longitude } = position.coords;
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );

            const data: CurrentLocationProps = await response.json();
            const formattedData = {
                address: {
                    state: states.find(state => state.name === data.address.state)?.abbreviation!,
                    city: data.address.city,
                }
            }

            setCurrentLocation(formattedData);
        } catch (error) {
            if (error instanceof Error) {
                console.log('Erro ao obter o estado:', error.message);
            }
        } finally {
            setLoadingCurrentLocation(false);
        }
    };

    const handleError = () => {
        setErrorCurrentLocation(true);
        setLoadingCurrentLocation(false);
    };


    return (
        <HeaderContainer>
            <div className="container">
                <NavLink to="/">
                    <img src={CoffeDeliveryImg} alt="" />
                </NavLink>

                <Actions>
                    <Location>
                        <MapPin size={24} weight="fill" />
                        {!loadingCurrentLocation && !errorCurrentLocation && (
                            <span>
                                {currentLocation?.address.city}, {currentLocation?.address.state}
                            </span>
                        )}

                        {!loadingCurrentLocation && errorCurrentLocation && (
                            <span>Localização não encontrada</span>
                        )}

                        {loadingCurrentLocation && !errorCurrentLocation && (
                            <Loading />
                        )}
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
