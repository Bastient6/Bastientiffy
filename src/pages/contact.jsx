import Star from "../contenaire/Star";
import ContactCard from "../contenaire/contactCard.jsx";

export default function Contact() {

    return (
    <div className="flex justify-center items-center overflow-hidden h-screen bg-[#dae1e6]">
		<div id="box" className="relative bg-[#00010E] rounded-4xl overflow-hidden w-4/5 h-3/4 z-1">
            <div className="stars absolute top-0 left-0 w-full h-full z-0">
                <Star/>
            </div>
            <ContactCard/>
        </div>
    </div>
    )
}