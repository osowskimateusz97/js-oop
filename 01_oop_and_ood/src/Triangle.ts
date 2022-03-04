import { Point } from './Point';
import { Shape } from './Shape';

enum TriangleType {
    Equilateral = "equilateral triangle",
    Isosceles = "isosceles triangle",
    Scalene = "scalene triangle"
}

const isArrayWithEqualEntries = array => new Set(array).size

export class Triangle extends Shape {

    constructor(point1: Point, point2: Point, point3: Point,color: string, filled: boolean)
    constructor(point1: Point, point2: Point, point3: Point)
    constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?: boolean){
        super([point1,point2,point3], color, filled);
    }

    toString(): string {
        const mergedPoints = this.points.map((point,index)=>`v${index + 1}=${point.toString()}`).join(',');
        return `Triangle[${mergedPoints}]`;
    }

    getType(): string{
        const triangleArmsLength =  this.points.map((point,currIndx)=> point.distance(this.points[(currIndx + 1) % 3]));
        const diffArmsLength  = isArrayWithEqualEntries(triangleArmsLength);
        if(diffArmsLength === 1){
            return TriangleType.Equilateral;
        }
        else if (diffArmsLength === 2){
            return TriangleType.Isosceles;
        }
        else return TriangleType.Scalene;
    }
}
