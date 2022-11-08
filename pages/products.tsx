import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import { IProductCardObject } from '../types/types';

import Seo from '../components/Seo/Seo';
import ProductCard from '../components/ProductCard/ProductCard';

import styles from '../styles/pages.module.scss';

export default function ProductsPage({ products }: { products: IProductCardObject[] | [] }) {
 return (
  <>
   <Seo title="Products" />
   <div className={`globalContainer ${styles.productsPageContainer}`}>
    {products.map((product) => {
     return <ProductCard key={product.id} data={product} />;
    })}
   </div>
  </>
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
   products: data.products || [],
  },
 };
};
