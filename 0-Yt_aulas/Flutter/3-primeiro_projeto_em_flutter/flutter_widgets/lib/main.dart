import 'package:flutter/material.dart';
import 'package:flutter_widgets/home_botoes.dart';
import 'package:flutter_widgets/paginas/categorias_page.dart';
import 'package:flutter_widgets/paginas/produtos_pages.dart';

void main() {
  runApp(
    MaterialApp(
      home: HomeBotoes(),
      routes: {
        
        '/produtos': (_) => ProdutosPage(), 
        '/categorias': (_) => CategoriasPage(),
      },
    ),
  );
}
