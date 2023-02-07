import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { UserContext } from '../UserContext/UserContext'

export default function ProtectedRoute({ children }) {
	return (
		<UserContext.Consumer>
			{({ user }) => {
				//if not signed in then go to sign_in, else render children or outlet
				if (!user) {
					return <Navigate to="/sign_in" />
				} else {
					return children ? children : <Outlet />
				}
			}}
		</UserContext.Consumer>
	)
}
