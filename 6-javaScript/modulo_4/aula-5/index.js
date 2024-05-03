//Encadeamento Opcional = ?

const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89
      }
    }],
    age: 42,
    phone: {
      countryCode: "+55",
      ddd: "22",
      number: "998765432"
    }
  }

console.log(user.friends[0].phone.ddd) //da erro
console.log(user?.friends[0]?.phone?.ddd)
console.loh(user?.brothers?.length)//retorna undfinded
console.log(user.brothers?.[5].name)

