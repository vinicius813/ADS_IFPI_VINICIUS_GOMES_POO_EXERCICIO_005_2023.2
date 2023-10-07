/* Array de objetos em TypeScript se refere a uma estrutura de dados que armazena uma
coleção de objetos. Cada objeto dentro do array pode conter várias propriedades diferentes,
tornando-o útil para armazenar e gerenciar conjuntos de dados relacionados. Em relação a "cadas-
tros", isso geralmente se refere à ação de criar registros ou entradas de dados em um sistema. */

/* Como por exemplo, um array do tipo Conta, do exercício anterior, menciona um array de objetos, em que
você pode criar vários objetos tipados, o que significa que você pode especificar o tipo dos elementos 
que o array conterá. */

/* Vamos criar os arquivos 'banco.ts' e 'app.ts' e definir as classes 'Conta' e 'Banco', bem como 
as funcionalidades solicitadas. Primeiro, irei criar o arquivo 'banco.ts'com as classes e expor-
tações necessárias. */

// banco.ts
export class Conta {
    constructor(public numero : string, public saldo : number) {}
}

export class Banco {
    private contas : Conta[] = [];

    inserir (conta : Conta): void {
        this.contas.push(conta);
        console.log(`Conta ${conta.numero} cadastrada com sucesso.`);
    }

    consultar (numero : string): Conta | undefined {
        return this.contas.find(conta => conta.numero === numero)
    }
}

sacar (numero : string, valor : number): void {
        const conta = this.consultar(numero);
        if (conta) {
            if (conta.saldo >= valor) {
                conta.saldo -= valor;
                console.log(`Saque de ${valor} realizado com sucesso na conta ${numero}.`);
            }else {
                console.log(`Saldo insuficiente na conta ${numero} para realizar o saque!`);
        }else {
            console.log(`Conta ${numero} não encontrada!`);
        }
    }
}

depositar (numero : string, valor : number): void {
    const conta = this.consultar(numero);
    if (conta) {
        conta.saldo += valor;
        console.log(`Depósito de ${valor} realizado com sucesso na conta ${numero}!`);
    } else {
        console.log(`Conta ${numero} não encntrada!`);
    }
}

excluir (numero : string): void {
    const index = this.contas.findIndex(conta => conta.numero === numero);
    if (index !== -1) {
        this.contas.splice(index, 1);
        console.log(`Conta ${numero} excluída com sucesso!`);
    } else {
        console.log(`Conta ${numero} não encontrada!`);
    }
}

transferir (origem : string, destino : string, valor : number): void {
    const contaOrigem = this.consultar(origem);
    const contaDestino = this.consultar(destino);

    if (contaOrigem && contaDestino) {
        if (contaOrigem.saldo >= valor) {
            contaOrigem.saldo -= valor;
            contaDestino.saldo += valor;
            console.log(`Transferência de ${valor} realiada com sucesso de ${origem} para ${destino}.`);
        } else {
            console.log(`Saldo insuficiente na conta ${origem} para realizar a transferência.`);
        } else {
            console.log(`Uma das contas ${origem} ou ${destino} não foi encontrada.`);
        }
    }
}

getTotalSaldo() : number {
    return this.contas.reduce((total, conta) => total + conta.saldo, 0);
}
