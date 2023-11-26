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
        fetch("http://localhost:9000/adicionar/cliente", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente),
            mode: "cors"
        })
            .catch(err => {
                console.log(err);
            });
    }
    public static AdicionarProduto(produto: Produto) {
        console.log(JSON.stringify(produto));
        fetch("http://localhost:9000/adicionar/produto", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(produto),
            mode: "cors"
        })
            .catch(err => {
                console.log(err);
            });
    }
    public static AdicionarServico(servico: Servico) {
        fetch("http://localhost:9000/adicionar/servico", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(servico),
            mode: "cors"
        })
            .catch(err => {
                console.log(err);
            });
    }

    public static DeletarCliente(cpf: any) {
        fetch("http://localhost:9000/deletar/cliente", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cpf),
            mode: "cors"
        })
            .catch(err => {
                console.log(err);
            });
    }
    public static DeletarProduto(nome: string) {
        fetch("http://localhost:9000/deletar/produto", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: nome,
            mode: "cors"
        })
            .catch(err => {
                console.log(err);
            });
    }
    public static DeletarServico(nome: string) {
        fetch("http://localhost:9000/deletar/servico", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: nome,
            mode: "cors"
        })
            .catch(err => {
                console.log(err);
            });
    }

    public static AtualizarCliente(cpf: any, nome: string, nomeSocial: string, genero: string, RGs: Array<RG>, telefones: Array<Telefone>) {
        fetch("http://localhost:9000/atualizar/cliente", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                SetNomeSocial: nomeSocial,
                SetGenero: genero,
                SetRGs: RGs,
                SetTelefones: telefones
            }),
            mode: "cors"
        })
            .catch(err => {
                console.log(err);
            });
    }
    public static AtualizarProduto(nome: string, valor: number) {
        fetch("http://localhost:9000/atualizar/produto", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                valor: valor
            }),
            mode: "cors"
        })
            .catch(err => {
                console.log(err);
            });
    }
    public static AtualizarServico(nome: string, valor: number) {
        fetch("http://localhost:9000/atualizar/servico", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                valor: valor
            }),
            mode: "cors"
        })
            .catch(err => {
                console.log(err);
            });
    }

    // private static async GetClientesBack() {
    //     const response = await fetch("http://localhost:9000/get/clientes", {
    //         method: "GET",
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         mode: "cors"
    //     })
    //         .catch(err => {
    //             console.log(err);
    //         });

    //     if (response) {
    //         const clientes = await response.json();
    //         return clientes.clientes;
    //     }
    //     return [];
    // }
    public static get GetClientes() {
        return fetch("http://localhost:9000/get/clientes", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: "cors"
        })
            .then(response => response.json())
            .then(json => json.clientes)
            .catch(err => {
                console.log(err);
            });
    }

    // private static async GetProdutosBack() {
    //     const response = await fetch("http://localhost:9000/get/produtos", {
    //         method: "GET",
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         mode: "cors"
    //     })
    //         .catch(err => {
    //             console.log(err);
    //         });

    //     if (response) {
    //         const produtos = await response.json();
    //         return produtos.clientes;
    //     }
    //     return [];
    // }
    public static get GetProdutos() {
        return fetch("http://localhost:9000/get/produtos", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: "cors"
        })
            .then(response => response.json())
            .then(json => json.produtos)
            .catch(err => {
                console.log(err);
            });
    }

    // private static async GetServicosBack() {
    //     const response = await fetch("http://localhost:9000/get/servicos", {
    //         method: "GET",
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         mode: "cors"
    //     })
    //         .catch(err => {
    //             console.log(err);
    //         });

    //     if (response) {
    //         const servicos = await response.json();
    //         return servicos.clientes;
    //     }
    //     return [];
    // }
    public static get GetServicos() {
        return fetch("http://localhost:9000/get/servicos", {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode: "cors"
        })
            .then(response => response.json())
            .then(json => json.servicos)
            .catch(err => {
                console.log(err);
            });
    }

    public static GetTopXClientesConsumoProdutoQtd(qtd: number) {
        return this.GetClientes.then(cli => cli.sort(function (a: Cliente, b: Cliente): number {
            return a.GetProdutosConsumidos.length - b.GetProdutosConsumidos.length;
        })).then(sorted => sorted.slice(0, qtd));
    }
    public static GetTopXClientesConsumoProdutoVal(qtd: number) {
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
    public static GetSubXClientesConsumoProdutoQtd(qtd: number) {
        this.LoadData();
        return this.clientes.sort(
            function (a: Cliente, b: Cliente): number {
                return b.GetProdutosConsumidos.length - a.GetProdutosConsumidos.length;
            }
        ).slice(0, qtd);
    }
    public static GetSubXClientesConsumoProdutoVal(qtd: number) {
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

    public static GetTopXClientesConsumoServicoQtd(qtd: number) {
        this.LoadData();
        return this.clientes.sort(
            function (a: Cliente, b: Cliente): number {
                return a.GetServicosConsumidos.length - b.GetServicosConsumidos.length;
            }
        ).slice(0, qtd);
    }
    public static GetTopXClientesConsumoServicoVal(qtd: number) {
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
    public static GetSubXClientesConsumoServicoQtd(qtd: number) {
        this.LoadData();
        return this.clientes.sort(
            function (a: Cliente, b: Cliente): number {
                return b.GetServicosConsumidos.length - a.GetServicosConsumidos.length;
            }
        ).slice(0, qtd);
    }
    public static GetSubXClientesConsumoServicoVal(qtd: number) {
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

    public static ClientesDoGenero(genero: string) {
        this.LoadData();
        return this.clientes.filter(cli => cli.GetGenero === genero.toUpperCase());
    }
}