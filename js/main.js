//Object Inheritance Practice

//Creating a Farm
 
   //Creating inital / generic animal class for all farm animals
   //all of the farm animals will have a name, type, and be able to speak:
class Animal {
    constructor(name, type, numOfLegs) {
        this._name = name;
        this._type = type;
        this.numOfLegs = numOfLegs;
    }
    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
    speak(){
        console.log(`${this._name} makes a sound`)
    }
}

  //create our first specialized animal class object that will extend the animal class BUT have a unique property [breed]

class Dog extends Animal{
    constructor(name,type, numOfLegs, breed){
        // 'super' will grab all of the properties from the Animal class; 'inherit' all the properties 
        super(name,type, numOfLegs)
        this._breed = breed
    }
    get breed() {
        return this._breed;
    }
    speak(){
        //grabbing the inital speak method from our animal class, then having it to a dog specific speak
        super.speak();
        console.log(`${this.name} barks`)
    }
}

//creating our first dog farm animal from our Dog class

let simba = new Dog('Simba', 'dog', 4, 'Sheperd');

class Cat extends Animal {
    constructor(name, type, numOfLegs) {
        super(name,type,numOfLegs)
    }
    speak(){
        console.log(`${this.name} MEOWS!`)
    }
}

let fozzie = new Cat('Fozzie', 'cat', 4)

class Pig extends Animal {
    constructor(name, type, numOfLegs,color) {
        super (name,type,numOfLegs);
        this._color = color
    }
    get color() {
        return this._color
    }
    speak() {
        console.log(`${this.name} OINKS!`)
    }
}

let porky = new Pig('Porky', 'pig', 4, 'spotted');

class LLama extends Animal {
    constructor(name, type, numOfLegs) {
        super(name,type,numOfLegs);
        
    }
    speak(){
        console.log(`${this.name}, the llama spits at owner!`)
    }
}

let spot = new LLama('Grumpy', 'llama', 4);

let farm = [simba, fozzie,porky,spot]

for(a of farm ) {
    a.speak();
}
