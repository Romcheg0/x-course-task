// import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
function App() {
	return (
		<div className="App">
			{/* <Header /> */}
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default App
