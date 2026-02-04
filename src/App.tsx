import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Contato from "./pages/contato/Contato";

import ListarCategorias from "./pages/categoria/listarCategoria/ListarCategoria";
import DeletarCategoria from "./pages/categoria/deletarCategoria/DeletarCategoria";
import FormCategoria from "./pages/categoria/formCategoria/FormCategoria";

import ListarProdutos from "./pages/produto/listarProduto/ListarProduto";
import FormProduto from "./pages/produto/formProduto/formProduto";
import DeletarProduto from "./pages/produto/deletarProduto/DeletarProduto";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/categorias/listar" element={<ListarCategorias />} />
            <Route path="/categorias/cadastrar" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route
              path="/deletarcategoria/:id"
              element={<DeletarCategoria />}
            />
            <Route path="/produtos" element={<ListarProdutos />} />
            <Route path="/produtos/cadastrar" element={<FormProduto />} />
            <Route path="/editarproduto/:id" element={<FormProduto />} />
            <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
