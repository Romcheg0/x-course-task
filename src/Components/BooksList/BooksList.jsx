import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './BooksList.css'
import booksP from '../../api/booksList'
import BookCard from '../BookCard/BookCard'
export default function BooksList() {
	const [error, setError] = useState(null)
	const [isLoaded, setIsLoaded] = useState(false)
	const [books, setBooks] = useState([])
	const [searchQuery, setSearchQuery] = useState('')
	const [sortQuery, setSortQuery] = useState(-1)
	function getFilteredBy(array, value) {
		return array.filter((item) =>
			item[value].toLowerCase().includes(searchQuery.toLowerCase())
		)
	}
	useEffect(() => {
		let arr = books.concat()
		arr.sort((a, b) => {
			switch (sortQuery) {
				case 1:
					return a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
				case 2:
					return a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1
				case 3:
					return a.price - b.price
				case 4:
					return b.price - a.price
				case 5:
					return a.author.toLowerCase() < b.author.toLowerCase() ? -1 : 1
				case 6:
					return a.author.toLowerCase() < b.author.toLowerCase() ? 1 : -1
			}
		})
		setBooks(arr)
	}, [sortQuery])
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
							value={searchQuery}
							onInput={(e) => {
								setSearchQuery(e.target.value)
							}}
						/>
						<button type="button" className="search-button">
							<img src="../assets/search.png" alt="search" />
						</button>
					</div>
					<select
						name="sort"
						id="filters__sort-select"
						defaultValue="0"
						onChange={(e) => {
							setSortQuery(e.target.selectedIndex)
						}}
					>
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
					{getFilteredBy(books, 'title').map((book) => {
						return <BookCard book={book} key={book.id} />
					})}
				</section>
			</section>
		)
	}
}
