import React, { createContext, useState, useEffect, useMemo } from 'react'
import { Outlet } from 'react-router-dom'
import booksP from '../../api/booksList'
export const BooksContext = createContext({
	books: booksP,
	setBooks: () => {},
})

export function BooksContextProvider(props) {
	let [books, setBooks] = useState([])

	useEffect(() => {
		booksP.then((res) => setBooks(res))
	}, [])

	const contextValue = useMemo(
		() => ({
			books,
			setBooks,
		}),
		[books]
	)

	return (
		<BooksContext.Provider value={contextValue}>
			{props.children ? props.children : <Outlet />}
		</BooksContext.Provider>
	)
}
