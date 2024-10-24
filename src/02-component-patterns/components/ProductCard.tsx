import { useProduct } from '../hooks/useProduct';
import { createContext, ReactElement } from 'react';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product
    children?: ReactElement | ReactElement[],
    className?: string,
    style?: React.CSSProperties,
    onChange?: (args: onChangeArgs)=> void,
    value?: number
}

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {

    const { counter, decrementCounter, incrementCounter } = useProduct( {onChange, product, value} );

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
