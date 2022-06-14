function GetTable_User(search){  
    let url
    if (search == '') {
        url = `${APIUrl}/api/v1/user/`
    } else {
        url = `${APIUrl}/api/v1/user/search/${search}`
    }
    
    let title
    title = JSON.stringify([
        {name:"NOME",width:40},
        {name:"USUÁRIO",width:30},
        {name:"AUTENTICAÇÃO",width:30},
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
