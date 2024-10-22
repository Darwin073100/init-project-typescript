import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement } from 'react';
import { ProductContextProps, Product } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product
    children?: ReactElement | ReactElement[],
    className?: string,
    style?: React.CSSProperties
}

export const ProductCard = ({ children, product, className, style }: Props) => {

    const { counter, decrementCounter, incrementCounter } = useProduct();

    return (
        <Provider value={{
            product,
            counter,
            decrementCounter,
            incrementCounter
        }}>

            <div className={`${styles.productCard} ${ className }`} style={ style }>
                { children }
            </div>

        </Provider>
    )
}
