$('body').on("click", function(e){
    const selector = GetCookie('lastPage').substring(4)
    const thiselement = e.target.id
    
    if (thiselement == `changelog` || thiselement == `changelog2`) {

        if (currentID == '' && currentID2 == '') {
            PopulateChangeLog('')
        } else {
            
            if (currentID2 != '') {
                console.log(currentID2)
                PopulateChangeLog(currentID2,currentForm)
            } else {
                console.log(currentID)
                PopulateChangeLog(currentID,currentForm)
            }
        } 
    }    
})

function PopulateChangeLog(id,table) {
    if (currentForm == 'user') {
        $.ajax({
            url: `${APIUrl}/api/v1/changelog-custom/user/${currentID}`,
            dataType: "json",
            success: function(response) {

                if (response == 'no entries') {
                    $('.toast').toast('show')
                    $('#toast').text('Não há histórico disponível!')
                    return
                } else {

                    $('div#changelog table tr td').remove()
                    
                    $('div#changelog #text').text(`Histórico '${$('#firstname').val()} ${$('#lastname').val()}'`)
                    
                    // $('.toast').toast('show')
                    // $('#toast').text('Este histórico possuí carregamento lento! Por favor, aguarde...')

                    $.each(response,function(index,value){
                        //SET VARIABLES
                        let before = ''
                        let after = ''
                        
                        try {
                            let beforeObj = JSON.parse(value.beforechangelog)
                            before = JSON.stringify(JSON.parse(value.beforechangelog))
                        } catch {}
                            
                        try {
                            let afterObj = JSON.parse(value.changelog)
                            after = JSON.stringify(JSON.parse(value.changelog))
                        } catch {}

                        

                        let changelog = ''
                        let user = value.changeuser
                        let fun = value.changefunction
                        let table = value.changetable
                        let date = value.changedate

                        //Tables
                        if (table == 'client') {table = 'Cliente'}
                        if (table == 'request') {table = 'Pedido'}
                        if (table == 'os') {table = 'O.S.'}
                        if (table == 'seller') {table = 'Vendedor'}
                        if (table == 'responsible') {table = 'Instalador'}
                        if (table == 'product') {table = 'Produto'}
                        if (table == 'user') {table = 'Usuário'}
                        
                        //Fun
                        if (fun == `post`) {
                            fun = 'Criação - ' + table
                            changelog = after.split(",").join("<br />")
                        }
                        if (fun == `update`) {
                            fun = 'Atualização - ' + table
                            changelog = after.split(",").join("<br />")
                        }
                        if (fun == `delete`) {
                            fun = 'Deletado - ' + table
                            changelog = before.split(",").join("<br />")
                        }
                        
                        $(
                            '<tr>'+
                                `<td>${user}</td>`+
                                `<td>${fun}</td>`+
                                `<td>${date}</td>`+
                                `<td>${changelog}</td>`+
                            '</tr>'
                        ).appendTo($('div#changelog table tbody')) 
                    })
                    $('div#changelog').show(350)
                } 
            },

            error: function(response) {
                console.log('error',response.responseJSON,response.status)
                if (response.status == 401) {
                    $('.toast').toast('show')
                    $('#toast').text('Seu usuário não possui permissão para acessar dados desta tabela!')
                }
                if (response.status == 503) {
                    $('.toast').toast('show')
                    $('#toast').text('Operação falhou! O servidor está fora do ar, favor entrar em contato com KingHost!')
                }
            }
        })
        return
    } 

    $.ajax({
        url: `${APIUrl}/api/v1/changelog/${id}/${table}`,
        dataType: "json",
        success: function(response) {
            
            if (response == 'no entries') {
                $('.toast').toast('show')
                $('#toast').text('Não há histórico disponível!')
                return
            } else {
                
                $('div#changelog #text').text(`Histórico '${$('#name').val()}'`)
                
                if ($('#name').val() == null || (table == 'request' && currentForm2 != 'os')) {
                    $('div#changelog #text').text(`Histórico do pedido '${$('#number').val()}' - '${$('#client').val()}'`)
                } 
                if ($('#name').val() == null || (table == 'request' && currentForm2 == 'os')) {
                    $('div#changelog #text').text(`Histórico da O.S. '${$('div#form2 #number').val()}' - '${$('#client').val()}'`)
                } 
                
                $('div#changelog table tr td').remove()
                
                $.each(response,function(index,value){
                    //SET VARIABLES
                    let changelog = ''
                    let user = value.changeuser
                    let fun = value.changefunction
                    let date = value.changedate
                    
                    let before = JSON.parse(value.beforechangelog)
                    let after = JSON.parse(value.changelog)
                    
                    try {delete before.ID} catch {}
                    try {delete after.ID} catch {}

                    //TREATING FOR USER VIEW
                    let beforeTreated = '{'
                    let afterTreated = '{'
                    let newID = ''
                    
                    //BEFORE
                    try {
                        $.each(before, function(id,value){
                            if (id != 'user') {
                                newID = $(`#${id}`).prev().text()
                            } else {
                                newID = 'USUÁRIO'
                            }
                            beforeTreated += (`"${newID}":"${value}",`)
                        })
                        beforeTreated = beforeTreated.slice(0, -1)
                        beforeTreated += '}'
                        beforeTreated = eval('('+beforeTreated+')')
                        delete beforeTreated.USUÁRIO
                    } catch {}
                    
                    //AFTER
                    try {
                        $.each(after, function(id,value){
                            if (id != 'user') {
                                newID = $(`#${id}`).prev().text()
                            } else {
                                newID = 'USUÁRIO'
                            }
                            afterTreated += (`"${newID}":"${value}",`)
                        })
                        afterTreated = afterTreated.slice(0, -1)
                        afterTreated += '}'
                        afterTreated = eval('('+afterTreated+')')
                        delete afterTreated.USUÁRIO
                    } catch {}
                    
                    //SELECTION FUNCTION MODE
                    if (fun == `post`) {
                        
                        fun = 'Criação'
                        changelog = JSON.stringify(afterTreated)
                        changelog = changelog.replace('{','')
                        changelog = changelog.replace('}','')
                        $(
                            '<tr>'+
                                `<td>${user}</td>`+
                                `<td>${fun}</td>`+
                                `<td>${date}</td>`+
                                `<td>${changelog.split(",").join("<br />")}</td>`+
                            '</tr>'
                        ).appendTo($('div#changelog table tbody')) 
                        return
                    }
                    
                    if (fun == `update`) {
                        fun = 'Alteração'
                        
                        changelog = getDifferences(beforeTreated,afterTreated)
                        
                        $.each(changelog, function(id,value){

                            if (id != 'ID' && id != 'user') {
                                after += (`"${id}":"${value}",`)
                            }
                        })
                        
                        if (!$.isEmptyObject(changelog)) {
                            changelog = JSON.stringify(changelog)
                            changelog = changelog.replace(/{|}/g,'')
                            
                            changelog = changelog.split(",").join("<br />")
                            $(
                                '<tr>'+
                                    `<td>${user}</td>`+
                                    `<td>${fun}</td>`+
                                    `<td>${date}</td>`+
                                    `<td>${changelog}</td>`+
                                '</tr>'
                            ).appendTo($('div#changelog table tbody')) 
                        }
                        return
                    }
                    
                    if (changefunction == `delete`) {
                        changefunction = 'Deletado'
                        return
                    }
                })
                $('div#changelog').show(350)
            } 
        },
        
        error: function(response) {
            console.log('error',response.responseJSON,response.status)
            if (response.status == 401) {
                $('.toast').toast('show')
                $('#toast').text('Seu usuário não possui permissão para acessar dados desta tabela!')
            }
            if (response.status == 503) {
                $('.toast').toast('show')
                $('#toast').text('Operação falhou! O servidor está fora do ar, favor entrar em contato com KingHost!')
            }
        }
    })
}