import 'package:flutter/material.dart';

class ProdutosPage extends StatelessWidget {
  const ProdutosPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Produtos")),
      body: Container(
        child: TextButton(
          onPressed: () {
            Navigator.of(context).pushNamedAndRemoveUntil(
              '/categorias', 
              ModalRoute.withName('/'),
              );
          },
          child: Text("Fechar Tela"),
        ),
      ),
    );
  }
}
