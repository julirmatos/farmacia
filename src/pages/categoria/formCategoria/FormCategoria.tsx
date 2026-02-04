import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import {
  buscar,
  cadastrar,
  atualizar,
} from "../../../services/categoriaService";
import { toast } from "react-toastify";

function FormCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Estado inicial seguindo a estrutura do model Categoria
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
    descricao: "",
  } as Categoria);

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch {
      toast.error("Erro ao buscar a categoria.");
      retornar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setCategoria({
      ...categoria,
      [name]: value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id !== undefined) {
        // Lógica de Atualização
        await atualizar("/categorias", categoria, setCategoria);
        toast.success("Categoria atualizada com sucesso!");
      } else {
        // Lógica de Cadastro (conforme formProduto, o ID 0 é tratado pelo backend)
        await cadastrar("/categorias", categoria, () => {});
        toast.success("Categoria cadastrada com sucesso!");
      }
      retornar();
    } catch (error) {
      console.error("Erro no cadastro:", error);
      toast.error(
        "Erro ao salvar a categoria. Verifique se todos os campos foram preenchidos.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto my-10">
      <h1 className="text-4xl text-center mb-8 font-bold">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg border border-[#F4A261] flex flex-col gap-4"
        onSubmit={gerarNovaCategoria}
      >
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-gray-700">
            Nome da Categoria
          </label>
          <input
            type="text"
            name="nome"
            className="border-2 border-[#F4A261] rounded-lg p-2"
            value={categoria.nome}
            onChange={atualizarEstado}
            required
            placeholder="Ex: Analgésicos"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold text-gray-700">Descrição</label>
          <input
            type="text"
            name="descricao"
            className="border-2 border-[#F4A261] rounded-lg p-2"
            value={categoria.descricao}
            onChange={atualizarEstado}
            required
            placeholder="Descrição da categoria..."
          />
        </div>

        <button
          className="rounded-lg text-white bg-[#F4A261] hover:bg-[#e76f51] font-bold py-3 mt-4 flex justify-center transition-all"
          type="submit"
          disabled={isLoading}
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
