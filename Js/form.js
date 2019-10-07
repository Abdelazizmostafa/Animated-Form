function animatedform(){
const arrows =document.querySelectorAll('.fa-arrow-down');
 
arrows.forEach(arrow =>{
  arrow.addEventListener('click' , ()=>{
    const input = arrow.previousElementSibling;
    const parent = arrow.parentElement;
    const nextForm =parent.nextElementSibling;
     //check  for validation 
     if(input.type === "text" && userValidate(input)){
         nextSlide(parent ,nextForm);
     }else if(input.type === "email" && emailValidate(input)){
         nextSlide(parent ,nextForm);
     }else if(input.type === "password" && userValidate(input)){
         nextSlide(parent,nextForm);
     }else{
         parent.style.animation="shake .5s ease";
     }

     //get rid of animation 
     parent.addEventListener('animationend' , ()=>{
       parent.style.animation="";
     });
    });
 });
}

function userValidate(user){
    if(user.value.length < 6 ){
       error('rgb(189,87,87)');
    }else{
        error('rgb(87, 189, 130)');
        return true;
    }
}
function  emailValidate(email){
 const validation = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if(validation.test(email.value)){
        error('rgb(87, 189, 130)');
        return true;
   }else{
     error('rgb(189,87,87)');
   }
}


function error(color){
  let body =document.querySelector('body');
   body.style.backgroundColor=color;
};

function nextSlide(parent , nextForm){
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
}






animatedform();
