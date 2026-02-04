import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Produto from "../../../models/Produto";
import type Categoria from "../../../models/Categoria";
import { buscar, cadastrar, atualizar } from "../../../services/produtoService";
import { buscar as buscarCategorias } from "../../../services/categoriaService";
import { toast } from "react-toastify";

function FormProduto() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
    descricao: "",
  });

  const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    descricao: "Medicamento",
    preco: 0,
    quantidade: 0,
    laboratorio: "",
    foto: "",
    categoria: null,
  } as Produto);

  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto);
    } catch {
      toast.error("Erro ao buscar o produto.");
      retornar();
    }
  }

  async function listarCategorias() {
    try {
      await buscarCategorias("/categorias", setCategorias);
    } catch (error) {
      toast.error("Erro ao listar categorias.");
    }
  }

  useEffect(() => {
    listarCategorias();
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setProduto({
      ...produto,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value, type } = e.target;
    setProduto({
      ...produto,
      [name]: type === "number" ? Number(value) : value,
    });
  }

  function buscarCategoriaPorId(id: string) {
    buscarCategorias(`/categorias/${id}`, setCategoria);
  }

  function retornar() {
    navigate("/produtos");
  }

  async function gerarNovoProduto(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (!produto.categoria || produto.categoria.id === 0) {
      toast.warn("Por favor, selecione uma categoria válida.");
      setIsLoading(false);
      return;
    }

    try {
      if (id !== undefined) {
        await atualizar("/produtos", produto, setProduto);
        toast.success("Produto atualizado com sucesso!");
      } else {
        await cadastrar("/produtos", produto, () => {});
        toast.success("Produto cadastrado com sucesso!");
      }
      retornar();
    } catch (error) {
      console.error("Erro no cadastro:", error);
      toast.error(
        "Erro ao salvar o produto. Verifique se todos os campos foram preenchidos.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto my-10">
      <h1 className="text-4xl text-center mb-8 font-bold">
        {id === undefined ? "Cadastrar Produto" : "Editar Produto"}
      </h1>

      <form
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg border border-[#F4A261] flex flex-col gap-4"
        onSubmit={gerarNovoProduto}
      >
        <div className="flex flex-col gap-1">
          <label className="font-semibold text-gray-700">Nome do Produto</label>
          <input
            type="text"
            name="nome"
            className="border-2 border-[#F4A261] rounded-lg p-2"
            value={produto.nome}
            onChange={atualizarEstado}
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold text-gray-700">Laboratório</label>
          <input
            type="text"
            name="laboratorio"
            className="border-2 border-[#F4A261] rounded-lg p-2"
            value={produto.laboratorio}
            onChange={atualizarEstado}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-700">Preço (R$)</label>
            <input
              type="number"
              step="0.01"
              name="preco"
              className="border-2 border-[#F4A261] rounded-lg p-2"
              value={produto.preco}
              onChange={atualizarEstado}
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold text-gray-700">Quantidade</label>
            <input
              type="number"
              name="quantidade"
              className="border-2 border-[#F4A261] rounded-lg p-2"
              value={produto.quantidade}
              onChange={atualizarEstado}
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold text-gray-700">
            URL da Foto (Opcional)
          </label>
          <input
            type="text"
            name="foto"
            className="border-2 border-[#F4A261] rounded-lg p-2"
            value={produto.foto}
            onChange={atualizarEstado}
            placeholder="Link da imagem..."
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-semibold text-gray-700">Categoria</label>
          <select
            name="categoria"
            className="border-2 border-[#F4A261] rounded-lg p-2"
            onChange={(e) => buscarCategoriaPorId(e.target.value)}
            required
          >
            <option value="" selected disabled>
              Selecione uma Categoria
            </option>
            {categorias.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nome}
              </option>
            ))}
          </select>
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

export default FormProduto;
