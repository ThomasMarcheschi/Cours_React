import React from "react";
import { useCartStore } from "../stores/useCartStore.js";

const Cart = () => {
  const { cart, removeFromCart, total, clearCart } = useCartStore();
  return (
    <div>
      <div className="flex gap-2 px-4">
        {cart.length > 0 && (
          <div>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.productName} : {item.productPrice}€, Quantité:{" "}
                  {item.quantity}
                  <button
                    className="gap-2 px-4 cursor-pointer text-red-800"
                    onClick={() => removeFromCart(item.productId)}
                  >
                    Supprimer
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <hr />
      <p className="mx-4">total: {total()}€</p>
      <br />
      <div className="flex px-4 gap-2">
        <p>Supprimer tous les éléments :</p>{" "}
        <button
          className="border bg-red-200 px-1 cursor-pointer"
          onClick={() => clearCart()}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default Cart;
