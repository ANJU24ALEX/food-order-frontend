import { createContext, useEffect, useState } from "react";
import { food_list } from '../assets/assets';

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});

    const addtoCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
    };

    const removefromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev };
            if (updatedCart[itemId] > 1) {
                updatedCart[itemId] -= 1;
            } else {
                delete updatedCart[itemId];
            }
            return updatedCart;
        });
    };
const getTotalCartAmount = () => {
let totalAmount = 0;
for ( const item in cartItems )
    {
        if (cartItems[item]>0){
let itemInfo = food_list.find((product)=> product._id === item)
totalAmount += itemInfo.price*cartItems[item];
}}
return totalAmount;
}
    // useEffect(() => {
    //     console.log(cartItems);
    // }, [cartItems]);

    const contextValue = {
        food_list,
        cartItems,
        addtoCart,
        removefromCart,
        getTotalCartAmount
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;


// import { createContext, useEffect, useState } from "react";
// import { food_list } from '../assets/assets';

// export const StoreContext = createContext(null);

// const StoreContextProvider = ({ children }) => {  // Correct functional component declaration
//     const [cartItems, setCartItems] = useState({});

//     const addtoCart = async (itemId) => {
//         if (!cartItems[itemId]) {
//             setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//         } else {
//             setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//         }
//     };

//     const removefromCart = async (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//     };
//  useEffect (()=> { 
//     console.log(cartItems);
//  }, [cartItems])
//     const contextValue = {
//         food_list,
//         cartItems,
//         setCartItems,
//         addtoCart,
//         removefromCart,
//     };

//     // Return the provider with the context value
//     return (
//         <StoreContext.Provider value={contextValue}>
//             {children}
//         </StoreContext.Provider>
//     );
// };

// export default StoreContextProvider;
