import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import Seo from '../components/Seo/Seo';
import ProductCard from '../components/ProductCard/ProductCard';

import styles from '../styles/pages.module.scss';

export default function SearchPage({ products, query }) {
 return (
  <>
   <Seo title="Search results" />
   <div className="globalContainer">
    <div className={styles.searchPageContainer}>
     <h3 className={styles.header}>
      {products.length === 0 ? "We couldn't find results for " : 'Search results for '}
      <span className={styles.queryText}>{`"${query}"`}</span>
     </h3>
     {products.map((product) => {
      return <ProductCard key={product.id} data={product} />;
     })}
    </div>
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
   products: filterValue ? filteredData || [] : [],
   query: filterValue ? filterValue : '',
  },
 };
};
