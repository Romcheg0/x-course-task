import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CartRow from '../CartRow/CartRow'
import { CartContext } from '../CartContextProvider/CartContextProvider'
import './Cart.css'
export default function Cart() {
	let { cart, setCart } = useContext(CartContext)
	const navigate = useNavigate()
	useEffect(() => {}, [cart])
	return (
		<section className="cart">
			<span className="cart__back" onClick={() => navigate(-1)}>
				&lt; Back
			</span>
			<h1 className="cart__header">My cart</h1>
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
							{cart
								.sort((a, b) => {
									return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
								})
								.map((book) => {
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
									.toFixed(2)}{' '}
							$
						</span>
					</div>
					<button
						className="cart__order"
						onClick={(e) => {
							e.preventDefault()
							setCart([])
						}}
					>
						Order
					</button>
				</>
			) : (
				<>
					<img
						className="no-books__img"
						src="assets/noBooks.png"
						alt="No books chosen"
					/>
					<h3 className="no-books__text">You haven't chosen any books yet.</h3>
				</>
			)}
		</section>
	)
}
