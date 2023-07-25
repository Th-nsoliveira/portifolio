var btnshow=document.getElementById('btnshow');

btnshow.addEventListener('click',function(){

    var caixa=document.querySelector('.caixa');
    caixa.classList.toggle('show');

    if(caixa.classList.contains('show')){
        return btnshow.textContent="Ver menos"
    }
    else{
        return btnshow.textContent="Ver mais"
    }
    
});



var backtop=document.querySelector('.backtop')

window.addEventListener('scroll',function(){
    if(window.scrollY>1000){
        backtop.classList.add('dflex')
    }
    else{
        backtop.classList.remove('dflex')
    }
});



var btnMenu = document.querySelector(".btn-menu");

var nave = document.querySelector(".nave")

btnMenu.addEventListener('click', function(){
    nave.classList.toggle('menu-open')
    btnMenu.classList.toggle('x')
})

nave.addEventListener('click', function(){
    nave.classList.remove('menu-open')
    btnMenu.classList.toggle('x')
})