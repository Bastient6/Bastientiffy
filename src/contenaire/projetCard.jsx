export default function ProjetCard({link, image, title, description, technos}) {
    return (
        <a href={link}>
            <div className="bg-[#093c67]/25 flex flex-col rounded-xl border p-6 transition transform hover:-translate-y-2 items-center animate-fade-in-up hover:scale-110 mx-10 md:m-0">
                <img src={image} className="w-24 h-24 mb-4 object-contain" alt={title}></img>
                <h3 className="text-2xl font-semibold text-[#ff7699] mb-2 text-center">{title}</h3>
                <p className="font-semibold text-[#ff7699] text-center mb-2">{description}</p>
                {technos.map((techno, index) => (
                    <p key={index} className="text-white italic text-center mb-3">{techno}</p>
                ))}
            </div>
        </a>
    );
}