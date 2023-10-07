var Conta_vinicius = /** @class */ (function () {
    function Conta_vinicius(saldoInicial, numeroConta) {
        this.saldoInicial = 2000;
        this.numeroConta = "22222-3";
        this.saldoInicial = saldoInicial;
        this.numeroConta = numeroConta;
    }
    Conta_vinicius.prototype.getnumeroConta = function () {
        return this.numeroConta;
    };
    Conta_vinicius.prototype.inserir = function (valor) {
        if (valor > 0) {
            this.saldoInicial += valor;
            console.log("".concat(valor, " inseridos na conta R$ ").concat(this.numeroConta, ". Novo saldo: R$ ").concat(this.saldoInicial, "."));
        }
        else {
            console.log("O valor inserido deve ser maior do que zero.");
        }
    };
    Conta_vinicius.prototype.sacar = function (valor) {
        if (valor > 0 && valor <= this.saldoInicial) {
            this.saldoInicial -= valor;
            console.log("R$ ".concat(valor, " sacados da conta ").concat(this.numeroConta, ". Novo saldo ser\u00E1: R$ ").concat(this.saldoInicial));
        }
        else {
            console.log("Saldo insuficiente ou valor de saque inválido!");
        }
    };
    Conta_vinicius.prototype.transferir = function (destino, valor) {
        if (valor > 0 && valor <= this.saldoInicial) {
            this.saldoInicial -= valor;
            console.log("Transferidos R$ ".concat(valor, " da conta ").concat(this.numeroConta, " para a conta ").concat(destino.getnumeroConta(), "."));
        }
        else {
            console.log("Saldo insuficiente ou valor de transferência inválido.");
        }
    };
    Conta_vinicius.prototype.getSaldo = function () {
        return this.saldoInicial;
    };
    return Conta_vinicius;
}());
var Banco = /** @class */ (function () {
    function Banco() {
        this.contas = [];
    }
    Banco.prototype.criarConta = function (numeroConta, saldoInicial) {
        if (saldoInicial === void 0) { saldoInicial = 0; }
        var contaExistente = this.contas.find(function (conta) { return conta.getnumeroConta() === numeroConta; });
        if (contaExistente) {
            console.log("Já existe uma conta com este número");
        }
        else {
            console.log("Conta ".concat(numeroConta, " criada com sucesso."));
        }
    };
    Banco.prototype.sacar = function (numeroConta, valor) {
        var conta = this.contas.find(function (conta) { return conta.getnumeroConta() === numeroConta; });
        if (conta) {
            conta.sacar(valor);
        }
        else {
            console.log("Conta não encontrada!");
        }
    };
    Banco.prototype.transferir = function (numeroCredito, numeroDebito, valor) {
        var contaCredito = this.contas.find(function (conta) { return conta.getnumeroConta() === numeroCredito; });
        var contaDebito = this.contas.find(function (conta) { return conta.getnumeroConta() === numeroDebito; });
        if (contaCredito && contaDebito) {
            contaCredito.transferir(contaDebito, valor);
        }
        else {
            console.log("Uma das contas não foi encontrada!");
        }
    };
    Banco.prototype.quantidadeDeContas = function () {
        return this.contas.length;
    };
    Banco.prototype.totalDinheiroDepositado = function () {
        return this.contas.reduce(function (total, conta) { return total + conta.getSaldo(); }, 0);
    };
    Banco.prototype.mediaDoSaldoDasContas = function () {
        var quantidade = this.quantidadeDeContas();
        var total = this.totalDinheiroDepositado();
        if (quantidade === 0) {
            return 0;
        }
        return total / quantidade;
    };
    return Banco;
}());
// Exemplo de uso
var banco = new Banco();
banco.criarConta("12345", 2000);
banco.criarConta("67890", 3000);
banco.sacar("500", 220);
banco.sacar("700", 310);
banco.transferir("12345", "700", 150);
console.log("Com isso, a minha quantidade de contas ser\u00E1: ".concat(banco.quantidadeDeContas(), "."));
console.log("O meu total de dinheiro depositdo ser\u00E1: R$ ".concat(banco.totalDinheiroDepositado(), "."));
console.log("E, por fim, a m\u00E9dia do total do saldo de minha contas ser\u00E1: R$ ".concat(banco.mediaDoSaldoDasContas(), "."));
