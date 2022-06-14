function CreateTable_Request(){     
    $.ajax({
        url: `${APIUrl}/api/v1/request`,
        dataType: "json",
        success: function(data) {
            console.log('Request getall success')
            
            requestID = ''
            
            CreateTable(CreateTableHeader_Request)
            PopulateTable(data,CreateTableRow_Request)
            ShowTable()
        },
        error: function(response) {
            console.log('Request getall failed')
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

function CreateTableHeader_Request(){
    return +
        $(
            '<tr>'+
                CreateTableHeader("Nº PEDIDO",10)+
                CreateTableHeader("CLIENTE",35)+
                CreateTableHeader("DATA INCIAL",15)+
                CreateTableHeader("DATA FINAL",15)+
                CreateTableHeader("O.S.",13)+
                CreateTableHeader("STATUS",20)+
            '</tr>'
        ).appendTo($('div#table thead')) 
}

function CreateTableRow_Request(value){
    //if(value.CLname){client = value.CLname}else{client = '-'}
    let number
    let name
    let sdate
    let fdate
    let count
    let status
    
    if (value.REnumber != null) {number = value.REnumber} else {number = '-'}
    if (value.CLname != null) {name = value.CLname} else {name = '-'}
    if (value.REsdate != null) {sdate = value.REsdate} else {sdate = '-'}
    if (value.REfdate != null) {fdate = value.REfdate} else {fdate = '-'}
    if (value.OScount != null) {count = value.OScount} else {count = '-'}
    if (value.OSstatus != null) {
        status = value.OSstatus
        if (status == 1) {
            status = 'Pendente'
        } else {
            status = '-'
        }
    } else {status = '-'}
    //return +
    $(
        '<tr>'+
            CreateTableRow(value.REID,value.REnumber,number,10)+
            CreateTableRow(value.REID,value.REnumber,TitleCase(name),35)+
            CreateTableRow(value.REID,value.REnumber,sdate,15)+
            CreateTableRow(value.REID,value.REnumber,fdate,15)+
            CreateTableRow(value.REID,value.REnumber,count,13)+
            CreateTableRow(value.REID,value.REnumber,status,20)+
        '</tr>'
    ).appendTo($('div#table tbody'))  
}

$('table tbody').mousedown(function(event) {
    if ($('div#table > div > div > label').text() == "LISTA DE PEDIDOS") {
        const targetID = $(event.target).attr('id')
        const targetName = $(event.target).attr('name')
        
        //event.preventDefault()
        switch (event.which) {
            case 1:
                CreateForm_Request(targetID)
                break;
            case 2:
                break;
            case 3:
                //window.prompt('Right mouse button is pressed');
                SetupConfirmBox(`Deseja deletar o pedido '${targetName}'?`,RequestDelete,targetID)    
        }
    }
})

function RequestDelete(id){   
    $.ajax({
        url: `${APIUrl}/api/v1/request/delete/${id}/${GetCookie('id')}`,
        type: "DELETE",
        dataType: "json",
        contentType: 'application/json',
        success: function(response) {
            console.log('Request delete success')
            
            $(`#table tr td[id="${id}"]`).addClass('delete-td')
            $(`#table tr td[id="${id}"]`).hide(350)
            setTimeout(function(){
                $(`#table tr td[id="${id}"]`).remove()
            },350)
            
            $('.toast').toast('show')
            $('#toast').text(`Pedido '${$(`#table tr td[id="${id}"]`).attr('name')}' deletado com sucesso!`)
        },
        
        error: function(error) {
            console.log('Request delete failed',error)
            $('.toast').toast('show')
            $('#toast').text(`Pedido '${$(`#table tr td[id="${id}"]`).attr('name')}' não deletado, servidor indisponível! Por favor, contate KingHost!`)
        }
    });
}