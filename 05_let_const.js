//Let
// let a = "Variable a";
// let b = "Variable b";
//
// {
//     a = "New Variable A"; //Данное выражение будет перезаписывает переменную а и всегда будет иметь это значение
//     let b = "Local Variable B" //Данное выражение работает только в block scope
//     console.log("Scope A", a);
//     console.log("Scope B", b);
//     // console.log("Scope C", c); Данное выражение не будет работать, т.к let и const
//     // let c = "Something";        не подвержены hoistingy
// }
// console.log("A", a);
// console.log("B", b);


//Const
const PORT = 8080;
// PORT = 2000; данное выражение даст ошибку, т.к нельзя переназначить const
const array = ["JS", "is", "Awesome"];
array.push("!");  //При использовании const можно менять и добавлять значения в массивы
array[0] = "JavaScript"; //Либо обращаться напрямую к индексам
// array = "JS" данное выражение выдаст ошибку!
console.log(array);
//Так же как и с массивами, мы можем менять только внутреннее состояние объекта
const  obj = {};
obj.name = "Madiyar"; //Можно напрямую добавлять значения
obj.age = 27;
console.log(obj);
delete obj.name; //Данное выражение убирает значение
console.log(obj);
