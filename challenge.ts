class Person {
    private name:string;
    private age:number;

    constructor(name:string, age:number){
    this.name=name;
    this.age=age;
}
tellMyName():void{
console.log(`I am ${this.name}`);
}
tellMyAge():void{
    console.log(`I am ${this.age} years old`);
}
}
const personne1 = new Person("John",40);
const personne2 = new Person("Mary",35);
personne1.tellMyName();
personne1.tellMyAge();
personne2.tellMyName();
personne2.tellMyAge();

