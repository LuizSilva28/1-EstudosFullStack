// na hora de importar em outro arquivo o nome deve ser exatamente o mesmo "inline" assim como na função, pode causar problemas com outra função de outro nome, para usar outro nome na hora de importar basta fazer {inline as outroNome}
export function inline (){
    console.log("Export nomeado inline")
}

export default function defaultInline(){
    console.log("Export default inline")
}
