package WorldBeauty;

import java.util.ArrayList;
import java.util.List;

public class Empresa {
    private static List<Cliente> clientes = new ArrayList<Cliente>();
    private static List<Produto> produtos = new ArrayList<Produto>();
    private static List<Servico> servicos = new ArrayList<Servico>();

    // private static LoadData() {
    // // clientes = JSON.parse(localStorage.getItem("Clientes") as string) ||
    // [];
    // // produtos = JSON.parse(localStorage.getItem("Produtos") as string) ||
    // [];
    // // servicos = JSON.parse(localStorage.getItem("Servicos") as string) ||
    // [];
    // clientes = [];
    // const clientes = JSON.parse(localStorage.getItem("Clientes") as string) ||
    // [];
    // clientes.forEach((cliente any) => {
    // clientes.push(
    // new Cliente(
    // cliente.nome,
    // cliente.nomeSocial,
    // cliente.genero,
    // cliente.CPF,
    // cliente.RGs,
    // cliente.dataCadastro,
    // cliente.telefones,
    // cliente.produtosConsumidos,
    // cliente.servicosConsumidos
    // )
    // );
    // });

    // produtos = [];
    // const produtos = JSON.parse(localStorage.getItem("Produtos") as string) ||
    // [];
    // produtos.forEach((produto any) => {
    // produtos.push(
    // new Produto(produto.nome, produto.valor)
    // );
    // });

    // servicos = [];
    // const servicos = JSON.parse(localStorage.getItem("Servicos") as string) ||
    // [];
    // servicos.forEach((servico any) => {
    // servicos.push(
    // new Servico(servico.nome, servico.valor)
    // );
    // });
    // }

    // public static SaveData() {
    // localStorage.setItem("Clientes", JSON.stringify(clientes));
    // localStorage.setItem("Produtos", JSON.stringify(produtos));
    // localStorage.setItem("Servicos", JSON.stringify(servicos));
    // }

    public static void AdicionarCliente(Cliente cliente) {
        clientes.add(cliente);
    }

    public static void AdicionarProduto(Produto produto) {
        produtos.add(produto);
    }

    public static void AdicionarServico(Servico servico) {
        servicos.add(servico);
    }

    public static void DeletarCliente(CPF cpf) {
        clientes.removeIf(
                c -> (c.GetCPF().GetValor() == cpf.GetValor() && c.GetCPF().GetDataEmissao() == cpf.GetDataEmissao()));
    }

    public static void DeletarProduto(String nome) {
        produtos.removeIf(p -> (p.GetNome() == nome));
    }

    public static void DeletarServico(String nome) {
        servicos.removeIf(s -> (s.GetNome() == nome));
    }

    public static void AtualizarCliente(CPF cpf, String nome, String nomeSocial, String genero, List<RG> RGs,
            List<Telefone> telefones) {
        for (int i = 0; i < clientes.size(); i++) {
            if (clientes.get(i).GetCPF().GetValor() == cpf.GetValor()
                    && clientes.get(i).GetCPF().GetDataEmissao() == cpf.GetDataEmissao()) {
                clientes.get(i).SetNome(nome);
                clientes.get(i).SetNomeSocial(nomeSocial);
                clientes.get(i).SetGenero(genero);
                clientes.get(i).SetRGs(RGs);
                clientes.get(i).SetTelefones(telefones);
                break;
            }
        }
    }

    public static void AtualizarProduto(String nome, float valor) {
        for (int i = 0; i < produtos.size(); i++) {
            if (produtos.get(i).GetNome() == nome) {
                produtos.get(i).SetValor(valor);
                break;
            }
        }
    }

    public static void AtualizarServico(String nome, float valor) {
        for (int i = 0; i < servicos.size(); i++) {
            if (servicos.get(i).GetNome() == nome) {
                servicos.get(i).SetValor(valor);
                break;
            }
        }
    }

    public static List<Cliente> GetClientes() {
        return clientes;
    }

    public static List<Produto> GetProdutos() {
        return produtos;
    }

    public static List<Servico> GetServicos() {
        return servicos;
    }

    public static Cliente[] GetTopXClientesConsumoProdutoQtd(int qtd) {
        Cliente[] retClientes = new Cliente[qtd];

        clientes.sort((c1, c2) -> (c1.GetProdutosConsumidos().size() - c2.GetProdutosConsumidos().size()));

        for (int i = 0; i < qtd; i++) {
            retClientes[i] = clientes.get(i);
        }

        return retClientes;
    }

