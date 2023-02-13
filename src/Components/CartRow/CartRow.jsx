import React, { useState, useContext, useEffect } from 'react'
import { CartContext } from '../CartContextProvider/CartContextProvider'
import './CartRow.css'
export default function CartRow({ book }) {
	let [bookAmount, setBookAmount] = useState(book.amount)
	let { cart, setCart } = useContext(CartContext)
	useEffect(() => {
		setCart([
			...cart.filter((el) => el.id !== book.id),
			{
				id: book.id,
				title: book.title,
				image: book.image,
				price: book.price,
				amount: bookAmount,
			},
		])
	}, [bookAmount])
	return (
		<tr className="row" key={book.id}>
			<td className="row__cover">
				<img src={book.image} alt={book.title} />
			</td>
			<td className="row__title">{book.title}</td>
			<td className="row__amount">
				<div className="row__order__amount_input-wrapper">
					<input
						type="number"
						id="row__order__amount-input"
						className="row__order__amount_input"
						value={bookAmount}
						required
						min="1"
						max="42"
						onChange={(e) => {
							if (e.target.value > 42) {
								setBookAmount(42)
							} else if (e.target.value < 1) {
								setBookAmount(1)
							} else {
								setBookAmount(e.target.value)
							}
							if (!e.target.value) {
								setBookAmount('')
							}
						}}
					/>
					<div className="row__order__amount_buttons">
						<button
							type="button"
							id="row__order__amount_up"
							onClick={() => {
								setBookAmount(
									parseInt(bookAmount && bookAmount <= 41 ? bookAmount : 41) + 1
								)
							}}
						>
							&#9650;
						</button>
						<button
							type="button"
							id="row__order__amount_down"
							onClick={() => {
								setBookAmount(parseInt(bookAmount >= 2 ? bookAmount : 2) - 1)
							}}
						>
							&#9660;
						</button>
					</div>
				</div>
			</td>
			<td className="row__total-price">
				{book.price ? (parseFloat(book.price) * bookAmount).toFixed(2) : 0} $
			</td>
			<td className="row__remove">
				<button
					onClick={() => {
						setCart(cart.filter((el) => el != book))
					}}
				>
					✕
				</button>
			</td>
		</tr>
	)
}
