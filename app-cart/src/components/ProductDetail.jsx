import React from "react";
import { useParams } from "@tanstack/react-router";
import useCartStore from "../stores/useCartStore";

function ProductDetail() {
  const { name } = useParams({ from: "/category/$name" });
  const { products } = useCartStore();

  function getProductsByCategory(category) {
    return products.filter((product) => product.category === name);
  }
  const categoryProducts = getProductsByCategory(name);
  return (
    <div>
      {name != "undefined" ? (
        <h2>Catégorie du produit : {name}</h2>
      ) : (
        <h2>Catégorie inconnue</h2>
      )}

      <ul>
        {categoryProducts.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}€
          </li>
        ))}
      </ul>
      <a href="/catalogue">retournez au catalogue</a>
    </div>
  );
}

export default ProductDetail;
