class NamedOne{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
    }
     get firstName() {
         return this._firstName;
     };
     get lastName(){
        return this._lastName
     };
     get fullName(){
         return this._fullName
     };
     set firstName(info) {
        this._firstName = info;
        this._fullName = `${info} ${this._lastName}`
     };
     set lastName(info){
         this._lastName= info;
         this._fullName = `${this._firstName} ${info}`
     };
     set fullName(details){
       const [name, surname] = details.split(' ');
       
        if(details.split(' ').length === 2 ){
          this._fullName = details;
          this._firstName = name;
          this._lastName = surname;
        }
        else console.error('You should pass name and surname seperated by space.')
     }
}
const namedOne = new NamedOne('Naomi','Wang');

console.log(namedOne.firstName);
console.log(namedOne.lastName);
console.log(namedOne.fullName);
console.log('------')
namedOne.firstName="John";
namedOne.lastName="Doe"
console.log(namedOne.firstName);
console.log(namedOne.lastName);
console.log(namedOne.fullName);
console.log('------')
namedOne.fullName = 'Bill Smith'
console.log(namedOne.firstName);
console.log(namedOne.lastName);
console.log(namedOne.fullName);
