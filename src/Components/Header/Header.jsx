import React from 'react'

export default function Header({ linksVisibility }) {
	return (
		<header>
			<nav>
				<div className="nav__name">JS BAND STORE / Username</div>
				{linksVisibility && (
					<div className="nav__links">
						<img
							src="../assets/burger.png"
							alt="menu"
							className="nav__links__burger"
						/>
						<a href="/cart.html" className="nav__links__cart">
							<img src="../assets/cart.png" alt="Shopping cart" />
						</a>
						<button type="button" className="nav__links__signout">
							Sign out
						</button>
						<div className="nav__links__user">
							<img
								src="../assets/avatar.png"
								alt="User avatar"
								className="nav__links__avatar"
							/>
							<span className="nav__links__name">Username</span>
						</div>
					</div>
				)}
			</nav>
		</header>
	)
}
