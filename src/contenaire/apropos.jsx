import { Link } from 'react-router-dom';
export default function Apropos() {
	const download = () => {
        const pdfUrl = "/Bastien_Tiffy_CV.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Bastien_Tiffy_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return(
        <div id="apropos"className="fixed top-110 w-full flex flex-col items-center">
			<h1 className="absolute text-center md:right-0 transform md:-translate-x-1/2 text-[#ff7699] font-black text-5xl">À propos de moi</h1>
			<div className="md:flex top-30 font-montserrat absolute text-left text-white text-2xl justify-center">
				<img src="/photo.jpg" className="rounded-full w-1/5 ml-10 md:ml-0 md:w-1/4 h-1/4 mb-4 object-contain" alt="pp bastien"/>
				<div className="flex flex-col md:w-1/4">
					<p className="ml-10 leading-relaxed text-lg text-justify">Passionné par la tech,le developpement et l'automatisation, je me forme à Epitech Montpellier. Volontaire au SDIS 34 (Pompier), je combine rigueur, adaptabilité et esprit d'équipe au quotidien.</p>
					<p className="mt-10 ml-10 leading-relaxed">Contact</p>
					<div className="ml-10 leading-relaxed text-lg">
						<div className="flex items-center">
							<img className="w-1/10 h-auto" src="/tel.png" alt="Tel"></img>
							<a className="ml-10" href="tel:+33651674638">06.51.67.46.38</a>
						</div>
						<div className="flex items-center">
							<img className="w-1/10 h-auto" src="/mail.png" alt="Mail"></img>
							<Link className="ml-10" to="/contact">bastien.tiffy@epitech.eu</Link>
						</div>
						<div className="flex items-center">
							<a href="https://www.linkedin.com/in/bastien-tiffy-34b7a2241/"><img className="w-1/2 h-auto" src="/linkedin.png" alt="Linkedin"></img></a>
							<a href="https://github.com/Bastient6"><img className="w-1/2 h-auto" src="/github.png" alt="Github"></img></a>
							<button onClick={download}className="px-4 py-3 text-[#00010e] text-center bg-[#ff7699] rounded-md">Télécharger mon CV</button>
						</div>
					</div>
				</div>
			</div>					
	    </div>
    );
}