import { Conta } from "./Conta";

export class ContaPoupanca extends Conta{
   //atributos exclusivos da classe ContaPopuanca
   private _aniversario: number;

   //construtor (argumentos classe Conta + classe ContaPoupanca)
   constructor (numero: number, agencia: number, tipo: number, titular: string, 
      saldo: number, aniversario: number){
         super(numero, agencia, tipo, titular, saldo);
         this._aniversario = aniversario;
      }

   //get e set 
   public get aniversario(){
      return this._aniversario;
   }

   public set aniversario(aniversario: number){
      this._aniversario = aniversario;
   }

   //métodos específicos
   public visualizar(): void{
      super.visualizar();
      console.log("Dia do aniversario: " + this._aniversario);      
   }
}