import IOManager from "../IO/IOManager";
import Produto from "../Models/Produto";

export default class ProdutoManager {
    public static NovoProduto(): Produto {
        console.log("Cadastro de produto")
        const nome = IOManager.GetString("Nome");
        const valor = IOManager.GetFloat("Valor");

        return new Produto(nome, valor);
    }

    public static MontarStringListagem(produtos: Array<Produto>): string {
        let listagem = "";

        produtos.forEach(
            function(produto: Produto) {
                listagem += `----------${produto.GetNome}----------`;
                listagem += `\nValor: ${produto.GetValor}`;
            }
        );
        
        return listagem;
    }
}