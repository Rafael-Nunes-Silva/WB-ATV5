import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cliente from "./pages/cliente";
import Produto from "./pages/produto";
import Servico from "./pages/servico";
import CadastroCliente from "./pages/cadastro/cadastroCliente";
import ListagemCliente from "./pages/listagem/listagemCliente";
import AtualizarCliente from "./pages/atualizar/atualizarCliente";
import DeletarCliente from "./pages/deletar/deletarCliente";
import CadastroProduto from "./pages/cadastro/cadastroProduto";
import ListagemProduto from "./pages/listagem/listagemProduto";
import AtualizarProduto from "./pages/atualizar/atualizarProduto";
import DeletarProduto from "./pages/deletar/deletarProduto";
import CadastroServico from "./pages/cadastro/cadastroServico";
import ListagemServico from "./pages/listagem/listagemServico";
import AtualizarServico from "./pages/atualizar/atualizarServico";
import DeletarServico from "./pages/deletar/deletarServico";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index
            element={
              <div className="texto-indicador">
                <h1>World Beauty</h1>
                <h1 className="indicador-sec">World Beauty</h1>
              </div>
            }
          />
          <Route path="cliente" element={<Cliente />}>
            <Route index
              element={
                <div className="texto-indicador">
                  <h1>CLIENTE</h1>
                  <h1 className="indicador-sec">CLIENTE</h1>
                </div>
              }
            />
            <Route path="cadastro" element={<CadastroCliente />} />
            <Route path="listagem" element={<ListagemCliente />} />
            <Route path="atualizar" element={<AtualizarCliente />} />
            <Route path="deletar" element={<DeletarCliente />} />
          </Route>
          <Route path="produto" element={<Produto />}>
            <Route index
              element={
                <div className="texto-indicador">
                  <h1>PRODUTO</h1>
                  <h1 className="indicador-sec">PRODUTO</h1>
                </div>
              }
            />
            <Route path="cadastro" element={<CadastroProduto />} />
            <Route path="listagem" element={<ListagemProduto />} />
            <Route path="atualizar" element={<AtualizarProduto />} />
            <Route path="deletar" element={<DeletarProduto />} />
          </Route>
          <Route path="servico" element={<Servico />}>
            <Route index
              element={
                <div className="texto-indicador">
                  <h1>SERVIÇO</h1>
                  <h1 className="indicador-sec">SERVIÇO</h1>
                </div>
              }
            />
            <Route path="cadastro" element={<CadastroServico />} />
            <Route path="listagem" element={<ListagemServico />} />
            <Route path="atualizar" element={<AtualizarServico />} />
            <Route path="deletar" element={<DeletarServico />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
