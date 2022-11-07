import Link from 'next/link';

import Seo from '../components/Seo/Seo';

import styles from '../styles/pages.module.scss';

const NotFoundPage = () => {
 return (
  <>
   <Seo title="Page not found" />
   <div className={`globalContainer ${styles.notFoundPageContainer}`}>
    <h2>This page could not be found</h2>
    <Link href="/">
     <h3>Go back to the Homepage</h3>
    </Link>
   </div>
  </>
 );
};

export default NotFoundPage;
