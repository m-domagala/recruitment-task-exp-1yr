import Image from 'next/image';
import Link from 'next/link';

import styles from './productCard.module.scss';

const ProductCard = ({ data, modifier }) => {
 const { id, name, description, price, image, slug } = data;

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
       sizes="(max-width: 480px) 50vw,
              100vw"
      />
     </div>
    ) : (
     <Link href={`products/${slug}`}>
      <Image src={image} alt="Product icture" width={192} height={144} priority={1} />
     </Link>
    )}

    <p className={styles.name}>{name}</p>
    <p className={styles.description}>{description}</p>
   </div>
   <div className={styles.bottomContainer}>
    <p className={styles.price}>${price}</p>
    <button className={styles.button}>Add to cart</button>
   </div>
  </div>
 );
};

export default ProductCard;
