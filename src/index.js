import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import SignIn from './Components/SignIn/SignIn'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { UserContextProvider } from './Components/UserContext/UserContext'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import BooksList from './Components/BooksList/BooksList'
import { BooksContextProvider } from './Components/BooksContext/BooksContextProvider'
import BookPage from './Components/BookPage/BookPage'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<UserContextProvider>
			<BooksContextProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<App />}>
							<Route index element={<SignIn />} />
							<Route path="sign_in" element={<SignIn />} />
							<Route element={<ProtectedRoute />}>
								<Route path="books_list">
									<Route index element={<BooksList />} />
									<Route path=":bookId" element={<BookPage />} />
								</Route>
							</Route>
						</Route>
					</Routes>
				</BrowserRouter>
			</BooksContextProvider>
		</UserContextProvider>
	</React.StrictMode>
)
