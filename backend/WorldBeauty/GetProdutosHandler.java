package WorldBeauty;

import java.io.OutputStream;
import java.io.IOException;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;

public class GetProdutosHandler implements HttpHandler {
    public void handle(HttpExchange he) throws IOException {
        he.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        he.getResponseHeaders().add("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
        he.getResponseHeaders().add("Access-Control-Allow-Credentials", "true");
        he.getResponseHeaders().add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");

        String response = "{\"produtos\":[";
        for (Produto p : Empresa.GetProdutos()) {
            response += "{\"nome\": \"" + p.GetNome() + "\",";
            response += "\"valor\": \"" + p.GetValor() + "}";
        }
        response += "]}";
        he.sendResponseHeaders(200, response.length());

        OutputStream os = he.getResponseBody();
        os.write(response.getBytes());
        os.close();
    }
}