import 'package:flutter/material.dart';

class TelaDetalhesTarefa extends StatelessWidget {
  const TelaDetalhesTarefa({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('')),
      body: Container(
        width: 300,
        height: 450,
        margin: EdgeInsets.all(20),
        decoration: BoxDecoration(
          color: Colors.amber.shade300,
          borderRadius: BorderRadius.circular(10),
        ),
        child: Column(children: [Text('Tela de detalhes')]),
      ),
    );
  }
}
