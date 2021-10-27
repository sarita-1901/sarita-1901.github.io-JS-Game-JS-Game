let ig1 = document.getElementById('cb1')
let ig2 = document.getElementById('cb2')
let ig3 = document.getElementById('cb3')
let message = document.getElementById('message')

let checkval = []
let form = document.getElementById('form')

form.addEventListener('submit',(e) => {
    e.preventDefault();
    let checkval = [];  
    if (cn.checked){
      checkval.push(cn.value)
  }
  if (cc.checked){
      checkval.push(cc.value)
  }
    if (ic.checked){
        checkval.push(ic.value)
    }
    if (lj.checked){
        checkval.push(lj.value)
    }

    if (pa.checked){
      checkval.push(pa.value)
  }
  if (rm.checked){
      checkval.push(rm.value)
  }
    if (sg.checked){
        checkval.push(sg.value)
    }
    if (tq.checked){
        checkval.push(tq.value)
    }
    message = document.getElementById('message');

    console.log(checkval);
    if(checkval.length == 0) {
        message.innerHTML = "You forgot to select your ingrediants for the cocktail!";
      
    }
  if (checkval.find(element => element == 'rm') && checkval.find(element => element == 'tq'))
  {
    message.innerHTML = "You'd want me to take this strong?";
      
    setPersonMood('disappointed');
   
  }
  else 
   if (!(checkval.find(element => element == 'cn')) || !(checkval.find(element => element == 'tq')) || checkval.find(element => element == 'pa') || checkval.find(element => element == 'rm')) 
  {
    message.innerHTML = "You have got the key ingrediants wrong!";
      
    setPersonMood('upset');
   
  }

  else 
    if (!(checkval.find(element => element == 'ic')) || !(checkval.find(element => element == 'lj')))  
  {
    message.innerHTML = "I can't believe you could miss this. Take a closer look!";
      
    setPersonMood('silly');
   
  }
  else 
  {
    if (checkval = ['cn','ic','lj','tq']) 
    {
      message.innerHTML = "You got it!";
      setPersonMood('applause');
    }  

else
{
  message.innerHTML = "Not quite there yet!";
  setPersonMood('disappointed');
}
  }

})

    function setPersonMood(mood) {
      document.getElementById('mood').classList.remove('neutral-mood','mood-upset','mood-disappointed','mood-silly','mood-applause');
      console.log(mood);
      document.getElementById('mood').classList.add('mood-' + mood);
      }
    
