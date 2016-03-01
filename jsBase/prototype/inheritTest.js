/**
 * Created by ll on 16/1/2.
 */
function object(obj){
    //var o = new Object();
    function o(){};
    o.prototype = obj;
    return new o();
}


function Person(){
    this.arr = [1,2,3];
    this.name = 'll';
}
Person.prototype.sayName = function(){
    console.log(this.name);
}
var test = new Person();
var test1 = object(new Person());
var test2 = object(new Person());

console.log(test1.arr);
test1.arr.push(4);
console.log(test1.arr);
console.log(test.arr);
console.log(test1.arr);



//var person = {
//    name: "Nicholas",
//    friends: ["Shelby", "Court", "Van"]
//};
//var anotherPerson = object(person);
//anotherPerson.name = "Greg";
//anotherPerson.friends.push("Rob");
//var yetAnotherPerson = object(person);
//yetAnotherPerson.name = "Linda";
//yetAnotherPerson.friends.push("Barbie");
//console.log(person.friends); //"Shelby,Court,Van,Rob,Barbie"


