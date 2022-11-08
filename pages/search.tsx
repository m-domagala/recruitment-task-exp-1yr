import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { GetServerSideProps } from 'next';
import { IProductCardObject } from '../types/types';

import Seo from '../components/Seo/Seo';
import ProductCard from '../components/ProductCard/ProductCard';

import styles from '../styles/pages.module.scss';

interface ISearchPage {
 products: IProductCardObject[] | [];
 query: string;
}

export default function SearchPage({ products, query }: ISearchPage) {
 const getHeaderText = () => {
  if (query === '') {
   return 'No results found';
  } else {
   if (products.length === 0) {
    return 'No results found for ';
   } else {
    return `${products.length} results found for `;
   }
  }
 };

 const headerText = getHeaderText();

 return (
  <>
   <Seo title="Search results" />
   <div className="globalContainer">
    <div className={styles.searchPageContainer}>
     <h3 className={styles.header}>
      {headerText}
      {query !== '' && <span className={styles.queryText}>{`"${query}"`}</span>}
     </h3>
     {products.map((product: IProductCardObject) => {
      return <ProductCard key={product.id} data={product} />;
     })}
    </div>
   </div>
  </>
 );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
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

 const filteredData =
  typeof filterValue === 'string' &&
  data.products.filter((object: IProductCardObject) => {
   return object.name.toLowerCase().includes(filterValue);
  });

 return {
  props: {
   products: filterValue ? filteredData || [] : [],
   query: filterValue ? filterValue : '',
  },
 };
};
