import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './PageNotFound.css'

export default function PageNotFound() {
	let navigate = useNavigate()
	return (
		<div>
			<Link className="page__back" to="/books_list">
				&lt; Back
			</Link>
			<h1 className="page-nf__header">This page does not exist</h1>
		</div>
	)
}
