function CreateTable_Product(){     
    $.ajax({
        url: "http://www.visualbox.com.br:21314/api/v1/product",
        dataType: "json",
        success: function(data) {
            
            CreateTable(CreateTableHeader_Product)
            PopulateTable(data,CreateTableRow_Product)
            ShowTable()
        }
    });
}

function CreateTableHeader_Product(){
    return +
        $(
            '<tr>'+
                CreateTableHeader("PRODUTO",100)+
            '</tr>'
        ).appendTo($('table thead')) 
}


function CreateTableRow_Product(value){
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
    if ($('div#table > div > div > label').text() == "LISTA DE PRODUTOS") {
        const targetID = $(event.target).attr('id')
        const targetText = $(event.target).attr('name')
        //event.preventDefault()
        switch (event.which) {
            case 1:
                CreateForm_Product(targetID)
                break;
            case 2:
                break;
            case 3:
                //window.prompt('Right mouse button is pressed');
                if (confirm(`Deseja deletar o produto '${targetText}'?`)) {
                  alert("You pressed OK!");
                } else {
                  alert("You pressed Cancel!");
                };
        }
    }
})
