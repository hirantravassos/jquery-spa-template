function CreateForm_Client(id){
    currentForm = 'client'
    currentForm2 = ''
    
    if (id == '') {
        PopulateForm_Client('')
    } else {
        $.getJSON(`${APIUrl}/api/v1/client/${id}`, function(data) {
            PopulateForm_Client(data)
        })
    }
}

function PopulateForm_Client(data){
    $('div#form > div > form > div').remove()//.contents(':not("#form-title")').remove()
    let name = ''
    let cpf = ''
    let cnpj = ''
    
    let cep = ''
    let street = ''
    let num = ''
    let com = ''
    let building = ''
    let district = ''
    let city = ''
    let uf = ''
    
    let email = ''
    let phone = ''
    let cellphone = ''
    let cellphone2 = ''
    
    if (data.name != null) {name = data.name} 
    if (data.cpf != null) {cpf = data.cpf} 
    if (data.cnpj != null) {cnpj = data.cnpj} 
    
    if (data.cep != null) {cep = data.cep} 
    if (data.street != null) {street = data.street} 
    if (data.num != null) {num = data.num} 
    if (data.com != null) {com = data.com} 
    if (data.building != null) {building = data.building} 
    if (data.district != null) {district = data.district} 
    if (data.city != null) {city = data.city} 
    if (data.uf != null) {uf = data.uf} 
    
    if (data.email != null) {email = data.email} 
    if (data.phone != null) {phone = data.phone} 
    if (data.cellphone != null) {cellphone = data.cellphone} 
    if (data.cellphone2 != null) {cellphone2 = data.cellphone2} 
    
    ShowForm()
    $(
        FormTitle('DADOS DO CLIENTE')+
        FormSubTitle('IDENTIDADE')+
        FormField('name','NOME',TitleCase(name),'50')+
        FormField('cpf','CPF',cpf,'20')+
        FormField('cnpj','CNPJ',cnpj,'29')+
        FormBreakLine()+
        
        FormSubTitle('ENDEREÇO')+
        FormField('cep','CEP',cep,'15')+
        FormField('street','ENDEREÇO',TitleCase(street),'50')+
        FormField('num','Nº',num,'10')+
        FormField('com','COMPLEMENTO',TitleCase(com),'25')+
        FormBreakLine()+
        FormField('building','EDIFÍCIL',TitleCase(building),'30')+
        FormField('district','BAIRRO',TitleCase(district),'30')+
        FormField('city','CIDADE',TitleCase(city),'30')+
        FormField('uf','UF',uf,'10')+
        FormBreakLine()+
        
        FormSubTitle('CONTATO')+
        FormField('email','EMAIL',email,'100')+
        FormBreakLine()+
        FormField('phone','TELEFONE RESIDENCIAL',phone,'30')+
        FormField('cellphone','CELULAR',cellphone,'35')+
        FormField('cellphone2','CELULAR 2',cellphone2,'35')+
        FormBreakLine()+
        
        FormControl()+
        FormBreakLine()
         
    ).appendTo($('div#form > div > form'))
    ConfigForm_Client()
}

function ConfigForm_Client(){
    // $('field').mask('mask', optionalnumeric -> {reverse:true}).attr({
    //     "max" : 15,
    //     "min" : 15,
    //     "inputmode" : "any",
    //     "autocomplete" : "on or off",
    //     "placeholder" : "any"
    // }).prop('required',false);
    
    $('input#name').attr({
        "minlength" : 3,
        "autocomplete" : "none",
        "placeholder" : "Nome do Cliente",
        "onkeyup" : "$(this).val(TitleCase($(this).val()))"
    }).prop('required',false);
    
    $('input#cpf').mask('000.000.000-00', {reverse:true}).attr({
        "maxlength" : 15,
        "minlength" : 15,
        "inputmode" : "numeric",
        "autocomplete" : "none",
        "placeholder" : "000.000.000-00"
    }).prop('required',false);
    
    $('input#cnpj').mask('00.000.000/0000-00', {reverse:true}).attr({
        "maxlength" : 18,
        "minlength" : 18,
        "inputmode" : "numeric",
        "autocomplete" : "none",
        "placeholder" : "00.000.000/0000-00"
    }).prop('required',false);
    
    $('input#cep').mask('00000-000', {reverse:true}).attr({
        "max" : 9,
        "min" : 9,
        "inputmode" : "numeric",
        "autocomplete" : "none",
        "placeholder" : "00000-000",
        "onkeyup":"GetCorreioAdress($(this).val())"
    }).prop('required',false);
    
    $('input#street').attr({
        "min" : 3,
        "inputmode" : "text",
        "autocomplete" : "none",
        "placeholder" : "Endereço (sem número ou complemento)",
        "onkeyup" : "$(this).val(TitleCase($(this).val()))",
        "onchange" : "$(this).val(TitleCase($(this).val()))"
    }).prop('required',false);
    
    $('input#num').mask('00000000').attr({
        "min" : 1,
        "inputmode" : "numeric",
        "autocomplete" : "none",
        "placeholder" : "Nº"
    }).prop('required',false);
    
    $('input#com').attr({
        "inputmode" : "text",
        "autocomplete" : "none",
        "placeholder" : "Ex.: Apto, etc.",
        "onkeyup" : "$(this).val(TitleCase($(this).val()))"
    }).prop('required',false);
    
    $('input#building').attr({
        "inputmode" : "text",
        "autocomplete" : "none",
        "placeholder" : "Ex.: Residencial, etc.",
        "onkeyup" : "$(this).val(TitleCase($(this).val()))"
    }).prop('required',false);
    
    $('input#district').attr({
        "inputmode" : "text",
        "autocomplete" : "none",
        "placeholder" : "Bairro"
    }).prop('required',false);
    
    $('input#city').attr({
        "inputmode" : "text",
        "autocomplete" : "none",
        "placeholder" : "Cidade"
    }).prop('required',false);
    
    $('input#uf').mask('XX', {
        translation: {
          'X': {
            pattern: /[A-Za-z]/, optional: true
          }
        }}).attr({
        "inputmode" : "text",
        "style" : "text-transform: uppercase;",
        "autocomplete" : "none",
        "placeholder" : "Ex: SP."
    }).prop('required',false);
    
    $('input#email').attr({
        "inputmode" : "email",
        "autocomplete" : "none",
        "placeholder" : "nome@email.com"
    }).prop('required',false);
    
    $('input#phone').mask('(00) 0000-0000').attr({
        "inputmode" : "email",
        "autocomplete" : "none",
        "placeholder" : "(00) 0000-0000"
    }).prop('required',false);
    
    $('input#cellphone').mask('(00) 00000-0000').attr({
        "inputmode" : "numeric",
        "autocomplete" : "none",
        "placeholder" : "(00) 00000-0000"
    }).prop('required',false);
    
    $('input#cellphone2').mask('(00) 00000-0000').attr({
        "inputmode" : "numeric",
        "autocomplete" : "none",
        "placeholder" : "(00) 00000-0000"
    }).prop('required',false);
    
    // console.log(currentID)
}

