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

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<UserContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<App />}>
						<Route index element={<SignIn />} />
						<Route path="sign_in" element={<SignIn />} />
						<Route
							path="books_list"
							element={
								<div>
									<UserContext.Consumer>
										{({ user }) => <h1>{user}</h1>}
									</UserContext.Consumer>
								</div>
							}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</UserContextProvider>
	</React.StrictMode>
)
