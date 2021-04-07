//Cтроки и числа
// console.log(1+"2"); //string 12
// console.log("3"*"8"); //number
// console.log("px" +5 + 10); //string

// == vs ===
//== Интерпретирует тип данных, === не интерпретирует
console.log(2 == "2"); //true
console.log(2 === "2"); //false
console.log(undefined == null); //true выдаст
console.log(undefined === null); //false выдаст
console.log("0" == false);  //true

//=========
console.log(false == ''); //true
console.log(false == []); //true
console.log(false == {}); //false
console.log("" == 0); //true
console.log("" == []); //true
console.log("" == {}); //false
console.log(0 == []); //true
console.log(0 == {}); //false
console.log(0 == null); //false
//Язык JS является интерпретируемым, так же есть компилируемые языки, такие как C++, Java

