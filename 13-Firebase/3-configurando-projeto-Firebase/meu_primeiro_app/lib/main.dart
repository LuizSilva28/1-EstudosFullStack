import 'package:flutter/material.dart';
import 'package:package_info_plus/package_info_plus.dart';

Future<void> getPackageName() async {
  PackageInfo packageInfo = await PackageInfo.fromPlatform();

  String packageName = packageInfo.packageName;
  print("Nome do pacote: $packageName");
}

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
      
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
 
  const MyHomePage({super.key, required this.title});
 

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  // Se getPackageName precisa de acesso ao contexto ou ao estado do widget,
  // você deve declará-lo dentro da classe _MyHomePageState.
  Future<void> getPackageName() async {
    PackageInfo packageInfo = await PackageInfo.fromPlatform();
    String packageName = packageInfo.packageName;
    print("Nome do pacote: $packageName");
    // Se você precisa atualizar o estado do widget com o nome do pacote,
    // use setState(() { _algumaVariavel = packageName; });
  }

  @override
  void initState() {
    super.initState();
    getPackageName(); // Chamando a função aqui
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(widget.title)),
      body: Center(child: Text('Conteúdo da tela inicial')),
    );
  }
}
