let password_old

function CreateForm_Password(id){
    currentForm = 'user'
    currentForm2 = 'password'

    $.getJSON(`${APIUrl}/api/v1/password/${id}`, function(data) {
        PopulateForm_Password(data)
    })
}

function PopulateForm_Password(data){
    $('div#form2 > div > form > div').remove()//.contents(':not("#form-title")').remove()
    
    if (data.password == null) {data = data[0]}
    
    let password = ``
    
    try {
        if (data.password != null || data != '') {password_old = data.password}
    } catch {}
    
    ShowForm2()
    $(
        FormTitle('MUDANÇA DE SENHA')+
        
        FormSubTitle('SENHA')+
        FormField('password','SENHA ATUAL','','50')+
        FormBreakLine()+
        
        FormSubTitle('NOVA SENHA')+
        FormField('password-new','SENHA','','50')+
        FormField('password-check','CONFIRME A NOVA SENHA','','50')+
        FormBreakLine()+

        FormControl2()+
        FormBreakLine()

    ).appendTo($('div#form2 > div > form'))

    ConfigForm_Password()
}

function ConfigForm_Password(){
    // $('field').mask('mask', optionalnumeric -> {reverse:true}).attr({
    //     "max" : 15,
    //     "min" : 15,
    //     "inputmode" : "any",
    //     "autocomplete" : "on or off",
    //     "placeholder" : "any"
    // }).prop('required',true);
    
    $('input#password').attr({
        "type" : "password",
        "minlength" : 4,
        "maxlength" : 4,
        "inputmode" : "numeric",
        "autocomplete" : "new-password",
        "placeholder" : "Senha antiga"
    }).prop('required',false);
    
    $('input#password-new').attr({
        "type" : "password",
        "minlength" : 4,
        "maxlength" : 4,
        "inputmode" : "numeric",
        "autocomplete" : "new-password",
        "placeholder" : "Senha de 4 dígitos númericos"
    }).prop('required',false);
    
    $('input#password-check').attr({
        "type" : "password",
        "minlength" : 4,
        "maxlength" : 4,
        "inputmode" : "numeric",
        "autocomplete" : "new-password",
        "placeholder" : "••••"
    }).prop('required',false);
}

$('div#form2').on('change','input', function(){
    if (currentForm == 'user' && currentForm2 == 'password') {
        SubmitPassword('change')
    }
})

$('div#form2').on('focus','input', function(){
    setTimeout(function(){
        if (currentForm == 'user' && currentForm2 == 'password') {
            SubmitPassword('focus')
        }
    },100)
})

$('div#form2').on('submit',function(e){
    e.preventDefault()
    
    if (currentForm == 'user' && currentForm2 == 'password') {
        SubmitPassword('submit')
    }
})

function SubmitPassword(event) {
    let allowSubmit
    
    if (event == 'submit') {
        allowSubmit = true
    } else {
        allowSubmit = false
    }
    
    let password = $('div#form2 #password').val()
    if ((password.length == 4 && password == password_old && password != '') || (password == '' && event != 'submit')) {
        $(`#password`).removeClass('form-control-error')

        $('div#form2 form button#submit2').prop('disabled',false)
        $('div#form2 form button#submit2').text('SALVAR E SAIR')

    } else {
        $(`#password`).addClass('form-control-error')

        $('div#form2 form button#submit2').prop('disabled',true)
        $('div#form2 form button#submit2').text('CAMPOS INCORRETOS!')
        allowSubmit = false
    }
    
    let password_new = $('div#form2 #password-new').val()
    if ((password_new.length == 4 && password_new != '') || 
        (password == '' && password_new == '' && event != 'submit') || 
        (password_new == '' && event != 'submit')) {
        $(`#password-new`).removeClass('form-control-error')

        $('div#form2 form button#submit2').prop('disabled',false)
        $('div#form2 form button#submit2').text('SALVAR E SAIR')

    } else {
        $(`#password-new`).addClass('form-control-error')

        $('div#form2 form button#submit2').prop('disabled',true)
        $('div#form2 form button#submit2').text('CAMPOS INCORRETOS!')
        allowSubmit = false
    }
    
    let password_check = $('div#form2 #password-check').val()
    if ((password_check.length == 4 && password_new == password_check) || 
        (password_check == '' && event != 'submit')) {
        $(`#password-check`).removeClass('form-control-error')

        $('div#form2 form button#submit2').prop('disabled',false)
        $('div#form2 form button#submit2').text('SALVAR E SAIR')

    } else {
        $(`#password-check`).addClass('form-control-error')

        $('div#form2 form button#submit2').prop('disabled',true)
        $('div#form2 form button#submit2').text('CAMPOS INCORRETOS!')
        allowSubmit = false
    }
    
    if (allowSubmit && event == 'submit') {
        FormSubmit(currentID,'password')
        password_old = ''
    }
}