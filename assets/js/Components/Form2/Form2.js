let currentID2
let currentForm2

//VISIBILITY
function ShowForm2(){
    $('div#form').hide(350)
    
    if ($('div#form2').is(':visible')) {
        $('div#form2').hide(350)
    }
    
    setTimeout(function(){
        $('div#form2').show(350)
    },200)
}

function HideForm2(){
    $('div#form2').hide(350)
    
    setTimeout(function(){
        $('div#form').show(350)
    },200)

    setTimeout(function(){
        window.scrollTo(0, scrollPosition)
    },350)
    
    currentForm2 = ''
    currentID2 = ''
}

//EVENTS (NOT SUBMIT)
$('div#form2').on('focus','input', function($e){
    const target = $($e.target)
    const targetAttr = $($e.target).attr('list')

    if (typeof targetAttr !== 'undefined' && targetAttr !== false) {
        target.val('')
    }
})

//BUTTONS
$('body').on("click", function(e){
    const thiselement = e.target.id
    if (thiselement == `back2`) {
        HideForm2()
    }
}); 

//FUNCTIONS
$('div#table2 button').on('click',function(){
    const selector = GetCookie('lastPage').substring(4)
    currentForm2 = selector
    currentID2 = ''
    
    //client
    if (selector == 'client') {
        CreateForm_Client('')
        setTimeout(function(){
            $('div#form2 input').first().focus()
        },350)
    }
    
    if (selector == 'request') {
        CreateForm_OS('')
        setTimeout(function(){
            $('div#form2 input').first().focus()
        },450)
    }
    
    if (selector == 'seller') {
        CreateForm_Seller('')
        setTimeout(function(){
            $('div#form2 input').first().focus()
        },350)
    }
    
    if (selector == 'responsible') {
        CreateForm_Responsible('')
        setTimeout(function(){
            $('div#form2 input').first().focus()
        },350)
    }
    
    if (selector == 'product') {
        CreateForm_Product('')
        setTimeout(function(){
            $('div#form2 input').first().focus()
        },350)
    }
    
    if (selector == 'finance') {
        CreateForm_Finance('')
        setTimeout(function(){
            $('div#form2 input').first().focus()
        },350)
    }
    
    if (selector == 'user') {
        CreateForm_User('')
        setTimeout(function(){
            $('div#form2 input').first().focus()
        },350)
    }
})

//SUBMIT FUNCTION
function FormSubmit2(id,table){
    const selector = GetCookie('lastPage').substring(4)
    const formInput = $("div#form2 form input")
    
    let submitData = '{"ID":"' + id + '",'
    submitData += '"user":"' + GetCookie('id') + '",'
    
    product = $(`div#form2 #product`).next().find(`option[value="${$(`div#form2 #product`).val()}"]`).attr('id')
    submitData += '"product":"' + product + '",'
    
    // responsible = $(`div#form2 #responsible`).next().find(`option[value="${$(`div#form2 #responsible`).val()}"]`).attr('id')
    // submitData += '"responsible":"' + responsible + '",'
    
    status = $(`div#form2 #status`).next().find(`option[value="${$(`div#form2 #status`).val()}"]`).attr('id')
    submitData += '"status":"' + status + '",'
    
    if (table == 'os') {
        submitData += '"request":"' + currentID + '",'
    }

    $.each(formInput, function(index, field){
        if (field.id == 'product' || 
            field.id == 'responsible' || 
            field.id == 'status') {
            
        } else {
            submitData += ('"'+field.id + '":"' + field.value + '",');
        }
    })
    
    const tableTr = $("div#form2 table#material tr")
    if (table == 'os') {
        
        submitData += ('"material":[');
        $.each(tableTr, function(index, field){
            submitData += ('{');

            tableID = 'material_factory'
            tableValue = $(`div#form2 table#material tr:nth-child(${index+1}) td:nth-child(1) input`).val()
            submitData += ('"'+tableID + '":"' + tableValue + '",'); 

            tableID = 'material_sdate'
            tableValue = $(`div#form2 table#material tr:nth-child(${index+1}) td:nth-child(2) input`).val()
            submitData += ('"'+tableID + '":"' + tableValue + '",'); 

            tableID = 'material_fdate'
            tableValue = $(`div#form2 table#material tr:nth-child(${index+1}) td:nth-child(3) input`).val()
            submitData += ('"'+tableID + '":"' + tableValue + '",'); 

            tableID = 'material_obs'
            tableValue = $(`div#form2 table#material tr:nth-child(${index+1}) td:nth-child(4) input`).val()
            submitData += ('"'+tableID + '":"' + tableValue + '"'); 

            submitData += ('},');
        })
        submitData = submitData.substring(0, submitData.length - 1);
        submitData += (']');
    }

    submitData += '}'
    console.log(submitData)
    
    submitData = eval('('+submitData+')')
    
    console.log(submitData)
    
    let url
    
    if (id > 0) {
        url = `${APIUrl}/api/v1/${table}/update`
    } else {
        url = `${APIUrl}/api/v1/${table}/post`
    }
    
    console.log(id, url)
    console.log(submitData)
    
    $.ajax({
        url: url,
        type: "POST",
        data: JSON.stringify(submitData),
        dataType: "json",
        contentType: 'application/json',
        success: function(response) {
            console.log(url.split('/').pop()+' success')
            //PageState()
            
            currentID2 = ''
            currentForm2 = ''
            $('.toast').toast('show')
            $('#toast').text('Atualizado com sucesso!') 
        },
        
        error: function(error) {
            console.log(url.split('/').pop()+' failed',error)
            $('.toast').toast('show')
            $('#toast').text('Servidor indisponível! Por favor, contate KingHost!')
        }
    });
    
    $('div#container-form2').addClass('div-form-success')
    window.scrollTo(0,0)
    
    setTimeout(function(){
        $('div#form2').hide(350)
    },3000)
    
    setTimeout(function(){
        // $(`a#nav-${selector}`).click()
        $('div#form').show(350)
        $('div#container-form2').removeClass('div-form-success')
    },3500)
}