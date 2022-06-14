//FORM OPEN
$('button#newid').on('click',function(){
    if ($('div#table > div > div > label').text() == "LISTA DE VENDEDORES") {
        CreateForm_Seller('')
        $('input#name').focus()
    }
})

//SEARCH
$('input#searchtext').on('keyup',function(){
    if ($('div#table > div > div > label').text() == "LISTA DE VENDEDORES") {
        SearchText_Seller($('input#searchtext').val())
    } 
})

$('input#searchtext').on('change',function(){
    if ($('div#table > div > div > label').text() == "LISTA DE VENDEDORES") {
        SearchText_Seller($('input#searchtext').val())
    } 
})

function SearchText_Seller(search){
    if (search == '') {
        CreateTable_Seller()
    } else {
        
        $.ajax({
            url: `http://www.visualbox.com.br:21314/api/v1/seller/search`,
            type: 'POST',
            dataType: "json",
            data: JSON.stringify({
                name: search
            }),
            contentType: 'application/json',
            success: function(data) {
                
                CreateTable(CreateTableHeader_Seller)
                PopulateTable(data,CreateTableRow_Seller)
            }
        });
        
    }
}