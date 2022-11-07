import { useContext } from 'react';
import Link from 'next/link';

import Seo from '../components/Seo/Seo';
import CartItem from '../components/CartItem/CartItem';
import { CartContext } from '../context/context';

import styles from '../styles/pages.module.scss';

export default function ShoppingCartPage() {
 const { cartState } = useContext(CartContext);

 const pricesArray = cartState.map((object) => {
  return object.quantity * Number(object.price);
 });

 const totalCost = pricesArray.reduce((accumulator, value) => {
  return accumulator + value;
 }, 0);

 const handlePurchase = () => {
  const productsData = cartState.map((product) => {
   return { id: product.id, name: product.name, quantity: product.quantity };
  });
  const purchaseData = {
   cost: totalCost,
   products: productsData,
  };
  alert(JSON.stringify(purchaseData, null, 2));
 };

 return (
  <>
   <Seo title="Shopping cart" />
   <div className={`globalContainer ${styles.shoppingCartPageContainer}`}>
    {cartState.length > 0 ? (
     <div className={styles.inner}>
      <h3 className={styles.header}>Shopping cart</h3>
      <div className={styles.productsContainer}>
       {cartState.map((product) => {
        return <CartItem key={product.id} data={product} />;
       })}
      </div>
      <div className={styles.summary}>
       <p className={styles.cost}>
        Total cost: <span className={styles.price}>${totalCost}</span>
       </p>
       <button className={styles.purchaseBtn} onClick={handlePurchase}>
        Submit
       </button>
      </div>
     </div>
    ) : (
     <div className={styles.emptyCartContainer}>
      <h2>Your shopping cart is empty</h2>
      <Link href="/products">
       <h3 className={styles.link}>See our products</h3>
      </Link>
     </div>
    )}
   </div>
  </>
 );
}
