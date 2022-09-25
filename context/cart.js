import { createContext, useContext, useEffect, useReducer } from "react"; // to create two types of context
import getCommerce from "../lib/commerce";

// Keeping both state and dispatch in separtate context
const CartStateContext = createContext();
const CartDispatchContext = createContext();

const SET_CART = "SET_CART";

const initialState = {
  total_items: 0,
  total_unique_items: 0,
  line_items: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, ...action.payload }; // set current state and merge in new value
    default:
      throw new Error(`Unknown action: ${action.type}`); // if given action doesnt match anything in the switch throw error
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getCart();
  }, []);

  const setCart = async (payload) =>
    dispatch({ type: SET_CART, payload: payload });

  const getCart = async () => {
    const commerce = getCommerce();
    try {
      const cart = await commerce.cart.retrieve();

      setCart(cart);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CartDispatchContext.Provider value={{ setCart }}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCartState = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext);
