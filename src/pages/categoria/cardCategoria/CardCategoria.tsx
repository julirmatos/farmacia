import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div
      className="
      bg-white
      border
      border-[#F4A261]
      rounded-2xl
      overflow-hidden
      shadow-sm
      hover:shadow-md
      transition
      flex
      flex-col
      justify-between
    "
    >
      <header className="bg-[#F4A261] px-6 py-3">
        <h2 className="text-white font-semibold text-xl">Categoria</h2>
      </header>

      <p className="px-6 py-6 text-gray-700 text-lg flex-1 bg-[#FFE8D9]">
        {categoria.descricao}
      </p>

      <div className="flex border-t border-[#F4A261]">
        <Link
          to={`/editarCategoria/${categoria.id}`}
          className="
            flex-1
            py-3
            text-center
            font-medium
            text-[#F4A261]
            hover:bg-[#FFE8D9]
            transition
          "
        >
          Editar
        </Link>

        <Link
          to={`/deletarCategoria/${categoria.id}`}
          className="
            flex-1
            py-3
            text-center
            font-medium
            text-red-600
            hover:bg-red-100
            transition
          "
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
