export default function TechnoCard({ title, technos }) {
  return (
    <div className="bg-[#093c67]/25 text-card-foreground flex flex-col rounded-xl border p-6 transition transform items-center animate-fade-in-up">
        <div className="flex justify-center items-center flex-wrap gap-4 mb-4">
            {technos.map((techno, index) => (
                <img key={index} src={techno} className="w-5 h-5 object-contain" alt={title}/>
            ))}
        </div>
        <h3 className="text-2xl font-semibold text-[#ff7699] mb-2 text-center">{title}</h3>
    </div>
  );
}