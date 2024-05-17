//fetch api

//basic form of fetch() api
//Note: fetch('todos/food.json') returns a Promise
/* fetch('todos/food.json').then((response) => {
  console.log('resolved', response);
}).catch((err) => {
  console.log('rejected', err);
}); */

fetch('todos/food.json').then((response) => {
  console.log('resolved', response);
  return response.json(); // here we get a Promise and then use then() on the promise to get the actual data.
}).then(data => {
  console.log(data);
})
.catch((err) => {
  console.log('rejected', err);
});