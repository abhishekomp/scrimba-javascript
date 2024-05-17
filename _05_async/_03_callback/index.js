const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  // In our code, we can track the progress of the request (access the response data, status) using an event listener by using the specific event named 'readystatechange'. This event is fired every time there is a change in the state of the request. A request goes through 4 stages (aka phases)
  request.addEventListener("readystatechange", () => {
    // console.log(request, request.readyState);
    if (request.readyState === 4 && request.status === 200) {
      // console.log(request, request.responseText);
      // callback(undefined, request.responseText); //this is JSON String.
      callback(undefined, JSON.parse(request.responseText)); //this is JavaScript object.
    } else if (request.readyState === 4) {
      //when there is no response / error happens
      // console.log("could not fetch the data");
      callback('could not fetch data', undefined);
    }
  });
  // request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.open("GET", "mario.json");
  request.send();
};

console.log(1);
console.log(2);

getTodos((err, data) => {
  console.log("callback fired");
  // console.log(err, data);
  if(err){  //this will be truthy when there is error
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(3);
console.log(4);

// Defining a callback function.
/*
1. Specify a callback function at the point where you are involing getTodos.
2. Now invoke this callback function when you have received a success/error response from the http call.
3. You may want to invoke this callback function and pass the responseText, error at the time of invocation. This is done by specifying err, data when invoking getTodos.
4. In this code, getTodos has async behaviour. It has a callback function that will be called after all subsequent console.log() have been executed.
5. Also note that, "request.responseText" is the JSON String. If we want to send a JSON Object (JavaScript object) to the call back function then we need to convert the JSON String to JavaScript object using JSON.parse(JSONString), something like JSON.parse(request.responseText)
5. We can also read our own written json file (see my example)
*/
