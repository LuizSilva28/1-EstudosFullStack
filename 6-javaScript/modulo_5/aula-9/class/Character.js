// atributos: nome, pontos de vida, de ataque e de defesa

//métodos: atacar, tendo como argumento o personagem alvo( outra instancia de Character) subtrai os pontos de vida desse alvo pela diferença entre os pontos de ataque do personagem atual e a defesa do alvo

export class Character {
	constructor(name, pv, attack, defense) {
		this.name = name;
		this.pv = pv;
		this.attack = attack;
		this.defense = defense;
	}

	attackTarget(target) {
		if (this.attack > target.defense) {
			target.pv -= (this.attack - target.defense);
		} else {
			console.log(
				`${this.name} é fraco e não consguir causar dano em ${target.name}`
			);
		}
	}
}