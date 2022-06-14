//FORM OPEN
$('button#newid').on('click',function(){
    if ($('div#table > div > div > label').text() == "LISTA DE USUÁRIOS") {
        CreateForm_User('')
        $('input#name').focus()
    }
})

//SEARCH
$('input#searchtext').on('keyup',function(){
    if ($('div#table > div > div > label').text() == "LISTA DE USUÁRIOS") {
        SearchText_User($('input#searchtext').val())
    } 
})

$('input#searchtext').on('change',function(){
    if ($('div#table > div > div > label').text() == "LISTA DE USUÁRIOS") {
        SearchText_User($('input#searchtext').val())
    } 
})

// $('input#searchtext').blur(function(){
//     if ($('div#table > div > div > label').text() == "LISTA DE VENDEDORES" && $('#function').attr('style') != 'display:none') {
//         SearchText_User($('input#searchtext').val())
//     } 
// })

function SearchText_User(search){
    if (search == '') {
        CreateTable_User()
    } else {
        
        $.ajax({
            url: `http://www.visualbox.com.br:21314/api/v1/user/search`,
            type: 'POST',
            dataType: "json",
            data: JSON.stringify({
                name: search
            }),
            contentType: 'application/json',
            success: function(data) {
                
                console.log(data)
                CreateTable(CreateTableHeader_User)
                PopulateTable(data,CreateTableRow_User)
            }
        });
        
    }
}