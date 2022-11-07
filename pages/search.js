import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import Seo from '../components/Seo/Seo';
import ProductCard from '../components/ProductCard/ProductCard';

import styles from '../styles/pages.module.scss';

export default function SearchPage({ products }) {
 return (
  <>
   <Seo title="Search results" />
   <div className={`globalContainer ${styles.searchPageContainer}`}>
    {products.map((product) => {
     return <ProductCard key={product.id} data={product} />;
    })}
   </div>
  </>
 );
}

export const getServerSideProps = async (context) => {
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

 const filterValue = context?.query?.q;

 const filteredData = data.products.filter((object) => {
  return object.name.toLowerCase().includes(filterValue);
 });

 return {
  props: {
   products: filterValue ? filteredData : data.products,
  },
 };
};
