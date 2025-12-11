import { useState, useRef, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { useScrollStatus } from "../context/ScrollContext";
import Apropos from "../contenaire/apropos";
import Projet from "../contenaire/projet"
import Technique from "../contenaire/technique"
import Star from "../contenaire/Star";

export default function Home() {
    const {setStatusScroll } = useScrollStatus();
	const [status, setStatus] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);
	const isScroll = useRef(false);

	const handleScroll = (e) => {
		const target = e.target;
		const y = target.scrollTop;
		const scrollMax = 1500;

		if (!isScroll.current) {
			isScroll.current = true;
			window.requestAnimationFrame(() => {
				setScrollPosition(y);
				if (y > scrollMax)
					setScrollPosition(scrollMax);
				isScroll.current = false;
			});
		}
	};


	const translateY = -Math.min(scrollPosition * 0.1, 100);
	const pos = translateY;

	useEffect(() => {
		const box = document.getElementById("box");
		if (!box) return;

		if (pos <= -60 && status === false) {
			box.classList.add("scaled");
			box.classList.remove("scaledDown");
			setStatus(true);
			setStatusScroll(true);
		} else if (pos >= -60 && status === true) {
			box.classList.remove("scaled");
			box.classList.add("scaledDown");
			setStatusScroll(false);
			setStatus(false);
		}
	}, [pos, status, setStatusScroll]);

	return (
		<div className="flex justify-center items-center h-screen bg-[#dae1e6]">
			<div id="box" onScroll={handleScroll} className="relative bg-[#00010E] rounded-4xl overflow-y-scroll overflow-x-hidden w-full h-full md:w-4/5 md:h-3/4">
				<div className="stars absolute top-0 left-0 w-full h-full z-0 pointer-events-none" style={{ transform: `translateY(${scrollPosition}px)` }}>
					<Star />
				</div>
				<div className="flex flex-col items-center absolute top-3/7 w-full text-xl text-[#ff7699] p-4 text-center" style={{ transform: `translateY(${translateY * 0.1}px)`, transition: "transform"}}>
					<TypeAnimation
						sequence={[
							"Étudiant en MSc à Epitech...",
							1500,
							"Développeur Web & Logiciel...",
							1500,
							"À la recherche d'une alternance !",
							2000,
						]}
						repeat={Infinity}
						className="text-4xl text-[#ff7699] text-center"
					/>
					<Apropos/>
					<Projet/>
					<Technique/>
				</div>
			</div>
		</div>
	);
}