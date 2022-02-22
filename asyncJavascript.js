// Ex.1
class MyPromise extends Promise{
    synchThen(callback) {
        callback();
        return this;
    }
}

// let	promise	= new MyPromise((resolve)	=>	{
//     console.log(1);
//     resolve();
// }).synchThen(()	=>	{
//     console.log(2);
// }).then(()	=>	{
//     console.log(3);
// })
// console.log(4)
// expect -> 1, 2, 4, 3
// output -> 1, 2, 4, 3

console.log('------')

//Ex.2
class ReversePromise extends Promise {
    constructor(resolver){
        super(resolver);
        this.delay = 100;
    }
    reduceDelay(){
        this.delay--;
    }
    
    then(callback){
        setTimeout(callback,this.delay);
        this.reduceDelay();
        return this;
    }
}

let	promise1 = new ReversePromise((resolve) =>{
    console.log(1);
    resolve();
})
.then(() => console.log(2))
.then(() => console.log(3))
.then(() => console.log(4))

// expect -> 1,4,3,2
// output -> 1,4,3,2