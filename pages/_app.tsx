import { useState } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import { AppProps } from 'next/dist/shared/lib/router/router';

import { CartContext } from '../context/context';
import { ICartObject } from '../types/types';

import Layout from '../components/Layout/Layout';

import '../styles/index.scss';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }: AppProps) {
  const [cartState, setCartState] = useState<ICartObject[] | []>([]);

  return (
    <CartContext.Provider value={{ cartState, setCartState }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContext.Provider>
  );
}
