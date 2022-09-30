const resultado = document.querySelector("#resultado");

//arrow function não acessa 'arguments'

let myFunc = {
    showArguments() {
        resultado.innerHTML = arguments;
        console.log(arguments);
    }
}

myFunc.showArguments(
    "BMW",
    "AUDI",
    "MERCEDES",
    "BENTLEY"
);

let myFunc2 = {
    showArguments2: () => {
        resultado.innerHTML = arguments;
        console.log(arguments);
    },
};

// myFunc2.showArguments2(
//     "Corsa",
//     "Escort",
//     "Uno",
//     "Santana",
//     "Gol",
//     "Fusca",
//     "Kombi"
// );

let user = {
    name: "Gabriela",
    usandoArrow: () => {
        console.log(`meu nome é ${this.name}, com Arrow Function. `);
    },
    usandoNominal() {
        console.log(`Meu nome é ${this.name}, com Nominal Function`)
    },
};

user.usandoArrow();
user.usandoNominal();

let soma = (a,b) => {
    console.log(a + b);

}
 let soma2 = function(a,b){
    console.log(a + b);
 };

 //new soma(50, 20); // not constructor.
 new soma(50, 20);