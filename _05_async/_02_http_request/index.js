const request = new XMLHttpRequest();

// In our code, we can track the progress of the request (access the response data, status) using an event listener by using a specific event named 'readystatechange'. This event is fired every time there is a change in the state of the request. A request goes through 4 stages (aka phases)
request.addEventListener('readystatechange', () => {
  // console.log(request, request.readyState);
  if(request.readyState === 4 && request.status === 200){
    console.log(request, request.responseText);
  } else if(request.readyState === 4) { //when there is no response / error happens
    console.log("could not fetch the data");
  }
});
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();















