import Link from 'next/link';
import Image from 'next/image';

import { useCartContext } from '../../context/context';

import binIcon from '../../assets/icons/bin.svg';

import styles from './cartItem.module.scss';

interface IDataObject {
 id: string;
 image: string;
 name: string;
 price: string;
 quantity: number;
 slug: string;
}

const CartItem = ({ data }: { data: IDataObject }) => {
 const { id, image, name, price, quantity, slug } = data;
 const { cartState, setCartState } = useCartContext();

 const handleAdd = () => {
  const updatedState = cartState.map((object: IDataObject) => {
   if (object.id === id) {
    return { ...object, quantity: object.quantity + 1 };
   } else {
    return object;
   }
  });
  setCartState(updatedState);
 };

 const handleDelete = () => {
  const updatedState = cartState.filter((object: IDataObject) => {
   return object.id !== id;
  });
  setCartState(updatedState);
 };

 const handleSubtract = () => {
  if (quantity > 1) {
   const updatedState = cartState.map((object: IDataObject) => {
    if (object.id === id) {
     return { ...object, quantity: object.quantity - 1 };
    } else return object;
   });
   setCartState(updatedState);
  }
 };

 return (
  <div className={styles.cartItem}>
   <div className={styles.topContainer}>
    <Link href={`product/${slug}`}>
     <Image src={image} alt="Product icture" width={64} height={48} />
    </Link>
    <Link href={`product/${slug}`}>
     <h3 className={styles.name}>{name}</h3>
    </Link>
   </div>
   <div className={styles.bottomContainer}>
    <div className={styles.quantityContainer}>
     <button className={`${styles.quantityBtn} ${styles.btnLeft}`} onClick={handleSubtract} disabled={quantity === 1} />
     <p className={styles.quantity}>Quantity: {quantity}</p>
     <button className={`${styles.quantityBtn} ${styles.btnRight}`} onClick={handleAdd} />
    </div>
    <button className={styles.removeBtn} onClick={handleDelete}>
     <Image src={binIcon} alt="Trash bin icon" width={22} height={22} />
    </button>
    <p className={styles.price}>${price}</p>
   </div>
  </div>
 );
};

export default CartItem;
