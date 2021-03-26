//Scope указывает на видимость определенных переменных
//Контекст определяет как функция была вызвана и он постоянно указывает на ключевое слово
//this

// const person = {
//     surname: "Stark",
//     knows: function (what, name) {
//         console.log(`You ${what} know, ${name} ${this.surname}`);
//     }
// }
// person.knows('All', "Brann");
//
// //Форсированная передача контекста
// const John = { surname: "Snow"}
// person.knows.call(John, "nothing", "John"); //первый параметр это контекст, 2 параметр это параметры фукцнии
// person.knows.call(John, ...["nothing", "John"]); //в данном случае используется метод spread
// person.knows.apply(John, ["nothing", "John"]); //в отличии от сall, 2 параметр всегда массив
// person.knows.bind(John, "nothing", "John")(); //2 параметр неограниченное количество аргументов и различие лишь в том,
//                                                  //что он возвращает новую функцию, а не вызывает ее, как другие
//
// const bound = person.knows.bind(John, "nothing", "John");
// bound();


//=============
// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }
//
// const Elena = new Person("Elena", 20);

//============= явная передача контекста
// function logThis(){
//     console.log(this);
// }
// const obj = {
//     num: 42,
// }
// logThis.call(obj);
// logThis.apply(obj);
// logThis.bind(obj)();
// //========= неявная передача контекста имплисит
// const animal = {
//     legs: 4,
//     logThis: function (){
//         console.log(this);
//     }
// }
// animal.logThis();

//