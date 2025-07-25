// class is use to define multiple functions and values 
// Blue Print 
class Person {
     name = 'Shoaib'
     gender ='male'
     canEat(){
        console.log(
            "Person can eat."
        )
     }
}

// Real World Use case

let p1 = new Person()
console.log(p1.name)
p1.canEat()



// Constructor 
// automatically invoked by new object created 

class Human {
    constructor(name , gender){
        console.log("Constructor invoked")
        this.name = name
        this.gender = gender
    }
}
// Object
let human = new  Human(
    "Shoaib",
    "male"
)
console.log(human.name)
console.log(human.gender)

//Inheritance 
//  passing down properties & methods from parent class to child class

class Parent {
    name = "Ali"
     canRun(){
        console.log("can run")
    }
    canEat(){
        console.log("can eat")
    }
     
}

// Child class
class Child extends Parent{ 
// nothing in child class but we can use parent class method here use extends
}
// object
let child = new Child()
console.log(child.name)
child.canRun()
child.canEat()


//Supper constructor
// Parent Class
class animal{
constructor(){
    console.log("Animal constructor")
}
}


// Child class

class Cat extends animal{
    constructor(){
        super()
    }
}

let cat = new Cat()
console.log(cat)

