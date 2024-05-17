const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, JSON.parse(request.responseText));
    } else if (request.readyState === 4) {
      callback('could not fetch data', undefined);
    }
  });
  // request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  // request.open("GET", "mario.json");
  request.open("GET", resource);
  request.send();
};

console.log(1);
console.log(2);

getTodos('todos/food.json', (err, data) => {
  console.log(data);
  getTodos('todos/mario.json', (err, data) => {
    console.log(data);
    getTodos('todos/movie.json', (err, data) => {
      console.log(data);
    })
  })
});

console.log(3);
console.log(4);

// Defining a callback function within another callback. This is called callback hell. A better way is to use Promise feature.
