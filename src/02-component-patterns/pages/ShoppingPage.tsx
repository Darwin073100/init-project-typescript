import { useState } from "react";
import { ProductButtons, ProductImage, ProductTitle } from "../components";
import { ProductCard } from "../components/";
import { onChangeArgs, Product } from "../interfaces/interfaces";
import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffe Mug - Card',
  img: './coffee-mug.png'
}

const product2 = {
  id: '2',
  title: 'Coffe Mug - meme',
  img: './1729646525951.png'
}

const products: Product[] = [product, product2];

interface ProductInCart extends Product {
  count: number
}

export const ShoppingPage = () => {

  const [shopingCart, setShopingCart] = useState<{ [key: string]: ProductInCart }>({});

  const onProductCountChange = ({ count, product }: {count: number, product: Product}) => {
    // console.log('onProductCountChange',count);
    setShopingCart(oldShopingCart => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShopingCart;
        return rest;
      }

      return {
        ...oldShopingCart,
        [product.id]: { ...product, count }
      };
    });
  }

  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        {
          products.map(pd => (
            <ProductCard
              key={pd.id}
              className="bg-dark text-white"
              product={pd}
              value={shopingCart[product.id]?.count || 0}
              onChange={(event) => onProductCountChange(event)} >
              <ProductImage
                className='custom-image' />
              <ProductTitle
                className='text-white' />
              <ProductButtons
                className='custom-buttons' />
            </ProductCard>
          ))
        }
      </div>

      <div className="shopping-cart">
        {
          Object.entries(shopingCart).map(([key, product]) => (
            <ProductCard
              key={key}
              className="bg-dark text-white"
              product={product}
              style={{ width: '100px' }}
              onChange={ onProductCountChange } >
              <ProductImage
                className='custom-image' />
              <ProductButtons
                className='custom-buttons' />
            </ProductCard>
          ))
        }

      </div>
    </div>
  )
}

export default ShoppingPage;
