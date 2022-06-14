function CreateTable_Responsible(){     
    $.ajax({
        url: "http://www.visualbox.com.br:21314/api/v1/responsible",
        dataType: "json",
        success: function(data) {
            
            CreateTable(CreateTableHeader_Responsible)
            PopulateTable(data,CreateTableRow_Responsible)
            ShowTable()
        }
    });
}

function CreateTableHeader_Responsible(){
    return +
        $(
            '<tr>'+
                CreateTableHeader("INSTALADOR",100)+
            '</tr>'
        ).appendTo($('table thead')) 
}


function CreateTableRow_Responsible(value){
    //if(value.CLname){client = value.CLname}else{client = '-'}
    //return +
    $(
        '<tr>'+
            CreateTableRow(value.ID,value.name,value.name,100)+
        '</tr>'
    ).appendTo($('table tbody'))  
}

//FUNCTIONS
// $('table tbody').on('dblclick',function(e){
//     const thiselement = $(e.target).text()
//     alert(thiselement)
// })

$('table tbody').mousedown(function(event) {
    if ($('div#table > div > div > label').text() == "LISTA DE INSTALADORES") {
        const targetID = $(event.target).attr('id')
        const targetText = $(event.target).attr('name')
        //event.preventDefault()
        switch (event.which) {
            case 1:
                CreateForm_Responsible(targetID)
                break;
            case 2:
                break;
            case 3:
                //window.prompt('Right mouse button is pressed');
                if (confirm(`Deseja deletar o instalador '${targetText}'?`)) {
                  alert("You pressed OK!");
                } else {
                  alert("You pressed Cancel!");
                };
        }
    }
})
