function newsLetter()
{
    let x =document.getElementById("fullname").value;
    let y = document.getElementById("Email").value;

    let regx =/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

   if(x !="" && regx.test(y))
   {
       alert("Dear " + x +", you have successfully subscribed for the personalized newsletter")
   }
   else if(x == ""){
       alert("name field cannot be empty");
    }
   else if(y == ""){
       alert("email cannot be empty");
   }
}


