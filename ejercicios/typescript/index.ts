// Boolean
let muted: boolean = true;

//números
let numerador: number = 16;
let denominador: number = 5;
let resultado = numerador / denominador;

//string
let nombre: string = "Cesar";
let saludo = "Me llamo ${nombre}";

//Arreglos
let people: string []= [];
people = ["Andrés", "Lina","Carolina"];

let peopleAndNumbers: Array <string | number> = [];
peopleAndNumbers.push("Juligan");
peopleAndNumbers.push("2023");

//Enum
enum Color {
    rojo = "Rojo", verde= "Verde", azul= "Azul"
};

let colorFavorito: Color= Color.rojo;

//Any
let comodin: any = "joker";
comodin = {type: "Wildcard"};

//Object
let someObject: object = {type: "Wildcard"};

function add(a: number, b: number): number {
    return a+b;
};

const sum = add(4,6);
function createdAdder (a: number): (number) => number {
    return function (b: number) {
        return b+a;
    }
}

const addFour = createdAdder(4);
const fourPlus6 = addFour(6);

function fullName (firstName: string, lastName:string = "Torres"): string {
    return "${firstName} ${lastName}";
}

const cesar = fullName("Cesar", "Torres")

//Interfaces

enum Color {
    Rojo= "Rojo",
    Verde= "Verde",
}
interface Rectangulo {
    ancho: number;
    alto: number;
    color: Color;
}

let rect: Rectangulo = {
    ancho:4,
    alto: 6,
    color: Color.Rojo,
};

function area (r:Rectangulo): number {
    return r.alto*r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);