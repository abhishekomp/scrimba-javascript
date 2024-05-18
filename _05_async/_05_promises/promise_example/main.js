
// Sending an array when a promise is resolved.
// Promise.reject() only accepts a single reason parameter. If you want to pass multiple values, wrap them in an array (or object):
/* const request = (url) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const random = Math.random();
          if (random < 0.6) {
            resolve();
          } else {
            reject({
              status: 404,
              str: "nice way to go"
            });
        }
      }, 1000);
  });
};

request("/users")
  .then(() => {
    console.log("ok welcome");
  })
  .catch((obj) => {
    console.log(obj.status);
    console.log("the page is not found");
    console.log(obj.str);
  }); */

// Sending an object when a promise is resolved.
const doSomething = () => {
  return new Promise((resolve, reject) => {
    let a = 1;
    let b = 1;
    let sum = a + b;
    if(sum === 2){
      // console.log("resolved");
      resolve({result: sum,
        msg: "promise done"
      })
    } else {
      // console.log("rejected");
      reject("promise rejected");
    }
  });
};

doSomething().then((data) => {
  console.log("received promise data as resolved");
  console.log(data.result + ", " + data.msg);
}).catch((data) => {
  console.log("received promise data as rejected");
  console.log(data);
});