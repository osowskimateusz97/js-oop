import { Point } from './Point';

export abstract class Shape {
    protected color: string;
    protected filled: boolean;

    abstract getType(): string;

    constructor(points: Point[])
    constructor(points: Point[], color: string, filled: boolean)
    constructor(public points: Point[], color?: string, filled?: boolean){
        if(points.length < 3) throw new Error('');
        if(typeof color === 'undefined'){
            this.color = 'green';
            this.filled = true;
        }
        else {
            this.color = color
            this.filled = filled
        }
    }
    toString(): string{
        const isFilled = this.filled ? 'filled' : 'not filled';
        return `A Shape with color of ${this.color} and ${isFilled}. Points: ${this.points.join(', ')}.`;
    }

    getPerimeter(): number{
        const parimeter = this.points.reduce((acc, point, currIndx)=>{
            const dist = point.distance(this.points[(currIndx + 1) % 3]);
            return acc + dist;
        },0)
        return parimeter;
    }
}

