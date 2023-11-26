package WorldBeauty;

import java.io.OutputStream;
import java.io.IOException;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpExchange;
import org.json.simple.*;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class AtualizarServicoHandler implements HttpHandler {
    public void handle(HttpExchange he) throws IOException {
        he.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        he.getResponseHeaders().add("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
        he.getResponseHeaders().add("Access-Control-Allow-Credentials", "true");
        he.getResponseHeaders().add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");

        String response = "<h1>Atualizar Servico</h1>";
        he.sendResponseHeaders(200, response.length());

        try {
            JSONParser parser = new JSONParser();
            JSONObject json = (JSONObject) parser.parse(new String(he.getRequestBody().readAllBytes()));
            
            Empresa.AtualizarServico(
                (String)json.get("nome"),
                (Float)json.get("valor")
            );
        } catch (ParseException e) {
            System.out.println(e.toString());
        }

        OutputStream os = he.getResponseBody();
        os.write(response.getBytes());
        os.close();
    }
}