/*
Full Name: Kuwardeep Singh
Student ID: 200430408

Instructions:
  Follow the steps below. If you have any questions
  please feel free to use Slack to communicate. You
  are allowed to discuss the lab with other students
  but you ARE NOT permitted to copy/paste or share
  code.

Rubric:
  Steps: 11.5 points
  Code Format: 10 points
  Github Link: 10 points

NOTE: The code format and Github link marks are
  only awarded if the steps have been completed.
  (Code formatting is the visual structure of
    you code. I expect that you have used proper
    tabbing of nested structures so code readability
    is adequate.)
*/

/*
Step 1 (2.5 points):
  Create an array that contains 4 people objects.
  Each object must have at least 2 properties.
*/
//To clear the shell and make it organized
console.clear();

//creating array of 4 people objects
const peopleArray = [
    {name : "Kuwar Dua", age : 19, program : "COPR"},
    {name : "Jannat Maggo", age : 18, program : "BUSN"},
    {name : "Sidak", age : 17, program : "CSTN"},
    {name : "Sehaj", age : 13, program : "BTN"}
];

/*
Step 2 (6 points):
  Create an arrow function that accepts
  a destructured object as an argument. In the
  body of your function, console.log a string
  template utilizing the properties you
  destructured.
*/
//creating arrow function and storing it as a constant 
//Accessing all the properties of the object and consoling out a statement
const peopleFunction = ({name, age , program}) => console.log( `Hi ${name} this side. I am ${age} years old and studying ${program}`);


/*
Step 3 (3 points):
  Loop over your array using a for/of loop.
  Call your arrow function passing the array item
  as an argument.
*/
//Finally looping out all the objects
for(let callingPeople of peopleArray){
    peopleFunction(callingPeople);
}