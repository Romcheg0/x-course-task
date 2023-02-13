import React from 'react'
import { Link } from 'react-router-dom'
import './BookCard.css'
export default function BookCard({ book }) {
	return (
		<div className="book-card">
			<img
				src={book.image ? book.image : 'assets/imageNotFound.png'}
				alt={book.title}
				className="book-card__cover"
			/>
			<h3 className="book-card__title">
				{book.title.length > 24 ? book.title.slice(0, 24) + '...' : book.title}
			</h3>
			<span className="book-card__author">{book.author}</span>
			<div className="book-card__controls">
				<span className="book-card__controls__price">{book.price}</span>
				<Link to={`${book.id}`} className="book-card__controls__view">
					View
				</Link>
			</div>
		</div>
	)
}
