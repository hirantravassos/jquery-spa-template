function CreateForm_User1(id){  
    if (id == '') {
        PopulateForm_User('')
    } else {
        $.ajax({
            url: `http://www.visualbox.com.br:21314/api/v1/user/${id}`,
            dataType: "json",
            success: function(data) {
                
                console.log(data)
                PopulateForm_User1(data)
            }
        });
    }
}

function PopulateForm_User1(data){
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
    
    ShowForm1()
    $(
        FormTitle1('DADOS DO USUÁRIO')+
        FormSubTitle1('USUÁRIO')+
        FormField1('firstname','PRIMEIRO NOME',firstname,'50')+
        FormField1('lastname','SOBRENOME',lastname,'50')+
        FormBreakLine1()+
        
        FormSubTitle1('SENHA')+
        FormField1('password','SENHA',password,'50')+
        FormField1('password-check','CONFIRME A SENHA','','50')+
        FormBreakLine1()+
        
        FormSubTitle1('AUTENTICAÇÃO')+
        FormField1('auth','NÍVEL',auth,'50')+
        FormBreakLine1()+
        
        FormButtons1()+
        FormBreakLine1()
         
    ).appendTo($('div#form > div > form'))
    ConfigForm_User1()
}

function ConfigForm_User1(){
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
}

$('body').on("click", function(e){
    const thiselement = e.target.id
    if (thiselement == `sumbit-1`) {
        //HideForm()
    }
}); 

