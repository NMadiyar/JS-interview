console.log("start 1");

console.log("start 2");
function timeou2sec(){
    console.log('timeout2sec');
}
//setTimeout пришел к нам из браузерного API, его нету в jse
window.setTimeout(function (){
    console.log("Inside timeout, after 2000 seconds");
}, 2000)
setTimeout(timeou2sec, 2000);
console.log("End");
//Все синхронные коды попадают в call stack, ассинхронные тоже попадают туда, но потом уходят в
//Web API, после он попадает в Callback Queue, где проходят по циклу (Event loop) и попадают в Call Stack
