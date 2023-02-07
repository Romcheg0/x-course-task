import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './BooksList.css'
import booksP from '../../api/booksList'
export default function BooksList() {
	const [error, setError] = useState(null)
	const [isLoaded, setIsLoaded] = useState(false)
	let [books, setBooks] = useState([])

	useEffect(() => {
		booksP.then(
			(result) => {
				setIsLoaded(true)
				setBooks(result)
			},
			(error) => {
				setIsLoaded(true)
				setError(error)
			}
		)
	}, [])
	if (error) {
		return <h1>Ooops!!! An error occured ({`${error}`})</h1>
	} else if (!isLoaded) {
		return <h1>Loading...</h1>
	} else {
		return (
			<section className="books-list">
				<section className="filters">
					<div className="filters__input-wrapper">
						<input
							type="search"
							name="search"
							id="filters__search-input"
							maxLength="50"
							placeholder="Search by book name"
						/>
						<button type="button" className="search-button">
							<img src="../assets/search.png" alt="search" />
						</button>
					</div>
					<select name="sort" id="filters__sort-select" defaultValue="0">
						<option value="0" disabled>
							Sort the books by...
						</option>
						<option value="1">Title (A-Z)</option>
						<option value="2">Title (Z-A)</option>
						<option value="3">Price ascending</option>
						<option value="4">Price descending</option>
						<option value="5">Author (A-Z)</option>
						<option value="6">Author (Z-A)</option>
					</select>
				</section>
				<section className="books-container">
					{books.map((book) => {
						return (
							<div className="book-card" key={book.id}>
								<img
									src={book.image ? book.image : '../assets/imageNotFound.png'}
									alt={book.title}
									className="book-card__cover"
								/>
								<h3 className="book-card__title">{book.title}</h3>
								<span className="book-card__author">{book.author}</span>
								<div className="book-card__controls">
									<span className="book-card__controls__price">
										{book.price}
									</span>
									<Link
										to={`view/${book.id}`}
										className="book-card__controls__view"
									>
										View
									</Link>
								</div>
							</div>
						)
					})}
				</section>
			</section>
		)
	}
}
