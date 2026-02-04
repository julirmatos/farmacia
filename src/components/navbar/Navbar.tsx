import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-[#FFE8D9] shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-[#264653]">⚕️ FarmaJu</h1>
          <span className="text-sm text-[#6B7280]">
            Cuidando da sua saúde com carinho, confiança e qualidade.
          </span>
        </div>

        <ul className="flex gap-6 text-[#264653] font-medium">
          <li>
            <NavLink to="/" className="hover:text-[#F4A261] transition">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/produtos" className="hover:text-[#F4A261] transition">
              Produtos
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/categorias/listar"
              className="hover:text-[#F4A261] transition"
            >
              Categorias
            </NavLink>
          </li>

          <li>
            <NavLink to="/contato" className="hover:text-[#F4A261] transition">
              Fale Conosco
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
