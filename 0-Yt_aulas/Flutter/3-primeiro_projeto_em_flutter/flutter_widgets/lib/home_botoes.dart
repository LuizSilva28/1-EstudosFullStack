import 'package:flutter/material.dart';
import 'package:flutter_widgets/paginas/produtos_pages.dart';

class HomeBotoes extends StatelessWidget {
  const HomeBotoes({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Navegação")),
      body: Container(
        width: double.infinity,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            ElevatedButton(
              onPressed: () {
                // Navigator.of(
                //   context,
                // ).push(MaterialPageRoute(builder: (context) => ProdutosPage()));

                // Navigator.of(context).pushAndRemoveUntil(
                //   MaterialPageRoute(builder: (context) => ProdutosPage()),
                //   (route) => false,
                //   //(route) => route is ProdutosPage, para especificar a pagina que deve manter, ou seja, remover até...

                // );

                // NAVEGAÇÃO POR ROTA
                Navigator.of(context).pushNamed('/produtos');
                Navigator.of(context).pushNamedAndRemoveUntil(
                  '/produtos',
                  /*(route) => false*/
                  ModalRoute.withName('/'),
                );
              },
              child: Text("Produtos"),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pushNamed('/categorias');
              },
              child: Text("Categorias"),
            ),
          ],
        ),
      ),
    );
  }
}
