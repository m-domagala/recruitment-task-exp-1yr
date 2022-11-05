import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

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

 console.log(context.slug);
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
 console.log(product);
 return <p>{product.name}</p>;
};
export default Detail;
