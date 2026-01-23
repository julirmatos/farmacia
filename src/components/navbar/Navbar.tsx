function Navbar() {
  return (
    <nav className="w-full bg-green-200 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-green-800">💊 Farmácia da Ju </h1>

        <ul className="flex gap-6 text-green-700 font-medium">
          <li className="hover:text-green-900 cursor-pointer">Home</li>
          <li className="hover:text-green-900 cursor-pointer">Produtos</li>
          <li className="hover:text-green-900 cursor-pointer">Contato</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
