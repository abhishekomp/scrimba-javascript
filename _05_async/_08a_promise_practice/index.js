const getSomething = (resource) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    // request.open('GET', 'movie.json');
    request.open("GET", resource);
    request.send();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        // console.log('error in fetching data');
        reject('unable to fetch data');
      }
    });
  });
};

getSomething('movie.json').then(data => {
  console.log("promise 1 resolved");
  console.log(data);
  return getSomething('food.json');
}).then(data => {
  console.log("promise 2 resolved");
  console.log(data);
}).catch(err => {
  console.log(err);
});
