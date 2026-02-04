import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardProduto from "../cardProduto/CardProduto";
import type Produto from "../../../models/Produto";
import { buscar } from "../../../services/produtoService";
import { SyncLoader } from "react-spinners";
import { toast } from "react-toastify";

function ListarProduto() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function buscarProdutos() {
    try {
      setIsLoading(true);
      await buscar("/produtos", setProdutos);
    } catch (error: any) {
      toast.error("Erro ao carregar a lista de produtos."); // Mais elegante que alert
      navigate("/");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <div className="container mx-auto my-8 px-4">
      {/* CABEÇALHO SEMPRE VISÍVEL */}
      <div className="flex justify-between items-center mb-10 w-full">
        <h1 className="text-4xl font-bold">Produtos Cadastrados</h1>

        {/* O 'to' deve ser idêntico ao 'path' do App.tsx */}
        <Link
          to="/produtos/cadastrar"
          className="bg-[#F4A261] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#E76F51] transition-all shadow-md flex items-center justify-center min-w-[150px]"
        >
          + Novo Produto
        </Link>
      </div>

      <hr className="border-[#F4A261] mb-8 opacity-20" />

      {/* APENAS A LISTA SOFRE O LOADING */}
      {isLoading ? (
        <div className="flex justify-center w-full my-20">
          <SyncLoader color="#F4A261" size={15} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {produtos.map((produto) => (
            <CardProduto key={produto.id} produto={produto} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListarProduto;
