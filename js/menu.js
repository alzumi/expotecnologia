$(document).ready(function () {

    var hamburguesa = $('.bar');
    var enlace = $('.items');
    let contador =0;
    var nav = $('nav');
    
        hamburguesa.click(function () {
             
        if(contador == 0){
        enlace.toggleClass().delay("slow");
            
        }else{
            contador =1;
        enlace.toggleClass("hide");  
        }
           



    })
    
    window.addEventListener('resize',function(){
        if (screen.width > 900){
             contador=0;
            enlace.remove('show');
            
            }
    })

});
