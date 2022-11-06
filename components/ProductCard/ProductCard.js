import Image from 'next/image';
import Link from 'next/link';

import styles from './productCard.module.scss';

const ProductCard = ({ data }) => {
 const { id, name, description, price, image, slug } = data;

 return (
  <div className={styles.container}>
   <div className={styles.flexContainer}>
    <Link href={`products/${slug}`}>
     <div className={styles.imgContainer}>
      <Image src={image} alt="Product icture" fill />
     </div>
    </Link>
    <p className={styles.name}>{name}</p>
    <p className={styles.description}>{description}</p>
   </div>
   <div>
    <p className={styles.price}>${price}</p>
    <button className={styles.button}>Add to cart</button>
   </div>
  </div>
 );
};

export default ProductCard;
