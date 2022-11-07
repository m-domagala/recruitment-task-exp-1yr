import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { CartContext } from '../../../context/context';
import cartIcon from '../../../assets/icons/cart.svg';
import arrowIcon from '../../../assets/icons/arrow.svg';

import styles from './navigation.module.scss';

function Navigation() {
 const [inputValue, setInputValue] = useState('');

 const { cartState } = useContext(CartContext);
 const router = useRouter();

 const quantitiesArray = cartState.map((object) => {
  return object.quantity;
 });

 const quantity = quantitiesArray.reduce((accumulator, value) => {
  return accumulator + value;
 }, 0);

 const handleSubmit = (e) => {
  e.preventDefault();
  router.push(`/search?q=${inputValue}`);
 };

 return (
  <nav className={styles.navigation}>
   <div className="globalContainer">
    <div className={styles.inner}>
     <Link href="/">
      <p className={styles.logo}>LOGO</p>
     </Link>
     <form className={styles.inputContainer} onSubmit={(e) => handleSubmit(e)}>
      <input className={styles.input} type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button className={styles.submitBtn} type="submit">
       <Image src={arrowIcon} alt="Arrow icon" width={10} height={10} />
      </button>
     </form>
     <Link href="/products">
      <p>Products</p>
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
