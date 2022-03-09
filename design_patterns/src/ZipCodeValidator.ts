export class ZipCodeValidator {
    constructor(private zipCode: string){}

    valid(validChars: string[]): boolean{
        return validChars.some(char=>this.zipCode.startsWith(char));
    }
}