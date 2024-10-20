import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {

    const { counter, decrementCounter, incrementCounter } = useProduct();

    return (
        <Provider value={{
            product,
            counter,
            decrementCounter,
            incrementCounter
        }}>

            <div className={styles.productCard}>
                { children }
            </div>

        </Provider>
    )
}
