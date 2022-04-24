function changeImage(thes,src){
   var src = thes.src=src;
   var mainimg = document.getElementById("mainimg")
   if(mainimg.src === thes.src){
       document.getElementById("result").innerHTML = ("You win the match")
   } 
   else{
       document.getElementById("result").innerHTML = "Your are not winner"
   }
}