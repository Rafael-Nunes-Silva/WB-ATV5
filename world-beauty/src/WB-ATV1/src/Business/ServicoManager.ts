import IOManager from "../IO/IOManager";
import Servico from "../Models/Servico";

export default class ServicoManager {
    public static NovoServico(): Servico {
        console.log("Cadastro de serviço")
        const nome = IOManager.GetString("Nome");
        const valor = IOManager.GetFloat("Valor");

        return new Servico(nome, valor);
    }

    public static MontarStringListagem(servicos: Array<Servico>): string {
        let listagem = "";

        servicos.forEach(
            function(servico: Servico) {
                listagem += `----------${servico.GetNome}----------`;
                listagem += `\nValor: ${servico.GetValor}`;
            }
        );
        
        return listagem;
    }
}