const aereasNacional = ["Latam","Gol","azul"];

const airCompanies = [...aereasNacional, 'Delta', 'United Airlines', 'Emirates'];

console.log(airCompanies);

const user = {
    name: "gabriela",
    email: "gabdksrer@gmail.com",
    password: "werewtwt8",
};

//destructuring assigment
const { password, ...data} = user;

console.log("OMG!", data);