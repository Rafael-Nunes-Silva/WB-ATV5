package WorldBeauty;

import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.io.IOException;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;
import org.json.simple.*;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class AdicionarProdutoHandler implements HttpHandler {
    public void handle(HttpExchange he) throws IOException {
        he.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        he.getResponseHeaders().add("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
        he.getResponseHeaders().add("Access-Control-Allow-Credentials", "true");
        he.getResponseHeaders().add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");

        String response = "<h1>Adicionar Produto</h1>";
        he.sendResponseHeaders(200, response.length());

        try {
            JSONParser parser = new JSONParser();
            String jsonString = new String(he.getRequestBody().readAllBytes(), StandardCharsets.UTF_8);
            JSONObject json = (JSONObject) parser.parse(jsonString);

            Empresa.AdicionarProduto(new Produto(
                (String) json.get("nome"),
                (Float) json.get("valor")
            ));
        } catch (ParseException e) {
            System.out.println(e.toString());
        }

        OutputStream os = he.getResponseBody();
        os.write(response.getBytes());
        os.close();
    }
}