 var bgimagem=document.querySelector('.bg-img')
 var proj= document.querySelector('.projetos')

 document.querySelectorAll('.projetos').forEach(function(){

    proj.addEventListener('mouseover', function(){
        bgimagem.classList.add('cover');  
    });
   
    proj.addEventListener('mouseleave', function(){
        bgimagem.classList.remove('cover');  
    });
   
 })


