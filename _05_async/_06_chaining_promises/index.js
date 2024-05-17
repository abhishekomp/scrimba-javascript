const getTodos = (resource) => {

  return new Promise((resolve, reject) => {
    //some code which will make the http/api invocation
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        // callback(undefined, JSON.parse(request.responseText));
        const data = JSON.parse(request.responseText)
        resolve(data);
      } else if (request.readyState === 4) {
        // callback('could not fetch data', undefined);
        reject('error getting resource');
      }
    });
    // request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
    // request.open("GET", "mario.json");
    request.open("GET", resource);
    request.send();
  });
};

console.log(1);
console.log(2);

getTodos('todos/food.json').then(data => {
  console.log('promise 1 resolved:', data);
  return getTodos('todos/mario.json');
}).then((data) => {
  console.log('promise 2 resolved:', data);
  return getTodos('todos/movie.json');
}).then(data => {
  console.log('promise 3 resolved:', data);
})
.catch(err => {
  console.log(err);
});


console.log(3);
console.log(4);


