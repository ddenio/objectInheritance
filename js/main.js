//Object Inheritance Practice

//Creating a Farm
 
   //Creating inital / generic animal class for all farm animals
   //all of the farm animals will have a name and be able to speak:
class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    speak(){
        console.log(`${this.name} makes a sound`)
    }
}

  //create our first specialized animal class object that will extend the animal class BUT have a unique property [breed]

class Dog extends Animal{
    constructor(name,type, breed){
        // 'super' will grab all of the properties from the Animal class; 'inherit' all the properties 
        super(name,type)
        this.breed = breed
    }
}

//creating our first dog farm animal from our Dog class

let simba = new Dog('Simba', 'dog','Sheperd')

class Pig extends Animal {
    constructor(name, type, color) {
        super (name,type);
        this.color = color
    }
}

let porky = new Pig('Porky', 'pig','spotted')