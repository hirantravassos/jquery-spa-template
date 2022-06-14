function CreateForm_User(id){  
    if (id == '') {
        PopulateForm_User('')
    } else {
        $.ajax({
            url: `http://www.visualbox.com.br:21314/api/v1/user/${id}`,
            dataType: "json",
            success: function(data) {
                
                console.log(data)
                PopulateForm_User(data)
            }
        });
    }
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
        FormField('password','SENHA',password,'40')+
        FormField('password-check','CONFIRME A SENHA','','40')+
        FormButton('password-button','MODIFICAR A SENHA',19)+
        FormBreakLine()+
        
        FormSubTitle('AUTENTICAÇÃO')+
        FormField('auth','NÍVEL',auth,'50')+
        FormBreakLine()+
        
        FormButtons()+
        FormBreakLine()
         
    ).appendTo($('div#form > div > form'))
    ConfigForm_User()
}

function ConfigForm_User(){
    // $('field').mask('mask', optionalnumeric -> {reverse:true}).attr({
    //     "max" : 15,
    //     "min" : 15,
    //     "inputmode" : "any",
    //     "autocomplete" : "on or off",
    //     "placeholder" : "any"
    // }).prop('required',true);
    
    $('input#firstname').attr({
        "minlength" : 3,
        "autocomplete" : "none",
        "placeholder" : "Primeiro Nome do Usuário"
    }).prop('required',true);
    
    $('input#lastname').attr({
        "minlength" : 3,
        "autocomplete" : "none",
        "placeholder" : "Sobrenome do Usuário"
    }).prop('required',true);
    
    $('input#password').attr({
        "type" : "password",
        "minlength" : 4,
        "maxlength" : 4,
        "inputmode" : "numeric",
        "autocomplete" : "none",
        "placeholder" : "Senha de 4 Dígitos Númericos"
    }).prop('required',true);
    
    $('input#password-check').attr({
        "type" : "password",
        "minlength" : 4,
        "maxlength" : 4,
        "inputmode" : "numeric",
        "autocomplete" : "none",
        "placeholder" : "••••"
    }).prop('required',true);
    
    $('input#auth').attr({
        "minlength" : 1,
        "autocomplete" : "none",
        "placeholder" : "Ex: Gestor, Gerente, Padrão."
    }).prop('required',true);
    
}

$('body').on("click", function(e){
    const thiselement = e.target.id
    if (thiselement == `sumbit`) {
        //HideForm()
    }
}); 

