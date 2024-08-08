const inputName = "Ram Manohar Lohai Samarth";
//const inputName = "John Doe";
//const inputName = "Mann Bahor"; //exactly 10 characters long
const maxLength = 10;

//this function is to shorten a given name to max 10 characters followed by 3 dots.
function nameShortner(input, maxLength){
  console.log(input.length);
  let shortName = input + "...";
  if(input.length >= maxLength){
    shortName = input.substring(0, 10) + "...";
  }
  return shortName;
}

console.log(nameShortner(inputName, maxLength));