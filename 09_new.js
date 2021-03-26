function Cat(color, name){
    this.color = color;
    this.name = name;
}
// const cat = new Cat("black", "KOT");
// console.log(cat);

//
const cat = Cat()   //выдаст undefined, т.к функция ничего не возвращает, нужно писать new Cat()
console.log(cat);