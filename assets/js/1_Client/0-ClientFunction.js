//FORM OPEN
$('button#newid').on('click',function(){
    if ($('div#table > div > div > label').text() == "LISTA DE CLIENTES") {
        CreateForm_Client('')
        $('input#name').focus()
    }
})

//SEARCH
$('input#searchtext').on('keyup',function(){
    if ($('div#table > div > div > label').text() == "LISTA DE CLIENTES") {
        SearchText_Client($('input#searchtext').val())
    }  
})

$('input#searchtext').on('change',function(){
    if ($('div#table > div > div > label').text() == "LISTA DE CLIENTES") {
        SearchText_Client($('input#searchtext').val())
    }  
})

function SearchText_Client(search){
    if (search == '') {
        CreateTable_Client()
    } else {
        
        $.ajax({
            url: `http://www.visualbox.com.br:21314/api/v1/client/search`,
            type: 'POST',
            dataType: "json",
            data: JSON.stringify({
                name: search
            }),
            contentType: 'application/json',
            success: function(data) {
                
                CreateTable(CreateTableHeader_Client)
                PopulateTable(data,CreateTableRow_Client)
            }
        });
    }
}