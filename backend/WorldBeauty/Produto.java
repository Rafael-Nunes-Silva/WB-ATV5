package WorldBeauty;

public class Produto {
    private String nome;
    private float valor;

    Produto(String nome, float valor) {
        this.nome = nome;
        this.valor = valor;
    }

    public String GetNome() {
        return this.nome;
    }
    public float GetValor() {
        return this.valor;
    }

    public void SetValor(float valor) {
        this.valor = valor;
    }
}
