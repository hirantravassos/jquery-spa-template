function GetTable_Request(search){  
    let url
    if (search == '') {
        url = `${APIUrl}/api/v1/request/`
    } else {
        url = `${APIUrl}/api/v1/request/search/${search}`
    }
    
    let title
    title = JSON.stringify([
        {name:"Nº PEDIDO",width:10},
        {name:"CLIENTE",width:40},
        {name:"DATA INCIAL",width:15},
        {name:"DATA FINAL",width:15},
        {name:"O.S.",width:10},
        {name:"STATUS",width:10}
    ])
    title = JSON.parse(title)
    
    $.ajax({
        url: url,
        dataType: "json",
        success: function(data) {
            TablePopulate(data,title)
        },
        error: function(response) {
            console.log('error',response.responseJSON,response.status)
            if (response.status == 503) {
                $('.toast').toast('show')
                $('#toast').text('Não foi possível carregar a lista! O servidor está fora do ar, favor entrar em contato com KingHost!')
            }
        }
    });
}
