import React, { createContext, useState } from 'react'
export const UserContext = createContext(null)
export function UserContextProvider(props) {
	let [user, setUserState] = useState(localStorage.getItem('user'))
	return (
		<UserContext.Provider
			value={{
				user,
				setUser: function (newUser) {
					setUserState(newUser)
					localStorage.setItem('user', newUser)
				},
			}}
		>
			{props.children}
		</UserContext.Provider>
	)
}
