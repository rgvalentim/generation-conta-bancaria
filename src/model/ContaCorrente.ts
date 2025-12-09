import { Conta } from "./Conta";

export class ContaCorrente extends Conta {
   //atributos da classe ContaCorrente
   private _limite: number;

   //construtor com os atributos herdados de classe + o atributo da ContaCorrente
   constructor(numero: number, agencia: number, tipo: number, titular: string, 
      saldo: number, limite: number){
         super(numero, agencia, tipo, titular, saldo);
         this._limite = limite;
      }
   
   //métodos get e set de ContaCorrente
   public get limite(){
      return this._limite;
   }

   public set(limite: number){
      this._limite = limite;
   }

   //métodos específicos
   public sacar(valor: number): boolean {
      if((this.saldo + this.limite) < valor) {
         console.log("\nSaldo insuficiente!");
         return false;         
      }
      this.saldo -= valor;
      return true;
   }

   public visualizar(): void{
      super.visualizar();
      console.log("Limite: " + this._limite.toFixed(2));      
   }
}