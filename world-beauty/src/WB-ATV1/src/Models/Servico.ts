export default class Servico {
    private nome: string;
    private valor: number;

    constructor(nome: string, valor: number) {
        this.nome = nome;
        this.valor = valor;
    }

    public get GetNome(): string {
        return this.nome;
    }
    public get GetValor(): number {
        return this.valor;
    }

    public set SetValor(valor: number) {
        this.valor = valor;
    }
}