// controllers/usuarioController.js
const usuarioModel = require("../models/userModel.js");

async function criarUsuario(req, res) {
	try {
		const novoUsuario = req.body; // Recebe os dados do usuário do corpo da requisição
		const resultado = await usuarioModel.criarUsuario(novoUsuario);
		res.status(201).json({
			mensagem: "Usuário criado com sucesso!",
			id: resultado.insertedId,
		});
	} catch (error) {
		res.status(500).json({ mensagem: "Erro ao criar usuário", error });
	}
}

async function listarUsuarios(req, res) {
	try {
		const usuarios = await usuarioModel.listarUsuarios();
		res.status(200).json(usuarios);
	} catch (error) {
		res.status(500).json({ mensagem: "Erro ao listar usuários", error });
	}
}

module.exports = {
	criarUsuario,
	listarUsuarios,
};
