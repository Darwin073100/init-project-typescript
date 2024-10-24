import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

import { products } from '../data/products';
import '../styles/custom-styles.css';

const product = products[0];

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
                <ProductCard 
                    key={ product.id }
                    product={ product }
                    className="bg-dark text-white"
                    initialValues={{
                        count: 4,
                        maxCount: 10
                    }}
                >
                    {
                        ({reset, isMaxCountReached, maxCount, increaseBy})=>(
                            <>
                                <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                                <ProductTitle className="text-bold" />
                                <ProductButtons className="custom-buttons"  />

                                <button onClick={ ()=> increaseBy(-2)}>-2</button>
                                <button onClick={ ()=> reset()}>Reset</button>
                                {
                                    ( !isMaxCountReached &&  <button onClick={ ()=> increaseBy(+2)}>+2</button>)
                                }
                            </>
                        )
                    }
                </ProductCard>
        </div>
    )
}

export default ShoppingPage;
