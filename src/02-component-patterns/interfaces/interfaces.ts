import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductButtonProps } from '../components/ProductButons';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps } from '../components/ProductImage';


export interface ProductButtonsProps {
    decrementCounter: () => void,
    incrementCounter: () => void,
    counter: number
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
    Title: (Props: ProductTitleProps ) => JSX.Element,
    Image: (Props: ProductImageProps ) => JSX.Element,
    Buttons: (Props: ProductButtonProps ) => JSX.Element,
}

export interface onChangeArgs {
    product: Product, 
    count: number
}