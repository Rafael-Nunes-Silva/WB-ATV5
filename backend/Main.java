import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.net.InetSocketAddress;

import WorldBeauty.AdicionarClienteHandler;
import WorldBeauty.AdicionarProdutoHandler;
import WorldBeauty.AdicionarServicoHandler;
import WorldBeauty.DeletarClienteHandler;
import WorldBeauty.DeletarProdutoHandler;
import WorldBeauty.DeletarServicoHandler;
import WorldBeauty.GetClientesHandler;
import WorldBeauty.GetProdutosHandler;
import WorldBeauty.GetServicosHandler;
import WorldBeauty.AtualizarClienteHandler;
import WorldBeauty.AtualizarProdutoHandler;
import WorldBeauty.AtualizarServicoHandler;

public class Main {
    public static void main(String[] args) throws IOException {
        int port = 9000;
        HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
        System.out.println("Back-end World-Beauty ouvindo na porta " + port);
        
        server.createContext("/get/clientes", new GetClientesHandler());
        server.createContext("/get/produtos", new GetProdutosHandler());
        server.createContext("/get/servicos", new GetServicosHandler());

        server.createContext("/adicionar/cliente", new AdicionarClienteHandler());
        server.createContext("/deletar/cliente", new DeletarClienteHandler());
        server.createContext("/atualizar/cliente", new AtualizarClienteHandler());

        server.createContext("/adicionar/produto", new AdicionarProdutoHandler());
        server.createContext("/deletar/produto", new DeletarProdutoHandler());
        server.createContext("/atualizar/produto", new AtualizarProdutoHandler());

        server.createContext("/adicionar/servico", new AdicionarServicoHandler());
        server.createContext("/deletar/servico", new DeletarServicoHandler());
        server.createContext("/atualizar/servico", new AtualizarServicoHandler());

        server.setExecutor(null);
        server.start();
    }
}