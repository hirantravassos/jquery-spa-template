function GetTable_Client(search){  
    let url
    if (search == '') {
        url = `${APIUrl}/api/v1/client/`
    } else {
        url = `${APIUrl}/api/v1/client/search/${search}`
    }
    
    let title
    title = JSON.stringify([
        {name:"CLIENTE",width:40},
        {name:"CEP",width:12},
        {name:"ENDEREÇO",width:33},
        {name:"CONTATO",width:15}
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
