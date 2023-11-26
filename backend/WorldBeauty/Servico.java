package WorldBeauty;

public class Servico {
    private String nome;
    private float valor;

    Servico(String nome, float valor) {
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
