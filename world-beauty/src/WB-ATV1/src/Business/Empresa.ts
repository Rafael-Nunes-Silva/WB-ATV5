import Cliente from "../Models/Cliente";
import Produto from "../Models/Produto";
import RG from "../Models/RG";
import Servico from "../Models/Servico";
import Telefone from "../Models/Telefone";

export default class Empresa {
    private static clientes: Array<Cliente> = new Array<Cliente>(0);
    private static produtos: Array<Produto> = new Array<Produto>(0);
    private static servicos: Array<Servico> = new Array<Servico>(0);

    private static LoadData() {
        // this.clientes = JSON.parse(localStorage.getItem("Clientes") as string) || [];
        // this.produtos = JSON.parse(localStorage.getItem("Produtos") as string) || [];
        // this.servicos = JSON.parse(localStorage.getItem("Servicos") as string) || [];
        this.clientes = [];
        const clientes = JSON.parse(localStorage.getItem("Clientes") as string) || [];
        clientes.forEach((cliente: any) => {
            this.clientes.push(
                new Cliente(
                    cliente.nome,
                    cliente.nomeSocial,
                    cliente.genero,
                    cliente.CPF,
                    cliente.RGs,
                    cliente.dataCadastro,
                    cliente.telefones,
                    cliente.produtosConsumidos,
                    cliente.servicosConsumidos
                )
            );
        });

        this.produtos = [];
        const produtos = JSON.parse(localStorage.getItem("Produtos") as string) || [];
        produtos.forEach((produto: any) => {
            this.produtos.push(
                new Produto(produto.nome, produto.valor)
            );
        });

        this.servicos = [];
        const servicos = JSON.parse(localStorage.getItem("Servicos") as string) || [];
        servicos.forEach((servico: any) => {
            this.servicos.push(
                new Servico(servico.nome, servico.valor)
            );
        });
    }

    public static SaveData() {
        localStorage.setItem("Clientes", JSON.stringify(this.clientes));
        localStorage.setItem("Produtos", JSON.stringify(this.produtos));
        localStorage.setItem("Servicos", JSON.stringify(this.servicos));
    }

    public static AdicionarCliente(cliente: Cliente) {
        this.LoadData();
        this.clientes.push(cliente);
        this.SaveData();
    }
    public static AdicionarProduto(produto: Produto) {
        this.LoadData();
        this.produtos.push(produto);
        this.SaveData();
    }
    public static AdicionarServico(servico: Servico) {
        this.LoadData();
        this.servicos.push(servico);
        this.SaveData();
    }

    public static DeletarCliente(cpf: any) {
        this.LoadData();
        this.clientes = this.clientes.filter((cliente) => {
            return ((cliente.GetCPF as any).valor != cpf.valor) && ((cliente.GetCPF as any).dataEmissao != cpf.dataEmissao);
        });
        this.SaveData();
    }
    public static DeletarProduto(nome: string) {
        this.LoadData();
        this.produtos = this.produtos.filter((produto) => { return produto.GetNome != nome });
        this.SaveData();
    }
    public static DeletarServico(nome: string) {
        this.LoadData();
        this.servicos = this.servicos.filter((servico) => { return servico.GetNome != nome });
        this.SaveData();
    }

    public static AtualizarCliente(cpf: any, nome: string, nomeSocial: string, genero: string, RGs: Array<RG>, telefones: Array<Telefone>) {
        this.LoadData();
        const cliente = this.clientes.filter((cliente) => (cliente.GetCPF as any).valor === cpf.valor && (cliente.GetCPF as any).dataEmissao === cpf.dataEmissao)[0];
        if (cliente) {
            cliente.SetNome = nome;
            cliente.SetNomeSocial = nomeSocial;
            cliente.SetGenero = genero;
            cliente.SetRGs = RGs;
            cliente.SetTelefones = telefones;
        }
        this.SaveData();
    }
    public static AtualizarProduto(nome: string, valor: number) {
        this.LoadData();
        const produto = this.produtos.find((produto) => produto.GetNome === nome);
        if (produto) {
            produto.SetValor = valor;
        }
        this.SaveData();
    }
    public static AtualizarServico(nome: string, valor: number) {
        this.LoadData();
        const servico = this.produtos.find((servico) => servico.GetNome === nome);
        if (servico) {
            servico.SetValor = valor;
        }
        this.SaveData();
    }

