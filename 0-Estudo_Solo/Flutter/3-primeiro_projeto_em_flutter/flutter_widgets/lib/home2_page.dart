import 'package:flutter/material.dart';

class Home2Page extends StatefulWidget {
  _Home2pageState createState() {
    print('Home2Page create state');
    return _Home2pageState();
  }
}

class _Home2pageState extends State<Home2Page> {
  String name = "Luiz Henrique";

  _Home2pageState() {
    print('Home2PageState construtor');
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    print('_Home2PageState initState');
    name = "Luiz Henrique";
  }

  @override
  void didChangeDependencies() {
    // TODO: implement didChangeDependencies
    super.didChangeDependencies();
    print('_Home2PageState didChangeDependencies');
  }

  @override
  Widget build(BuildContext context) {
    print("_Home2Pagestate build");
    return Scaffold(
      appBar: AppBar(title: Text(name)),
      body: Column(
        children: [
          Text("Alterado estado"),
          TextButton(
            onPressed: () {
              setState(() {
                name == "Luiz Henrique"
                    ? name = "Juliana Pereira Lima"
                    : name = "Luiz Henrique";
              });
            },
            child: Text("Alterar nome"),
          ),
        ],
      ),
    );
  }
}
