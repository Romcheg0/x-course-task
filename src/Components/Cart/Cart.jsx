import React, { useContext, useEffect, useState } from 'react'
import CartRow from '../../CartRow/CartRow'
import { CartContext } from '../CartContextProvider/CartContextProvider'
import './Cart.css'
export default function Cart() {
	let { cart, setCart } = useContext(CartContext)
	useEffect(() => {}, [cart])
	return (
		<section className="cart">
			{cart.length > 0 ? (
				<>
					<table className="cart__table">
						<thead className="table__head">
							<tr>
								<th colSpan="2" className="table__head__th">
									Title
								</th>
								<th className="table__head__th">Amount</th>
								<th colSpan="2" className="table__head__th">
									Total price
								</th>
							</tr>
						</thead>
						<tbody className="table__body">
							{cart.map((book) => {
								return <CartRow book={book} key={book.id} />
							})}
						</tbody>
					</table>
					<div className="total-amount">
						<span className="total-amount__text">Total amount payable: </span>
						<span className="total-amount__price">
							{cart &&
								cart
									.reduce(
										(sum, cur) => sum + parseFloat(cur.price * cur.amount),
										0
									)
									.toFixed(2)}
						</span>
					</div>
				</>
			) : (
				<h1>No books</h1>
			)}
		</section>
	)
}
