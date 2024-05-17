//async & await throwing our custom error
// Scenario 1: If the code on line 6 gets an invalid json, then line 6 will reject the promise and will return the rejection which we can catch.
// Scenario 2 for error: Let us say that the url was incorrect in the fetch. How do we throw an error in such a scenario? In this case, we use throw new Error() construct.

const getTodos = async () => {
  const response = await fetch('todos/foods.json');
  //For scenario 2
  if(response.status === 404){
    throw new Error('resource was not found');
  } else if(response.status !== 200){
    throw new Error('could not fetch data');
  }
  const data = await response.json();
  return data;
};

console.log(1);
console.log(2);
getTodos()
  .then(data => console.log('resolved', data))
  .catch(err => console.log('rejected due to "', err.message, '"'));

console.log(3);
console.log(4);