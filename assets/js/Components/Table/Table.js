'use strict';
let APIData
let APITitle
let columns
let scrollPosition

function TableHide(){
    $('div#table').hide(350)
}
function TableShow(){
    $('div#table').show(350)
    scrollPosition = 0
}

//POPULATE
function TablePopulate(data,title) {
    //getting public instance of data
    APIData = data
    APITitle = title
    
    //setup
    // currentID = ''
    $('div#table table thead tr').remove()
    $('div#table table tbody tr').remove()
    $('<tr></tr>').appendTo($('div#table table thead'))
    
    //titles
    $.each(title, function(index,title){
        $(`<th style="width: ${title.width}%;">${title.name}</th>`).appendTo($('div#table table thead tr'))
    })
    
    columns = $('div#table table thead tr th').length
    
    //rows
    $.each(data, function(index,data){  
        if (index > 50) {return ''}
        
        $(`<tr id="${Object.values(data)[0]}"></tr>`).appendTo($('div#table table tbody'))
        
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
            ).appendTo($(`div#table table tbody tr#${id}`))
            i++
        } while (i <= columns)
    })
    
    //end
    if ($('#form').is(':visible')) {
        return
    } else {
        TableShow()
    }
}
           
//SCROLL
$(window).scroll(function (event) {
    if ($('div#table').is(':visible')) {
        ScrollTable()        
    }
}); 
    
function ScrollTable(){
    if (scrollPosition == null) {scrollPosition = 0}
    
    if ($(window).scrollTop() > scrollPosition) {
        scrollPosition = $(window).scrollTop();
    }
    let scrollBottomPosition = $(document).height() - $(window).height() - 20;
    
    if (scrollPosition > scrollBottomPosition) {
        
        const rowCount = $('div#table tbody tr').length
        
        $.each(APIData, function(index,data){  
            if (index > rowCount && index < rowCount + 20) {
                $(`<tr id="${Object.values(data)[0]}"></tr>`).appendTo($('div#table table tbody'))

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
                    ).appendTo($(`div#table table tbody tr#${id}`))
                    i++
                } while (i <= columns)
            } else {
                return
            }
        }) 
    }
}
               
//FUNCTION
$('div#table table tbody').mousedown(function(event) {
    const selector = GetCookie('lastPage').substring(4)
    const targetID = $(event.target).attr('id')
    const targetName = $(event.target).attr('name')    
    
    if (selector == 'client') {
        switch (event.which) {
            case 1:
                currentID = targetID
                CreateForm_Client(targetID)
                break;
            case 2:
                break;
            case 3:
                SetupConfirmBox(`Deseja deletar o cliente '${targetName}'?`,targetID,selector)    
        }
    }  
            
    if (selector == 'request') {
        switch (event.which) {
            case 1:
                currentID = targetID
                CreateForm_Request(targetID)
                break;
            case 2:
                break;
            case 3:
                SetupConfirmBox(`Deseja deletar o pedido '${targetName}'?`,targetID,selector)    
        }
    }  

    if (selector == 'seller') {
        switch (event.which) {
            case 1:
                currentID = targetID
                CreateForm_Seller(targetID)
                break;
            case 2:
                break;
            case 3:
                SetupConfirmBox(`Deseja deletar vendedor '${targetName}'?`,targetID,selector)    
        }
    }  

    if (selector == 'responsible') {
        switch (event.which) {
            case 1:
                currentID = targetID
                CreateForm_Responsible(targetID)
                break;
            case 2:
                break;
            case 3:
                SetupConfirmBox(`Deseja deletar instalador '${targetName}'?`,targetID,selector)    
        }
    } 
            
    if (selector == 'product') {
        switch (event.which) {
            case 1:
                currentID = targetID
                CreateForm_Product(targetID)
                break;
            case 2:
                break;
            case 3:
                SetupConfirmBox(`Deseja deletar produto '${targetName}'?`,targetID,selector)    
        }
    } 
            
    if (selector == 'finance') {
        switch (event.which) {
            case 1:
                currentID = targetID
                CreateForm_Finance(targetID)
                break;
            case 2:
                break;
            case 3:
                SetupConfirmBox(`Deseja deletar registro '${targetName}'?`,targetID,selector)    
        }
    } 
            
    if (selector == 'user') {
        switch (event.which) {
            case 1:
                currentID = targetID
                CreateForm_User(targetID)
                break;
            case 2:
                break;
            case 3:
                SetupConfirmBox(`Deseja deletar usuário '${targetName}'?`,targetID,selector)    
        }
    } 
})
        
function Delete(id,table){  
    $.ajax({
        url: `${APIUrl}/api/v1/${table}/delete/${id}/${GetCookie('id')}`,
        type: "DELETE",
        dataType: "json",
        contentType: 'application/json',
        success: function(response) {
            console.log('Delete success')
            
            $(`#table tr td[id="${id}"]`).addClass('delete-td')
            $(`#table tr td[id="${id}"]`).hide(350)
            setTimeout(function(){
                $(`#table tr td[id="${id}"]`).remove()
            },1500)
            
            $('.toast').toast('show')
            $('#toast').text(`'${$(`#table tr td[id="${id}"]`).attr('name')}' deletado com sucesso!`)
        },
        
        error: function(error) {
            console.log('Delete failed',error)
            $('.toast').toast('show')
            $('#toast').text(`'${$(`#table tr td[id="${id}"]`).attr('name')}' não deletado, servidor indisponível! Por favor, contate KingHost!`)
        }
    });
}




    
 
