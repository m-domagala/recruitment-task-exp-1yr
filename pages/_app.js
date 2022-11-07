import { useState } from 'react';

import { CartContext } from '../context/context';

import Layout from '../components/layout/layout';

import '../styles/index.scss';

export default function MyApp({ Component, pageProps }) {
 const [cartState, setCartState] = useState([]);

 return (
  <CartContext.Provider value={{ cartState, setCartState }}>
   <Layout>
    <Component {...pageProps} />
   </Layout>
  </CartContext.Provider>
 );
}
