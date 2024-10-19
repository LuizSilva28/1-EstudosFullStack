import { Character } from "./class/Character.js";
import { Thief } from "./class/Thief.js";
import { Mage } from "./class/Mage.js";
import { Warrior } from "./class/Warrior.js";

const PernaLonga = new Thief("Perna Longa", 100, 45, 50);
const Patolino = new Mage("Patolino", 100, 30, 25, 50);
const Gaguinho = new Warrior("Gaguinho", 100, 60, 25, 50, "defend");

console.log(PernaLonga);
console.log(Patolino);
console.log(Gaguinho);

console.log(PernaLonga.attackTarget(Gaguinho));


console.log(PernaLonga);
console.log(Patolino);
console.log(Gaguinho);


console.log(Gaguinho.togglePosition());
console.log(PernaLonga.attackTarget(Gaguinho));

console.log(Gaguinho);

console.log(Gaguinho.attackTarget(PernaLonga));
console.log(PernaLonga);
/*
console.log(`1- troca para ataque: `, Gaguinho.togglePosition());

console.log(`1- troca para defesa: `, Gaguinho.togglePosition());

console.log(`2- troca para ataque: `, Gaguinho.togglePosition());

console.log(`3- troca para defesa: `, Gaguinho.togglePosition());*/