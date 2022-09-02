// if ((true || false) && (false || false)) {
//     console.log("It's true");
// } else {
//     console.log("It's false");
// }

// const stock = 0;
// const milkNeeded = 25;

// if (stock > milkNeeded) {
//   stock = stock - milkNeeded;
//   console.log('Processing your order...');
// } else {
//   console.log('Out of Stock!');
// }

// console.log('Thank you');

// B
// for(let i = 1; i < 9; i += 2) {
//   console.log(i);
// }
// C
// console.log(1);
// console.log(3);
// console.log(5);
// console.log(7);
// console.log(9);

// for(let i = 1; i < 9; i += 2) {
//   console.log(i);
// }

// const stock = 0;
// const milkNeeded = 25;

// if (stock > milkNeeded) {
//   stock = stock - milkNeeded;
//   console.log('Processing your order...');
// } else {
//   console.log('Out of Stock!');
// }

// console.log('Thank you');

// // [1] list of abstractions
// const canSendMessage = self => ({
//   sendMessage: () => console.log('send message:', self.message)
// });

// const checkIsValidPhone = self => ({
//   isValid: () => console.log('valid phone', self.from)
// });

// // [2] crate object composition
// const personalEnterprise = (from, message, store) => {
//   // [3] attributes
//   const self = {
//     from,
//     message,
//     store
//   };

//   // [4] method
//   const personalEnterpriseBehaviors = self => ({
//     createCatalog: () => console.log('Catalog has created: ', self.store)
//   });

//   // [5] create object composition
//   return Object.assign(self, personalEnterpriseBehaviors(self), canSendMessage(self), checkIsValidPhone(self));
// };

// const pe1 = personalEnterprise('pengirim@gmail.com', 'hei produk baru nih', 'Dicoding Store');
// console.log('pe1', pe1);
// pe1.createCatalog(); //Catalog has created:  Dicoding Store
// pe1.sendMessage(); //send message: hei produk baru nih

/**
 * TODO:
 * 1. Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string `${this.name} sedang makan!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string `${this.name} sedang terbang!`
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */

// TODO
class Animal {
  constructor(name = '', age = 0, isMammal = true) {
    this.name = name;
    this.age = age;
    this.isMammal = isMammal;
  }
}

class Rabbit extends Animal {
  constructor(name = '', age = 0) {
    super(name, age);
  }

  eat() {
    return `${this.name} sedang makan!`;
  }
}

class Eagle extends Animal {
  constructor(name = '', age = 0) {
    super(name, age, false);
  }

  fly() {
    return `${this.name} sedang terbang!`;
  }
}

const myRabbit = new Rabbit('Labi', 2);
const myEagle = new Eagle('Elo', 4);

console.log('myRabbit', myRabbit);
console.log('myEagle', myEagle);

/**
 * Jangan hapus kode di bawah ini
 */

//  module.exports = {
//   Animal, Rabbit, Eagle, myRabbit, myEagle,
// };
