let currentID
let currentForm

//VISIBILITY
function ShowForm(){
    currentID2 = ''
    $('div#function').hide(350)
    $('div#table').hide(350)
    
    setTimeout(function(){
        $('div#form').show(350)
    },200)
}

function HideForm(){
    $('div#form').hide(350)
    $('div#table2').hide(350)
    
    setTimeout(function(){
        $('div#function').show(350)
        $('div#table').show(350) 
    },200)

    setTimeout(function(){
        window.scrollTo(0, scrollPosition)
    },350)
    
    currentID = ''
}

//EVENTS (NOT SUBMIT)
$('div#form').on('focus','input', function($e){
    const target = $($e.target)
    const targetAttr = $($e.target).attr('list')

    if (typeof targetAttr !== 'undefined' && targetAttr !== false) {
        target.val('')
    }
})

//BUTTONS
$('body').on("click", function(e){
    const thiselement = e.target.id
    if (thiselement == `back`) {
        HideForm()
    }
}); 

//FUNCTIONS
$('div#function button#newid').on('click',function(){
    const selector = GetCookie('lastPage').substring(4)
    currentForm = selector
    currentID = ''
    
    //client
    if (selector == 'client') {
        CreateForm_Client('')
        setTimeout(function(){
            $('div#form input').first().focus()
        },350)
    }
    
    if (selector == 'request') {
        CreateForm_Request('')
        GetTable_OS()
        setTimeout(function(){
            $('div#form input').first().focus()
        },450)
    }
    
    if (selector == 'seller') {
        CreateForm_Seller('')
        setTimeout(function(){
            $('div#form input').first().focus()
        },350)
    }
    
    if (selector == 'responsible') {
        CreateForm_Responsible('')
        setTimeout(function(){
            $('div#form input').first().focus()
        },350)
    }
    
    if (selector == 'product') {
        CreateForm_Product('')
        setTimeout(function(){
            $('div#form input').first().focus()
        },350)
    }
    
    if (selector == 'finance') {
        CreateForm_Finance('')
        setTimeout(function(){
            $('div#form input').first().focus()
        },350)
    }
    
    if (selector == 'user') {
        CreateForm_User('')
        setTimeout(function(){
            $('div#form input').first().focus()
        },350)
    }
})

//SUBMIT FUNCTION
function FormSubmit(id,table){
    const selector = GetCookie('lastPage').substring(4)
    const formInput = $("div#form form input")
    
    let submitData = '{"ID":"' + id + '",'
    submitData += '"user":"' + GetCookie('id') + '",'

    $.each(formInput, function(index, field){
        //FILTER IF NECESSARY
        if (selector == `request` && field.id == 'client') {
            valueInstead = $(`div#form #${field.id}`).next().find(`option[value="${field.value}"]`).attr('id')
            submitData += ('"'+field.id + '":"' + valueInstead + '",');
        } 
        else if (selector == `request` && field.id == 'seller') {
            valueInstead = $(`div#form #${field.id}`).next().find(`option[value="${field.value}"]`).attr('id')
            submitData += ('"'+field.id + '":"' + valueInstead + '",');
        } 
        
        //DEFAULT
        else {
            submitData += ('"'+field.id + '":"' + field.value + '",');
        }
    })

    submitData = submitData.substring(0, submitData.length - 1);
    submitData += '}'
    submitData = eval('('+submitData+')')
    
    console.log(submitData)
    
    let url
    
    if (id > 0) {
        url = `${APIUrl}/api/v1/${table}/update`
    } else {
        url = `${APIUrl}/api/v1/${table}/post`
    }
    
    console.log(id, url)

    $.ajax({
        url: url,
        type: "POST",
        data: JSON.stringify(submitData),
        dataType: "json",
        contentType: 'application/json',
        success: function(response) {
            console.log(url.split('/').pop()+' success')
            // PageState()
            
            currentID = ''
            currentID2 = ''
            currentForm = ''
            currentForm2 = ''
            $('.toast').toast('show')
            $('#toast').text('Atualizado com sucesso!') 
            
            currentID = response.ID
        },
        
        error: function(error) {
            console.log(url.split('/').pop()+' failed',error)
            $('.toast').toast('show')
            $('#toast').text('Servidor indisponível! Por favor, contate KingHost!')
        }
    });
    
    $('div#container-form').addClass('div-form-success')
    window.scrollTo(0,0)
    $('div#table').hide(350)
    $('div#table2').hide(350)
    
    setTimeout(function(){
        $('div#form').hide(350)
    },3150)
    
    setTimeout(function(){
        $(`a#nav-${selector}`).click()
        $('div#container-form').removeClass('div-form-success')
        
        setTimeout(function(){
            if (selector === "request") {
                CreateForm_Request(currentID)
            }
        },350)
    },3500)
}