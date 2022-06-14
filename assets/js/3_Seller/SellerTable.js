function GetTable_Seller(search){  
    let url
    if (search == '') {
        url = `${APIUrl}/api/v1/seller/`
    } else {
        url = `${APIUrl}/api/v1/seller/search/${search}`
    }
    
    let title
    title = JSON.stringify([
        {name:"VENDEDOR",width:100}
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
