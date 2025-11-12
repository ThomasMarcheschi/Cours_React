import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialCartStore = {
  products: [
    { id: 1, name: "Café", price: 3 },
    { id: 2, name: "Thé", price: 2 },
    { id: 3, name: "Chocolat", price: 4 },
  ],
  cart: [],
};

export const useCartStore = create(
  persist(
    (set) => ({
      ...initialCartStore,

      addToCart: ({ name, id, price }) => {
        set((state) => {
          const existingProduct = state.cart.find(
            (item) => item.productId === id
          );

          if (existingProduct) {
            return {
              cart: state.cart.map((item) =>
                item.productId === id
                  ? {
                      ...item,
                      quantity: item.quantity + 1,
                      productPrice: item.productPrice + price,
                    }
                  : item
              ),
            };
          } else {
            return {
              cart: [
                ...state.cart,
                {
                  productId: id,
                  productName: name,
                  productPrice: price,
                  quantity: 1,
                },
              ],
            };
          }
        });
      },

      removeFromCart: (id) =>
        set((state) => {
          const existingProduct = state.cart.find(
            (item) => item.productId === id
          );

          if (existingProduct) {
            if (existingProduct.quantity > 1) {
              return {
                cart: state.cart.map((item) =>
                  item.productId === id
                    ? {
                        ...item,
                        quantity: item.quantity - 1,
                        productPrice:
                          item.productPrice -
                          existingProduct.productPrice /
                            existingProduct.quantity,
                      }
                    : item
                ),
              };
            } else {
              return {
                cart: state.cart.filter((item) => item.productId !== id),
              };
            }
          }
          return state;
        }),

      clearCart: () => set(() => ({ ...initialCartStore })),

      total: () => {
        return useCartStore.getState().cart.reduce((sum, item) => {
          return sum + item.productPrice;
        }, 0);
      },
    }),
    {
      name: "cart",
    }
  )
);

export default useCartStore;
