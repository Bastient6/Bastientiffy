import { createContext, useContext, useState } from "react";

const ScrollContext = createContext();
const useScrollStatus = () => useContext(ScrollContext);

function ScrollProvider({ children }) {
  	const [statusScroll, setStatusScroll] = useState(false);
  	return (
    	<ScrollContext.Provider value={{ statusScroll, setStatusScroll }}>
    	  	{children}
    	</ScrollContext.Provider>
  	);
}

export {ScrollProvider, useScrollStatus}