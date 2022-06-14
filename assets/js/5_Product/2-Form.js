function CreateForm_Product(id){  
    if (id == '') {
        PopulateForm_Product('')
    } else {
        $.ajax({
            url: `http://www.visualbox.com.br:21314/api/v1/product/${id}`,
            dataType: "json",
            success: function(data) {
                
                console.log(data)
                PopulateForm_Product(data)
            }
        });
    }
}

function PopulateForm_Product(data){
    $('div#form > div > form > div').remove()//.contents(':not("#form-title")').remove()
    
    let name = ``
    
    try {
        if (data.name != null || data != '') {name = data.name}
    } catch {
        name = ''
    }
    
    ShowForm()
    $(
        FormTitle('DADOS DO PRODUTO')+
        FormSubTitle('PRODUTO')+
        FormField('name','NOME',name,'100')+
        FormBreakLine()+
        
        FormButtons()+
        FormBreakLine()
         
    ).appendTo($('div#form > div > form'))
    ConfigForm_Product()
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
    }).prop('required',true);
    
}

$('body').on("click", function(e){
    const thiselement = e.target.id
    if (thiselement == `sumbit`) {
        //HideForm()
    }
}); 

