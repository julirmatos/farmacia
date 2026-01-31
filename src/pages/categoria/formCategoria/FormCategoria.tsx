import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/produtoService";

function FormCategoria() {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  // Busca a categoria quando há ID (modo editar)
  async function buscarPorId(id: string) {
    try {
      const categoria = await categoriaService.buscarPorId(Number(id));
      setCategoria(categoria);
    } catch (error: any) {
      console.error("Erro ao buscar categoria:", error);
      toast.error("Erro ao carregar a categoria.");
      navigate("/categorias"); // volta para lista em caso de erro
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  // Atualiza o estado do form ao digitar
  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  // Envia o form (cadastra ou atualiza)
  async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!categoria.nome || categoria.nome.trim() === "") {
        toast.error("Nome da categoria é obrigatório!");
        setIsLoading(false);
        return;
      }

      if (id !== undefined) {
        // Atualizar (PUT)
        await CategoriaService.atualizar(categoria);
        toast.success("Categoria atualizada com sucesso!");
      } else {
        // Cadastrar (POST)
        await CategoriaService.cadastrar({
          nome: categoria.nome,
          descricao: categoria.descricao,
        });
        toast.success("Categoria cadastrada com sucesso!");
      }

      retornar();
    } catch (error: any) {
      console.error("Erro ao salvar categoria:", error);
      console.error("Detalhes do erro:", error.response?.data || error.message);

      const mensagemErro =
        error.response?.data?.message || error.message || "Erro desconhecido";

      toast.error(
        id !== undefined
          ? `Erro ao atualizar: ${mensagemErro}`
          : `Erro ao cadastrar: ${mensagemErro}`,
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8 text-[#264653]">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form
        className="w-1/2 flex flex-col gap-4 bg-white p-8 rounded-2xl shadow-md"
        onSubmit={gerarNovaCategoria}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao" className="text-[#264653] font-medium">
            Descrição da Categoria
          </label>

          <input
            type="text"
            placeholder="Descreva aqui sua categoria"
            name="descricao"
            className="border-2 border-[#F4A261] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#F4A261]"
            value={categoria.descricao || ""}
            onChange={atualizarEstado}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="rounded-lg text-white bg-[#F4A261] 
                     hover:bg-[#E76F51] transition
                     w-1/2 py-2 mx-auto flex justify-center items-center"
        >
          {isLoading ? (
            <ClipLoader color="#ffffff" size={24} />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
