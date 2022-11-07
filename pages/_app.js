import { useState } from 'react';

import { ProductsContext, CartContext } from '../context/context';

import Layout from '../components/layout/layout';

import '../styles/index.scss';

export default function MyApp({ Component, pageProps }) {
 const [cartState, setCartState] = useState([]);
 const [productsState, setProductsState] = useState();

 return (
  <ProductsContext.Provider value={{ productsState, setProductsState }}>
   <CartContext.Provider value={{ cartState, setCartState }}>
    <Layout>
     <Component {...pageProps} />
    </Layout>
   </CartContext.Provider>
  </ProductsContext.Provider>
 );
}
