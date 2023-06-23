import styled from 'styled-components'

export const OurCoffeesContainer = styled.section`
    padding-top: 3.2rem !important;
    padding-bottom: 3.2rem !important;

    h2 {
        font: ${props => props.theme.fonts.Baloo['titleL']};
        margin-bottom: 54px;
    }
`

export const CoffeeList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

    row-gap: 4rem;
    column-gap: 3.2rem;
`
