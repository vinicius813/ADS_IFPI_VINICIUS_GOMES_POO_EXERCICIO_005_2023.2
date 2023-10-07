class Conta_vinicius {
    private saldoInicial : number = 2000;
    private numeroConta : string = "22222-3";

    constructor (saldoInicial : number, numeroConta : string) {
        this.saldoInicial = saldoInicial;
        this.numeroConta = numeroConta;
    }

    getnumeroConta() : string {
        return this.numeroConta;
    }

    inserir (valor : number): void {
        if (valor > 0) {
            this.saldoInicial += valor;
            console.log(`${valor} inseridos na conta R$ ${this.numeroConta}. Novo saldo: R$ ${this.saldoInicial}.`);
        }else{
            console.log("O valor inserido deve ser maior do que zero.");
        }
    }

    sacar (valor : number) : void {
        if (valor > 0 && valor <= this.saldoInicial) {
            this.saldoInicial -= valor;
            console.log(`R$ ${valor} sacados da conta ${this.numeroConta}. Novo saldo será: R$ ${this.saldoInicial}`);
        }else {
            console.log("Saldo insuficiente ou valor de saque inválido!");
        }
    }

    transferir (destino : Conta_vinicius, valor : number): void {
        if (valor > 0 && valor <= this.saldoInicial) {
            this.saldoInicial -= valor;
            console.log(`Transferidos R$ ${valor} da conta ${this.numeroConta} para a conta ${destino.getnumeroConta()}.`);
        }else {
            console.log("Saldo insuficiente ou valor de transferência inválido.");
        }
    }

    getSaldo() : number {
        return this.saldoInicial;
    }
}

class Banco {
    private contas : Conta_vinicius[] = [];

    criarConta (numeroConta : string, saldoInicial : number = 0) : boolean {
        const contaExistente = this.contas.find((conta) => conta.getnumeroConta() === numeroConta);
        if (contaExistente) {
            console.log("Já existe uma conta com este número");
        return false;
        }else {
        let contaCadastrada = new Conta_vinicius (saldoInicial, numeroConta)
        this.contas.push(contaCadastrada)
            console.log(`Conta ${numeroConta} criada com sucesso.`);
        return true;
        }
    }

    sacar (numeroConta : string, valor : number) : void {
        const conta = this.contas.find((conta) => conta.getnumeroConta() === numeroConta);
        if (conta) {
            conta.sacar(valor);
        }else {
            console.log("Conta não encontrada!");
        }
    }

    transferir (numeroCredito : string, numeroDebito : string, valor : number) : void {
        const contaCredito = this.contas.find((conta) => conta.getnumeroConta() === numeroCredito);
        const contaDebito = this.contas.find((conta) => conta.getnumeroConta() === numeroDebito);

        if (contaCredito && contaDebito) {
            contaCredito.transferir(contaDebito, valor);
        }else {
            console.log("Uma das contas não foi encontrada!");
        }
    }

quantidadeDeContas() : number {
    return this.contas.length;
}

totalDinheiroDepositado() : number {
    return this.contas.reduce((total, conta) => total + conta.getSaldo(), 0);
}

mediaDoSaldoDasContas() : number {
    const quantidade = this.quantidadeDeContas();
    const total = this.totalDinheiroDepositado();


    if (quantidade === 0) {
        return 0;
    }

    return total / quantidade;
}

}

// Exemplo de uso
const banco = new Banco();

banco.criarConta("12345", 2000);
banco.criarConta("67890", 3000);

banco.sacar("500", 220);
banco.sacar("700", 310);

banco.transferir("12345", "700", 150);

console.log(`Com isso, a minha quantidade de contas será: ${banco.quantidadeDeContas()}.`);
console.log(`O meu total de dinheiro depositdo será: R$ ${banco.totalDinheiroDepositado()}.`);
console.log(`E, por fim, a média do total do saldo de minha contas será: R$ ${banco.mediaDoSaldoDasContas()}.`);




