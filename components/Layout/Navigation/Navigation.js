import Link from 'next/link';

import styles from './navigation.module.scss';

function Navigation() {
 return (
  <nav className={styles.navigation}>
   <div className="globalContainer">
    <Link href="/">
     <p className={styles.logo}>LOGO</p>
    </Link>
   </div>
  </nav>
 );
}

export default Navigation;
