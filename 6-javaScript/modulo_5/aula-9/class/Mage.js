import { Character } from "./Character.js";

export class Mage extends Character {
	constructor(name, pv, attack, defense, magicPoints) {
		super(name, pv, attack, defense);
		this.magicPoints = magicPoints;
	}
	attackTarget(target) {
		if (this.attack > target.defense) {
			target.pv -= this.attack + this.magicPoints - target.defense;
		} else {
			console.log(
				`${this.name} é fraco e não consegue causar dano em ${target.name}`
			);
		}
	}

	healTarget(target){
        target.pv += (this.magicPoints * 2)
    }
}
