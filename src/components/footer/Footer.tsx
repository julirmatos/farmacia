function Footer() {
  return (
    <footer className="w-full bg-[#FFE8D9] text-[#264653] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">⚕️ FarmaJu</h2>
          <p className="text-[#6B7280] max-w-sm">
            Cuidando da sua saúde com carinho, confiança e qualidade.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Navegação</h3>
          <ul className="space-y-2 text-[#6B7280]">
            <li className="hover:text-[#F4A261] cursor-pointer transition">
              Home
            </li>
            <li className="hover:text-[#F4A261] cursor-pointer transition">
              Produtos
            </li>
            <li className="hover:text-[#F4A261] cursor-pointer transition">
              Contato
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Contato</h3>
          <p className="text-[#6B7280]">📍 São Paulo - SP</p>
          <p className="text-[#6B7280]">📞 (11) 99999-9999</p>
          <p className="text-[#6B7280]">✉️ contato@farmaju.com</p>
        </div>
      </div>

      <div className="border-t border-[#FEC89A] py-4 text-center text-sm text-[#6B7280]">
        © {new Date().getFullYear()} ⚕️FarmaJu — Generation Brasil - JS11
      </div>
    </footer>
  );
}

export default Footer;
