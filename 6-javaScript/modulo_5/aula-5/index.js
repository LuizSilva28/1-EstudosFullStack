const Author = require('./classes/Author.js');

const author = new Author('Luiz Henrique');
author.createPost(author.name, 'Olá, meu nome é Luiz  e eu sou um novo profissional na área de programação');

const post = author.createPost(author.name, "Apesar de ser novo na área, consigo me sair muito bem resolvendo problemas e criando soluções práticas e eficientes, pois dedico muitas horas do meu dia estudando, lendo documentações e assistindo video aulas para aprender novas formas de se utilizar uma propriedade ou método especifico, próprio da linguagem que uso para desenvolver")

post.addComment('Carlos G.', 'Bem vindo a nossa area amigão, se precisar de alguma ajuda é só me chamar!')

author.post[0].addComment(
	"Douglas A.",
	"Que legal, está área é muito boa para quem gosta de lógica de de códigos, mas não é fácil de entrar no mercado tem que se dedicar muito, então sucesso nos seus estudos para que consiga um emprego logo!"
);

author.post[1].addComment(
    "Carlos G.",
    "Como você já está estudando muito, não tem problema, o mercado é muito grande e você vai encontrar novas oportunidades!"
);

author.post[1].addComment(
    "Douglas A.",
    "Estou muito feliz em ver que você está se dedicando tanto ao seu estudo, pois isso é muito importante para o seu crescimento!"
);

console.log(post);