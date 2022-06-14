$('img#logo').on('click',function(){
    $('#function').hide(350)
    $('#table').hide(350)
    $('#form').hide(350)
})

$('body #navbar a').on('click',function(){
    $('#function').hide(350)
    $('#table').hide(350)
    $('#form').hide(350)
    
    $('#function').show(350)
})

$('body #navbar').on("click", function(e){
    const thiselement = e.target.id
    
    if (thiselement.indexOf('nav-') == 0 || thiselement.indexOf('logo') == 0) {
        $('body div a').removeClass('active')
        $(`#${e.target.id}`).addClass('active')
        SetCookie('lastPage',e.target.id,1)
    }
    
    const selector = GetCookie('lastPage').substring(4)
    
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

        $('div#form div form > div > label').text('DADOS DO PEDIDO')
    }
    
    if (selector == 'seller') {
        $('div#function div label').text('FUNÇÕES')
        $('button#newid').text('NOVO VENDEDOR')

        $('div#table div div label').text('LISTA DE VENDEDORES')

        $('div#form div form > div > label').text('DADOS DO VENDEDOR')
    }
    
    $(`div#form-template`).remove()
    $('input#searchtext').val('')
    $('input#searchtext').focus()   
    Search()  
}); 

