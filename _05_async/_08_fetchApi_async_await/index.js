//async & await

//this is now an async function and it will always return a Promise object.
// Benefit: What is the benefit of async and await?
// Answer: It has bundled all our async code inside the function getTodos and remember it returns a Promise. Hence, when we invoke getTodos, we will get a Promise base. To get the data out from the Promise, we will need to do .then as done here on line 18.
// Await is used to chain promises as done here.
// Note: Async and await are not supported on all browsers. (for example IE)
const getTodos = async () => {
  const response = await fetch('todos/food.json');
  const data = await response.json();
  // console.log(data);
  return data;
};

// const test = getTodos();
console.log(1);
console.log(2);
getTodos()
  .then(data => console.log('resolved', data));

console.log(3);
console.log(4);

// const test = getTodos();
// getTodos().then(data => {
//   console.log('resolved', data);
// });


/* fetch('todos/food.json').then((response) => {
  console.log('resolved', response);
  return response.json(); // here we get a Promise and then use then() on the promise to get the actual data.
}).then(data => {
  console.log(data);
})
.catch((err) => {
  console.log('rejected', err);
}); */