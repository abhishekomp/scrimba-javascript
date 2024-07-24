const saveBtn = document.getElementById("save-btn");
const inputEl = document.getElementById("input-el");
const displayBtn = document.getElementById("display-btn");
const ulEl = document.getElementById("ul-el");
const msgEl = document.getElementById("msg-el");


let items_arr = [];

saveBtn.addEventListener("click", function(){
  //console.log("save button was clicked");
  const inputValue = inputEl.value;
  items_arr.push(inputValue);
  console.log("you entered: " + inputValue);
  inputEl.value = "";
  //msgEl.textContent = "Saved";
})

displayBtn.addEventListener("click", function(){
  let items_str = "";
  for(let i = 0; i < items_arr.length; i++){
    console.log(items_arr[i]);
    // items_str += "<li><a target='_blank' href='" + items_arr[i] + "'>" + items_arr[i] + "</a></li>";
    // using template string using back tick
    items_str += `<li>
                    <a target='_blank' href='${items_arr[i]}'>${items_arr[i]}</a>
                  </li>`;
    //items_str += "<li><a target='_blank' href='www.google.com'>www.ggogle.com</a></li";
  }
  console.log(items_str);
  ulEl.innerHTML = items_str;
})