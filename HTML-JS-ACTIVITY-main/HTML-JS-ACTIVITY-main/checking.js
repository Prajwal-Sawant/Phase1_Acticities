document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
 
    checkData();
 });
 
//  var flag1=1;
//  var flag2=1;

 const myArray = [1];  // Initial array

function appendToArray(array, elements) {
  array.push(...elements);
  console.log(myArray);
}

console.log(myArray.length);
if(myArray.length == 2){
   console.log("Login Succeessfull");
}
 
 var email = document.getElementById("email");
 var pass1 = document.getElementById("pass1");
 var but1  = document.getElementById("submit");
 
 
 function checkData() {
    
    var emailValue = email.value.trim();
    var pass1Value = pass1.value.trim();
 
    if (emailValue == "") {
      
       setError(email, "Email can't be blank");
    } else if (!isEmail(emailValue)) {
     
       setError(email, "Email is not Valid");
    } else if(emailValue != "prajwal.s@sankeysolutions.com"){
     
        setError(email, "Email is not Valid");
    } else {
            
            appendToArray(myArray, [2]); 
            setSuccess(email,"Email is valid",1);
            
        
    
    }
 
 
    if (pass1Value == "") {
        
       setError(pass1, "Password can't be blank");
    } else if (pass1Value.length < 8){
      
        setError(pass1, "Minimum 8 Characters Required");
    } else if (pass1Value != "Prajwal@2002"){
      
        setError(pass1, "Password is not Valid");
      
    } else {
      appendToArray(myArray, [5]); 
       setSuccess(pass1, "Password Is Valid",1);
       
    }


    
 
 }
 
 
 function setError(u, msg) {
    var parentBox = u.parentElement;
   parentBox.className = "input-field error";
   var span = parentBox.querySelector("span");
   var fa = parentBox.querySelector(".fa");
   span.innerHTML = msg;
   span.style.color="red";
   fa.className = "fa fa-exclamation-circle";
   
 }

 
 
 function setSuccess(u,msg, i) {
   // const arr = [];
   // arr.push(u);
    var parentBox = u.parentElement;
    parentBox.className = "input-field success";
   //  var span = document.getElementsByClass("error");
   //  span.innerHTML = "";
   var span = parentBox.querySelector("span");
   var fa = parentBox.querySelector(".fa");
   span.innerHTML = msg;
   span.style.color="blue";
   fa.className = "fa fa-check-circle";
   //console.log(arr.length);
   console.log(myArray.length);
   if(myArray.length == 3){
      console.log("Login Succeessfull");
      //var butt = document.getElementById('submit')
       but1.value="Login Successful";
   }

   //  var fa = parentBox.querySelector(".fa");
   //  fa.className = "fa fa-check-circle";
   //  if(u){
   //        var btn1 = document.getElementById("submit")
   //        btn1.innerHTML="";
   // }
   // if(flag1==1 && flag2==1){
   //    //var butt = parentBox.querySelector('#btn1');
   //    var butt = document.getElementById('submit')
   //    butt.innerHTML="Login Successful";

   //  }

    //let myArray = [1];  // Initial array

// function appendToArray(array, elements) {
//   array.push(...elements);
// }
// appendToArray(myArray, [2]);  // Call the function to append elements
// console.log(myArray); 
  }
 
 function isEmail(e) {
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
 }