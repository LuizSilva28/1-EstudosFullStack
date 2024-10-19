import { Character } from "./Character.js";

export class Thief extends Character {
	constructor(name, pv, attack, defense) {
		super(name, pv, attack, defense);
	}
	attackTarget(target){
            if (this.attack > target.defense) {
                const damage = ((this.attack  - target.defense) * 2)
				target.pv -= damage ;

                console.log(
					`${this.name} ataca ${target.name} e causa ${damage} dano`
				);
                
            } else if (this.attack === target.defense) {
			} else {
				console.log(
					`${this.name} é fraco e não consegue causar dano em ${target.name}`
				);
			}
    }
}