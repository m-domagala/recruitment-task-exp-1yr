import { useContext } from 'react';

import { CartContext } from '../context/context';

import Image from 'next/image';
import Layout from '../components/layout/layout';
import Seo from '../components/Seo/Seo';
import styles from '../styles/pages/Home.module.scss';

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Link from 'next/link';

export default function Homepage({ products }) {
 const { cartState, setCartState } = useContext(CartContext);

 return (
  <Layout sidebar>
   <Seo title="Homepage" />
   {products.map((product) => {
    return (
     <Link href={`products/${product.slug}`} key={product.name}>
      {product.name}
     </Link>
    );
   })}
  </Layout>
 );
}

export const getStaticProps = async () => {
 const client = new ApolloClient({
  uri: 'https://reasonapps-gql-api.vercel.app/api/graphql',
  cache: new InMemoryCache(),
 });
 const { data } = await client.query({
  query: gql`
   {
    products {
     id
     name
     description
     price
     image
     slug
    }
   }
  `,
 });

 return {
  props: {
   products: data.products,
  },
 };
};
