function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans">
      {/* Banner Principal - Fundo Teal Suave */}
      <section className="bg-[#7da1a1] py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto bg-white/20 backdrop-blur-sm rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row items-center">
          {/* Lado da Imagem (Teclado/Caneta na sua ref) */}
          <div className="w-full md:w-1/2 h-64 md:h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1580281658629-9c2c6c2a7c5c"
              alt="Farmácia"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Card de Boas-vindas Flutuante */}
          <div className="w-full md:w-1/2 p-10 flex justify-center">
            <div className="bg-[#f1f3f2] p-8 md:p-12 rounded-[30px] shadow-lg max-w-md text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-[#2d4a4a] mb-4">
                👋 Bem-vindos(as) à Farmácia da Ju!
              </h1>
              <p className="text-[#5f8a8a] mb-8 text-lg">
                Produtos selecionados de forma leve, moderna e inspiradora para
                sua saúde 💊
              </p>
              <button className="bg-[#7da1a1] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#6b8d8d] transition-all">
                Ver Categorias
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Categorias (Estilo "Últimas Postagens") */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#2d4a4a] mb-10">
            Nossas Categorias
          </h2>

          <div className="space-y-4">
            {["Medicamentos", "Higiene", "Vitaminas"].map((cat) => (
              <div
                key={cat}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center hover:shadow-md transition-shadow"
              >
                <span className="text-xl font-medium text-[#5f8a8a]">
                  {cat}
                </span>
                <span className="text-2xl">✨</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
