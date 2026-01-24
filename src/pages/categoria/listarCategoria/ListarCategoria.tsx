import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategoria from "../cardCategoria/CardCategoria";
function ListaCategorias() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  async function buscarCategorias() {
    try {
      setIsLoading(true);
      await buscar("/categorias", setCategorias);
    } catch (error: any) {
      if (error.toString().includes("404")) {
        alert("Erro ao buscar as Categorias.");
        navigate("/home");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <SyncLoader color="#F4A261" size={32} />
        </div>
      )}

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          {!isLoading && categorias.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhum Categoria foi encontrado!
            </span>
          )}

          <div
            className="grid grid-cols-1 md:grid-cols-2 
                       lg:grid-cols-3 gap-8"
          >
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;
