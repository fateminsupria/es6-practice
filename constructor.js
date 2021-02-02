class Student{
 constructor(){
     this.id =1;
     this.name ="ami";
 }
}
const student1 = new Student();
const student2 = new Student();
console.log(student1, student2);
// Student { id: 1, name: 'ami' } Student { id: 1, name: 'ami' }

// similler object making with same class

class Student{
 constructor(sId, sName){
     this.id =sId;
     this.name =sName;
     this.school="abc school"
 }
}
const student1 = new Student(1, "fatemin");
const student2 = new Student(2, "supria");
console.log(student1, student2);
// Student { id: 1, name: 'fatemin', school: 'abc school' } Student { id: 2, name: 'supria', school: 'abc school' }