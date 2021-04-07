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

/*Типизированные языки (typed) — это те, в которых существуют и используются разные типы данных, например, булевы значения, числа, строки и другие. 
Над этими данными выполняются соответствующие операции — математические над числами, конкатенация над строками и тд. Это такие языки, как C, Python, Scala, PHP и Lua, JavaScript

Бестиповые (untyped) — это низкоуровневые языки, работающие с машинным кодом (в них обработка данных происходит как операция над цепочкой битов). 
Представитель этой группы — язык ассемблера.*/

/*Языки со статической и динамической типизацией
Статическая типизация определяется тем, что конечные типы переменных и функций устанавливаются на этапе компиляции. 
То есть компилятор на 100% уверен, какой тип где находится, и переопределение невозможно. 

В динамической типизации все типы выясняются уже во время выполнения программы. То есть можно объявить переменную строкового типа, 
а затем записать в неё число. Интерпретатор на каждом этапе выполнения будет считывать новое значение и определять его тип.*/

/*Языки с сильной и слабой типизацией
Сильная типизация не позволяет смешивать в выражениях различные типы и не выполняет автоматические неявные преобразования. Например, нельзя вычесть из строки множество. 

Языки со слабой типизацией выполняют множество неявных преобразований автоматически, даже если может произойти потеря точности или преобразование неоднозначно.
Это позволяет нам в JavaScript делать подобные действия: “123” + 1, [] + {}, true + 0 и получать конкретный результат, который не приведёт к ошибкам.
(Но это не означает, что нужно так делать :))*/
