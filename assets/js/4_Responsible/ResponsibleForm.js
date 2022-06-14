function CreateForm_Responsible(id){
    currentForm = 'responsible'
    currentForm2 = ''
    
    if (id == '') {
        PopulateForm_Responsible('')
    } else {
        $.getJSON(`${APIUrl}/api/v1/responsible/${id}`, function(data) {
            PopulateForm_Responsible(data)
        })
    }
}

function PopulateForm_Responsible(data){
    $('div#form > div > form > div').remove()//.contents(':not("#form-title")').remove()
    
    let name = ``
    
    try {
        if (data.name != null) {name = data.name}
    } catch {
        name = ''
    }
    
    ShowForm()
    $(
        FormTitle('DADOS DO INSTALADOR')+
        FormSubTitle('INSTALADOR')+
        FormField('name','NOME',name,'100')+
        FormBreakLine()+
        
        FormControl()+
        FormBreakLine()
         
    ).appendTo($('div#form > div > form'))
    ConfigForm_Responsible()
}

function ConfigForm_Responsible(){
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
        "placeholder" : "Nome do Instalador"
    }).prop('required',false);
}

$('div#form').on('change','input', function(){
    if (currentForm == 'responsible') {
        SubmitResponsible('change')
    }
})

$('div#form').on('focus','input', function(){
    setTimeout(function(){
        if (currentForm == 'responsible') {
            SubmitResponsible('focus')
        }
    },100)
})

$('div#form').on('submit',function(e){
    e.preventDefault()
    
    if (currentForm == 'responsible') {
        SubmitResponsible('submit')
    }
})

function SubmitResponsible(event) {
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
        FormSubmit(currentID,'responsible')
    }
}
