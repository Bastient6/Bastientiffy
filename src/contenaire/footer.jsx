import { useScrollStatus } from "../context/ScrollContext";
import { useState } from "react";

export default function Footer() {
    const { statusScroll } = useScrollStatus();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <footer className={`flex items-center justify-between fixed bottom-0 left-0 w-full bg-transparent p-4 ${statusScroll ? "text-white bg-transparent" : "text-black bg-[#dae1e6]"}`}>
            <div className="w-2/6 h-auto mr-4 text-sm">
                <h5>2025 - Designé et développé par Bastien Tiffy</h5>
            </div>
            <div>
                <div>
                    {menuOpen && (
                        <el-menu onClick={() => setMenuOpen(!menuOpen)} className="bg-[#093c67]/25 text-card-foreground fixed bottom-8 right-0 flex justify-center items-center rounded-xl p-6">
                            <a href="#apropos" className="xl:text-xl font-montserrat text-center mx-5 text-sm text-[#ff7699] hover:text-blue-600 transition-colors duration-300 relative group">
                                À propos
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                            </a>
                            <a href="#Mesprojets" className="xl:text-xl font-montserrat text-center mx-5 text-sm text-[#ff7699] hover:text-blue-600 transition-colors duration-300 relative group">
                                Mes projets
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                            </a>
                            <a href="#Stacktechnique" className="xl:text-xl font-montserrat text-center mx-5 text-sm text-[#ff7699] hover:text-blue-600 transition-colors duration-300 relative group">
                                Stack Technique
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                            </a>
                        </el-menu>
                    )}
                    <button onClick={() => setMenuOpen(!menuOpen)} className="fixed bottom-0 right-0 xl:text-xl font-montserrat bg-transparent text-center mx-5 text-sm">Menu</button>
                </div>
            </div>
        </footer>
    );
}