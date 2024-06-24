import './herobaner.scss';
import { useState } from 'react';

export default function Herobanner() {
  const [cartItems, setCartItems] = useState([]);
  const [toastMessage, setToastMessage] = useState(''); 

  const addToCart = (productName, price) => {
    const isItemAlreadyAdded = cartItems.some(item => item.productName === productName);
    
    if (isItemAlreadyAdded) {
      setToastMessage('Item is already added');
    } else {
      const newItem = {
        productName: productName,
        price: price
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const editCartItem = (index, newProductName, newPrice) => {
    const updatedCart = [...cartItems];
    updatedCart[index] = {
      productName: newProductName,
      price: newPrice
    };
    setCartItems(updatedCart);
  };

  return (
    <div className="herobanner">
      <div className="herobanner-products">
        <div className="herobanner-product">
          <img src="https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Product 1" />
          <div className="herobanner-product-price">$99.99</div>
          <button onClick={() => addToCart("Product 1", 99.99)}>Add to Cart</button>
        </div>
      </div>

      <div className="herobanner-products">
        <div className="herobanner-product">
          <img src="https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Product 1" />
          <div className="herobanner-product-price">$99.99</div>
          <button onClick={() => addToCart("Product 1", 99.99)}>Add to Cart</button>
        </div>
      </div>

      <div className="herobanner-products">
        <div className="herobanner-product">
          <img src="https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Product 1" />
          <div className="herobanner-product-price">$99.99</div>
          <button onClick={() => addToCart("Product 1", 99.99)}>Add to Cart</button>
        </div>
      </div>

      <div className="herobanner-products">
        <div className="herobanner-product">
          <img src="https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Product 1" />
          <div className="herobanner-product-price">$99.99</div>
          <button onClick={() => addToCart("Product 1", 99.99)}>Add to Cart</button>
        </div>
      </div>

      <div className="herobanner-products">
        <div className="herobanner-product">
          <img src="https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Product 1" />
          <div className="herobanner-product-price">$99.99</div>
          <button onClick={() => addToCart("Product 1", 99.99)}>Add to Cart</button>
        </div>
      </div>

      <div className="cart">
        <h2>Shopping Cart</h2>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Action</th> 
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.productName}</td>
                <td>${item.price}</td>
                <td>
                  <button onClick={() => removeFromCart(index)}>Delete</button>
                  <button onClick={() => editCartItem(index, prompt('Enter new product name'), parseFloat(prompt('Enter new price')))}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {toastMessage && (
        <div className="toast">{toastMessage}</div>
      )}
    </div>
  );
}
