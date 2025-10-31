import React from 'react';
import './ProductList.css'; 
import { useDispatch,useSelector } from 'react-redux';
import { addItemToCart } from './CartSlice';
const ProductList = () => {

  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];
  const dispatch = useDispatch();
  const cartItems = useSelector(state.cart.cartItems);
  
  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product));
  }
  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
      {products.map(product =>(
       <li className='product-list-item' key={product.id}>
       <span>{product.name} - ${product.price}</span>
       <button>Add to cart</button>
       </li> 
       
      ))}
      </ul>
    </div>
  );
};

export default ProductList;
