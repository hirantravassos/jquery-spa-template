function GetTable_OS2(){  
    let url = `${APIUrl}/api/v1/os-custom/${currentID}`
    
    let title
    title = JSON.stringify([
        {name:"Nº O.S.",width:15},
        {name:"PRODUTO",width:30},
        {name:"METRAGEM",width:15},
        {name:"DATA FINAL",width:20},
        {name:"STATUS",width:20}
    ])
    title = JSON.parse(title)
    
    if (currentID == '') {
        Table3Populate('',title)
        return
    }
    
    $.ajax({
        url: url,
        dataType: "json",
        success: function(data) {
            $('div#table3 > div > div > label').text('ORDENS DE SERVIÇO')
            Table3Populate(data,title)
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
