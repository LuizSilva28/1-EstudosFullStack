import { Character } from "./Character.js";

export class Warrior extends Character {
	constructor(name, pv, attack, defense, shield, position) {
		super(name, pv, attack, defense);

		this.shield = shield;
		this.position = position;
		this.setConfigfDefend();
		
	}

	setConfigfDefend(){
		if(this.position === "defend"){
           return this.defense += this.shield;
        } 
	}

	attackTarget(target) {
		if (this.position === "attack") {
			if (this.attack > target.defense) {
				target.pv -= (this.attack - target.defense) * 2;
			} else {
				console.log(
					`${this.name} é fraco e não consegue causar dano em ${target.name}`
				);
			}
		} else {
			console.log(
				`${this.name} não pode atacar, pois está defendendo. Alterne para posição de 'attack' para poder atacar!`
			);
		}
	}

	togglePosition() {
		if (this.position === "attack") {
			this.position = "defend";
			this.defense += this.shield;
			console.log(`alterando para modo defesa: `, this.defense);
		} else {
			this.position = "attack";
			this.defense -= this.shield;
			console.log(`alterando para modo ataque: `, this.defense);
		}
		console.log(`${this.name} trocou de posição para ${this.position}`);
	}
}

// PROBLEMA: quando modo de 'defend' é adicionado ao atributo 'position' na instância da class, as configurações de 'defend' não são adicionadas, mantendo com as configurações padrão, 

// IDEIA DE SOLUÇÃO: Preciso criar um todo que verifique a position adicionada e com base em seu valor adicione as configurações corretas de modo 'defend' ou 'attack';

// DIFICULDADE 	AO IMPLEMENTAR: Criei o método, chamei o mesmo dentro do construtor, como resultado recebi um erro de que o método não foi definido;

// POSSIVEL CAUSA : erro de sintaxe na chamada do método, chamando método no local errado ou não pode ser acessado de dentro do construtor;

// IDEIA DE SOLUÇÃO: Rever aulas anteriores para verificar a sintaxe e para entender melhor como realizo a chamada de um método e faço para ser acessivel dentro do construtor

//  RESOLUÇÃO: O erro foi gerado devido a falta do this na hora de chamar o método no construtor;