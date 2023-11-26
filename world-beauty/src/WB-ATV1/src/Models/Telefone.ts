export default class Telefone {
    private ddd: string;
    private numero: string;

    constructor(ddd: string, numero: string) {
        this.ddd = ddd;
        this.numero = numero;
    }

    public get GetDDD(): string {
        return this.ddd;
    }

    public get GetNumero(): string {
        return this.numero;
    }

    public get GetNumeroFormatado(): string {
        return `(${this.ddd}) ${this.numero.slice(0, 6)}-${this.numero.slice(6, 12)}`;
    }
}