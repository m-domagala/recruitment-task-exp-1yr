import Link from 'next/link';
import Seo from '../components/Seo/Seo';

import styles from '../styles/pages/404.module.scss';

const PageNotFound = () => {
 return (
  <>
   <Seo title="Page not found" />
   <div className={`globalContainer ${styles.container}`}>
    <h1>This page could not be found</h1>
    <h2>
     <Link href="/">Go back to the Homepage</Link>
    </h2>
   </div>
  </>
 );
};

export default PageNotFound;
