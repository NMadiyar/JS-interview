//Immediate Invoked Function Expression
//Мы можем создавать определенные функции которые будут моментально вызваны и зачастую
//они используются для создания какого-то локального скоупа, обычно окружены круглыми
//скобками
let result  = []
// for(var i = 0; i < 5; i++) {
//     result.push(function (){
//         console.log(i);
//     })
// }

// result[2]();
//здесь используется iife, создаются круглые скобки, в них оборачиваю (function)(параметр)
for( var i = 0; i < 5; i++){
    (function (){
        var j = i;   //здесь в своем скоупе, мы скопировали значение i и работаем с ним
        result.push(function (){
            console.log(j);
        })
    })();
}
result[0]();
result[3]();