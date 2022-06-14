function CreateForm_Responsible(id){  
    if (id == '') {
        PopulateForm_Responsible('')
    } else {
        $.ajax({
            url: `http://www.visualbox.com.br:21314/api/v1/responsible/${id}`,
            dataType: "json",
            success: function(data) {
                
                PopulateForm_Responsible(data)
            }
        });
    }
}

function PopulateForm_Responsible(data){
    $('div#form > div > form > div').remove()//.contents(':not("#form-title")').remove()
    
    let name = ``
    
    try {
        if (data[0].name != null) {name = data[0].name}
    } catch {
        name = ''
    }
    
    ShowForm()
    $(
        FormTitle('DADOS DO INSTALADOR')+
        FormSubTitle('INSTALADOR')+
        FormField('name','NOME',name,'100')+
        FormBreakLine()+
        
        FormButtons()+
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
    }).prop('required',true);
    
}

$('body').on("click", function(e){
    const thiselement = e.target.id
    if (thiselement == `sumbit`) {
        //HideForm()
    }
}); 

