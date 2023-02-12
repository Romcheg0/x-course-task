import React, { createContext, useState, useEffect, useMemo } from 'react'
import { Outlet } from 'react-router-dom'
export const CartContext = createContext({ cart: [], setCart: () => {} })

export function CartContextProvider(props) {
	let [cart, setCart] = useState([])

	const contextValue = useMemo(
		() => ({
			cart,
			setCart: function (newCart) {
				if (newCart) {
					setCart(newCart)
				} else {
					setCart()
				}
			},
		}),
		[cart]
	)

	return (
		<CartContext.Provider value={contextValue}>
			{props.children ? props.children : <Outlet />}
		</CartContext.Provider>
	)
}
