import IOManager from "../IO/IOManager";
import Telefone from "../Models/Telefone";

export default class TelefoneManager {
    public static NovoTelefone(): Telefone {
        console.log("Cadastro de telefone")
        let ddd;
        do {
            ddd = IOManager.GetString("Insira o DDD (apenas números)");
        } while(ddd.length < 1 || ddd.length > 3);

        let numero;
        do {
            numero = IOManager.GetString("Insira o número (apenas números)");
        } while(numero.length != 9);

        return new Telefone(ddd, numero);
    }
}