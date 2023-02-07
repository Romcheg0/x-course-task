import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../UserContext/UserContext'
import './SignIn.css'

export default function SignIn() {
	let [userName, setUserName] = useState('')
	let [disabled, setDisabled] = useState('dis')
	useEffect(() => {
		userName.length < 4 || userName.length > 16
			? setDisabled('dis')
			: setDisabled('')
	}, [userName])
	return (
		<UserContext.Consumer>
			{({ user, setUser }) => {
				if (user) {
					return <Navigate to="/books_list" />
				} else {
					return (
						<form
							className="signin-form"
							onSubmit={(e) => {
								setUser(userName)
							}}
						>
							<img
								src="../assets/avatar.png"
								alt="user avatar"
								className="signin-form__avatar"
							/>
							<label
								htmlFor="signin__username__input"
								className="signin-form__label"
							>
								Username
							</label>
							<input
								type="text"
								id="signin__username__input"
								className="signin-form__input"
								required
								placeholder="type Username"
								name="username"
								onInput={(e) => {
									setUserName(e.target.value)
								}}
								value={userName}
							/>
							<button
								type="submit"
								className="signin-form__submit"
								disabled={disabled}
							>
								Sign In
							</button>
						</form>
					)
				}
			}}
		</UserContext.Consumer>
	)
}
