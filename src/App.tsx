import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import ListaCategorias from "./pages/categoria/listarCategoria/ListarCategoria";
import DeletarCategoria from "./pages/categoria/deletarCategoria/DeletarCategoria";
import FormCategoria from "./pages/categoria/formCategoria/FormCategoria";
import Contato from "./pages/contato/Contato";
import ListarProdutos from "./pages/produto/listarProduto/ListarProduto";
import FormProduto from "./pages/produto/formProduto/formProduto";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias/listar" element={<ListaCategorias />} />
            <Route path="/categorias/cadastrar" element={<FormCategoria />} />
            <Route path="/categorias/editar/:id" element={<FormCategoria />} />
            <Route path="/produtos" element={<ListarProdutos />} />
            <Route path="/produtos/cadastrar" element={<FormProduto />} />
            <Route path="/produtos/editar/:id" element={<FormProduto />} />
            <Route path="/contato" element={<Contato />} />
            <Route
              path="/deletarcategoria/:id"
              element={<DeletarCategoria />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
