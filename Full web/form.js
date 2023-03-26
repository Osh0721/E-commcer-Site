function formvalidation(myform){

 const Firstname = document.getElementById('Fname').value;
const Lastname = document.getElementById('Lname').value;
const email = document.getElementById('email').value;
const Address = document.getElementById('Address').value;
const Telephone = document.getElementById('Telephone').value;

    if(Firstname==""){
        alert("Please Enter the First name");

    }

    else if(Lastname==""){
        alert("Please Enter the Last name");
    }

    else if(email==""){
            alert("Please Enter the email");
        }

    else if(Address==""){

            alert("Please Enter the Address");
            }

    else if(Telephone==""){
            alert("Please Enter the Telephone number");
                }

      
     else{
            // alert("Hey " + Firstname + " " + Lastname);
             msg=localStorage.getItem("msg");	
             alert("Hey " + Firstname + " " + Lastname+ "\n" + msg);
            
                }
                        

};