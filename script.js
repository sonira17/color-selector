const div=document.querySelectorAll('.button');
const body=document.querySelector('body');
div.forEach(function(button){
    button.addEventListener('click',function(e){
     if(e.target.id==='blue'){
        body.style.backgroundColor='blue';
     }
     else if(e.target.id==='aqua'){
        body.style.backgroundColor='aqua';
     }
     else if(e.target.id==='white'){
        body.style.backgroundColor='white';
     }
     else{
        body.style.backgroundColor='brown';
     }
    });
});