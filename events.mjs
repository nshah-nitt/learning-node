import { EventEmitter } from 'events';

class MyEmitter extends EventEmitter { }
var func = function umb(){
    console.log("bye");
}
const myEmitter = new MyEmitter();
myEmitter.on('click', () => {
    console.log("hola");
    setImmediate(() => {
        setTimeout(func,5000);
    })
});
// console.log("hii naman")
myEmitter.emit('click');