//NAVBAR Target
$('a#nav-request').on('click', function() {
    $('div#function div label').text('FUNÇÕES')
    $('button#newid').text('NOVO PEDIDO')
    
    $('div#table div div label').text('LISTA DE PEDIDOS')
    
    $('div#form div form > div > label').text('DADOS DO PEDIDO')
    $(`div#form-template`).remove()
    
    CreateTable_Request()
    $('input#searchtext').val('')
    $('input#searchtext').focus()
    
    page = String(filepath.split(`/`).filter((val, idx) => idx == 5)).substring(2).toLowerCase()
    
    console.log(filepath.split(`/`))
    console.log(page)
})




