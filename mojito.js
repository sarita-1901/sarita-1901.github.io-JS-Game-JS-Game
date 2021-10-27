
// rm, sg, lj, mn 

let form = document.getElementById('form');

window.addEventListener('load',(e) => {
console.log("Hello");
//  e.preventDefault();
  

let ul = document.getElementById('quiz-options');

let RecIng = [
  {
    "id": "rm",
    "img": "./Rum.jpg",
    "text": "Rum",
  },
  {
    "id": "sg",
    "img": "./Sugar.jpg",
    "text": "Sugar",
  },
  {
    "id": "lj",
    "img": "./Lime_Juice.jpg",
    "text": "Lime Juice",
  },
  {
    "id": "mn",
    "img": "./MintLeaves.jpg",
    "text": "Mint",
  }

];

RecIng.forEach(element => {

  let id1 = element.id;
  let img1 = element.img;
  let text1 = element.text;

let li = document.createElement('li');

let answer = document.createElement('input');
answer.setAttribute('type', 'checkbox');
answer.setAttribute('id',id1);
answer.setAttribute('value', id1);
answer.setAttribute('class', 'item');

li.appendChild(answer);

var answerLabel = document.createElement('label');
answerLabel.setAttribute('for',id1); // this corresponds to the checkbox id

let img = document.createElement("img");
img.setAttribute('src',img1 );
answerLabel.appendChild(img);
answerLabel.appendChild(document.createTextNode(text1));
li.appendChild(answerLabel);

let div = document.createElement('div');
div.appendChild(li);

ul.appendChild(div);

});
})


form.addEventListener('submit',(e) => {

  e.preventDefault();
  
    let checkval = []; 
//  rm, sg, lj, mn 

  checkval = getInputArray();

    let MainIng = checkval.filter(element => element == 'rm');
    let SuppIng = checkval.filter(element => element == 'lj' || element == 'mn' || element == 'sg' );

    message = document.getElementById('message');

    console.log(checkval);
    if(checkval.length == 0) {
        message.innerHTML = "You forgot to select your ingrediants for the cocktail!";
      
    }
    
    if (checkval.toString() == "rm,sg,lj,mn")
    {
      message.innerHTML = "You got it!";
      setPersonMood('applause');
    }

    else
    if (MainIng.toString() != "rm")
    {
      message.innerHTML = "You have got the key ingrediants wrong!";
      setPersonMood('upset');
    }
    else
    if (SuppIng.toString() != "sg,lm,mn")
    {
      message.innerHTML = "I can't believe you could miss this. Take a closer look!";
      setPersonMood('silly');
    
    }
    else
  {
    message.innerHTML = "Not quite there yet! You have some additional ones";
    setPersonMood('disappointed');
  }
})

    function setPersonMood(mood) {
      document.getElementById('mood').classList.remove('neutral-mood','mood-upset','mood-disappointed','mood-silly','mood-applause');
      console.log(mood);
      document.getElementById('mood').classList.add('mood-' + mood);
      }
    
function getInputArray()
{
  let checkval = [];
  if (rm.checked){
    checkval.push(rm.value)
}
if (sg.checked){
    checkval.push(sg.value)
}
  if (lj.checked){
      checkval.push(lj.value)
  }
  if (mn.checked){
      checkval.push(mn.value)
  }
return checkval;
}
