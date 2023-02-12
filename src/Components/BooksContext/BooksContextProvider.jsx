import React, { createContext, useState } from 'react'
import booksP from '../../api/booksList'
export const BooksContext = createContext(null)

export function BooksContextProvider(props) {
	let [books, setBooks] = useState(null)
	booksP.then((res) => setBooks(res))
	return (
		<BooksContext.Provider
			value={{
				books,
				setBooks: function (newBooks) {
					if (newBooks) {
						setBooks(newBooks)
					} else {
						setBooks()
					}
				},
			}}
		>
			{props.children}
		</BooksContext.Provider>
	)
}
