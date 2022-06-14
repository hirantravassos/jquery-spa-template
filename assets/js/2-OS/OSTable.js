function GetTable_OS(){  
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
        Table2Populate('',title)
        $('#table2 button').prop("disabled",true)
        $('#table2 button').text('PARA ADICIONAR, POR FAVOR SALVE PRIMEIRO!')
        return
    } else {
        $('#table2 button').prop("disabled",false)
        $('#table2 button').text('ADICIONAR O.S.')
    }
    
    $.ajax({
        url: url,
        dataType: "json",
        success: function(data) {
            $('div#table2 > div > div > label').text('ORDENS DE SERVIÇO')
            Table2Populate(data,title)
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
