import Link from 'next/link';
import Image from 'next/image';

import { CartContext } from '../../context/context';

import styles from './cartItem.module.scss';
import { useContext } from 'react';

const CartItem = ({ data }) => {
 const { id, image, name, price, quantity, slug } = data;
 const { cartState, setCartState } = useContext(CartContext);

 const handleAdd = () => {
  const updatedState = cartState.map((object) => {
   if (object.id === id) {
    return { ...object, quantity: object.quantity + 1 };
   } else {
    return object;
   }
  });
  setCartState(updatedState);
 };

 const handleSubtract = () => {
  let updatedState;
  if (quantity > 1) {
   updatedState = cartState.map((object) => {
    if (object.id === id) {
     return { ...object, quantity: object.quantity - 1 };
    } else return object;
   });
  } else {
   updatedState = cartState.filter((object) => {
    return object.id !== id;
   });
  }
  setCartState(updatedState);
 };

 return (
  <div className={styles.cartItem}>
   <div className={styles.topContainer}>
    <Link href={`products/${slug}`}>
     <Image src={image} alt="Product icture" width={64} height={48} />
    </Link>
    <Link href={`products/${slug}`}>
     <h3 className={styles.name}>{name}</h3>
    </Link>
   </div>
   <div className={styles.bottomContainer}>
    <div className={styles.quantityContainer}>
     <button className={`${styles.quantityBtn} ${styles.btnLeft}`} onClick={handleSubtract} />
     <p className={styles.quantity}>Quantity: {quantity}</p>
     <button className={`${styles.quantityBtn} ${styles.btnRight}`} onClick={handleAdd} />
    </div>
    <p className={styles.price}>${price}</p>
   </div>
  </div>
 );
};

export default CartItem;
