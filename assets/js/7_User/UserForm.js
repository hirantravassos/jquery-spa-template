function CreateForm_User(id){
    currentForm = 'user'
    currentForm2 = ''
    
    if (id == '') {
        PopulateForm_User('')
    } else {
        $.getJSON(`${APIUrl}/api/v1/user/${id}`, function(data) {
            PopulateForm_User(data)
        })
    }
}

function Select_Auth(val){
    $(
        `<option id="${0}" value="${'Padrão'}">`+
        `<option id="${1}" value="${'Gerente'}">`+
        `<option id="${2}" value="${'Gestor'}">`
    ).appendTo($('datalist#data-auth'))

    try {
        //$('#auth').val($(`datalist#data-status option[value="${val}"]`).val())
    } catch {}
}

function PopulateForm_User(data){
    $('div#form > div > form > div').remove()//.contents(':not("#form-title")').remove()
    
    let firstname = ``
    let lastname = ``
    let password = ``
    let auth = ``
    
    try {
        if (data.firstname != null || data != '') {firstname = data.firstname}
        if (data.lastname != null || data != '') {lastname = data.lastname}
        if (data.password != null || data != '') {password = data.password}
        if (data.auth != null || data != '') {auth = data.auth}
    } catch {}
    

    ShowForm()
    $(
        FormTitle('DADOS DO USUÁRIO')+
        FormSubTitle('USUÁRIO')+
        FormField('firstname','PRIMEIRO NOME',firstname,'50')+
        FormField('lastname','SOBRENOME',lastname,'50')+
        FormBreakLine()+

        FormSubTitle('SENHA')+
        FormField('password','SENHA','','50')+
        FormField('password-check','CONFIRME A SENHA','','50')+
        FormButton('password-button','MODIFICAR A SENHA',49)+
        FormBreakLine()+

        FormSubTitle('AUTENTICAÇÃO')+
        FormSelect('auth','NÍVEL',auth,'50')+
        FormBreakLine()+

        FormControl()+
        FormBreakLine()

    ).appendTo($('div#form > div > form'))

    ConfigForm_User()
    Select_Auth()
    $('#auth').val(auth)
}

function ConfigForm_User(){
    // $('field').mask('mask', optionalnumeric -> {reverse:true}).attr({
    //     "max" : 15,
    //     "min" : 15,
    //     "inputmode" : "any",
    //     "autocomplete" : "on or off",
    //     "placeholder" : "any"
    // }).prop('required',true);
    
    if (currentID != '') {
        // $('#lastname').val('')
        $('#password').val('')
        
        $('#password').prev().remove()
        $('#password-check').prev().remove()
        $('#password').remove()
        $('#password-check').remove()
        
    } else {
        $('#password-button').remove()
    }
    
    $('input#firstname').attr({
        "minlength" : 3,
        "autocomplete" : "new-password",
        "placeholder" : "Primeiro Nome do Usuário"
    }).prop('required',false);
    
    $('input#lastname').attr({
        "minlength" : 3,
        "autocomplete" : "new-password",
        "placeholder" : "Sobrenome do Usuário"
    }).prop('required',false);
    
    $('input#password').attr({
        "type" : "password",
        "minlength" : 4,
        "maxlength" : 4,
        "inputmode" : "numeric",
        "autocomplete" : "new-password",
        "placeholder" : "Senha de 4 Dígitos Númericos"
    }).prop('required',false);
    
    $('input#password-check').attr({
        "type" : "password",
        "minlength" : 4,
        "maxlength" : 4,
        "inputmode" : "numeric",
        "autocomplete" : "new-password",
        "placeholder" : "••••"
    }).prop('required',false);
    
    $('input#auth').attr({
        "minlength" : 1,
        "autocomplete" : "new-password",
        "placeholder" : "Ex: Gestor, Gerente, Padrão."
    }).prop('required',false);
    
}

$('div#form').on('click','button', function(e){
    if (currentForm == 'user' && e.target.id == 'password-button') {
        CreateForm_Password(currentID)
    }
})

$('div#form').on('change','input', function(){
    if (currentForm == 'user'  && currentForm2 == '') {
        SubmitUser('change')
    }
})

$('div#form').on('focus','input', function(){
    setTimeout(function(){
        if (currentForm == 'user'  && currentForm2 == '') {
            SubmitUser('focus')
        }
    },100)
})

$('div#form').on('submit',function(e){
    e.preventDefault()
    
    if (currentForm == 'user' && currentForm2 == '') {
        SubmitUser('submit')
    }
})

function SubmitUser(event) {
    let allowSubmit
    
    if (event == 'submit') {
        allowSubmit = true
    } else {
        allowSubmit = false
    }
    
    let firstname = $('#firstname').val()
    if (firstname.length > 4 || (firstname == '' && event != 'submit')) {
        $(`#firstname`).removeClass('form-control-error')

        $('div#form form button#submit').prop('disabled',false)
        $('div#form form button#submit').text('SALVAR E SAIR')

    } else {
        $(`#firstname`).addClass('form-control-error')

        $('div#form form button#submit').prop('disabled',true)
        $('div#form form button#submit').text('CAMPOS INCORRETOS!')
        allowSubmit = false
    }
    
    let lastname = $('#lastname').val()
    if (lastname.length > 4 || (lastname == '' && event != 'submit')) {
        $(`#lastname`).removeClass('form-control-error')

        $('div#form form button#submit').prop('disabled',false)
        $('div#form form button#submit').text('SALVAR E SAIR')

    } else {
        $(`#lastname`).addClass('form-control-error')

        $('div#form form button#submit').prop('disabled',true)
        $('div#form form button#submit').text('CAMPOS INCORRETOS!')
        allowSubmit = false
    }
    
    let password = $('#password').val()
    if (password.length == 4 || (password == '' && event != 'submit')) {
        $(`#password`).removeClass('form-control-error')

        $('div#form form button#submit').prop('disabled',false)
        $('div#form form button#submit').text('SALVAR E SAIR')

    } else {
        $(`#password`).addClass('form-control-error')

        $('div#form form button#submit').prop('disabled',true)
        $('div#form form button#submit').text('CAMPOS INCORRETOS!')
        allowSubmit = false
    }
    
    let password_check = $('#password-check').val()
    if ((password_check.length == 4 && password == password_check && password != '') || (password_check == '' && event != 'submit')) {
        $(`#password-check`).removeClass('form-control-error')

        $('div#form form button#submit').prop('disabled',false)
        $('div#form form button#submit').text('SALVAR E SAIR')

    } else {
        $(`#password-check`).addClass('form-control-error')

        $('div#form form button#submit').prop('disabled',true)
        $('div#form form button#submit').text('CAMPOS INCORRETOS!')
        allowSubmit = false
    }
    
    let auth = $('#auth').val()
    if (auth.length > 4 || (auth == '' && event != 'submit')) {
        $(`#auth`).removeClass('form-control-error')

        $('div#form form button#submit').prop('disabled',false)
        $('div#form form button#submit').text('SALVAR E SAIR')

    } else {
        $(`#auth`).addClass('form-control-error')

        $('div#form form button#submit').prop('disabled',true)
        $('div#form form button#submit').text('CAMPOS INCORRETOS!')
        allowSubmit = false
    }
    
    if (allowSubmit && event == 'submit') {
        FormSubmit(currentID,'user')
    }
}



