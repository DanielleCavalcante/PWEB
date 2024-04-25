function Retangulo(base, altura){
    this.base = base;
    this.altura = altura;

    this.CalcularArea = function(){
        return this.base * this.altura;
    }
}

var retangulo = new Retangulo (parseFloat(prompt("Digite a base:")),parseFloat(prompt("Digite a altura:")));
alert("Resultado: " + retangulo.CalcularArea());

class Conta{
    constructor(){
        this._nome;
        this._banco;
        this._numConta;
        this._saldo;
    }

    setNome(value){
        this._nome = value;
    }
    getNome(){
        return this._nome;
    }
    setBanco(value){
        this._banco = value;
    }
    getBanco(){
        return this._banco;
    }
    setNumConta(value){
        this._numConta = value;
    }
    getNumConta(){
        return this._numConta;
    }
    setSaldo(value){
        this._saldo = value;
    }
    getSaldo(){
        return this._saldo;
    }
}

class Corrente extends Conta{
    constructor(){
        super();
        this._saldoEspecial;
    }
    setSaldoEspecial(value){
        this._saldoEspecial = value;
    }
    getSaldoEspecial(){
        return this._saldoEspecial;
    }
}

class Poupanca extends Conta{
    constructor(){
        super();
        this._juros;
        this._dtVenc;
    }
    setJuros(value){
        this._juros = value;
    }
    getJuros(){
        return this._juros;
    }
    setDtVenc(value){
        this._dtVenc = value;
    }
    getDtVenc(){
        return this._dtVenc;
    }
}

var objContaCorrente = new Corrente();
objContaCorrente.setNome("Gisele Almeida de Freitas");
objContaCorrente.setBanco('Nubank');
objContaCorrente.setNumConta('12345678 - 0');
objContaCorrente.setSaldo('3.000,00');
objContaCorrente.setSaldoEspecial("50,00")

alert(`Nome Correntista:  ${objContaCorrente.getNome()} \nBanco: ${objContaCorrente.getBanco()}\nNúmero da Conta: ${objContaCorrente.getNumConta()}
Saldo Atual: ${objContaCorrente.getSaldo()}\nSaldo Especial: ${objContaCorrente.getSaldoEspecial()}`);

var objContaPoupanca = new Poupanca();
objContaPoupanca.setNome("Franklyn Almeida de Freitas");
objContaPoupanca.setBanco('Caixa');
objContaPoupanca.setNumConta('98765432 - 0');
objContaPoupanca.setSaldo('100,00');
objContaPoupanca.setJuros("1,4%");
objContaPoupanca.setDtVenc("21/04/2030");

alert(`Nome Correntista:  ${objContaPoupanca.getNome()} \nBanco: ${objContaPoupanca.getBanco()}\nNúmero da Conta: ${objContaPoupanca.getNumConta()}
Saldo Atual: ${objContaPoupanca.getSaldo()}\nJuros ao ano: ${objContaPoupanca.getJuros()}\nData de Vencimento: ${objContaPoupanca.getDtVenc()}`);