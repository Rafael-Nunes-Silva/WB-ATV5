import IOManager from "../IO/IOManager";
import RG from "../Models/RG";

export default class RGManager {
    public static NovoRG(): RG {
        return new RG(
            IOManager.GetString("Insira os números do RG (apenas números)"),
            IOManager.GetDate("Insira a data de emissão", "dma", "/", "Data inválida")
        );
    }
}