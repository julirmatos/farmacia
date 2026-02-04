import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Produto from "../../../models/Produto";
import { buscar, deletar } from "../../../services/produtoService";
import { toast } from "react-toastify";

export default function DeletarProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [produto, setProduto] = useState<Produto>({} as Produto);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Busca os dados do produto para garantir que apareçam no card antes de deletar
  async function buscarPorId(id: string) {
    try {
      // Usando /produtos (plural) conforme o padrão da sua API
      await buscar(`/produtos/${id}`, setProduto);
    } catch (error: any) {
      toast.error("Erro ao encontrar o produto.");
      retornar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/produtos");
  }

  async function deletarProduto() {
    setIsLoading(true);

    try {
      // Executa a exclusão no backend
      await deletar(`/produtos/${id}`);
      toast.success("Produto apagado com sucesso!");
      retornar();
    } catch (error: any) {
      toast.error("Erro ao apagar o produto.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container w-1/3 mx-auto my-10">
      <h1 className="text-4xl text-center my-4 font-bold">Deletar Produto</h1>
      <p className="text-center font-semibold mb-4 text-gray-600">
        Você tem certeza de que deseja apagar o produto a seguir?
      </p>

      <div className="border-2 border-[#F4A261] flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg">
        <header className="py-2 px-6 bg-[#F4A261] text-white font-bold text-2xl">
          Produto
        </header>

        <div className="p-8 bg-white h-full">
          {/* Se o produto.nome estiver vazio, exibe 'Carregando...' */}
          <p className="text-2xl mb-2">
            <strong className="text-[#F4A261]">Nome:</strong>{" "}
            {produto.nome || "Carregando..."}
          </p>
          <p className="text-xl">
            <strong className="text-[#F4A261]">Laboratório:</strong>{" "}
            {produto.laboratorio}
          </p>
        </div>

        <div className="flex">
          <button
            className="w-full py-3 font-bold text-white transition-all bg-red-400 hover:bg-red-600"
            onClick={retornar}
          >
            Não
          </button>

          <button
            className="w-full flex items-center justify-center gap-2 font-bold text-white transition-all bg-[#F4A261] hover:bg-[#e76f51] border-l border-white"
            onClick={deletarProduto}
            disabled={isLoading}
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={22} />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
