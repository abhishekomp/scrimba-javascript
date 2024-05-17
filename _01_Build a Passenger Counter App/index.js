let countEl = document.getElementById("count-el");
let visitorParagraphEl = document.getElementById("visitor-paragraph-el");

function increment_passenger_count(){
  let traveller_count = countEl.innerText;
  traveller_count++;
  countEl.innerText = traveller_count;
  console.log(traveller_count);
}

function save_passenger_count(){
  let textToAdd = countEl.innerText + " - ";  
  // visitorParagraphEl.innerText += textToAdd;  //will result in(note the missing space after -. Use textContent instead) (Visitors count :4 -12 -)
  visitorParagraphEl.textContent += textToAdd;
  countEl.innerText = 0;  //can also use textContent instead of innerText
  console.log(visitorParagraphEl.textContent);
}