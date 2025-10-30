import ProjetCard from "./projetCard";

export default function Projet() {
    return (
        <div id="Mesprojets" className="fixed top-350 md:top-250 lg:top-280 w-full flex flex-col items-center">
            <h1 className="md:absolute top-10 right-0 transform md:-translate-x-1/2 text-4xl text-[#ff7699] font-black text-5xl">Mes Projets</h1>
            <div className="absolute top-30 grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto items-stretch">
                <ProjetCard
                    link = "https://github.com/Bastient6/My_job"
                    image = "./src/assets/image.png"
                    title = "My_Job"
                    description = "Création d'un job board"
                    technos = {["React / Tailwind", "Node.js / Express"]}
                />
                <ProjetCard
                    link = "https://bastient6.github.io/digital_resume/"
                    image = "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                    title = "digital_resume"
                    description = "Création d'un cv en ligne"
                    technos = {["html / Tailwind", "Design et utilisation de shell pour accéder à chaque section"]}
                />
                <ProjetCard
                    link = "https://github.com/Bastient6/ZAPPY"
                    image = "./src/assets/zappy.png"
                    title = "ZAPPY"
                    description = "Year-End Project (B4 - EPITECH)"
                    technos = {["C / C++ / Python"]}
                />
                <ProjetCard
                    link = "https://github.com/Bastient6/Utilisation-avanc-e-du-Go-en-WebASM"
                    image = "./src/assets/go.png"
                    title = "introduction au go"
                    description = "workshop d'innitiation"
                    technos = {["go"]}
                />
                <ProjetCard
                    link = "https://github.com/Bastient6/pushswap_checker"
                    image = "./src/assets/haskell.png"
                    title = "pushswap_checker"
                    description = "rush deuxième année épitech"
                    technos = {["haskell"]}
                />
            </div>
        </div>
    );
}