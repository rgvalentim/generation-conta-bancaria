import { Conta } from "../model/Conta";

export interface ContaRepository {

	// CRUD da Conta

	//assinaturas do método
	procurarPorNumero(numero: number): void;
	listarTodas(): void;
	cadastrar(conta: Conta): void;
	atualizar(conta: Conta): void;
	deletar(numero: number): void;
	
	// Métodos Bancários específicos
	sacar(numero: number, valor: number): void;
	depositar(numero: number, valor: number): void;
	transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;
	
}
