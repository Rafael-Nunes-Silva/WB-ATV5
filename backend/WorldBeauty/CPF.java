package WorldBeauty;

import java.util.Date;

public class CPF {
    private String valor;
    private Date dataEmissao;

    CPF(String valor, Date dataEmissao) {
        this.valor = valor.replace(".", "").replace("-", "");
        this.dataEmissao = dataEmissao;
    }

    public String GetValor() {
        return this.valor;
    }

    public String GetValorFormatado() {
        // XXX.XXX.XXX-XX
        return this.valor.substring(0, 3) + "." + this.valor.substring(3, 6) + "." + this.valor.substring(6, 9) + "-" + this.valor.substring(9, 12);
    }

    public Date GetDataEmissao() {
        return this.dataEmissao;
    }
}
