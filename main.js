var point=0;
var submit1=document.getElementById("submit1");
submit1.addEventListener("click",function(){
  var ans1=document.querySelector('input[name="capital"]:checked');
  
  if(ans1.value=="Paris")
  {
    point++;
  }
  var ans2=document.querySelector('input[name="planet"]:checked');
  if(ans2.value=="Mars")
  {
    point++;
  }
  var ans3=document.querySelector(`input[name="animal"]:checked`);
  if(ans3.value=="Blue Whale")
  {
    point++;
  }
  var questions=document.getElementById("questions");
  questions.innerHTML=`<h1 class="font-bold text-xl text-center">Your Quiz Result is ${point} </h1>`;
})