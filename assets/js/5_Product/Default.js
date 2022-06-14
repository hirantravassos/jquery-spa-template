//NAVBAR Target
$('a#nav-product').on('click', function() {
    $('div#function div label').text('FUNÇÕES')
    $('button#newid').text('NOVO PRODUTO')
    
    $('div#table div div label').text('LISTA DE PRODUTOS')
    
    $('div#form div form > div > label').text('DADOS DO PRODUTO')
    $(`div#form-template`).remove()
    
    CreateTable_Product()
    $('input#searchtext').val('')
    $('input#searchtext').focus()
})




