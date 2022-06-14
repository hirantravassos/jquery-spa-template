function CreateTable_User(){     
    $.ajax({
        url: "http://www.visualbox.com.br:21314/api/v1/user",
        dataType: "json",
        success: function(data) {
            
            CreateTable(CreateTableHeader_User)
            PopulateTable(data,CreateTableRow_User)
            ShowTable()
        }
    });
}

function CreateTableHeader_User(){
    return +
        $(
            '<tr>'+
                CreateTableHeader("NOME",40)+
                CreateTableHeader("USUÁRIO",40)+
                CreateTableHeader("AUTENTICAÇÃO",20)+
            '</tr>'
        ).appendTo($('table thead')) 
}


function CreateTableRow_User(value){
    //if(value.CLname){client = value.CLname}else{client = '-'}
    //return +
    let name = value.firstname+' '+value.lastname
    
    $(
        '<tr>'+
            CreateTableRow(value.ID,name,name,40)+
            CreateTableRow(value.ID,name,value.username,40)+
            CreateTableRow(value.ID,name,value.auth,20)+
        '</tr>'
    ).appendTo($('table tbody'))  
}

//FUNCTIONS
// $('table tbody').on('dblclick',function(e){
//     const thiselement = $(e.target).text()
//     alert(thiselement)
// })

$('table tbody').mousedown(function(event) {
    if ($('div#table > div > div > label').text() == "LISTA DE USUÁRIOS") {
        const targetID = $(event.target).attr('id')
        const targetText = $(event.target).attr('name')
        //event.preventDefault()
        switch (event.which) {
            case 1:
                CreateForm_User(targetID)
                break;
            case 2:
                break;
            case 3:
                //window.prompt('Right mouse button is pressed');
                if (confirm(`Deseja deletar o usuário '${targetText}'?`)) {
                  alert("You pressed OK!");
                } else {
                  alert("You pressed Cancel!");
                };
        }
    }
})
