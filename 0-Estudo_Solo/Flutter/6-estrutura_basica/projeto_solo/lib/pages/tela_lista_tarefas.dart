import 'package:flutter/material.dart';
import 'package:projeto_solo/pages/tela_detalhes_tarefa.dart';

class TelaListaTarefas extends StatelessWidget {
  const TelaListaTarefas({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Row(
          children: [
            Icon(Icons.task, color: Colors.amber.shade300),
            SizedBox(width: 10),
            const Text('Minhas  Tarefas'),
          ],
        ),
        actions: [
          IconButton(
            icon: Icon(Icons.search),
            onPressed: () {}, // Ação de busca
          ),
        ],
      ),
      drawer: Drawer(
        child: ListView(
          children: [
            ListTile(
              title: Text("Tarefas Concluídas"),
              onTap: () {}, // Navega para tarefas concluídas
            ),
          ],
        ),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            ListView(
              children: [
                ListTile(title: Text('Comprar Leite')),
                ListTile(title: Text('Estudar Flutter')),
              ],
            ),
            Row(children: [
                
              ],),
          ],
        ),
      ),

      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => TelaDetalhesTarefa()),
          );
        },
        child: Icon(Icons.add),
      ),
    );
  }
}
//JDK 17 or higher is required. Please set a valid Java home path to 'java.jdt.ls.java.home' setting or JAVA_HOME environment variable. Or ensure a valid Java executable is in your PATH.

//The SDK configured in dart.flutterSdkPath is not a valid SDK
