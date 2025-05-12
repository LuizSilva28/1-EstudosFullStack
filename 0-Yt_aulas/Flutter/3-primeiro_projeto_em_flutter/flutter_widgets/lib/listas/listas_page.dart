import 'package:flutter/material.dart';

class ListasPage extends StatelessWidget {
  const ListasPage({super.key});
  //Row, Column, ListView widgets que recebem vários filhos

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('')),
      body: Container(
        width: MediaQuery.of(context).size.width,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Text('componente 1'),
            Text('componente 2'),
            Text('componente 3'),
            Text('componente 4'),
            Text('componente 5'),
          ],
        ),
      ),
    );
  }
}
