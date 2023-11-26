package WorldBeauty;

import java.io.OutputStream;
import java.io.IOException;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;

public class GetClientesHandler implements HttpHandler {
    public void handle(HttpExchange he) throws IOException {
        he.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        he.getResponseHeaders().add("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
        he.getResponseHeaders().add("Access-Control-Allow-Credentials", "true");
        he.getResponseHeaders().add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");

        String response = "{\"clientes\":[";
        for (Cliente p : Empresa.GetClientes()) {
            response += "{\"nome\": \"" + p.GetNome() + "\",";
            response += "\"nomeSocial\": \"" + p.GetNomeSocial() + "\",";
            response += "\"genero\": \"" + p.GetGenero() + "\",";
            response += "\"CPF\": \"" + p.GetCPF() + ",";
            response += "\"RGs\": \"" + p.GetRGs() + ",";
            response += "\"dataCadastro\": \"" + p.GetDataCadastro() + "\",";
            response += "\"telefones\": \"" + p.GetTelefones() + ",";
            response += "\"produtosConsumidos\": \"" +p.GetProdutosConsumidos() + ",";
            response += "\"servicosConsumidos\": \"" + p.GetServicosConsumidos() + "}";
        }
        response += "]}";
        he.sendResponseHeaders(200, response.length());

        OutputStream os = he.getResponseBody();
        os.write(response.getBytes());
        os.close();
    }
}