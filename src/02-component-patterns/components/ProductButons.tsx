import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css';

export interface Props {
    className?: string,
    style?: React.CSSProperties,
}

export const ProductButtons = ({ className, style }: Props) => {
    const { counter, decrementCounter, incrementCounter } = useContext(ProductContext);
    return (
        <div className={`${ styles.buttonsContainer } ${ className }`} style={ style }>
            <button
                className={styles.buttonMinus}
                onClick={() => decrementCounter()}>
                -
            </button>
            <div className={styles.countLabel} >
                {counter}
            </div>
            <button
                className={styles.buttonAdd}
                onClick={() => incrementCounter()}>
                +
            </button>
        </div>
    );
}
