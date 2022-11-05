import Navigation from '../Navigation/Navigation';
// import Sidebar from '../Sidebar/Sidebar';

import styles from './layout.module.scss';

function Layout({ children, sidebar = false }) {
 return (
  <>
   <Navigation />
   {/* <div className={styles.flexContainer}> */}
   {/* {sidebar && <Sidebar />} */}
   <main className={styles.mainContainer}>{children}</main>
   {/* </div> */}
  </>
 );
}

export default Layout;
