let requestID

function CreateForm_Request(id){
    requestID = id
    
    if (id == '') {
        PopulateForm_Request('')
        requestID = ''
    } else {
        $.getJSON(`${APIUrl}/api/v1/request/${id}`, function(data) {
            PopulateForm_Request(data[0])
        })
    }
}

function GetClientList(){  
    $.ajax({
        url: `${APIUrl}/api/v1/client`,
        dataType: "json",
        success: function(data) {

            $.each(data,function(index,data){
                $(
                    `<option id="${data.ID}" cpf="${data.cpf}" cnpj="${data.cnpj}" value="${data.name}"></option>`
                ).appendTo($('datalist#client'))                    
            })
        }
    });
}

function GetSellerList(){  
    $.ajax({
        url: `${APIUrl}/api/v1/seller`,
        dataType: "json",
        success: function(data) {

            $.each(data,function(index,data){
                $(
                    `<option id="${data.ID}" value="${data.name}"></option>`
                ).appendTo($('datalist#seller'))                    
            })
        }
    });
}

function PopulateForm_Request(data){
    $('div#form > div > form > div').remove()//.contents(':not("#form-title")').remove()
    let number = ''
    let client = ''
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
    
    let seller = ''
    
    let sdate = ''
    let fdate = ''
    
    let meter = ''
    
    let finance = ''
    let nf = ''
    
    if (data.REnumber != null) {number = data.REnumber}  
    if (data.CLname != null) {client = data.CLname} 
    if (data.CLcpf != null) {cpf = data.CLcpf} 
    if (data.CLcnpj != null) {cnpj = data.CLcnpj} 
    
    if (data.REcep != null) {cep = data.REcep} 
    if (data.REstreet != null) {street = data.REstreet} 
    if (data.REnum != null) {num = data.REnum} 
    if (data.REcom != null) {com = data.REcom} 
    if (data.REbuilding != null) {building = data.REbuilding} 
    if (data.REdistrict != null) {district = data.REdistrict} 
    if (data.REcity != null) {city = data.REcity} 
    if (data.REuf != null) {uf = data.REuf} 
    
    if (data.REseller != null) {seller = data.REseller} 
    
    if (data.REsdate != null) {sdate = data.REsdate} 
    if (data.REfdate != null) {fdate = data.REfdate} 
    
    if (data.REpayment != null) {finance = data.REpayment} 
    if (data.REnf != null) {nf = data.REnf} 
    
    ShowForm()
    $(
        FormTitle('DADOS DO PEDIDO')+
        FormSubTitle('PEDIDO')+
        FormField('number','NÚMERO',number,'25')+
        FormBreakLine()+
        
        FormSubTitle('CLIENTE')+
        FormSelect('client','NOME',TitleCase(client),'50')+
        FormField('cpf','CPF',cpf,'20')+
        FormField('cnpj','CNPJ',cnpj,'29')+
        FormBreakLine()+
        
        FormSubTitle('ENDEREÇO')+
        FormField('cep','CEP',cep,'15')+
        FormField('street','ENDEREÇO',TitleCase(street),'50')+
        FormField('num','Nº',num,'10')+
        FormField('com','COMPLEMENTO',com,'25')+
        FormBreakLine()+
        FormField('building','EDIFÍCIL',TitleCase(building),'30')+
        FormField('district','BAIRRO',TitleCase(district),'30')+
        FormField('city','CIDADE',TitleCase(city),'30')+
        FormField('uf','UF',uf,'10')+
        FormBreakLine()+
        
        FormSubTitle('VENDEDOR')+
        FormSelect('seller','NOME',cep,'50')+
        FormBreakLine()+
        
        FormSubTitle('DATAS')+
        FormField('sdate','INICIAL',sdate,'25')+
        FormField('fdate','FINAL',fdate,'25')+
        FormBreakLine()+
        
        // FormSubTitle('METRAGEM')+
        // FormField('meters','M²',meter,'25')+
        // FormBreakLine()+
        
        FormSubTitle('FINANCEIRO')+
        FormField('finance','VALOR DO PEDIDO',finance,'25')+
        FormField('nf','NOTA FISCAL',nf,'25')+
        FormBreakLine()+
        
        FormButtons()+
        FormBreakLine()
         
    ).appendTo($('div#form > div > form'))
    ConfigForm_Request()
    
    GetClientList()
    GetSellerList()
}

