package WorldBeauty;

public class Telefone {
    private String ddd;
    private String numero;

    Telefone(String ddd, String numero) {
        this.ddd = ddd;
        this.numero = numero;
    }

    public String GetDDD() {
        return this.ddd;
    }

    public String GetNumero() {
        return this.numero;
    }

    public String GetNumeroFormatado() {
        return this.ddd + " " + this.numero.substring(0, 6) + "-" + this.numero.substring(6, 12);
    }
}
