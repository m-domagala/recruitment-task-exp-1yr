import { PropsWithChildren } from 'react';

import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

import styles from './layout.module.scss';

function Layout({ children }: PropsWithChildren) {
  return (
    <div className={styles.container}>
      <Navigation />
      <main className={styles.pageContent}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
