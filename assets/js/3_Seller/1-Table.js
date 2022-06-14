function CreateTable_Seller(){     
    $.ajax({
        url: `${APIUrl}/api/v1/seller`,
        dataType: "json",
        success: function(data) {
            
            sellerID = ''
            
            CreateTable(CreateTableHeader_Seller)
            PopulateTable(data,CreateTableRow_Seller)
            ShowTable()
        },
        error: function(response) {
            console.log('error',response.responseJSON,response.status)
            if (response.status == 401) {
                $('.toast').toast('show')
                $('#toast').text('Não há permissão para acessar esta tabela!')
            }
            if (response.status == 503) {
                $('.toast').toast('show')
                $('#toast').text('Login falhou! O servidor está fora do ar, favor entrar em contato com KingHost!')
            }
        }
    });
}

function CreateTableHeader_Seller(){
    return +
        $(
            '<tr>'+
                CreateTableHeader("VENDEDOR",100)+
            '</tr>'
        ).appendTo($('div#table table thead')) 
}


function CreateTableRow_Seller(value){
    $(
        '<tr>'+
            CreateTableRow(value.ID,value.name,value.name,100)+
        '</tr>'
    ).appendTo($('div#table table tbody'))  
}

$('div#table table tbody').mousedown(function(event) {
    if ($('div#table > div > div > label').text() == "LISTA DE VENDEDORES") {
        const targetID = $(event.target).attr('id')
        const targetName = $(event.target).attr('name')
        
        //event.preventDefault()
        switch (event.which) {
            case 1:
                CreateForm_Seller(targetID)
                break;
            case 2:
                break;
            case 3:
                //window.prompt('Right mouse button is pressed');
                SetupConfirmBox(`Deseja deletar o vendedor '${targetName}'?`,ClientDelete,targetID)    
        }
    }
})

function SellerDelete(id){   
    $.ajax({
        url: `${APIUrl}/api/v1/seller/delete/${id}/${GetCookie('id')}`,
        type: "DELETE",
        dataType: "json",
        contentType: 'application/json',
        success: function(response) {
            console.log('Client delete success')
            
            $(`#table tr td[id="${id}"]`).addClass('delete-td')
            $(`#table tr td[id="${id}"]`).hide(350)
            setTimeout(function(){
                $(`#table tr td[id="${id}"]`).remove()
            },350)
            
            $('.toast').toast('show')
            $('#toast').text(`Cliente '${$(`#table tr td[id="${id}"]`).attr('name')}' deletado com sucesso!`)
        },
        
        error: function(error) {
            console.log('Client delete failed',error)
            $('.toast').toast('show')
            $('#toast').text(`Cliente '${$(`#table tr td[id="${id}"]`).attr('name')}' não deletado, servidor indisponível! Por favor, contate KingHost!`)
        }
    });
}
