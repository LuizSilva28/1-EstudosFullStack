import 'package:flutter/material.dart';
import 'package:projeto_solo/pages/tela_detalhes_tarefa.dart';
import 'package:projeto_solo/pages/tela_lista_tarefas.dart';

void main(){
  runApp(
    MaterialApp(
    home: TelaListaTarefas(),
    theme: ThemeData(
      primarySwatch: Colors.blue,
      fontFamily: 'Roboto'
    ),
    routes:{ 
      '/detalhes': (context) => TelaDetalhesTarefa(),
    }
  ));
}