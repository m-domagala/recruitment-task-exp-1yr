import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { CartContext } from '../../context/context';

import styles from './productCard.module.scss';

const ProductCard = ({ data, modifier }) => {
 const { id, name, description, price, image, slug } = data;
 const { cartState, setCartState } = useContext(CartContext);

 const checkIsProductInCart = () => {
  const arrayOfResults = cartState.filter((object) => {
   return object.id === id;
  });
  if (arrayOfResults.length > 0) {
   return true;
  } else {
   return false;
  }
 };

 const handleAddProduct = () => {
  const isProductInCart = checkIsProductInCart();
  if (isProductInCart) {
   const updatedState = cartState.map((object) => {
    if (object.id === id) {
     return { ...object, quantity: object.quantity + 1 };
    } else return object;
   });
   setCartState(updatedState);
  } else {
   const newProduct = {
    quantity: 1,
    id,
    name,
    price,
    image,
    slug,
   };
   setCartState((prev) => {
    return [...prev, newProduct];
   });
  }
 };

 return (
  <div className={`${styles.container} ${modifier ? styles[modifier] : ''}`}>
   <div className={styles.topContainer}>
    {modifier === 'large' ? (
     <div className={styles.imgContainer}>
      <Image
       src={image}
       alt="Product picture"
       fill
       className={styles.img}
       sizes="(max-width: 480px) 355px,
              (max-width: 630px) 505px,
              640px"
      />
     </div>
    ) : (
     <Link href={`products/${slug}`}>
      <Image src={image} alt="Product icture" width={192} height={144} />
     </Link>
    )}

    <p className={styles.name}>{name}</p>
    <p className={styles.description}>{description}</p>
   </div>
   <div className={styles.bottomContainer}>
    <p className={styles.price}>${price}</p>
    <button className={styles.button} onClick={handleAddProduct}>
     Add to cart
    </button>
   </div>
  </div>
 );
};

export default ProductCard;
