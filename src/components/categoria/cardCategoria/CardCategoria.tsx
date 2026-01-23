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
      border-green-200
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
      {/* Header */}
      <header className="bg-green-600 px-6 py-3">
        <h2 className="text-white font-semibold text-xl">Categoria</h2>
      </header>

      {/* Conteúdo */}
      <p className="px-6 py-6 text-gray-700 text-lg flex-1 bg-green-50">
        {categoria.descricao}
      </p>

      {/* Ações */}
      <div className="flex border-t border-green-200">
        <Link
          to={`/editarCategoria/${categoria.id}`}
          className="
            flex-1
            py-3
            text-center
            font-medium
            text-green-700
            hover:bg-green-100
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
