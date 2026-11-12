// ATIVIDADE COMPLEMENTAR – JAVASCRIPT: Funções e lógica de programação

// 1. Localize a função que deseja testar.
// 2. Descomente a chamada da função logo abaixo dela.
// 3. Execute o programa para visualizar o resultado.

//=========================================================================================================//

// Nível 1 – Fácil
// Objetivo: praticar criação de funções, parâmetros e return.

//=========================================================================================================//

// 1. Calculadora de dobro
// Crie uma função chamada calcularDobro que receba um número como parâmetro e retorne o dobro desse número.
function calcularDobro() {
  let numero = Number(prompt("Digite o número"));
  dobro = numero * 2;
  return alert(`O dobro de ${numero} é: ${dobro}`);
}
// calcularDobro();

//=========================================================================================================//

// 2. Conversor de idade
// Crie uma função chamada calcularIdadeEmDias que receba a idade de uma pessoa em anos e retorne aproximadamente quantos dias ela já viveu. Considere que todos os anos possuem 365 dias.
function calculaIdadeEmDias() {
  let idadeEmAnos = parseInt(prompt("Digite o a sua idade"));
  let idadeEmDias = idadeEmAnos * 365;
  return alert(`${idadeEmAnos} anos é aproximadamente ${idadeEmDias} dias`);
}
// calculaIdadeEmDias();

//=========================================================================================================//

// 3. Calculadora de pagamento
// Crie uma função chamada calcularPagamento que receba o valor de um produto e a quantidade comprada.
// A função deverá retornar o valor total da compra.
function calcularPagamento() {
  let valorProduto = Number(prompt("Digite o valor do produto"));
  let quantidadeProduto = parseFloat(prompt("Digite a quantidade comprada"));
  let valorTotal = valorProduto * quantidadeProduto;
  return alert(`O valor total da compra foi: R$${valorTotal}`);
}
// calcularPagamento();

//=========================================================================================================//

// Nível 2 – Mediano
// Objetivo: trabalhar com mais de um parâmetro, operações matemáticas e organização da lógica.

//=========================================================================================================//

// 4. Calculadora de IMC
// Crie uma função chamada calcularIMC que receba o peso e a altura de uma pessoa.
// A função deverá calcular e retornar o IMC utilizando a fórmula:

function calcularIMC() {
  let peso = Number(prompt("Digite seu peso"));
  let altura = Number(prompt("Digite sua altura"));
  let imc = peso / (altura * altura);
  return alert(`Seu imc é: ${imc.toFixed(2)}`);
}
// calcularIMC();

//=========================================================================================================//

// 5. Calculadora de comissão
// Uma loja paga comissão aos seus vendedores de acordo com o valor total das vendas.
// Crie uma função chamada calcularComissao que receba o valor total vendido e a porcentagem de comissão.
// A função deverá retornar quanto o vendedor receberá de comissão.

function calcularComissao() {
  let totalVendido = Number(prompt("Digite o valor total das vendas"));
  let comissao = Number(prompt("Digite o valor da comissão"));
  let comissaoVendedor = totalVendido * (comissao / 100);
  return alert(`O vendedor ganhará R$${comissaoVendedor}`);
}
// calcularComissao();

//=========================================================================================================//

// 6. Calculadora de tempo
// Crie uma função chamada converterMinutos que receba uma quantidade de minutos e retorne quantas horas completas e quantos minutos restantes existem nesse período.
function converterMinutos() {
  let totalMinutos = Number(prompt("Digite os minutos"));
  let horas = Math.trunc(totalMinutos / 60);
  let minutos = totalMinutos % 60;
  return alert(`${totalMinutos} = ${horas} hora(s) e ${minutos} minuto(s)`);
}
// converterMinutos();

//=========================================================================================================//

// Nível 3 – Desafios de lógica
// Objetivo: praticar estruturas condicionais e laços de repetição dentro de funções.

//=========================================================================================================//

// 7. Verificador de números
// Crie uma função chamada verificarNumero que receba um número e identifique:
// Se o número é positivo.
// Se o número é negativo.
// Se o número é igual a zero.
// Utilize if, else if e else.
function verificarNumero() {
  let numero = Number(prompt("Digite o número"));
  if (numero > 0) {
    return alert(`${numero} é positivo`);
  } else if (numero < 0) {
    return alert(`${numero} é negativo`);
  } else {
    return alert(`${numero} é zero`);
  }
}
// verificarNumero();

//=========================================================================================================//

// 8. Simulador de calculadora
// Crie uma função chamada calculadora que receba dois números e uma operação matemática.
// A função deverá utilizar switch case para identificar a operação escolhida.
// Operações disponíveis: + Adição, - Subtração, * Multiplicação e / Divisão.
// Se o usuário tentar dividir por zero, exiba uma mensagem de erro.
function calculadora() {
  let numeroUm = Number(prompt("Digite o primeiro número"));
  let calculo = prompt("Escolha o calculo: +, -, * ou /");
  let numeroDois = Number(prompt("Digite o segundo número"));
  const mensagem = `${numeroUm}${calculo}${numeroDois} = ${numeroUm + numeroDois}`;
  switch (calculo) {
    case "+":
      alert(mensagem);
      break;
    case "-":
      alert(mensagem);
      break;
    case "*":
      alert(mensagem);
      break;
    case "/":
      if (numeroDois === 0) {
        alert("Erro, digite um número válido");
      } else {
        alert(mensagem);
        break;
      }
  }
}
// calculadora();

//=========================================================================================================//

// 9. Contador de números pares
// Crie uma função chamada contarPares que receba um número inteiro positivo.
// Utilizando um laço de repetição for, percorra todos os números de 1 até o número informado.
// A função deverá contar quantos números pares existem nesse intervalo e retornar a quantidade.
function contarPares() {
  let numero = Number(prompt("Digite um número inteiro e positivo"));

  while (!Number.isInteger(numero) || numero <= 0) {
    numero = Number(
      prompt("Valor inválido. Digite um número inteiro e positivo"),
    );
  }
  let numerosPares = 0;
  for (let i = 1; i <= numero; i++) {
    if (i % 2 === 0) {
      numerosPares++;
    }
  }
  return alert(`${numerosPares}`);
}
// contarPares();

//=========================================================================================================//

// 10. Sistema de tabuada
// Crie uma função chamada gerarTabuada que receba um número e utilize um laço de repetição para exibir sua tabuada de 1 até 10.
function gerarTabuada() {
  let numero = Number(prompt("Digite o número desejado"));
  let multiplicador = Number(prompt("Digite até onde vai a tabuada"));
  while (!Number.isInteger(multiplicador) || multiplicador <= 0) {
    numero = Number(
      prompt("Valor inválido. Digite um número inteiro e positivo"),
    );
  }
  let tabuada = `Tabuada do ${numero}: \n\n`;
  for (let i = 1; i <= multiplicador; i++) {
    let total = Number((numero * i).toFixed(2));
    tabuada += `${numero}x${i}=${total}\n`;
  }
  alert(tabuada);
}
// gerarTabuada();
