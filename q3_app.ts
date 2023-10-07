// app.ts

import 'prompt' from "prompt-sync";
import { Banco } from './q3_banco';
import {Conta, Banco} from "./q1_array_de_objetos_banco.js";

let input = prompt();
let b : Banco = new Banco();
let opcao : string = '';

do {
    console.log("\nBem-vindo\nDigite uma opção:");
    console.log("1-Cadastrar, 2- Consultar, 3- Sacar\n" +
    "4-Depositar, 5-Excluir, 6-Tranferir\n" +
    "7-Totalizações" +
    "0-Sair\n");

    opcao = input("Opção:");

    switch (opcao) {
        case "1":
            inserir();
            break;
        case "2":
            consultar();
        case "3":
            sacar();
        case "4":
            depositar();
        case "5":
            excluir();
            break;
        case "6":
            transferir();
        case "7":
            totalizacoes();
            break;
    }

    input("Operação finalizada com sucesso! Digite <enter>");

} while (opcao !== "0");

console.log("Aplicação encerrada!");

function inserir(): void {
    console.log("\nCadastrar conta\n");
    let numero : string = input("Digite o número da conta: ");
    let conta : Conta = new Conta(numero, 0);
    b.inserir(conta);
}

function consultar(): void {
    console.log("\nConsultar conta\n");
    let numero : string = input("Digite o número da conta: ");
    let conta = b.consultar(numero);

    if (conta) {
        console.log(`Conta ${conta.numero} - Saldo: ${conta.saldo}.`);
    }else {
        console.log(`Conta ${numero} não encontrada.`);
    }
}

function sacar(): void {
    console.log("\nRealizar saque\n");
    let numero : string = input("Digite o número da conta: ");
    let valor : number = parseFloat(input("Digite o valor do saque: "));
    b.sacar(numero, valor)
}

function depositar(): void {
    console.log("\nRealizar o depósito\n");
    let numero : string = input("Digite aqui o número da conta");
    let valor : number = parseFloat(input("Digite o valor do depósito: ");
    b.depositar(numero, valor);
}

function excluir(): void {
    console.log("\nExcluir conta\n");
    let numero : string = input("Digite aqui o número da conta a ser excluída: ");
    b.excluir(numero);
}

function transferir(): void {
    console.log("\nRealizar a ransferência\n");
    let origem : string = input("Digite aqui o número de origem: ");
    let destino : string = input("Digite aqui o número d conta de destino: ");
    let valor : number = pareFloat(input("Digite aqui o valor da transferência: "));
    b.tranferir(origem, destino, valor);
}

function totalizacoes(): void {
    console.log("\nTotalizações\n");
    let totalSaldo = b.getTotalSaldo();
    console.log("Então, o meu saldo total para todas as contas será: ");
}

/* Com estas informações, de minhas contas banco.ts e app.ts; bem como a implementação das minhas
funcionalidades de meu banco, incluindo cadastro, consulta, saque, depósito, exclusão, transferência e
totalizações, certifico-me de que possuo o 'prompt-sync' instalado para a entrada do usuário. */

/* Com isso, é um exemplo básico, passível de ser expandido e aprimorado para atender às expectativas e 
necessidades específicas de um usuário de banco ou um usuário qualquer. */ 

