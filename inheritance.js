class Parent{
    constructor(name){
        this.fathername = "fatemin";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}
const baby = new Child("ami");
console.log(baby);