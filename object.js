// ### **Exercise 1: Create a Single Object**

// **Prompt:**

// Create an object named "book" that represents a book. It should have the following properties:

//1. `title` (e.g. "To Kill A Mockingbird")
//2. `author` (e.g. "Harper Lee")
//3. `pages` (e.g. 324)
//4. A method `read()` that logs the message: `"Currently reading [title] by [author]"`

//--

const book = {
    title: "To Kill A Mockingbird",
    author: "Harper Lee",
    pages: 324,
    read: function(){
        console.log(`Currently reading "${this.title}" by ${this.author}. It is ${this.pages} pages long.`);
        _____________________________________________________________________________________________________
    }
 }

book.read();


//###**Item Shop:**
//1. Name
//2. Category
//3. Price
//4. An action -- function that prints something


const item = {
    name: "football",
    category: "Sports",
    seller: "Andrea Ballard",
    price: 20,
    soldFor: 25,
    sale: function(){

console.log(`"${this.name}" is currently priced at "${this.price}" by ${this.seller}. It sold "${this.soldFor}".`)
    }
}

item.sale();