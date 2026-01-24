import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Produto from "../../../models/Produto";
import { buscar, cadastrar, atualizar } from "../../../services/Service";

function FormProduto() {
  const navigate = useNavigate();

  const [produto, setProduto] = useState<Produto>({} as Produto);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto);
    } catch {
      alert("Erro ao buscar o produto.");
      retornar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]:
        e.target.type === "number" ? Number(e.target.value) : e.target.value,
    });
  }

  function retornar() {
    navigate("/produtos");
  }

  async function gerarNovoProduto(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id !== undefined) {
        // ATUALIZAR
        await atualizar("/produtos", produto, setProduto);
        alert("Produto atualizado com sucesso!");
      } else {
        // CADASTRAR (objeto LIMPO)
        const produtoParaCadastrar = {
          nome: produto.nome,
          descricao: produto.descricao,
          preco: produto.preco,
          quantidade: produto.quantidade,
          laboratorio: produto.laboratorio,
          foto: produto.foto,
          categoria: {
            id: produto.categoria?.id,
          },
        };

        await cadastrar("/produtos", produtoParaCadastrar, () => {});
        alert("Produto cadastrado com sucesso!");
      }

      retornar();
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar o produto.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-center my-8">
        {id === undefined ? "Cadastrar Produto" : "Editar Produto"}
      </h1>

      <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoProduto}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome do Produto</label>
          <input
            type="text"
            name="nome"
            className="border-2 border-[#F4A261] rounded p-2"
            value={produto.nome}
            onChange={atualizarEstado}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="preco">Preço</label>
          <input
            type="number"
            step="0.01"
            name="preco"
            className="border-2 border-[#F4A261] rounded p-2"
            value={produto.preco}
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

export default FormProduto;
