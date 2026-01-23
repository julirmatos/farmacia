function Navbar() {
  return (
    <nav className="w-full bg-[#FFE8D9] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-[#264653]">
            💊 Farmácia da Ju
          </h1>
          <span className="text-sm text-[#6B7280]">
            Cuidando da sua saúde com carinho
          </span>
        </div>

        <ul className="flex gap-6 text-[#264653] font-medium">
          <li>
            <a href="#home" className="hover:text-[#F4A261] transition">
              Home
            </a>
          </li>

          <li>
            <a href="#produtos" className="hover:text-[#F4A261] transition">
              Produtos
            </a>
          </li>

          <li>
            <a href="#categorias" className="hover:text-[#F4A261] transition">
              Categorias
            </a>
          </li>

          <li>
            <a href="#contato" className="hover:text-[#F4A261] transition">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
