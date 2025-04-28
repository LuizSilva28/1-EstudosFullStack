import 'package:flutter/material.dart';

class HomePage extends StatelessWidget {
  String name = "Luiz Henrique dos Santos";

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(name, style: TextStyle(color: Colors.blue, fontSize: 22)),
        actions: [Center(child: Text("XXXX"))],
      ),
      drawer: Drawer(),
      body: Container(
        width: 200,
        height: 200,
        color: Colors.green,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.end,
          children: [
            Center(
              child: TextButton(
                onPressed: () {
                  name = 'Teste 123444';
                },
                child: Text("Teste"),
              ),
            ),
            Text("Teste"),
            Text("Teste"),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [Text("Teste"), Text("Teste")],
            ),
          ],
        ),
      ),
    );
  }
}
