import { ProductButtons, ProductImage, ProductTitle } from "../components";
import { ProductCard } from "../components/";
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Page</h1>
        <hr />
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap:'wrap'
        }}>

        <ProductCard product={ product } >
          <ProductCard.Image 
            className='custom-image'/>
          <ProductCard.Title />
          <ProductCard.Buttons/>
        </ProductCard>
        
        <ProductCard
          className="bg-dark text-white" 
          product={ product } >
          <ProductImage 
            className='custom-image' />
          <ProductTitle 
            className='text-white' />
          <ProductButtons
            className='custom-buttons' />
        </ProductCard>

        <ProductCard
          product={ product }
          style={{ 
            backgroundColor: 'GrayText'
          }} >
          <ProductImage 
            style={{
              borderRadius: '50%',
            }}/>
          <ProductTitle 
            style={{
              color: 'white'
            }}/>
          <ProductButtons 
            style={{
              color: 'white'
            }}/>
        </ProductCard>

        </div>
    </div>
  )
}

export default ShoppingPage;
