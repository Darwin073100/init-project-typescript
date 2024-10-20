import { useState } from "react";

export const useProduct = () => {
    const [counter, setCounter] = useState<number>(0);

    const incrementCounter = ():void =>{
        setCounter(prev => prev + 1);
    }

    const decrementCounter = ():void =>{
        if( counter === 0) return;
        
        setCounter(prev => prev - 1);
    }
    
    return {
        counter,
        incrementCounter,
        decrementCounter,
    }  
}
