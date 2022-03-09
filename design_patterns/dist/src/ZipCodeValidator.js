export class ZipCodeValidator {
    constructor(zipCode) {
        this.zipCode = zipCode;
    }
    valid(validChars) {
        return validChars.some(char => this.zipCode.startsWith(char));
    }
}
