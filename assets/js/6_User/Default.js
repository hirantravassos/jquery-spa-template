//NAVBAR Target
$('a#nav-user').on('click', function() {
    $('div#function div label').text('FUNÇÕES')
    $('button#newid').text('NOVO USUÁRIO')
    
    $('div#table div div label').text('LISTA DE USUÁRIOS')
    
    $('div#form div form > div > label').text('DADOS DO USUÁRIO')
    $(`div#form-template`).remove()
    
    CreateTable_User()
    $('input#searchtext').val('')
    $('input#searchtext').focus()
})




