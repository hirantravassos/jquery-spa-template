//NAVBAR Target
$('a#nav-seller').on('click', function() {
var thisScript = document.currentScript;

setInterval(() => console.log(thisScript.src), 2000);
    
    
    
    $('div#function div label').text('FUNÇÕES')
    $('button#newid').text('NOVO VENDEDOR')
    
    $('div#table div div label').text('LISTA DE VENDEDORES')
    
    $('div#form div form > div > label').text('DADOS DO VENDEDOR')
    $(`div#form-template`).remove()
    
    CreateTable_Seller()
    $('input#searchtext').val('')
    $('input#searchtext').focus()
    

})




