import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { GetStaticProps } from 'next';

import Seo from '../../components/Seo/Seo';
import ProductCard from '../../components/ProductCard/ProductCard';

import { IProductCardObject } from '../../types/types';

import styles from '../../styles/pages.module.scss';

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
  const paths = data.products.map((product: { slug: string }) => {
    return {
      params: { id: product.slug.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const client = new ApolloClient({
    uri: 'https://reasonapps-gql-api.vercel.app/api/graphql',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
   {
    products(slug: "${context?.params?.id}") {
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
    props: { product: data.products[0] },
  };
};

export default function ProductPage({
  product,
}: {
  product: IProductCardObject;
}) {
  return (
    <>
      <Seo title={product.name} />
      <div className={`globalContainer ${styles.productPageContainer}`}>
        <ProductCard data={product} modifier="large" />
      </div>
    </>
  );
}
