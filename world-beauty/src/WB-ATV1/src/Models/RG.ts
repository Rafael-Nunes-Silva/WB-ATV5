export default class RG {
    private valor: string;
    private dataEmissao: Date;

    constructor(valor: string, dataEmissao: Date) {
        this.valor = valor;
        this.dataEmissao = dataEmissao;
    }

    public get GetValor(): string {
        return this.valor;
    }

    public get GetDataEmissao(): Date {
        return this.dataEmissao;
    }
}