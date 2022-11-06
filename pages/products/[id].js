import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Seo from '../../components/Seo/Seo';

export const getStaticPaths = async () => {
 const client = new ApolloClient({
  uri: 'https://reasonapps-gql-api.vercel.app/api/graphql',
  cache: new InMemoryCache(),
 });
 const { data } = await client.query({
  query: gql`
   {
    products {
     slug
    }
   }
  `,
 });
 const paths = data.products.map((product) => {
  return {
   params: { id: product.slug.toString() },
  };
 });
 return {
  paths,
  fallback: false,
 };
};

export const getStaticProps = async (context) => {
 const client = new ApolloClient({
  uri: 'https://reasonapps-gql-api.vercel.app/api/graphql',
  cache: new InMemoryCache(),
 });

 const { data } = await client.query({
  query: gql`
   {
    products(slug: "${context.params.id}") {
     name
    }
   }
  `,
 });
 return {
  props: { product: data.products[0] },
 };
};

const Detail = ({ product }) => {
 return (
  <>
   <Seo title={product.name} />
   <div>
    <p>{product.name}</p>
   </div>
  </>
 );
};
export default Detail;
