//FORM OPEN
$('button#newid').on('click',function(){
    if ($('div#table > div > div > label').text() == "LISTA DE PEDIDOS") {
        CreateForm_Request('')
        $('input#name').focus()
    }
})

//SEARCH
$('input#searchtext').on('keyup',function(){
    if ($('div#table > div > div > label').text() == "LISTA DE PEDIDOS") {
        SearchText_Request($('input#searchtext').val())
    } 
})

$('input#searchtext').on('change',function(){
    if ($('div#table > div > div > label').text() == "LISTA DE PEDIDOS") {
        SearchText_Request($('input#searchtext').val())
    }  
})

function SearchText_Request(search){
    if (search == '') {
        CreateTable_Request()
    } else {
        
        $.ajax({
            url: `${APIUrl}/api/v1/request/search`,
            type: 'POST',
            dataType: "json",
            data: JSON.stringify({
                name: search
            }),
            contentType: 'application/json',
            success: function(data) {
                
                CreateTable(CreateTableHeader_Request)
                PopulateTable(data,CreateTableRow_Request)
            }
        });
        
    }
}