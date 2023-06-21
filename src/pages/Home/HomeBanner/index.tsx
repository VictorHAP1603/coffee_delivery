import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';
import { useTheme } from 'styled-components';

import HommeBannerImg from '../../../assets/img/home_image.png'

import { 
    HomeBannerContainer, 
    HomeBannerContent, 
    HomeBannerContentIntro, 
    HomeBannerContentIntroItem, 
    HomeBannerImage 
} from "./style";


export function HomeBanner() {

    const theme = useTheme();

    const homeBannerContentIntroItems = [
        {
            id: 1,
            icon: <ShoppingCart size={18} weight='fill' />,
            text: 'Compra simples e segura',
            color: theme?.colors['yellow-dark']
        },
        {
            id: 2,
            icon: <Package size={18} weight='fill' />,
            text: 'Embalagem mantém o café intacto',
            color: theme?.colors['base-text']
        },
        {
            id: 3,
            icon: <Timer size={18} weight='fill' />,
            text: 'Entrega rápida e rastreada',
            color: theme?.colors['yellow']
  
        },
        {
            id: 4,
            icon: <Coffee size={18} weight='fill' />,
            text: 'O café chega fresquinho até você',
            color: theme?.colors['purple']
        }
    ]

    return (
        <HomeBannerContainer>
            <div className="container">
                <HomeBannerContent>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

                    <HomeBannerContentIntro>
                        {homeBannerContentIntroItems.map((item) => (
                            <HomeBannerContentIntroItem key={item.id}>
                                <div style={{backgroundColor: item.color}}> 
                                    {item.icon}
                                </div>

                                <span>{item.text}</span>
                            </HomeBannerContentIntroItem>
                        ))}
                    </HomeBannerContentIntro>

                </HomeBannerContent>

                <HomeBannerImage>
                    <img src={HommeBannerImg} alt="" />
                </HomeBannerImage>
            </div>
        </HomeBannerContainer>
    )
}