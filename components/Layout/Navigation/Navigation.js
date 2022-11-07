import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { CartContext } from '../../../context/context';
import cartIcon from '../../../assets/icons/cart.svg';

import styles from './navigation.module.scss';

function Navigation() {
 const { cartState } = useContext(CartContext);

 const quantitiesArray = cartState.map((object) => {
  return object.quantity;
 });

 const quantity = quantitiesArray.reduce((accumulator, value) => {
  return accumulator + value;
 }, 0);

 return (
  <nav className={styles.navigation}>
   <div className="globalContainer">
    <div className={styles.linksContainer}>
     <Link href="/">
      <p className={styles.logo}>LOGO</p>
     </Link>
     <div className={styles.cart}>
      <Link href="/shopping-cart">
       <Image src={cartIcon} alt="Shopping cart icon" width={30} height={30} />
       {quantity > 0 && <span className={styles.itemsNumber}>{quantity}</span>}
      </Link>
     </div>
    </div>
   </div>
  </nav>
 );
}

export default Navigation;
