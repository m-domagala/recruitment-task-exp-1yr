import Link from 'next/link';

import Seo from '../components/Seo/Seo';

import styles from '../styles/pages.module.scss';

export default function Homepage() {
 return (
  <>
   <Seo title="Home page" />
   <div className={`globalContainer ${styles.homePageContainer}`}>
    <h2>Welcome to the Homepage</h2>
    <Link href="/products">
     <h3 className={styles.link}>See our products</h3>
    </Link>
   </div>
  </>
 );
}
