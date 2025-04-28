const spaceship = {
	name: "X-Wing",
	speed: 0,
};

function accelerete(spaceship: { name: string; speed: number }, speed: number) {
	spaceship.speed = speed;
}

accelerete(spaceship, 50);
