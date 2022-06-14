//NAVBAR Target
$('a#nav-client').on('click', function() {
    $('div#function div label').text('FUNÇÕES')
    $('button#newid').text('NOVO CLIENTE')
    
    $('div#table div div label').text('LISTA DE CLIENTES')
    
    $('div#form div form > div > label').text('DADOS DO CLIENTE')
    $(`div#form-template`).remove()
    
    CreateTable_Client()
    $('input#searchtext').val('')
    $('input#searchtext').focus()
    
    page = String(filepath.split(`/`).filter((val, idx) => idx == 5)).substring(2).toLowerCase()
    
    console.log(filepath.split(`/`))
    console.log(page)

})

var filepath;
(function(){ 
    var scripts = document.getElementsByTagName('script'); 
    filepath = scripts[ scripts.length-1 ].src; 
}());
