import { HashRouter, Routes, Route } from 'react-router-dom';import './App.css'
import Home from "./pages/home"
import Contact from "./pages/contact"
import Nav from './contenaire/nav'
import Footer from './contenaire/footer'
import { ScrollProvider } from "./context/ScrollContext";

function App() {
	return (
		<ScrollProvider>
			<HashRouter>
				<Nav/>
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/contact" element={<Contact/>}/>
					</Routes>
				<Footer/>
			</HashRouter>
		</ScrollProvider>
	);
}

export default App;