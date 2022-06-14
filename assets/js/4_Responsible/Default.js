//NAVBAR Target
$('a#nav-responsible').on('click', function() {
    $('div#function div label').text('FUNÇÕES')
    $('button#newid').text('NOVO INSTALADOR')
    
    $('div#table div div label').text('LISTA DE INSTALADORES')
    
    $('div#form div form > div > label').text('DADOS DO INSTALADORES')
    $(`div#form-template`).remove()
    
    CreateTable_Responsible()
    $('input#searchtext').val('')
    $('input#searchtext').focus()
})




