import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import SignIn from './Components/SignIn/SignIn'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { UserContextProvider } from './Components/UserContext/UserContext'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import BooksList from './Components/BooksList/BooksList'
import { BooksContextProvider } from './Components/BooksContext/BooksContextProvider'
import BookPage from './Components/BookPage/BookPage'
import { CartContextProvider } from './Components/CartContextProvider/CartContextProvider'
import Cart from './Components/Cart/Cart'
import PageNotFound from './Components/PageNotFound/PageNotFound'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<UserContextProvider>
			<BooksContextProvider>
				<CartContextProvider>
					<HashRouter>
						<Routes>
							<Route path="/" element={<App />}>
								<Route index element={<SignIn />} />
								<Route path="sign_in" element={<SignIn />} />
								<Route element={<ProtectedRoute />}>
									<Route path="books_list">
										<Route index element={<BooksList />} />
										<Route path=":bookId" element={<BookPage />} />
										<Route path="*" element={<PageNotFound />} />
									</Route>
									<Route path="cart" element={<Cart />} />
									<Route path="*" element={<PageNotFound />} />
								</Route>
							</Route>
						</Routes>
					</HashRouter>
				</CartContextProvider>
			</BooksContextProvider>
		</UserContextProvider>
	</React.StrictMode>
)
