$('body #navbar img').on('click', function(){
    $('#indexDefault').show('2000')
    $('#function').hide(350)
    $('#table').hide(350)
    $('div#table2').hide(350)
    $('#form').hide(350)
    $('#form2').hide(350)
})

$('body #navbar a').on('click',function(){
    $('#indexDefault').hide('300')
    
    $('#function').hide(350)
    $('#table').hide(350)
    $('div#table2').hide(350)
    $('#form').hide(350)
    $('#form2').hide(350)
    
    $('#function').show(350)
})

$('body #navbar a').on("click", function(e){
    currentForm = ''
    currentForm2 = ''
    
    $('div#function div label').text('')
    $('div#table div div label').text('')
    
    const thiselement = e.target.id
    const selector = thiselement.substring(4)
    
    if (thiselement.indexOf('nav-') == 0 || thiselement.indexOf('logo') == 0) {
        $('body div a').removeClass('active')
        $(`#${e.target.id}`).addClass('active')
        SetCookie('lastPage',e.target.id,1)
    }
    
    if (selector == 'client') {
        $('div#function div label').text('FUNÇÕES')
        $('button#newid').text('NOVO CLIENTE')

        $('div#table div div label').text('LISTA DE CLIENTES')

        $('div#form div form > div > label').text('DADOS DO CLIENTE')
    }
    
    if (selector == 'request') {
        $('div#function div label').text('FUNÇÕES')
        $('button#newid').text('NOVO PEDIDO')

        $('div#table div div label').text('LISTA DE PEDIDOS')
        $('div#table2 div div label').text('LISTA DE O.S.')

        $('div#form div form > div > label').text('DADOS DO PEDIDO')
    }
    
    if (selector == 'seller') {
        $('div#function div label').text('FUNÇÕES')
        $('button#newid').text('NOVO VENDEDOR')

        $('div#table div div label').text('LISTA DE VENDEDORES')

        $('div#form div form > div > label').text('DADOS DO VENDEDOR')
    }
    
    if (selector == 'responsible') {
        $('div#function div label').text('FUNÇÕES')
        $('button#newid').text('NOVO INSTALADOR')

        $('div#table div div label').text('LISTA DE INSTALADORES')

        $('div#form div form > div > label').text('DADOS DO INSTALADOR')
    }
    
    if (selector == 'product') {
        $('div#function div label').text('FUNÇÕES')
        $('button#newid').text('NOVO PRODUTO')

        $('div#table div div label').text('LISTA DE PRODUTOS')

        $('div#form div form > div > label').text('DADOS DO PRODUTO')
    }
    
    if (selector == 'finance') {
        $('div#function div label').text('FUNÇÕES')
        $('button#newid').text('NOVO REGISTRO')

        $('div#table div div label').text('LISTA DE REGISTROS')

        $('div#form div form > div > label').text('DADOS DO REGISTRO')
    }
    
    if (selector == 'user') {
        $('div#function div label').text('FUNÇÕES')
        $('button#newid').text('NOVO USUÁRIO')

        $('div#table div div label').text('LISTA DE USUÁRIOS')

        $('div#form div form > div > label').text('DADOS DO USUÁRIO')
    }
    
    $(`div#form-template`).remove()
    $('input#searchtext').val('')
    $('input#searchtext').focus()   
    Search()  
}); 

