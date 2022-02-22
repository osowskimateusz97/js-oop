function	Person	(name,	age)	{
    this.name	=	name;
    this.age	=	age;
}
Person.prototype.introduce	=	function(){
    return	'My	name	is	'	+	this.name	+	'	and	I	am	'	+	this.age;
};
var	john	=	new	Person('John',	30);
var	jack	=	new	Person('Jack',	40);
// console.log(	john.introduce()	);	//	My	name	is	John	and	I	am	30
// console.log(	jack.introduce()	);	//	My	name	is	Jack	and	I	am	40

function myNew(constructor,...args) {
    return new constructor(...args);
}

var john = myNew(Person,'John',30);
var john2 = new Person('John',30);
console.log(john)
console.log(john2);