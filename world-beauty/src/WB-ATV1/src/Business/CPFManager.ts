import IOManager from "../IO/IOManager";
import CPF from "../Models/CPF";

export default class CPFManager {
    public static NovoCPF(): CPF {
        let valor;
        do {
            valor = IOManager.GetString("Insira os númros do CPF (apenas números)");
        } while(valor.length != 11);

        return new CPF(
            valor,
            IOManager.GetDate("Insira a data de emissão", "dma", "/", "Data inválida")
        );
    }
}