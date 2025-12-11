import readlinesync = require("readline-sync");
import { colors } from './src/util/Colors';
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";

export function main() {
    //Instância da Classe ContaController
    let contas: ContaController = new ContaController();

    //Variáveis Auxiliares
    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tiposContas = ["Conta Corrente", "Conta Poupanca"]

    console.log("\nCriar Contas\n");

    let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
    contas.cadastrar(cc1);

    let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
    contas.cadastrar(cc2);

    let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
    contas.cadastrar(cp1);

    let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
    contas.cadastrar(cp2);

    contas.listarTodas();

    
    /* Objeto da Classe Conta (Teste)
    const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);
    conta.visualizar();
    conta.sacar(10500);
    conta.visualizar();
    conta.depositar(5000);
    conta.visualizar(); 
    No momento que tornou a classe Conta abstrata ela não pode mais ser instanciada*/

    /*Objeto da classe ContaCorrente
    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    //Objeto da classe ContaPoupanca
    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar(); */



    while (true) {

        console.log(colors.bg.black, colors.fg.yellow, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                BANCO DO BRAZIL COM Z                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", 
        colors.reset);

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 9) {
            console.log(colors.fg.greenstrong, 
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, 
                    "\n\nCriar Conta\n\n", colors.reset);

                agencia = readlinesync.questionInt("\nDigite o numero da agencia: ");
                titular = readlinesync.question("\nDigite o nome do Titular da Conta: ");
                tipo = readlinesync.keyInSelect(tiposContas, "Digite o tipo da conta: ", {cancel: false}) + 1;
                saldo = readlinesync.questionFloat("Digite o Saldo da Conta (R$): ");

                switch (tipo) {
                    case 1:
                        limite = readlinesync.questionFloat("Digite o Limite da Conta (R$): ");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia,
                        tipo, titular, saldo, limite));
                        break;
                    case 2:
                        aniversario = readlinesync.questionInt("Digite o dia do aniversario da conta Poupanca: ");
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia,
                    tipo, titular, saldo, aniversario));
                    break;
                }
                
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong, 
                    "\n\nListar todas as Contas\n\n", colors.reset);
                contas.listarTodas();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong, 
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                numero = readlinesync.questionInt("Digite o numero da Conta: ");
                contas.procurarPorNumero(numero);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong, "\n\nAtualizar dados da Conta\n\n", colors.reset);

                numero = readlinesync.questionInt("Digite o numero da Conta: ");

                let conta = contas.buscarNoArray(numero);

                if (conta != null) {

                    agencia = readlinesync.questionInt("Digite o Numero da agencia: ");
                    titular = readlinesync.question("Digite o Nome do Titular da conta: ");

                    tipo = conta.tipo;

                    saldo = readlinesync.questionFloat("\nDigite o Saldo da conta (R$): ");

                    switch (tipo) {
                        case 1:
                            limite = readlinesync.questionFloat("Digite o Limite da Conta (R$): ");
                            contas.atualizar(
                                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                            break;
                        case 2:
                            aniversario = readlinesync.questionInt("Digite o Dia do aniversario da Conta Poupanca: ");
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo,
                                aniversario));
                            break;
                    }

                } else {
                    console.log(colors.fg.red, "\nA Conta numero: " + numero +
                        " não foi encontrada!", colors.reset);
                }
                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong, 
                    "\n\nApagar uma Conta\n\n", colors.reset);

                numero = readlinesync.questionInt("Digite o numero da Conta: ");
                contas.deletar(numero);
                

                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong, 
                    "\n\nSaque\n\n", colors.reset);
                numero = readlinesync.questionInt("Digite o numero da conta: ");
                valor = readlinesync.questionFloat("\nDigite o valor do saque (R$): ");
                contas.sacar(numero, valor);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong, 
                    "\n\nDepósito\n\n", colors.reset);
                numero = readlinesync.questionInt("Digite o numero da conta: ");
                valor = readlinesync.questionFloat("\nDigite o valor do deposito (R$): ");
                contas.depositar(numero, valor);
                    

                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong, 
                    "\n\nTransferência entre Contas\n\n", colors.reset);
                
                numero = readlinesync.questionInt("Digite o numero da conta de origem: ");
                numeroDestino = readlinesync.questionInt("Digite o numero da conta de destino: ")
                valor = readlinesync.questionFloat("\nDigite o valor do deposito (R$): ");

                contas.transferir(numero, numeroDestino, valor);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong, 
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Robson Valentim - robson.valentim@outlook.com");
    console.log("github.com/rgvalentim");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();