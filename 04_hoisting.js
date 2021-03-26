// console.log(sum(1, 42));
// function sum(a,b){
//     return a+b;
// }

//Hoisting означает что JS перемещает некоторые определения в начало, поэтому можно вызвать
//функцию, до ее самого определения

//Другой пример hoistinga, при вызовые console.log(i) будет выдаваться ошибка, что вообще нету
// этой переменной, но если ее задать ниже, не будет ошибки, а просто задасться undefined, т.к
//JS видит что она была задана ниже
// console.log(i);  //undefined, т.к работает hoisting, т.е значение имеется ниже
// var i = 42;
// console.log(i);

//Переменные const и let  не подвержены hoistingу, создаем примерно такой же пример, что и выше
// console.log(num);
// const num = 42;   //ecли поменять это на var, то будет работать как на примере свыше
// console.log(num);


//Function Expression & Function Declaration
// console.log(square(25));
// function square(num){
//     return num**2;     //Подобный способ создания функций называется function declaration
// }


//Данная функция не будет работать, если ее вызвать до ее определения
// console.log(square(25)); НЕ БУДЕТ РАБОТАТЬ
var square = function (num){
     return num**2;      //Подобный способ создания функций называется function expression
}
console.log(square(25)); //работает только после определения функции
