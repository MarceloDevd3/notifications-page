var visibleItens =  document.querySelectorAll('.visible-item'); 
var colorwhite = document.querySelectorAll('.alert-color');



function cleanAll() {
    setTimeout(function times() {
        visibleItens.forEach(function(elemento){
            elemento.classList.add('none');
          })   
        
          colorwhite.forEach(function(elementos){
            elementos.classList.toggle('alert-color');
          }) 
    }, 350)
    
}



cleanAll(times())