    public static Cliente[] GetTopXClientesConsumoProdutoVal(int qtd) {
        Cliente[] retClientes = new Cliente[qtd];

        clientes.sort((c1, c2) -> {
            List<Float> valsA = new ArrayList<Float>();
            c1.GetProdutosConsumidos().forEach(p -> valsA.add(p.GetValor()));

            List<Float> valsB = new ArrayList<Float>();
            c2.GetProdutosConsumidos().forEach(p -> valsB.add(p.GetValor()));

            float valA = 0;
            for (float f : valsA) valA += f;
            float valB = 0;
            for (float f : valsB) valB += f;
            return (int) (valA - valB);
        });

        for (int i = 0; i < qtd; i++) {
            retClientes[i] = clientes.get(i);
        }

        return retClientes;
    }

    public static Cliente[] GetSubXClientesConsumoProdutoQtd(int qtd) {
        Cliente[] retClientes = new Cliente[qtd];

        clientes.sort((c1, c2) -> (c1.GetProdutosConsumidos().size() - c2.GetProdutosConsumidos().size()));

        for (int i = 0; i < qtd; i++) {
            retClientes[i] = clientes.get(clientes.size() - (i + 1));
        }

        return retClientes;
    }

    public static Cliente[] GetSubXClientesConsumoProdutoVal(int qtd) {
        Cliente[] retClientes = new Cliente[qtd];

        clientes.sort((c1, c2) -> {
            List<Float> valsA = new ArrayList<Float>();
            c1.GetProdutosConsumidos().forEach(p -> valsA.add(p.GetValor()));

            List<Float> valsB = new ArrayList<Float>();
            c2.GetProdutosConsumidos().forEach(p -> valsB.add(p.GetValor()));

            float valA = 0;
            for (float f : valsA) valA += f;
            float valB = 0;
            for (float f : valsB) valB += f;
            return (int) (valA - valB);
        });

        for (int i = 0; i < qtd; i++) {
            retClientes[i] = clientes.get(clientes.size() - (i + 1));
        }

        return retClientes;
    }

    public static Cliente[] GetTopXClientesConsumoServicoQtd(int qtd) {
        Cliente[] retClientes = new Cliente[qtd];

        clientes.sort((c1, c2) -> (c1.GetServicosConsumidos().size() - c2.GetServicosConsumidos().size()));

        for (int i = 0; i < qtd; i++) {
            retClientes[i] = clientes.get(i);
        }

        return retClientes;
    }

    public static Cliente[] GetTopXClientesConsumoServicoVal(int qtd) {
        Cliente[] retClientes = new Cliente[qtd];

        clientes.sort((c1, c2) -> (c1.GetServicosConsumidos().size() - c2.GetServicosConsumidos().size()));

        for (int i = 0; i < qtd; i++) {
            retClientes[i] = clientes.get(clientes.size() - (i + 1));
        }

        return retClientes;
    }

    public static Cliente[] GetSubXClientesConsumoServicoQtd(int qtd) {
        Cliente[] retClientes = new Cliente[qtd];

        clientes.sort((c1, c2) -> (c1.GetServicosConsumidos().size() - c2.GetServicosConsumidos().size()));

        for (int i = 0; i < qtd; i++) {
            retClientes[i] = clientes.get(clientes.size() - (i + 1));
        }

        return retClientes;
    }

    public static Cliente[] GetSubXClientesConsumoServicoVal(int qtd) {
        Cliente[] retClientes = new Cliente[qtd];

        clientes.sort((c1, c2) -> {
            List<Float> valsA = new ArrayList<Float>();
            c1.GetProdutosConsumidos().forEach(p -> valsA.add(p.GetValor()));

            List<Float> valsB = new ArrayList<Float>();
            c2.GetProdutosConsumidos().forEach(p -> valsB.add(p.GetValor()));

            float valA = 0;
            for (float f : valsA) valA += f;
            float valB = 0;
            for (float f : valsB) valB += f;
            return (int) (valA - valB);
        });

        for (int i = 0; i < qtd; i++) {
            retClientes[i] = clientes.get(clientes.size() - (i + 1));
        }

        return retClientes;
    }

    public static Cliente[] ClientesDoGenero(String genero) {
        List<Cliente> retClientes = new ArrayList<Cliente>(0);
        clientes.forEach(cli -> {
            if (cli.GetGenero() == genero.toUpperCase())
                retClientes.add(cli);
        });
        return (Cliente[]) retClientes.toArray();
    }
}
