import { useState } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';

import { CartContext } from '../context/context';

import Layout from '../components/layout/layout';

import '../styles/index.scss';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

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
