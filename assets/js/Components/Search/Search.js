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
    
    if (selector == 'responsible') {
        if (text == '') {
            GetTable_Responsible('')
        } else {
            GetTable_Responsible(text)
        }   
    }
    
    if (selector == 'product') {
        if (text == '') {
            GetTable_Product('')
        } else {
            GetTable_Product(text)
        }   
    }
    
    if (selector == 'finance') {
        if (text == '') {
            // GetTable_Finance('')
        } else {
            // GetTable_Finance(text)
        }   
    }
    
    if (selector == 'user') {
        if (text == '') {
            GetTable_User('')
        } else {
            GetTable_User(text)
        }   
    }
    
    setTimeout(function(){
        if ($('form').is(':visible')) {$('div#table').hide()}
    },500)
    
    setTimeout(function(){
        if ($('form').is(':visible')) {$('div#table').hide()}
    },1000)
    
    setTimeout(function(){
        if ($('form').is(':visible')) {$('div#table').hide()}
    },2000)
}

//$('#nav-client').hasClass('active')

// $.getJSON(`${APIUrl}/api/v1/request/${id}`, function(data) {
//             PopulateForm_Request(data[0])
// })