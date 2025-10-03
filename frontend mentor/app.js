const firstName= document.getElementById('firstname');
const lastName= document.getElementById('lastname');
const email= document.getElementById('email');
const password= document.getElementById('password');
const form= document.getElementById('form');
const errorMessage= document.getElementById('error');

let btn= document.getElementById('btn'); 
// This is the button that will do the check for the form inputs
let message=[];

// This is your code i just commented it so u can see how it works 
// form.addEventListener('submit', (e)=> {
//     e.preventDefault();
//     message=[];
//     if(firstName.value.trim===""){
//         message.push("Firstname Required");
//     }
//     if(lastName.value.trim===""){
//         message.push('Lastname Required');
//     }
//     if(email.value.trim===""){
//         message.push('email Required');
//     }
//     if(password.value.trim===""){
//         message.push('password Required');
//     }
//     if(message.length > 0){
//     errorMessage.textContent=message.join(",");
//     }
// })

btn.addEventListener('click', (e)=> {
    e.preventDefault();
    message=[];
    if(firstName.value.trim()===""){
        message.push("Firstname Required");
    }
    if(lastName.value.trim()===""){
        message.push('Lastname Required');
    }
    if(email.value.trim()===""){
        message.push('email Required');
    }
    if(password.value.trim()===""){
        message.push('password Required');
    }
    if(message.length > 0){
    errorMessage.textContent=message.join(",");
    }else{
        errorMessage.textContent="";
    }

})

/*
Generally, your code was just missing some few things but you did a great job. your js code was well structured.

Your Html and Css is also good but base on the design you were given, there are some thing which are lacking in your html and css.

when you get a task from frontend mentor you don't have to delete any file it is all part of challenge and they give you instructions which u need to respect

why is your work not responsive ...?? each and every work you do need to be responsive on every screen so i want you to do the mobile version of this task

lastly i want you to add more style to this work make it look good and also formate your work when you want to push your code on GIthub

NB- Check the folder naming so that it fits the project you are working on

if you have any question you can ask or leave a comment 

*/