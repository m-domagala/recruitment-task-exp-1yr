import Head from 'next/head';

function Seo({ title }) {
 return (
  <Head>
   <title>{title}</title>
   <meta charSet="UTF-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   <link rel="icon" href="/favicon.ico" />
  </Head>
 );
}

export default Seo;
