import Link from 'next/link';

import Seo from '../components/Seo/Seo';

import styles from '../styles/pages.module.scss';

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found" />
      <div className={`globalContainer ${styles.notFoundPageContainer}`}>
        <h2>This page could not be found</h2>
        <Link href="/">
          <h3 className={styles.link}>Go back to the Homepage</h3>
        </Link>
      </div>
    </>
  );
}
