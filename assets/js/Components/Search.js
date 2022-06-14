//SEARCH
$('input#searchtext').on('keyup',function(){
    setTimeout(function(){
        Search($('input#searchtext').val())
    },100)
})

$('input#searchtext').on('change',function(){
    Search($('input#searchtext').val())
})

function Search(text){
    const selector = GetCookie('lastPage').substring(4)
    
    if (text == null) {text = ''}

    if (selector == 'client') {
        if (text == '') {
            GetTable_Client('')
        } else {
            GetTable_Client(text)
        }   
    }
    
    if (selector == 'request') {
        if (text == '') {
            GetTable_Request('')
        } else {
            GetTable_Request(text)
        }   
    }
    
    if (selector == 'seller') {
        if (text == '') {
            GetTable_Seller('')
        } else {
            GetTable_Seller(text)
        }   
    }
}

//$('#nav-client').hasClass('active')

// $.getJSON(`${APIUrl}/api/v1/request/${id}`, function(data) {
//             PopulateForm_Request(data[0])
// })