// This shows a function inside an object and the way to invoke that function.
// It shows how to use template literals to display a message on to the console.
let person = {
  name: "Per",
  age: 35,
  skills: ["html", "css", "javascript", "react"],
  hasdriversLicense: true,
  sayHello: function(){
    console.log("Per says hello");
  }
}

person.sayHello();
let skills_str = "";
for(let i = 0; i < person.skills.length; i++){
   skills_str += person.skills[i] + ", ";
}
console.log(`${person.name} is ${person.age} years old and knows about ${skills_str}`);