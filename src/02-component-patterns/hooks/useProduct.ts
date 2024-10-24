import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";


interface useProductArgs{
    product: Product,
    onChange?: (args: onChangeArgs)=> void
    value?: number
}

export const useProduct = ({ onChange, product, value=0 }: useProductArgs) => {
    const [counter, setCounter] = useState<number>(value);

    const isControlled = useRef(!!onChange)

    useEffect(()=>{
        setCounter( value );
    }, [value]);

    const incrementCounter = (value: number):void =>{

        const newValue = counter + value;

        setCounter( newValue );

        onChange && onChange({count: newValue, product});
    }

    const decrementCounter = ():void =>{
        if( counter === 0) return;
        
        const newValue = counter - 1;

        setCounter( newValue );

        onChange && onChange({count: newValue, product});
    }
    
    return {
        counter,
        incrementCounter,
        decrementCounter,
    }  
}
