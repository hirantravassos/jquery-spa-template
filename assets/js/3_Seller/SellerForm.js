function CreateForm_Seller(id){
    currentForm = 'seller'
    currentForm2 = ''
    
    if (id == '') {
        PopulateForm_Seller('')
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
        
        FormControl()+
        FormBreakLine()
         
    ).appendTo($('div#form > div > form'))
    ConfigForm_Seller()
}

function ConfigForm_Seller(){
    $('input#name').attr({
        "minlength" : 3,
        "autocomplete" : "none",
        "placeholder" : "Nome do Vendedor"
    }).prop('required',false);
}

$('div#form').on('change','input', function(){
    if (currentForm == 'seller') {
        SubmitSeller('change')
    }
})

$('div#form').on('focus','input', function(){
    setTimeout(function(){
        if (currentForm == 'seller') {
            SubmitSeller('focus')
        }
    },100)
})

$('div#form').on('submit',function(e){
    e.preventDefault()
    
    if (currentForm == 'seller') {
        SubmitSeller('submit')
    }
})

function SubmitSeller(event) {
    let allowSubmit
    
    if (event == 'submit') {
        allowSubmit = true
    } else {
        allowSubmit = false
    }
    
    let name = $('#name').val()
    if (name.length > 4 || (name == '' && event != 'submit')) {
        $(`#name`).removeClass('form-control-error')

        $('div#form form button#submit').prop('disabled',false)
        $('div#form form button#submit').text('SALVAR E SAIR')

    } else {
        $(`#name`).addClass('form-control-error')

        $('div#form form button#submit').prop('disabled',true)
        $('div#form form button#submit').text('CAMPOS INCORRETOS!')
        allowSubmit = false
    }
    
    if (allowSubmit && event == 'submit') {
        FormSubmit(currentID,'seller')
    }
}
