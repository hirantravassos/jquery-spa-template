function ShowForm1(){
    $('div#form').hide(350)
    
    setTimeout(function(){
        $('div#form-1').show(350)
    },200)
    
}
function HideForm1(){
    $('div#form-1').hide(350)
    
    setTimeout(function(){
        $('div#form').show(350)
    },200)
}

$('body').on("click", function(e){
    const thiselement = e.target.id
    if (thiselement == `back-1`) {
        HideForm1()
    }
}); 
