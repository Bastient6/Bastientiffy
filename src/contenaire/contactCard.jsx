import { useRef, useState } from "react";

export default function ContactCard() {
    const formRef = useRef();
    const [form, setForm] = useState({ name: "", email: "", message: ""});

    emailjs.init("ihlJFguo8ST3tcBGN");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const sendEmail = async (event) => {
        event.preventDefault();
        try {
            const response = await emailjs.sendForm(
                "service_xqxqmig",
                "template_796szms",
                formRef.current,
            );
        } catch (error) {
            console.error("Failed to send email:", error);
        }
    };

    return (
        <div className="w-full text-xl text-[#ff7699] p-4 text-center">
            <div className="w-full flex flex-col items-center">
                <h1 className="text-white text-4xl">Contact</h1>
                <div className="bg-[#093c67]/25 text-card-foreground flex flex-col rounded-xl border p-6 rounded-2xl shadow-lg transition transform flex flex-col items-center animate-fade-in-up z-2">
                    <form ref={formRef} onSubmit={(event) => sendEmail(event)}className="flex flex-col p-2">
                        <input type="text" name="name" placeholder="Nom" value={form.name} onChange={(event) => handleChange(event)} className="p-3 rounded-xl border border-[#093c67]/30 bg-[#093c67]/50 text-[#ff7699] placeholder-[#ff7699]/70 focus:outline-none m-2"/>
                        <input type="text" name="email" placeholder="Email" value={form.email} onChange={(event) => handleChange(event)} className="p-3 rounded-xl border border-[#093c67]/30 bg-[#093c67]/50 text-[#ff7699] placeholder-[#ff7699]/70 focus:outline-none m-2"/>
                        <input type="text" name="message" placeholder="Message" value={form.message} onChange={(event) => handleChange(event)} className="p-3 rounded-xl border border-[#093c67]/30 bg-[#093c67]/50 text-[#ff7699] placeholder-[#ff7699]/70 focus:outline-none m-2"/>
                        <button className="p-3 rounded-xl bg-[#093c67]/50 text-[#ff7699] m-2 hover:scale-110" type="submit">envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    );
}