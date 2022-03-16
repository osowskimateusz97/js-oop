var randomWords = require('random-words');

class PriorityQueue {
    collection = [];

    enqueue = function(element){
        if(this.isEmpty()){
            this.collection.push(element);
        } else{
            let added = false;
            for(let i = 0; i < this.collection.length; i++){
                // check priorities
                if(element[1] < this.collection[i][1]){
                    this.collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if(!added) this.collection.push(element);
        } 
    }
    isEmpty(){
        return this.collection.length === 0;
    }
    dequeue(){
        const value = this.collection.shift();
        console.log(`Drop ${value[0]} item with ${value[1]} order.`);
        return value[0];
    }
}

const pq = new PriorityQueue();

const TASKS_LENGHT = 100;

const genRandomNumber= () => {
    return Math.floor(Math.random()* TASKS_LENGHT);
}

const generateTasks = () => {
    for(let i = 0; i < TASKS_LENGHT; i++){
        const randomWord = randomWords({exactly: 1, join: ' '})
        pq.enqueue([randomWord, genRandomNumber()])
    }
}

generateTasks();

let counter = TASKS_LENGHT;

while(counter > 0){
    pq.dequeue();
    counter--;
}
