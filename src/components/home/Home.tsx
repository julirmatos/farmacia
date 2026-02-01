import { useNavigate } from "react-router-dom";
import ListarCategorias from "../../pages/categoria/listarCategoria/ListarCategoria";
import ListarProdutos from "../../pages/produto/listarProduto/ListarProduto";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans">
      <section className="py-20 px-4 md:px-20">
        <div
          className="max-w-7xl mx-auto rounded-[40px] overflow-hidden shadow-2xl relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=2069&q=90')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/10 to-black/25"></div>

          <div className="relative z-10 flex justify-center items-center min-h-[420px] px-6">
            <div className="bg-white/80 backdrop-blur-sm p-10 md:p-14 rounded-[30px] shadow-xl max-w-lg text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-[#264653] mb-4">
                ⚕️ Bem-vindos à FarmaJu!
              </h1>

              <p className="text-[#5f7f7f] mb-8 text-lg leading-relaxed">
                Cuidados com a saúde todos os dias 💊
              </p>

              <button
                onClick={() => navigate("/produtos")}
                className="bg-[#f4a261] text-white px-10 py-3 rounded-xl font-bold hover:bg-[#e76f51] transition-all"
              >
                Consulte nossos Produtos
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#264653] mb-12">Produtos</h2>

          <div className="space-y-4">
            {["Medicamentos", "Higiene", "Vitaminas"].map((categoria) => (
              <div
                key={categoria}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center hover:shadow-md transition-shadow"
              >
                <span className="text-xl font-medium text-[#5f7f7f]">
                  {categoria}
                </span>
                <span className="text-2xl">✨</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ListarCategorias />
      <ListarProdutos />
    </div>
  );
}

export default Home;
