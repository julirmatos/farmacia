import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import type Produto from "../../../models/Produto";
import { buscar } from "../../../services/produtoService";
import CardProduto from "../cardProduto/CardProduto";

function ListarProduto() {
  const navigate = useNavigate();

  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  async function buscarProdutos() {
    try {
      setIsLoading(true);
      await buscar("/produtos", setProdutos);
    } catch (error: any) {
      alert("Erro ao buscar os produtos.");
      navigate("/");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <SyncLoader color="#F4A261" size={28} />
        </div>
      )}

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          {!isLoading && produtos.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhum produto foi encontrado!
            </span>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtos.map((produto) => (
              <CardProduto key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListarProduto;
