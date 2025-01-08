// ### **Exercise 3: Expand the Blueprint**

// **Prompt:**

// Create a constructor function named `Student` that represents a student. Each student should have:

// 1. `name` (e.g., "Alice")
// 2. `grade` (e.g., 10)
// 3. `subject` (e.g., "Mathematics")
// 4. A method `introduce()` that logs the message:`"Hi, I am [name], studying [subject] in grade [grade]."`
// 5. A method `finishesSchoolYear()` that:
// - Adds 1 to the grade (e.g., from 10 to 11).
// - If the grade reaches 12, it prints: `"Congratulations, [name] has graduated!"` and does not increase the grade.

// Create three students and have them introduce themselves and call `finishesSchoolYear()`.


function student(valueName, valueGrade, valueSubject){
    this.name = valueName;
    this.grade = valueGrade;
    this.subject = valueSubject;
    this.introduce = function(){
        console.log(`${this.name}, studying ${this.subject} in grade ${this.grade} `);
    }

    //**amber is in 9th plus 1(student1)
    //**jack is in 10th plus 1(student2)
    //**chelsea is in 12th plus 1(student3)
    this.finishesSchoolYear = function(){
        this.grade = this.grade + 1;
        if(
            this.grade > 12
        ){
            
        console.log(`Congratulations, ${this.name} has graduated!`)
        }

    }}
    const student1 = new student("Amber", 9, "English");
    const student2 = new student("Jack", 10, "Robotics");
    const student3 = new student("Chelsea", 12, "Economics");

student1.introduce();
student2.introduce();
student3.introduce();    
student1.finishesSchoolYear();
student2.finishesSchoolYear();
student3.finishesSchoolYear();