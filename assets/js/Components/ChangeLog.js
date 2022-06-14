$('body').on("click", function(e){
    const selector = GetCookie('lastPage').substring(4)
    const thiselement = e.target.id
    
    if (thiselement == `changelog`) {

        if (currentID == '') {
            PopulateChangeLog('')
        } else {
            PopulateChangeLog(currentID,selector)
        }
    }    
})

function PopulateChangeLog(id,table) {
    $.ajax({
        url: `${APIUrl}/api/v1/changelog/${id}/${table}`,
        dataType: "json",
        success: function(response) {
            console.log(response)
            
            if (response == 'no entries') {
                $('.toast').toast('show')
                $('#toast').text('Não há histórico disponível!')
                return
            } else {
                
                console.log('resume changelog')

                $('div#changelog #text').text(`Histórico '${$('#name').val()}'`)
                $('div#changelog table tr td').remove()
                
                $.each(response,function(index,value){
                    //SET VARIABLES
                    let changelog = ''
                    let changeuser = value.changeuser
                    let changefunction = value.changefunction
                    let changedate = value.changedate
                    
                    let after = JSON.parse(value.changelog)
                    
                    //PREPARE JSON FOR COMPARSION
                    if (value.beforechangelog != '"{}"') {
                        let before = JSON.parse(value.beforechangelog)
                        let change = getDifferences(before,after)
                        
                        $.each(change, function(id,value){
                            if (id != 'ID') {
                                changelog += (`"${id}":"${value}",`)
                            }
                        })
                    }
                                   
                    if (changefunction == `post`) {
                        changefunction = 'Criação'
                        change = JSON.stringify(after)
                        change = change.replace('{','')
                        change = change.replace('}','')
                        $(
                            '<tr>'+
                                `<td>${changeuser}</td>`+
                                `<td>${changefunction}</td>`+
                                `<td>${changedate}</td>`+
                                `<td>${change.split(",").join("<br />")}</td>`+
                            '</tr>'
                        ).appendTo($('div#changelog table tbody')) 
                        return
                    }
                    
                    if (changefunction == `update`) {
                        changefunction = 'Alteração'
                        
                        if (changelog != '') {
                            changelog = changelog.split(",").join("<br />")
                            $(
                                '<tr>'+
                                    `<td>${changeuser}</td>`+
                                    `<td>${changefunction}</td>`+
                                    `<td>${changedate}</td>`+
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