    public static get GetClientes() {
        this.LoadData();
        return this.clientes;
    }

    public static get GetProdutos() {
        this.LoadData();
        return this.produtos;
    }

    public static get GetServicos() {
        this.LoadData();
        return this.servicos;
    }

    public static GetTopXClientesConsumoProdutoQtd(qtd: number): Array<Cliente> {
        this.LoadData();
        return this.clientes.sort(
            function (a: Cliente, b: Cliente): number {
                return a.GetProdutosConsumidos.length - b.GetProdutosConsumidos.length;
            }
        ).slice(0, qtd);
    }
    public static GetTopXClientesConsumoProdutoVal(qtd: number): Array<Cliente> {
        this.LoadData();
        return this.clientes.sort(
            function (a: Cliente, b: Cliente): number {
                let valA = 0;
                a.GetProdutosConsumidos.forEach(
                    function (produto: Produto) {
                        valA += produto.GetValor;
                    }
                )

                let valB = 0;
                b.GetProdutosConsumidos.forEach(
                    function (produto: Produto) {
                        valB += produto.GetValor;
                    }
                )

                return valA - valB;
            }
        ).slice(0, qtd);
    }
    public static GetSubXClientesConsumoProdutoQtd(qtd: number): Array<Cliente> {
        this.LoadData();
        return this.clientes.sort(
            function (a: Cliente, b: Cliente): number {
                return b.GetProdutosConsumidos.length - a.GetProdutosConsumidos.length;
            }
        ).slice(0, qtd);
    }
    public static GetSubXClientesConsumoProdutoVal(qtd: number): Array<Cliente> {
        this.LoadData();
        return this.clientes.sort(
            function (a: Cliente, b: Cliente): number {
                let valA = 0;
                a.GetProdutosConsumidos.forEach(
                    function (produto: Produto) {
                        valA += produto.GetValor;
                    }
                )

                let valB = 0;
                b.GetProdutosConsumidos.forEach(
                    function (servico: Produto) {
                        valB += servico.GetValor;
                    }
                )

                return valB - valA;
            }
        ).slice(0, qtd);
    }

    public static GetTopXClientesConsumoServicoQtd(qtd: number): Array<Cliente> {
        this.LoadData();
        return this.clientes.sort(
            function (a: Cliente, b: Cliente): number {
                return a.GetServicosConsumidos.length - b.GetServicosConsumidos.length;
            }
        ).slice(0, qtd);
    }
    public static GetTopXClientesConsumoServicoVal(qtd: number): Array<Cliente> {
        this.LoadData();
        return this.clientes.sort(
            function (a: Cliente, b: Cliente): number {
                let valA = 0;
                a.GetServicosConsumidos.forEach(
                    function (servico: Servico) {
                        valA += servico.GetValor;
                    }
                )

                let valB = 0;
                b.GetServicosConsumidos.forEach(
                    function (servico: Servico) {
                        valB += servico.GetValor;
                    }
                )

                return valA - valB;
            }
        ).slice(0, qtd);
    }
    public static GetSubXClientesConsumoServicoQtd(qtd: number): Array<Cliente> {
        this.LoadData();
        return this.clientes.sort(
            function (a: Cliente, b: Cliente): number {
                return b.GetServicosConsumidos.length - a.GetServicosConsumidos.length;
            }
        ).slice(0, qtd);
    }
    public static GetSubXClientesConsumoServicoVal(qtd: number): Array<Cliente> {
        this.LoadData();
        return this.clientes.sort(
            function (a: Cliente, b: Cliente): number {
                let valA = 0;
                a.GetServicosConsumidos.forEach(
                    function (servico: Servico) {
                        valA += servico.GetValor;
                    }
                )

                let valB = 0;
                b.GetServicosConsumidos.forEach(
                    function (servico: Servico) {
                        valB += servico.GetValor;
                    }
                )

                return valB - valA;
            }
        ).slice(0, qtd);
    }

    public static ClientesDoGenero(genero: string): Array<Cliente> {
        this.LoadData();
        return this.clientes.filter(cli => cli.GetGenero === genero.toUpperCase());
    }
}