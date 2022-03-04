interface CoordinateService {
    toString(): string,
    distance(x?: (Point | number), y?:number): number,
}

export class Point implements CoordinateService{
    protected _x: number;
    protected _y: number;

    constructor();
    constructor(x: number, y: number)
    constructor(x?: number, y?: number)
    {
        this._x = x || 0;
        this._y = y || 0;
    }

    toString(): string{
        return `(${this._x}, ${this._y})`;
    }

    distance(): number
    distance(x: number, y: number): number
    distance(other: Point): number
    distance(x?: (Point | number), y?: number){
        let compareX = 0;
        let compareY = 0;

        // case when (num1, num2) are passed to the arguments
        if(typeof x === 'number' && y !== undefined){
            compareX = x;
            compareY = y;
        }
        else if (x instanceof Point) {
            compareX = x._x; 
            compareY = x._y; 
        }
        const xDistance = this._x - compareX
        const yDistance = this._y - compareY
        const totalDistance = Math.sqrt(Math.pow(xDistance,2) + Math.pow(yDistance,2)).toFixed(2)
        if(totalDistance.split('.')[1] === '00') totalDistance.split('.').splice(1); 
       
        return parseFloat(totalDistance);
    }
}