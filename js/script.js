let formSubmit = document.querySelector("#form");
let formControl = document.querySelector(".form-control");
let submitBtn = document.getElementById("submit");
let resetBtn = document.getElementById("reset");

let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

formSubmit.addEventListener("submit", function(event){
  event.preventDefault();
  validation([username,email,password,confirmPassword]);
  usernameLength(username,3,20);
  passwordLength(password,3,20);
  confirmPasswordLength(confirmPassword,3,20);
  confirmPasswordd(password,confirmPassword);
})

function getname(inputName){
  return inputName.getAttribute("data-name");
}

function validation(inputs){
  inputs.forEach((inputName)=>{
    if(inputName.value.trim() ===""){
      //error
      error(inputName,`${getname(inputName)} is required.`);
    }
    else{
      //success
      success(inputName,`${getname(inputName)} is Valid.`);
    }

  })
}

// Find Username Length
function usernameLength(inputName,min,max){
  let getInputValue = inputName.value.trim().length;
  if(getInputValue<min){
    error(inputName,`${getname(inputName)} must be atleast Greater than ${min} Letters.`);
  }
  else if(getInputValue>max){
    error(inputName,`${getname(inputName)} must be atleast Lesser than ${max} Letters.`);
  }
  else{
    success(inputName,`${getname(inputName)} is Valid.`);
  }
}

// Find password Length
function passwordLength(inputName,min,max){
  let getInputValue = inputName.value.trim().length;
  if(getInputValue<min){
    error(inputName,`${getname(inputName)} must be atleast Greater than ${min} Letters.`);
  }
  else if(getInputValue>max){
    error(inputName,`${getname(inputName)} must be atleast Lesser than ${max} Letters.`);
  }
  else{
    success(inputName,`${getname(inputName)} is Valid.`);
  }
}

// Find confirmPasswordLength Length
function confirmPasswordLength(inputName,min,max){
  let getInputValue = inputName.value.trim().length;
  if(getInputValue<min){
    error(inputName,`${getname(inputName)} must be atleast Greater than ${min} Letters.`);
  }
  else if(getInputValue>max){
    error(inputName,`${getname(inputName)} must be atleast Lesser than ${max} Letters.`);
  }
  else{
    success(inputName,`${getname(inputName)} is Valid.`);
  }
}

// check confirmPassword
function confirmPasswordd(password,confirmPassword){
  console.log(password.value == confirmPassword);
  if(password.value !== confirmPassword.value){
    //error
    error(confirmPassword,`Password and ${getname(confirmPassword)} is incorrect.`);
   }

}


function error(elements,message){
  let findParent = elements.parentElement;
  findParent.className = "form-control error";

  let errormsg  = findParent.querySelector("h5");
  errormsg.textContent = message;

  errormsg.style.visibility = "visible";
}

function success(elements,message){
  const findParent = elements.parentElement;
  findParent.className  = "form-control success";

  let errormsg = findParent.querySelector("h5");
  errormsg.textContent = message;

  errormsg.style.visibility = "visible";
}