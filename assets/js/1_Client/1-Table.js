function CreateTable_Client(){     
    $.ajax({
        url: `${APIUrl}/api/v1/client`,
        dataType: "json",
        success: function(data) {
            
            clientID = ''
            
            CreateTable(CreateTableHeader_Client)
            PopulateTable(data,CreateTableRow_Client)
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

function CreateTableHeader_Client(){
    return +
        $(
            '<tr>'+
                CreateTableHeader("NOME DO CLIENTE",32)+
                CreateTableHeader("CEP",10)+
                CreateTableHeader("ENDEREÇO",36)+
                CreateTableHeader("CONTATO",12)+
            '</tr>'
        ).appendTo($('div#table table thead')) 
}

function CreateTableRow_Client(value){
    if(value.cep){cep = value.cep}else{cep = '-'}
    if(value.street){
        street = value.street
        if(value.num){num = ', '+value.num}else{num=''}
    }else{street = '-'}
    if(value.cellphone){cellphone = value.cellphone}else{cellphone = '-'}
    
    //return +
    $(
        '<tr>'+
            CreateTableRow(value.ID,value.name,TitleCase(value.name),32)+
            CreateTableRow(value.ID,value.name,cep,10)+
            CreateTableRow(value.ID,value.name,TitleCase(street+num),36)+
            CreateTableRow(value.ID,value.name,cellphone,12)+
        '</tr>'
    ).appendTo($('div#table table tbody'))  
}

$('div#table table tbody').mousedown(function(event) {
    if ($('div#table > div > div > label').text() == "LISTA DE CLIENTES") {
        const targetID = $(event.target).attr('id')
        const targetName = $(event.target).attr('name')
        
        //event.preventDefault()
        switch (event.which) {
            case 1:
                CreateForm_Client(targetID)
                break;
            case 2:
                break;
            case 3:
                //window.prompt('Right mouse button is pressed');
                SetupConfirmBox(`Deseja deletar o cliente '${targetName}'?`,ClientDelete,targetID)    
        }
    }
})

function ClientDelete(id){   
    $.ajax({
        url: `${APIUrl}/api/v1/client/delete/${id}/${GetCookie('id')}`,
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
