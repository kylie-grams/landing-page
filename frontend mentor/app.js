const firstName= document.getElementById('firstname');
const lastName= document.getElementById('lastname');
const email= document.getElementById('email');
const password= document.getElementById('password');
const form= document.getElementById('form');
const errorMessage= document.getElementById('error');
let message=[];
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    if(firstName.value.trim===""){
        message.push("Firstname Required");
    }
    if(lastName.value.trim===""){
        message.push('Lastname Required');
    }
    if(email.value.trim===""){
        message.push('email Required');
    }
    if(password.value.trim===""){
        message.push('password Required');
    }
    if(message.length > 0){
    errorMessage.textContent=message.join(",");
    }
}
)
alert("stupid js");

    