import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import SignIn from './Components/SignIn/SignIn'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
	UserContext,
	UserContextProvider,
} from './Components/UserContext/UserContext'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'
import BooksList from './Components/BooksList/BooksList'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<UserContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />}>
						<Route index element={<SignIn />} />
						<Route path="sign_in" element={<SignIn />} />
						<Route element={<ProtectedRoute />}>
							<Route path="books_list" element={<BooksList />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</UserContextProvider>
	</React.StrictMode>
)
