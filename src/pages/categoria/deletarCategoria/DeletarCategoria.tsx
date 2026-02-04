import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/categoriaService";
import { toast } from "react-toastify";

export default function DeletarCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      toast.error("Erro ao encontrar a categoria.");
      retornar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/categorias");
  }

  async function deletarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`);
      toast.success("Categoria apagada com sucesso!");
      retornar();
    } catch (error: any) {
      toast.error(
        "Erro ao apagar a categoria. Verifique se existem produtos vinculados a ela.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container w-1/3 mx-auto my-10">
      <h1 className="text-4xl text-center my-4 font-bold">Deletar Categoria</h1>
      <p className="text-center font-semibold mb-4 text-gray-600">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>

      <div className="border-2 border-[#F4A261] flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg">
        <header className="py-2 px-6 bg-[#F4A261] text-white font-bold text-2xl">
          Categoria
        </header>

        <div className="p-8 bg-white h-full">
          <p className="text-2xl mb-2 text-center">
            <strong className="text-[#F4A261]">Descrição:</strong>{" "}
            {categoria.descricao || "Carregando..."}
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
            onClick={deletarCategoria}
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
