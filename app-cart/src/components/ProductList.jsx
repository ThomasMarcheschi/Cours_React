import { useCartStore } from "../stores/useCartStore.js";

const ProductList = () => {
  const { products, addToCart, cart } = useCartStore();

  return (
    <div>
      {products.map((product, index) => {
        return (
          <li key={index}>
            <div className="flex gap-2 my-6 px-2 justify-center">
              <h4>
                <a href={`/category/${product.category}`}>{product.name}</a>
              </h4>
              : <p>{product.price}€</p>
              <button
                className="border px-2 cursor-pointer"
                onClick={() => addToCart(product)}
              >
                Ajouter au panier
              </button>
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default ProductList;
