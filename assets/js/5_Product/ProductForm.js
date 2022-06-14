function CreateForm_Product(id){
    currentForm = 'product'
    currentForm2 = ''
    
    if (id == '') {
        PopulateForm_Product('')
    } else {
        $.getJSON(`${APIUrl}/api/v1/product/${id}`, function(data) {
            PopulateForm_Product(data)
        })
    }
}

function PopulateForm_Product(data){
    $('div#form > div > form > div').remove()//.contents(':not("#form-title")').remove()
    
    let name = ``
    
    try {
        if (data.name != null) {name = data.name}
    } catch {
        name = ''
    }
    
    ShowForm()
    $(
        FormTitle('DADOS DO PRODUTO')+
        FormSubTitle('PRODUTO')+
        FormField('name','NOME',name,'100')+
        FormBreakLine()+
        
        FormControl()+
        FormBreakLine()
         
    ).appendTo($('div#form > div > form'))
    ConfigForm_Responsible()
}

function ConfigForm_Product(){
    // $('field').mask('mask', optionalnumeric -> {reverse:true}).attr({
    //     "max" : 15,
    //     "min" : 15,
    //     "inputmode" : "any",
    //     "autocomplete" : "on or off",
    //     "placeholder" : "any"
    // }).prop('required',true);
    
    $('input#name').attr({
        "minlength" : 3,
        "autocomplete" : "none",
        "placeholder" : "Nome do Produto"
    }).prop('required',false);
    
}

$('div#form').on('change','input', function(){
    if (currentForm == 'product') {
        SubmitProduct('change')
    }
})

$('div#form').on('focus','input', function(){
    setTimeout(function(){
        if (currentForm == 'product') {
            SubmitProduct('focus')
        }
    },100)
})

$('div#form').on('submit',function(e){
    e.preventDefault()
    
    if (currentForm == 'product') {
        SubmitProduct('submit')
    }
})

function SubmitProduct(event) {
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
        FormSubmit(currentID,'product')
    }
}
