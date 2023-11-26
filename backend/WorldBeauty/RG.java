package WorldBeauty;

import java.util.Date;

public class RG {
    private String valor;
    private Date dataEmissao;

    RG(String valor, Date dataEmissao) {
        this.valor = valor;
        this.dataEmissao = dataEmissao;
    }

    public String GetValor() {
        return this.valor;
    }

    public Date GetDataEmissao() {
        return this.dataEmissao;
    }
}
