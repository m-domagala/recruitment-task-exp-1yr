import { createContext, useContext } from 'react';
import { ICartObject } from '../types/types';

export interface ICartContext {
 cartState: ICartObject[] | [];
 setCartState: React.Dispatch<React.SetStateAction<ICartObject[] | []>>;
}

export const CartContext = createContext<ICartContext | undefined>(undefined);

export const useCartContext = () => {
 let context = useContext(CartContext);
 if (context === undefined) {
  throw Error('useCartContext must be used inside of a MyApp, otherwise it will not function correctly.');
 }
 return context;
};
