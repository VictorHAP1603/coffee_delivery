import { v4 as uuidV4 } from 'uuid'

type CoffeesTags =
    'tradicional' |
    'gelado' |
    'com leite' |
    'especial' |
    'alcoólico'

interface CoffeeTagProps {
    tag: CoffeesTags
    id: string
}

export interface CoffeeProps {
    id: number,
    src: string,
    tags: CoffeeTagProps[],
    title: string,
    description: string,
    price: number,
}

export interface CoffeesAddedListProps {
    id: number
    title: string
    price: number
    quantity?: number
    src: string
}

export const coffeeList: CoffeeProps[] = [
    {
        id: 1,
        src: '/assets/img/coffees/expresso_tradicional.png',
        tags: [{ id: uuidV4(), tag: 'tradicional' }],
        title: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 1290
    },
    {
        id: 2,
        src: '/assets/img/coffees/expresso_americano.png',
        tags: [{ id: uuidV4(), tag: 'tradicional' }],
        title: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 990
    },
    {
        id: 3,
        src: '/assets/img/coffees/expresso_cremoso.png',
        tags: [{ id: uuidV4(), tag: 'tradicional' }],
        title: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 990
    },
    {
        id: 4,
        src: '/assets/img/coffees/expresso_gelado.png',
        tags: [{ id: uuidV4(), tag: 'gelado' }, { id: uuidV4(), tag: 'tradicional' }],
        title: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 990
    },
    {
        id: 5,
        src: '/assets/img/coffees/cafe_com_leite.png',
        tags: [{ id: uuidV4(), tag: 'tradicional' }, { id: uuidV4(), tag: 'com leite' }],
        title: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 690
    },
    {
        id: 6,
        src: '/assets/img/coffees/latte.png',
        tags: [{ id: uuidV4(), tag: 'tradicional' }, { id: uuidV4(), tag: 'com leite' }],
        title: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 990
    },
    {
        id: 8,
        src: '/assets/img/coffees/capuccino.png',
        tags: [{ id: uuidV4(), tag: 'tradicional' }, { id: uuidV4(), tag: 'com leite' }],
        title: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 990
    },
    {
        id: 9,
        src: '/assets/img/coffees/macchiato.png',
        tags: [{ id: uuidV4(), tag: 'tradicional' }, { id: uuidV4(), tag: 'com leite' }],
        title: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 1490
    },
    {
        id: 11,
        src: '/assets/img/coffees/mocaccino.png',
        tags: [{ id: uuidV4(), tag: 'tradicional' }, { id: uuidV4(), tag: 'com leite' }],
        title: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 990
    },
    {
        id: 10,
        src: '/assets/img/coffees/chocolate_quente.png',
        tags: [{ id: uuidV4(), tag: 'especial' }, { id: uuidV4(), tag: 'com leite' }],
        title: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 1990
    },
    {
        id: 12,
        src: '/assets/img/coffees/cubano.png',
        tags: [{ id: uuidV4(), tag: 'especial' }, { id: uuidV4(), tag: 'alcoólico' }, { id: uuidV4(), tag: 'gelado' }],
        title: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 990
    },
    {
        id: 14,
        src: '/assets/img/coffees/havaiano.png',
        tags: [{ id: uuidV4(), tag: 'especial' }],
        title: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 990
    },
    {
        id: 15,
        src: '/assets/img/coffees/arabe.png',
        tags: [{ id: uuidV4(), tag: 'especial' }],
        title: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 990
    },
    {
        id: 16,
        src: '/assets/img/coffees/irlandes.png',
        tags: [{ id: uuidV4(), tag: 'especial' }, { id: uuidV4(), tag: 'alcoólico' }],
        title: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 990
    }
]
