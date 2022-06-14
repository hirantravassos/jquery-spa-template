let sellerID

function CreateForm_Seller(id){
    sellerID = id
    
    if (id == '') {
        PopulateForm_Seller('')
        sellerID = ''
    } else {
        $.getJSON(`${APIUrl}/api/v1/seller/${id}`, function(data) {
            PopulateForm_Seller(data)
        })
    }
}

function PopulateForm_Seller(data){
    $('div#form > div > form > div').remove()//.contents(':not("#form-title")').remove()
    
    let name = ``
    
    if (data.name != null) {name = data.name} 
    
    ShowForm()
    $(
        FormTitle('DADOS DO VENDEDOR')+
        FormSubTitle('VENDEDOR')+
        FormField('name','NOME',TitleCase(name),'100')+
        FormBreakLine()+
        
        FormButtons()+
        FormBreakLine()
         
    ).appendTo($('div#form > div > form'))
    ConfigForm_Seller()
}

function ConfigForm_Seller(){
    $('input#name').attr({
        "minlength" : 3,
        "autocomplete" : "none",
        "placeholder" : "Nome do Vendedor"
    }).prop('required',true);
}

//SUBMIT
$('form').on('submit',function(e){
    e.preventDefault
    
    if ($('#nav-seller').hasClass('active')) {
        const formData = GetFormData(sellerID)
        
        console.log(formData)
        console.log('ID: '+formData.id)
        
        if (formData.id > 0) {
            SellerUpdate(formData)
        } else {
            SellerPost(formData)
        }
    }
})

function SellerUpdate(formData){
    $.ajax({
        url: `${APIUrl}/api/v1/seller/update`,
        type: "POST",
        data: JSON.stringify(formData),
        dataType: "json",
        contentType: 'application/json',
        success: function(response) {
            console.log('Seller update success')
            PageState()
            
            $('.toast').toast('show')
            $('#toast').text('Vendedor atualizado com sucesso!') 
        },
        
        error: function(error) {
            console.log('Seller update failed',error)
            $('.toast').toast('show')
            $('#toast').text('Vendedor não atualizado, servidor indisponível! Por favor, contate KingHost!')
        }
    });
}

function SellerPost(formData){
    $.ajax({
        url: `${APIUrl}/api/v1/seller/post`,
        type: "POST",
        data: JSON.stringify(formData),
        dataType: "json",
        contentType: 'application/json',
        success: function(response) {
            console.log('Seller post success')
            PageState()
            
            $('.toast').toast('show')
            $('#toast').text('Vendedor cadastrado com sucesso!')
        },
        
        error: function(error) {
            console.log('Seller post failed',error)
            $('.toast').toast('show')
            $('#toast').text('Vendedor não cadastrado, servidor indisponível! Por favor, contate KingHost!')
        }
    });
}
