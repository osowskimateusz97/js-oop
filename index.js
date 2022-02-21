class Vector {
    constructor(numbers){
        this.numbers=numbers;
    }
    add(arr){
        this.runValidation(arr);
        this.numbers = arr.numbers.map((el,i)=>  this.numbers[i] + el
        );
    }
   
    subtract(arr){
        this.runValidation(arr);
        this.numbers = arr.numbers.map((el,i)=>this.numbers[i] - el
        );
    }
    dot(arr){
        this.runValidation(arr);
        return arr.numbers
        .map((el,i)=>this.numbers[i] * el)
        .reduce((acc,el)=>acc+el);
    }
    norm(){
        const num = this.numbers
        .map(el=>Math.pow(el,2))
        .reduce((acc,num)=>acc+num)
         this.numbers = Math.sqrt(num);
    }
    toString(){
        return `(${this.numbers.join()})`;
    }
    runValidation(matchingArr){
        if(this.numbers.length !== matchingArr.numbers.length){
            throw Error('Wrong length of the passing array');
         }
    }
}

const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);
const d = new Vector([1, 2, 3]);