import { ReactElement } from "react"

export interface ProductButtonsProps {
    decrementCounter: () => void,
    incrementCounter: () => void,
    counter: number
}

export interface ProductCardProps {
    product: Product
    children: ReactElement | ReactElement[]
}

export interface Product {
    id: string,
    title: string,
    img?: string
}

export interface ProductContextProps{
    product: Product,
    counter: number,
    decrementCounter: ()=> void,
    incrementCounter: ()=> void
}

export interface ProductCardHOCProps{
    ({ children, product }: ProductCardProps): JSX.Element,
    Title: ({ title }: {title?: string; }) => JSX.Element;
    Image: ({ img }: { img?: string | undefined; }) => JSX.Element;
    Buttons: () => JSX.Element;
}