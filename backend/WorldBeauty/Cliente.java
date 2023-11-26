package WorldBeauty;

import java.util.Date;
import java.util.List;

public class Cliente {
    private String nome;
    private String nomeSocial;
    private String genero;
    private CPF CPF;
    private List<RG> RGs;
    private Date dataCadastro;
    private List<Telefone> telefones;
    private List<Produto> produtosConsumidos;
    private List<Servico> servicosConsumidos;

    Cliente(
        String nome,
        String nomeSocial,
        String genero,
        CPF CPF,
        List<RG> RGs,
        Date dataCadastro,
        List<Telefone> telefones,
        List<Produto> produtosConsumidos,
        List<Servico> servicosConsumidos
        ) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.genero = genero;
        this.CPF = CPF;
        this.RGs = RGs;
        this.dataCadastro = dataCadastro;
        this.telefones = telefones;
        this.produtosConsumidos = produtosConsumidos;
        this.servicosConsumidos = servicosConsumidos;
    }

    public String GetNome() {
        return this.nome;
    }
    public String GetNomeSocial() {
        return this.nomeSocial;
    }
    public String GetGenero() {
        return this.genero.toUpperCase();
    }
    public CPF GetCPF() {
        return this.CPF;
    }
    public List<RG> GetRGs() {
        return this.RGs;
    }
    public Date GetDataCadastro() {
        return this.dataCadastro;
    }
    public List<Telefone> GetTelefones() {
        return this.telefones;
    }

    public void SetNome(String nome) {
        this.nome = nome;
    }
    public void SetNomeSocial(String nomeSocial) {
        this.nomeSocial = nomeSocial;
    }
    public void SetGenero(String genero) {
        this.genero = genero.toUpperCase();
    }
    public void SetRGs(List<RG> RGs) {
        this.RGs = RGs;
    }
    public void SetTelefones(List<Telefone> telefones) {
        this.telefones = telefones;
    }

    public List<Produto> GetProdutosConsumidos() {
        return this.produtosConsumidos;
    }
    public List<Servico> GetServicosConsumidos() {
        return this.servicosConsumidos;
    }
}
