//Замыкание это момент когда функция имеет доступ до переменных из вышестоящего скоупа,
//Либо это функция внутри функции
//Функция которая ничего не возвращает, имеет значение undefined
// function sayHelloTo(name){
//     const message = "Hello " + name;
//
//     return function (){
//         console.log(message);
//     }
// }
// const helloToMadiyar = sayHelloTo("Madiyar");
// const helloToAkniet= sayHelloTo("Akniet"); //в этой функции мы замыкаем переменную Акниет
// console.log(helloToMadiyar); //данное выражение вернет function без имени
// console.log(helloToMadiyar()); //Данное выражение вернет Hello Madiyar и undefined(т.е пустую функцию)
// helloToMadiyar(); //Данное выражение вернет hello Madiyar
// helloToAkniet();

//Создали функцию, в ней есть массив, возвращает она 2 метода принт и адд, в которых
//содержатся функции в которых есть переменная стоящая выше по скоупу, эти функции
//ее меняют и возвращают на вышестоящий скоуп
// function createFrameworkManager(){
//     const fw = ["Angular", "React"];
//     return {
//         print: function (){
//             console.log(fw.join(' '));
//         },
//         add: function (framework){
//             fw.push(framework);
//         }
//     }
// }
//
// const manager = createFrameworkManager();
// console.log(manager);
// manager.print();
// manager.add("VueJS");
// manager.print();


//setTimeOut

const fib = [1,2,3,5,8,13];
for (var i = 0; i < fib.length; i++){
    (function (j){
        setTimeout(function (){
            console.log(`fib[${j}] = ${fib[j]}`);
        },1500);
    })(i)
}
//тот же самый пример, но здесь используется let, он не выдает ошибку т.к работает только
//внутри блочного скоупа, блочный скоуп это скоуп внутри фигурных скобок
const ar = [1,2,3,5,8,13];
for (let i= 0; i<ar.length;i++){
    setTimeout(function (){
        console.log(`${ar[i]}`);
    }, 1500);
}