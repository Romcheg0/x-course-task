import React, { useContext, useEffect, useState } from 'react'
import './BookPage.css'
import { useParams, useNavigate } from 'react-router-dom'
import { BooksContext } from '../BooksContext/BooksContextProvider'
import { CartContext } from '../CartContextProvider/CartContextProvider'

export default function BookPage() {
	let params = useParams()
	let { books, setBooks } = useContext(BooksContext)
	let { cart, setCart } = useContext(CartContext)
	let [booksAmount, setBooksAmount] = useState(1)
	let [book, setBook] = useState({})
	let navigate = useNavigate()
	useEffect(() => {
		books.forEach((element) => {
			if (element.id === parseInt(params.bookId)) {
				setBook(element)
			}
		})
	}, [books])

	return (
		<>
			<section className="book-page">
				<span className="book-back" onClick={() => navigate(-1)}>
					&lt; Back
				</span>
				<img
					src={book.image ? book.image : 'assets/imageNotFound.png'}
					alt={book.title}
					className="book__cover"
				/>
				<div className="book__data">
					<div className="book__info">
						<h2 className="book__info__title">{book.title}</h2>
						<span className="book__info__data book__info__author">
							{book.author}
						</span>
						<span className="book__info__data book__info__short_desc">
							{book.shortDescription}
						</span>
						<span className="book__info__data book__info__tags">
							#programming #javascript
						</span>
					</div>
					<form className="book__order">
						<div className="book__order__row book__order__price">
							<label className="book__order__price_label">Price, $</label>
							<span className="book__order__price_span">{book.price}</span>
						</div>
						<div className="book__order__row book__order__amount">
							<label
								htmlFor="book__order__amount-input"
								className="book__order__amount_label"
							>
								Amount
							</label>
							<div className="book__order__amount_input-wrapper">
								<input
									type="number"
									id="book__order__amount-input"
									className="book__order__amount_input"
									value={booksAmount}
									required
									min="1"
									max="42"
									onChange={(e) => {
										if (e.target.value && e.target.value > 42) {
											setBooksAmount(42)
										} else if (e.target.value && e.target.value < 1) {
											setBooksAmount(1)
										} else if (!e.target.value) {
											setBooksAmount('')
										} else {
											setBooksAmount(e.target.value)
										}
									}}
								/>
								<div className="book__order__amount_buttons">
									<button
										type="button"
										id="book__order__amount_up"
										onClick={() => {
											setBooksAmount(
												parseInt(booksAmount <= 41 ? booksAmount : 41) + 1
											)
										}}
									>
										&#9650;
									</button>
									<button
										type="button"
										id="book__order__amount_down"
										onClick={() => {
											setBooksAmount(
												parseInt(booksAmount >= 2 ? booksAmount : 2) - 1
											)
										}}
									>
										&#9660;
									</button>
								</div>
							</div>
						</div>
						<div className="book__order__row book__order__total-price">
							<label className="book__order__total-price_label">
								Total price
							</label>
							<span className="book__order__total-price_span">
								{book.price
									? (parseFloat(book.price) * booksAmount).toFixed(2)
									: 0}
							</span>
						</div>
						<button
							type="submit"
							className="book__order__submit"
							onClick={(e) => {
								e.preventDefault()
								if (booksAmount !== '') {
									if (cart.find((el) => el.id === book.id)) {
										setCart([
											...cart.filter((el) => el.id !== book.id),
											{
												id: book.id,
												image: book.image
													? book.image
													: './assets/imageNotFound.png',
												title: book.title,
												price: book.price,
												amount: booksAmount,
											},
										])
									} else {
										setCart([
											...cart,
											{
												id: book.id,
												image: book.image
													? book.image
													: './assets/imageNotFound.png',
												title: book.title,
												price: book.price,
												amount: booksAmount,
											},
										])
									}
								}
							}}
						>
							Add to cart
						</button>
					</form>
				</div>
				<p className="book__description">{book.description}</p>
			</section>
		</>
	)
}
