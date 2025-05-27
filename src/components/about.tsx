export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Navbar irá aquí en el futuro */}
      <header className="border-b border-gray-200 shadow-sm">
        {/* Ejemplo futuro: <Navbar /> */}
      </header>

      <main className="flex-grow max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Acerca de</h1>
        <p className="text-lg leading-relaxed mb-4">
          Bienvenido a la sección <strong>About</strong>. Aquí compartimos información sobre nuestro equipo de trabajo y los objetivos de esta aplicación.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Equipo de desarrollo:</h2>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>Álvaro Aguirre Palestina</li>
          <li>Martha Isabel Hernández Fernández</li>
          <li>Ángel Gustavo Damián González</li>
        </ul>
      </main>

      <footer className="text-center text-sm text-gray-500 py-4 border-t">
        &copy; {new Date().getFullYear()} TuAplicación. Todos los derechos reservados.
      </footer>
    </div>
  );
}
