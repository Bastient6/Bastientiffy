import { Link } from 'react-router-dom';
import { useScrollStatus } from "../context/ScrollContext";

export default function Nav() {
  	const { statusScroll } = useScrollStatus();

  	return (
    	<nav className={`flex items-center justify-between fixed top-0 left-0 w-full p-4 z-50 transition-all duration-300 ${statusScroll ? "text-white bg-transparent" : "text-[#00010e] bg-[#dae1e6]"}`}>
        	<Link to="/">
            	<img className="w-20 h-auto mr-4 rounded-md" src="/logo.png" alt="bastien" />
       		</Link>
      		<div className={`absolute ${!statusScroll ? "left-1/2 transform -translate-x-1/2 text-2xl": "left-30"} text-2xl hidden sm:block`}>
        		<h1 className={`font-black ${!statusScroll ? "text-5xl": "text-4xl"}`}>Bastien Tiffy</h1>
        		<h2>Développeur full-stack</h2>
      		</div>
      		<div className="relative z-10 ml-4 relative px-6 py-3 text-[#00010e] text-center bg-[#ff7699] rounded-md">
          		<Link to="/contact" >Contact</Link>
        	</div>
    	</nav>
  	);
}