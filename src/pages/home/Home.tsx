function HomeFarmacia() {
  return (
    <div className="min-h-screen bg-farmacia-bg">
      {/* HERO */}
      <section className="bg-farmacia-green text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-5xl font-extrabold leading-tight">
              Sua farmácia
              <br />
              mais perto de você 💊
            </h1>

            <p className="mt-6 text-lg text-green-100">
              Produtos de qualidade, categorias organizadas e cuidado com a sua
              saúde todos os dias.
            </p>

            <button
              className="
                mt-10
                px-8 py-4
                bg-white
                text-farmacia-green
                font-semibold
                rounded-xl
                hover:bg-green-100
                transition
              "
            >
              Ver Categorias
            </button>
          </div>

          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1580281658629-9c2c6c2a7c5c"
              alt="Farmácia"
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-farmacia-text text-center mb-12">
            Nossas Categorias
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {["Medicamentos", "Higiene", "Vitaminas"].map((item) => (
              <div
                key={item}
                className="
                  bg-white
                  p-8
                  rounded-2xl
                  shadow-md
                  hover:shadow-xl
                  transition
                  border-t-4
                  border-farmacia-green
                "
              >
                <h3 className="text-xl font-bold text-farmacia-text">{item}</h3>

                <p className="text-gray-600 mt-4">
                  Produtos selecionados com qualidade e segurança.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeFarmacia;
