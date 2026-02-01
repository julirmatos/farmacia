import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import {
  buscar,
  cadastrar,
  atualizar,
} from "../../../services/categoriaService";
function FormCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch {
      alert("Erro ao buscar a categoria.");
      retornar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
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
        await atualizar("/categorias", categoria, setCategoria);
        alert("Categoria atualizada com sucesso!");
      } else {
        // Para categorias, geralmente enviamos o objeto direto ou mapeamos os campos necessários
        const categoriaParaCadastrar = {
          nome: categoria.descricao,
          descricao: categoria.descricao,
        };

        await cadastrar("/categorias", categoriaParaCadastrar, () => {});
        alert("Categoria cadastrada com sucesso!");
      }

      retornar();
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar a categoria.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição da Categoria</label>
          <input
            type="text"
            name="descricao"
            className="border-2 border-[#F4A261] rounded p-2"
            placeholder="Ex: Medicamentos, Higiene, etc."
            value={categoria.descricao || ""}
            onChange={atualizarEstado}
            required
          />
        </div>

        <button
          className="
            rounded 
            text-white 
            bg-[#F4A261] 
            hover:opacity-90 
            w-1/2 
            py-2 
            mx-auto 
            flex 
            justify-center
          "
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
