import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Link adicionado
import { SyncLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/categoriaService";
import CardCategoria from "../cardCategoria/CardCategoria";
import { toast } from "react-toastify"; // Toast adicionado

function ListarCategorias() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    buscarCategorias();
  }, []);

  async function buscarCategorias() {
    try {
      setIsLoading(true);
      await buscar("/categorias", setCategorias);
    } catch (error) {
      toast.error("Erro ao buscar as categorias."); // alert substituído
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
          {/* Botão Nova Categoria posicionado no topo da lista */}
          {!isLoading && (
            <div className="flex justify-end mb-8">
              <Link
                to="/categorias/cadastrar"
                className="bg-[#F4A261] text-white font-bold py-2 px-6 rounded-lg hover:bg-[#e76f51] transition-all shadow-md"
              >
                + Nova Categoria
              </Link>
            </div>
          )}

          {!isLoading && categorias.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhuma Categoria foi encontrada!
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

export default ListarCategorias;
