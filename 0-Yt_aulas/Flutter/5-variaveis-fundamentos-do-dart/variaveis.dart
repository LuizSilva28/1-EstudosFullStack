void main() {
  final String saudacao = "Olá, pessoal do arraiá!";
  final double precoDoMilho = 5.50; // Preço fixo do milho

  print(saudacao);
  print("O preço do milho é: R\$ $precoDoMilho");

  // A linha abaixo geraria um erro, pois você não pode reatribuir valor a uma variável final
  // precoDoMilho = 6.00; // Erro: Cannot assign to final variable 'precoDoMilho'.

  final List<String> comidasTipicas = ["Pipoca", "Canjica", "Pamonha"];
  print("Comidas típicas: $comidasTipicas");

  // Você NÃO pode fazer isso (reatribuir a variável comidasTipicas):
  // comidasTipicas = ["Maçã do Amor", "Algodão Doce"]; // Erro!

  // MAS você PODE alterar o conteúdo da lista (porque a lista em si não mudou de referência):
  comidasTipicas.add("Bolo de Fubá");
  print("Comidas típicas atualizadas: $comidasTipicas");
}

List<String> cores =["pink", "orange", "green"];
var letras = ["A", "B", 3];

double number = 5.0;

int numberCovert = number.toInt();

var say;
/*
String say(String from, String msg, [String? device]) {
  var result = '$from says $msg';
  if (device != null) {
    result = '$result with a $device';
  }
  return result;
}

//PARAMETROS 

assert(say('Bob', 'Howdy') == 'Bob says Howdy');

assert(
  say('Bob', 'Howdy', 'smoke signal') ==
      'Bob says Howdy with a smoke signal',
);

//PARAMETROS OPCIONAIS

String say(String from, String msg, [String? device]) {
  var result = '$from says $msg';
  if (device != null) {
    result = '$result with a $device';
  }
  return result;
}
assert(say('Bob', 'Howdy') == 'Bob says Howdy');
assert(
  say('Bob', 'Howdy', 'smoke signal') ==
      'Bob says Howdy with a smoke signal',
);

String say(String from, String msg, [String device = 'carrier pigeon']) {
  var result = '$from says $msg with a $device';
  return result;
}

assert(say('Bob', 'Howdy') == 'Bob says Howdy with a carrier pigeon');*/