import { Link } from "react-router-dom";
import type Produto from "../../../models/Produto";

interface CardProdutoProps {
  produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
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
      {/* Header */}
      <header className="bg-[#F4A261] px-6 py-3">
        <h2 className="text-white font-semibold text-xl">{produto.nome}</h2>
      </header>

      {/* Conteúdo */}
      <div className="px-6 py-6 text-gray-700 text-lg bg-[#FFE8D9] flex-1">
        <p>
          <strong>Preço:</strong> R$ {produto.preco.toFixed(2)}
        </p>
      </div>

      {/* Ações */}
      <div className="flex border-t border-[#F4A261]">
        <Link
          to={`/editarProduto/${produto.id}`}
          className="
            flex-1
            py-3
            text-center
            font-medium
            text-[#E76F51]
            hover:bg-[#FFE8D9]
            transition
          "
        >
          Editar
        </Link>

        <Link
          to={`/deletarProduto/${produto.id}`}
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

export default CardProduto;
