function Contato() {
  return (
    <div className="min-h-screen bg-[#FFE8D9] flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-lg max-w-md w-full p-8">
        <h1 className="text-3xl font-bold text-[#264653] mb-6 text-center">
          Fale Conosco
        </h1>

        <div className="space-y-4 text-[#264653] text-lg">
          <div className="flex items-center gap-3">
            <span className="text-xl">📍</span>
            <p>Guarulhos - SP</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xl">📞</span>
            <p>(11) 99999-9999</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xl">✉️</span>
            <p>contato@farmaciadaju.com</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Fale com a gente. Estamos prontos para cuidar de você 💬💊
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contato;
