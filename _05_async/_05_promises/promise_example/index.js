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


// promise example
const getSomething = () => {
  return new Promise((resolve, reject) => {
    //fetch something and then perform resolve or reject.
    resolve('some data');
    //reject('some error');
  });
};

getSomething().then((data) => {
  console.log(data);
}).catch(err => {
  console.log(err);
});


/* getSomething().then((data) => {
  console.log(data);
}, (err) => {
  console.log(err);
}); */