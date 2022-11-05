import { useState } from 'react';

import { CartContext } from '../context/context';

import '../styles/index.scss';

export default function MyApp({ Component, pageProps }) {
 const [cartState, setCartState] = useState(['hello']);

 return (
  <CartContext.Provider value={{ cartState, setCartState }}>
   <Component {...pageProps} />
  </CartContext.Provider>
 );
}
