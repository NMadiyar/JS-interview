function funcA(){
    let a = 1;

    function funcB(){
        let b = 2;

        function funcC(){
            let c = 3;
            console.log('func C', a, b, c);
        }
        funcC();
        console.log('func B ', a, b)
    }
   funcB()
    console.log("func A ", a);
}
funcA();
//В итоге, функция С имеет скоуп  ко всем данным функции, функция Б видит только а,б и функция
//А видит только а