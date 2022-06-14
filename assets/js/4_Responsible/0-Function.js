//FORM OPEN
$('button#newid').on('click',function(){
    if ($('div#table > div > div > label').text() == "LISTA DE INSTALADORES") {
        CreateForm_Responsible('')
        $('input#name').focus()
    }
})

//SEARCH
$('input#searchtext').on('keyup',function(){
    if ($('div#table > div > div > label').text() == "LISTA DE INSTALADORES") {
        SearchText_Responsible($('input#searchtext').val())
    } 
})

$('input#searchtext').on('change',function(){
    if ($('div#table > div > div > label').text() == "LISTA DE INSTALADORES") {
        SearchText_Responsible($('input#searchtext').val())
    } 
})

// $('input#searchtext').blur(function(){
//     if ($('div#table > div > div > label').text() == "LISTA DE VENDEDORES" && $('#function').attr('style') != 'display:none') {
//         SearchText_Responsible($('input#searchtext').val())
//     } 
// })

function SearchText_Responsible(search){
    if (search == '') {
        CreateTable_Responsible()
    } else {
        
        $.ajax({
            url: `http://www.visualbox.com.br:21314/api/v1/responsible/search`,
            type: 'POST',
            dataType: "json",
            data: JSON.stringify({
                name: search
            }),
            contentType: 'application/json',
            success: function(data) {
                
                console.log(data)
                CreateTable(CreateTableHeader_Responsible)
                PopulateTable(data,CreateTableRow_Responsible)
            }
        });
        
    }
}