function ConfigForm_Request(){
    // $('field').mask('mask', optionalnumeric -> {reverse:true}).attr({
    //     "max" : 15,
    //     "min" : 15,
    //     "inputmode" : "any",
    //     "autocomplete" : "on or off",
    //     "placeholder" : "any"
    // }).prop('required',true);
    
    $('input#number').attr({
        "inputmode" : "numeric",
        "autocomplete" : "none",
        "placeholder" : "Nº Pedido"
    }).prop('required',true);
    
    $('input#inputclient').attr({
        "minlength" : 3,
        "autocomplete" : "none",
        "placeholder" : "Nome do Cliente"
    }).prop('required',true);
    
    $('input#cpf').mask('000.000.000-00', {reverse:true}).attr({
        "readonly" : 'true',
        "maxlength" : 15,
        "minlength" : 15,
        "inputmode" : "numeric",
        "autocomplete" : "none",
        "placeholder" : "000.000.000-00"
    }).prop('required',false);
    
    $('input#cnpj').mask('00.000.000/0000-00', {reverse:true}).attr({
        "readonly" : 'true',
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
    }).prop('required',true);
    
    $('input#street').attr({
        "min" : 3,
        "inputmode" : "text",
        "autocomplete" : "none",
        "placeholder" : "Endereço (sem número ou complemento)"
    }).prop('required',true);
    
    $('input#num').mask('00000000').attr({
        "min" : 1,
        "inputmode" : "numeric",
        "autocomplete" : "none",
        "placeholder" : "Nº"
    }).prop('required',true);
    
    $('input#com').attr({
        "inputmode" : "text",
        "autocomplete" : "none",
        "placeholder" : "Ex.: Apto, etc."
    }).prop('required',false);
    
    $('input#building').attr({
        "inputmode" : "text",
        "autocomplete" : "none",
        "placeholder" : "Ex.: Residencial, etc."
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
    
    $('#inputseller').attr({
        "minlength" : 3,
        "autocomplete" : "none",
        "placeholder" : "Nome do vendedor"
    }).prop('required',true);
    
    $('input#sdate').mask('00/00/0000', {reverse:false}).attr({
        "max" : 10,
        "min" : 10,
        "inputmode" : "numeric",
        "autocomplete" : "none",
        "placeholder" : "00/00/0000"
    }).prop('required',true);
    
    $('input#fdate').mask('00/00/0000', {reverse:false}).attr({
        "max" : 10,
        "min" : 10,
        "inputmode" : "numeric",
        "autocomplete" : "none",
        "placeholder" : "00/00/0000"
    }).prop('required',true);
    
    $('input#meter').mask('0,000', {reverse:true}).attr({
        "min" : 5,
        "inputmode" : "numeric",
        "autocomplete" : "none",
        "placeholder" : "0,000 m²"
    }).prop('required',true);
    
    $('input#finance').mask('R$ 0.000.000,00', {reverse:true}).attr({
        "inputmode" : "numeric",
        "autocomplete" : "none",
        "placeholder" : "R$ 0,00"
    }).prop('required',true);
    
    $('input#nf').attr({
        "inputmode" : "numeric",
        "autocomplete" : "none",
        "placeholder" : "Nota fiscal"
    })//.prop('required',true);
}

function CheckClient(){

}

$(document).on(`change`,'input', function(){
    try {
        //VALIDATE CLIENT
        let clientVal = $("#inputclient").val();
        let validateClient = $("datalist#client").find("option[value='" + clientVal + "']");

        if (validateClient != null && validateClient.length > 0) {

            let cpf = ''    
            let cnpj = ''

            $(`#inputclient`).removeClass('form-control-error')

            cpf = $("datalist#client").find("option[value='" + clientVal + "']").attr('cpf')
            cnpj = $("datalist#client").find("option[value='" + clientVal + "']").attr('cnpj')

            if (cpf != 'null') {$('#cpf').val(cpf)}
            if (cnpj != 'null') {$('#cnpj').val(cnpj)}

        } else if (validateClient != null && validateClient.length == 0 && clientVal.length > 0) {
            if (clientVal.length != 0) {$(`#inputclient`).addClass('form-control-error')}
        }

        //VALIDATE SELLER
        let sellerVal = $("#inputseller").val();
        let validateSeller = $("datalist#seller").find("option[value='" + sellerVal + "']");

        $(`#inputseller`).removeClass('form-control-error')

        if (validateSeller != null && validateSeller.length > 0) {

        } else if (validateSeller != null && validateSeller.length == 0 && sellerVal.length > 0) {
            if (sellerVal.length != 0) {$(`#inputseller`).addClass('form-control-error')}
        }
    } catch {}
})


$(document).on(`focus`,'input', function(){
    if ($(`#inputclient`).is(`:focus`)) {
        $('#inputclient').val('')
        $('#cpf').val('')
        $('#cnpj').val('')
    }
    if ($(`#inputseller`).is(`:focus`)) {
        $('#inputseller').val('')
    }
})


//SUBMIT
$('form').on('submit',function(e){
    e.preventDefault
    
    if ($('#nav-request').hasClass('active')) {
        const formData = GetFormData(requestID)
        
        console.log(formData)
        console.log('ID: '+formData.id)
        
        if (formData.id > 0) {
            RequestUpdate(formData)
        } else {
            RequestPost(formData)
        }
    }
})

// function RequestUpdate(formData){
//     $.ajax({
//         url: `${APIUrl}/api/v1/request/update`,
//         type: "POST",
//         data: JSON.stringify(formData),
//         dataType: "json",
//         contentType: 'application/json',
//         success: function(response) {
//             console.log('Request update success')
//             PageState()
            
//             $('.toast').toast('show')
//             $('#toast').text('Pedido atualizado com sucesso!') 
//         },
        
//         error: function(error) {
//             console.log('Request update failed',error)
//             $('.toast').toast('show')
//             $('#toast').text('Pedido não atualizado, servidor indisponível! Por favor, contate KingHost!')
//         }
//     });
// }

// function RequestPost(formData){
//     $.ajax({
//         url: `${APIUrl}/api/v1/request/post`,
//         type: "POST",
//         data: JSON.stringify(formData),
//         dataType: "json",
//         contentType: 'application/json',
//         success: function(response) {
//             console.log('Request post success')
//             PageState()
            
//             $('.toast').toast('show')
//             $('#toast').text('Pedido cadastrado com sucesso!')
//         },
        
//         error: function(error) {
//             console.log('Request post failed',error)
//             $('.toast').toast('show')
//             $('#toast').text('Pedido não cadastrado, servidor indisponível! Por favor, contate KingHost!')
//         }
//     });
// }

