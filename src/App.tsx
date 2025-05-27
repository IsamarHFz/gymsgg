import { useState } from "react";
import About from "./components/about";

export default function App() {
  const [pantalla, setPantalla] = useState("inicio");

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Aquí irá tu Navbar en el futuro */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi Aplicación</h1>
        <nav>
          <button onClick={() => setPantalla("inicio")} className="mr-4 hover:underline">Inicio</button>
          <button onClick={() => setPantalla("about")} className="hover:underline">Acerca de</button>
        </nav>
      </header>

      <main className="p-6">
        {pantalla === "inicio" && <h2 className="text-2xl">Bienvenido a la aplicación</h2>}
        {pantalla === "about" && <About />}
      </main>
    </div>
  );
}