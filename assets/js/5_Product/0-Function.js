//FORM OPEN
$('button#newid').on('click',function(){
    if ($('div#table > div > div > label').text() == "LISTA DE PRODUTOS") {
        CreateForm_Product('')
        $('input#name').focus()
    }
})

//SEARCH
$('input#searchtext').on('keyup',function(){
    if ($('div#table > div > div > label').text() == "LISTA DE PRODUTOS") {
        SearchText_Product($('input#searchtext').val())
    } 
})

$('input#searchtext').on('change',function(){
    if ($('div#table > div > div > label').text() == "LISTA DE PRODUTOS") {
        SearchText_Product($('input#searchtext').val())
    } 
})

// $('input#searchtext').blur(function(){
//     if ($('div#table > div > div > label').text() == "LISTA DE VENDEDORES" && $('#function').attr('style') != 'display:none') {
//         SearchText_Product($('input#searchtext').val())
//     } 
// })

function SearchText_Product(search){
    if (search == '') {
        CreateTable_Product()
    } else {
        
        $.ajax({
            url: `http://www.visualbox.com.br:21314/api/v1/product/search`,
            type: 'POST',
            dataType: "json",
            data: JSON.stringify({
                name: search
            }),
            contentType: 'application/json',
            success: function(data) {
                
                console.log(data)
                CreateTable(CreateTableHeader_Product)
                PopulateTable(data,CreateTableRow_Product)
            }
        });
        
    }
}