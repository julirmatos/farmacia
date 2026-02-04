import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/categoriaService";
import { toast } from "react-toastify"; // Importação incluída

export function DeletarCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/Categorias/${id}`, setCategoria);
    } catch (error: any) {
      if (error.toString().includes("404")) {
        toast.error("Não foi possível encontrar a Categoria."); // alert substituído
        navigate("/Categorias");
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/Categorias/${id}`);
      toast.success("Categoria deletada com sucesso"); // alert substituído
    } catch (error: any) {
      if (error.toString().includes("404")) {
        toast.error("Categoria não encontrada."); // alert substituído
      } else {
        toast.error("Erro ao deletar a Categoria."); // alert substituído
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar Categoria</h1>
      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar o Categoria a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-[#F4A261] text-white font-bold text-2xl">
          Categoria
        </header>

        <p className="p-8 text-3xl bg-[#FFE8D9] h-full">
          {categoria.descricao}
        </p>

        <div className="flex">
          <button
            className="w-full py-2 font-bold text-white transition-all bg-[#f4a261] hover:bg-[#e76f51]"
            onClick={retornar}
          >
            Não
          </button>

          <button
            className={`w-full text-slate-100 bg-[#F4A261] hover:opacity-90 flex items-center justify-center gap-2
            ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
            onClick={deletarCategoria}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <ClipLoader color="#ffffff" size={22} />
                <span>Deletando...</span>
              </>
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
