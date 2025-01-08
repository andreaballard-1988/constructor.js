//**Prompt:**
// Create a constructor function named `Animal` that represents an animal. Each animal should have:

//1. `species` (e.g., "Dog")
//2. `name` (e.g., "Buddy")
//3. `sound` (e.g., "woof!")
//4. A method `maekSound()` that logs the message: `"[name] says [sound]"`.

//Create two animals and call ther `makeSound()` method.

//---

function Animal(valueSpecies, valueName, valueSound){

    this.species = valueSpecies;
    this.name = valueName;
    this.sound = valueSound;
    this.makeSound = function(){

        console.log(`${this.name} says ${this.sound}`);

    }
}

const animal1 = new Animal("Dog", "Hershey", "woof! woof!");
const animal2 = new Animal("Cat", "Stacy", "meow!");

animal1.makeSound();
animal2.makeSound();




function Animal(valueSpecies, valueName, valueSound, valueColor, valueSize){
    this.species = valueSpecies;
    this.name = valueName;
    this.sound = valueSound;
    this.color = valueColor;
    this.size = valueSize;
    this.makeSound = function(){
        console.log(`${this.name} says ${this.sound}`);

    }

}

const animal3 = new Animal("Snake", "Striker", "sssssss", "green and black", "long");
const animal4 = new Animal("Horse", "Prancer", "neighs", "brown", "huge");

animal3.makeSound();
animal4.makeSound();