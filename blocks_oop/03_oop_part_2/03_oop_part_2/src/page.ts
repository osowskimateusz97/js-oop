export class Page {
    constructor(protected readonly pageNumber: number,protected readonly pageType: string, protected pageMaterial: string){}

    toString(): string{
        return `here is page with ${this.pageType} #${this.pageNumber} and it's material is ${this.pageMaterial}`;
    }
    
}