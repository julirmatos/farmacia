import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ titulo, descricao, icone }: CardCategoriaProps) {
  return (
    <div
      className="
        bg-[#FFF4EE]
        border border-[#FFD6C9]
        rounded-2xl
        p-6
        shadow-md
        hover:shadow-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-[#FFE5DB]
        cursor-pointer
      "
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FFD6C9] mb-4">
        <img src={icone} alt={titulo} className="w-8 h-8" />
      </div>

      <h3 className="text-lg font-semibold text-[#9A4A32] mb-2">{titulo}</h3>

      <p className="text-sm text-[#C46A4A]">{descricao}</p>
    </div>
  );
}

export default CardCategoria;
