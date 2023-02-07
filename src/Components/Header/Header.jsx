import React from 'react'
import { UserContext } from '../UserContext/UserContext'
import './Header.css'
export default function Header() {
	return (
		<UserContext.Consumer>
			{({ user, setUser }) => {
				return (
					<header>
						<nav className="nav">
							<div className="nav__name">
								JS BAND STORE {user ? ` / ${user}` : ''}
							</div>
							{user && (
								<div className="nav__links">
									<img
										src="../assets/burger.png"
										alt="menu"
										className="nav__links__burger"
									/>
									<a href="/cart.html" className="nav__links__cart">
										<img src="../assets/cart.png" alt="Shopping cart" />
									</a>
									<button
										type="button"
										className="nav__links__signout"
										onClick={() => {
											setUser()
										}}
									>
										Sign out
									</button>
									<div className="nav__links__user">
										<img
											src="../assets/avatar.png"
											alt="User avatar"
											className="nav__links__avatar"
										/>
										<span className="nav__links__name">{user.username}</span>
									</div>
								</div>
							)}
						</nav>
					</header>
				)
			}}
		</UserContext.Consumer>
	)
}
