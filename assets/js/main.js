// //var nome; //hoisting - içar

// //console.log(nome, " chamando a variável usando o var");

// //const nome = "Avanade";

// /*Existem 7 tipos de erros em JavaScrip
//  SyntaxError - Escreveu alguma coisa errada.
// ReferenceError - Chamou alguem que não existe.
// TypeError - Erro de tipo, é uma violação de JS.
// EvalError -  Evite o uso do comando eval, mas se ele for inválido
// RangeError - Erro de intervalo, loop infinito, ou chamadas inúmeras de recursividade
// URIError - Erro referente a chamadas externas. Uniform Resourse Identifier. httpswww.
// InternalError - Erro de interno do JavaScript, falta de memória, processador...
// */

// escreve("Museu do Ipiranga");
// //função nominal , ocorre o hoisting
// function escreve(x) {
//     console.log(x);
// }

// function mudaTitulo(novoTitulo) {
//     document.querySelector("h1").innerHTML = novoTitulo;
// }

// mudaTitulo("Vai Corinthians");

// //expressão de função - qndo cria uma var ou const e o valor é uma função:
// //função anônima = não tem nome.
// const mudaTitulo2 = function(target, novoTitulo) {
//     document.querySelector(target).innerHTML = novoTitulo;
// }
// mudaTitulo2("h2", "Trocando subtítulo");

// //arrow function
// const relogio = () => {
//     const date = new Date();
//     mudaTitulo2("h2", date.toLocaleTimeString());
// };

// setInterval(relogio, 1000);

const frases = [
    "Um banco para 20 milhões de pessoas",
    "C6 Bank o seu banco",
    "Cartão de Créditos sem anuidade"
];

const mudaFrase = (target, frases, tempo) => {
    let total = 0;
    setInterval(() => {
        document.querySelector(target).innerHTML = frases[total >= frases.length - 1 ? (total = 0) : (total += 1)];
        console.log(total);

    }, tempo * 1000 );
};
mudaFrase("h1", frases, 4);

// mudafrase("h1", frases,4)
// "h1" - onde 
// frases - array 
// 4 - segundos 