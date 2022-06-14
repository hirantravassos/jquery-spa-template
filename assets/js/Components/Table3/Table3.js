'use strict';
let APIData3
let columns3
// let scrollPosition

function Table3Hide(){
    $('div#table3').hide(350)
}
function Table3Show(){
    $('div#table3').show(350)
    // scrollPosition = 0
}

//POPULATE
function Table3Populate(data,title) {
    //getting public instance of data
    APIData3 = data
    
    //setup
    currentID3 = ''
    $('div#table3 table thead tr').remove()
    $('div#table3 table tbody tr').remove()
    $('<tr></tr>').appendTo($('div#table3 table thead'))
    
    //titles
    $.each(title, function(index,title){
        $(`<th style="width: ${title.width}%;">${title.name}</th>`).appendTo($('div#table3 table thead tr'))
    })
    
    columns3 = $('div#table3 table thead tr th').length
    
    //rows
    try {
        $.each(data, function(index,data){  
            try {
                $(`<tr id="${Object.values(data)[0]}"></tr>`).appendTo($('div#table3 table tbody'))

                let i = 1
                do {

                    let id = Object.values(data)[0]
                    let name = Object.values(data)[1]
                    let value = Object.values(data)[i]

                    if (id == null) {id = '-'}
                    if (name == null) {name = '-'}
                    if (value == null) {value = '-'}

                    $(
                        `<td id="${id}" name="${TitleCase(name)}" >${TitleCase(value)}</td>`
                    ).appendTo($(`div#table3 table tbody tr#${id}`))
                    i++
                } while (i <= columns3)
            } catch (error) {
                console.log(error)
            }
        })
    } catch (error) {
        console.log('table3 error:',error)
    }
    
    //end
    Table3Show()
}
    
//FUNCTION
$('div#table3 table tbody').mousedown(function(event) {
    const selector = GetCookie('lastPage').substring(4)
    const targetID = $(event.target).attr('id')
    const targetName = $(event.target).attr('name')    
     
    if (currentForm == 'request' || currentForm2 == 'os') {
        switch (event.which) {
            case 1:
                currentID3 = targetID
                currentForm = selector
                CreateForm_OS(currentID3)
                break;
            case 2:
                break;
            case 3:
                SetupConfirmBox(`Deseja deletar O.S. '${targetName}'?`,targetID,'os')    
        }
    }  
})




    
 
