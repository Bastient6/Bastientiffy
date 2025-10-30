export function Apropos() {
    return(
        <div id="apropos"className="fixed top-110 w-full flex flex-col items-center">
			<h1 className="absolute text-center md:right-0 transform md:-translate-x-1/2 text-4xl text-[#ff7699] font-black text-5xl">À propos de moi</h1>
			<div className="md:flex top-30 font-montserrat absolute text-left text-white text-2xl justify-center">
				<img src="/photo.jpg" className="rounded-full w-1/5 ml-10 md:ml-0 md:w-1/4 h-1/4 mb-4 object-contain"/>
				<div className="flex flex-col md:w-1/4">
					<p className="ml-10 leading-relaxed text-lg">Passionné par la tech,le developpement et l'automatisation, je me forme à Epitech Montpellier. Volontaire au SDIS 34, je combine rigueur, adaptabilité et esprit d'équipe au quotidien.</p>
					<p className="mt-10 ml-10 leading-relaxed">Contact</p>
					<div className="ml-10 leading-relaxed text-lg">
						<div className="flex items-center">
							<img className="w-1/10 h-auto" src="/tel.png"></img>
							<a className="ml-10" href="tel:+33651674638">06.51.67.46.38</a>
						</div>
						<div className="flex items-center">
							<img className="w-1/10 h-auto" src="/mail.png"></img>
							<Link className="ml-10" to="/contact">bastien.tiffy@epitech.eu</Link>
						</div>
						<div className="flex items-center">
							<a href="https://www.linkedin.com/in/bastien-tiffy-34b7a2241/"><img className="w-1/2 h-auto" src="/linkedin.png"></img></a>
							<a href="https://github.com/Bastient6"><img className="w-1/2 h-auto" src="/github.png" ></img></a>
						</div>
					</div>
				</div>
			</div>					
	    </div>
    );
}