$('div#form').on('change','input', function(){
    if (currentForm == 'client') {
        SubmitClient('change')
    }
})

$('div#form').on('focus','input', function(){
    setTimeout(function(){
        if (currentForm == 'client') {
            SubmitClient('focus')
        }
    },100)
})

$('div#form').on('submit',function(e){
    e.preventDefault()
    
    if (currentForm == 'client') {
        SubmitClient('submit')
    }
})

function SubmitClient(event) {
    let allowSubmit
    
    if (event == 'submit') {
        allowSubmit = true
    } else {
        allowSubmit = false
    }
    
    //VALIDATE NAME
    let name = $('#name').val()
    if (name.length > 0 || (name == '' && event != 'submit')) {
        $(`#name`).removeClass('form-control-error')

        $('div#form form button#submit').prop('disabled',false)
        $('div#form form button#submit').text('SALVAR E SAIR')

    } else {
        $(`#name`).addClass('form-control-error')

        $('div#form form button#submit').prop('disabled',true)
        $('div#form form button#submit').text('CAMPOS INCORRETOS!')
        allowSubmit = false
    }
    
    //VALIDATE CEP
    let cep = $('#cep').val()
    if (cep.length == 9 || (cep == '' && event != 'submit')) {
        $(`#cep`).removeClass('form-control-error')

        $('div#form form button#submit').prop('disabled',false)
        $('div#form form button#submit').text('SALVAR E SAIR')

    } else {
        $(`#cep`).addClass('form-control-error')

        $('div#form form button#submit').prop('disabled',true)
        $('div#form form button#submit').text('CAMPOS INCORRETOS!')
        allowSubmit = false
    }
    
    //VALIDATE STREET
    let street = $('#street').val()
    if (street.length > 4 || (street == '' && event != 'submit')) {
        $(`#street`).removeClass('form-control-error')

        $('div#form form button#submit').prop('disabled',false)
        $('div#form form button#submit').text('SALVAR E SAIR')

    } else {
        $(`#street`).addClass('form-control-error')

        $('div#form form button#submit').prop('disabled',true)
        $('div#form form button#submit').text('CAMPOS INCORRETOS!')
        allowSubmit = false
    }
    
    //VALIDATE NUM
    let num = $('#num').val()
    if (num.length > 0 || (num == '' && event != 'submit')) {
        $(`#num`).removeClass('form-control-error')

        $('div#form form button#submit').prop('disabled',false)
        $('div#form form button#submit').text('SALVAR E SAIR')

    } else {
        $(`#num`).addClass('form-control-error')

        $('div#form form button#submit').prop('disabled',true)
        $('div#form form button#submit').text('CAMPOS INCORRETOS!')
        allowSubmit = false
    }
    
    //VALIDATE CONTACT
    let phone = $('#phone').val()
    let cellphone = $('#cellphone').val()
    let cellphone2 = $('#cellphone2').val()
    
    if ((phone.length == 14 || cellphone.length == 15 || cellphone2.length == 15) || 
        ((phone.length == '' || cellphone.length == '' || cellphone2.length == '') && event != 'submit')) {
        $(`#phone`).removeClass('form-control-error')
        $(`#cellphone`).removeClass('form-control-error')
        $(`#cellphone2`).removeClass('form-control-error')

        $('div#form form button#submit').prop('disabled',false)
        $('div#form form button#submit').text('SALVAR E SAIR')

    } else {
        $(`#phone`).addClass('form-control-error')
        $(`#cellphone`).addClass('form-control-error')
        $(`#cellphone2`).addClass('form-control-error')

        $('div#form form button#submit').prop('disabled',true)
        $('div#form form button#submit').text('CAMPOS INCORRETOS!')
        allowSubmit = false
    }
    
    if (allowSubmit && event == 'submit') {
        FormSubmit(currentID,'client')
    }
}

