function CreateForm_Request(id){
    currentForm = 'request'
    currentForm2 = ''
    
    if (id == '') {
        PopulateForm_Request('')
    } else {
        $.getJSON(`${APIUrl}/api/v1/request/${id}`, function(data) {
            PopulateForm_Request(data[0])
        })
    }
}

function Select_Client(id){
    $.getJSON(`${APIUrl}/api/v1/client-custom/list/`, function(data) {
        $.each(data,function(index,data){
            
            let name = ''
            let cpf = ''
            let cnpj = ''
            
            if (data.name != null) {name = data.name}
            if (data.cpf != null) {cpf = data.cpf}
            if (data.cnpj != null) {cnpj = data.cnpj}
            
            $(
                `<option id="${data.ID}" value="${TitleCase(name)}" cpf="${cpf}" cnpj="${cnpj}">`
            ).appendTo($('datalist#data-client'))
        })
        $('#client').val($(`datalist#data-client option[id=${id}]`).val())
    })
}

function Select_Seller(id){
    $.getJSON(`${APIUrl}/api/v1/seller/`, function(data) {
        $.each(data,function(index,data){
            $(
                `<option id="${data.ID}" value="${TitleCase(data.name)}">`
            ).appendTo($('datalist#data-seller'))
        })
        $('#seller').val($(`datalist#data-seller option[id=${id}]`).val())
    })
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
    
    if (data.number != null) {number = data.number}  
    if (data.client != null) {client = data.client} 
    
    if (data.cep != null) {cep = data.cep} 
    if (data.street != null) {street = TitleCase(data.street)} 
    if (data.num != null) {num = data.num} 
    if (data.com != null) {com = data.com} 
    if (data.building != null) {building = TitleCase(data.building)} 
    if (data.district != null) {district = TitleCase(data.district)} 
    if (data.city != null) {city = TitleCase(data.city)} 
    if (data.uf != null) {uf = data.uf} 
    
    if (data.seller != null) {seller = data.seller} 
    
    if (data.sdate != null) {sdate = $.format.date(new Date(data.sdate),'dd/MM/yyyy')} 
    if (data.fdate != null) {fdate = $.format.date(new Date(data.fdate),'dd/MM/yyyy')} 
    
    if (data.finance != null) {finance = data.finance} 
    if (data.data != null) {nf = data.nf} 
    
    ShowForm()
    $(
        FormTitle('DADOS DO PEDIDO')+
        FormSubTitle('PEDIDO')+
        FormField('number','NÚMERO',number,'25')+
        FormBreakLine()+
        
        FormSubTitle('CLIENTE')+
        FormSelect('client','NOME','','50')+
        FormField('cpf','CPF',cpf,'20')+
        FormField('cnpj','CNPJ',cnpj,'29')+
        FormBreakLine()+
        
        FormSubTitle('ENDEREÇO')+
        FormField('cep','CEP',cep,'15')+
        FormField('street','ENDEREÇO',street,'50')+
        FormField('num','Nº',num,'10')+
        FormField('com','COMPLEMENTO',com,'25')+
        FormBreakLine()+
        FormField('building','EDIFÍCIO',building,'30')+
        FormField('district','BAIRRO',district,'30')+
        FormField('city','CIDADE',city,'30')+
        FormField('uf','UF',uf,'10')+
        FormBreakLine()+
        
        FormSubTitle('VENDEDOR')+
        FormSelect('seller','NOME','','50')+
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
        
        FormSubTitle('IMAGENS')+
        FormImage('new-image','IMAGEM','ADICIONAR IMAGEM','100')+
        FormBreakLine()+
        
        FormControl()+
        FormBreakLine()
         
    ).appendTo($('div#form > div > form'))
    ConfigForm_Request()
    
    //Necessary Queries
    if (currentID > 0) {Select_Client(client)} else {Select_Client()}
    if (currentID > 0) {Select_Seller(seller)} else {Select_Seller()}
    if (currentID > 0) {GetImage(currentID,'')}
    if (currentID > 0) {GetTable_OS()}
    
    console.log(currentID)
    if (currentID > 0) {
        $('button#new-image').removeAttribute("disabled")
        $('button#new-image').text('ADICIONAR IMAGEM')
    } else {
        $('button#new-image').prop("disabled",true)
        $('button#new-image').text('PARA ADICIONAR, POR FAVOR SALVE PRIMEIRO!')
    }
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
        "autocomplete" : "new-password",
        "placeholder" : "Nº Pedido"
    }).prop('required',false);
    
    $('input#client').attr({
        "minlength" : 3,
        "autocomplete" : "new-password",
        "placeholder" : "Nome do Cliente"
    }).prop('required',false);
    
    $('input#cpf').mask('000.000.000-00', {reverse:true}).attr({
        "readonly" : 'true',
        "disabled" : 'true',
        "minlength" : 15,
        "inputmode" : "numeric",
        "autocomplete" : "none",
        "placeholder" : "000.000.000-00"
    }).prop('required',false);
    
    $('input#cnpj').mask('00.000.000/0000-00', {reverse:true}).attr({
        "readonly" : 'true',
        "disabled" : 'true',
        "minlength" : 18,
        "inputmode" : "numeric",
        "autocomplete" : "none",
        "placeholder" : "00.000.000/0000-00"
    }).prop('required',false);
    
    $('input#cep').mask('00000-000', {reverse:true}).attr({
        "max" : 9,
        "min" : 9,
        "inputmode" : "numeric",
        "autocomplete" : "new-password",
        "placeholder" : "00000-000",
        "onkeyup":"GetCorreioAdress($(this).val())"
    }).prop('required',false);
    
    $('input#street').attr({
        "min" : 3,
        "inputmode" : "text",
        "autocomplete" : "new-password",
        "placeholder" : "Endereço (sem número ou complemento)"
    }).prop('required',false);
    
    $('input#num').mask('00000000').attr({
        "min" : 1,
        "inputmode" : "numeric",
        "autocomplete" : "new-password",
        "placeholder" : "Nº"
    }).prop('required',false);
    
    $('input#com').attr({
        "inputmode" : "text",
        "autocomplete" : "new-password",
        "placeholder" : "Ex.: Apto, etc."
    }).prop('required',false);
    
    $('input#building').attr({
        "inputmode" : "text",
        "autocomplete" : "new-password",
        "placeholder" : "Ex.: Residencial, etc."
    }).prop('required',false);
    
    $('input#district').attr({
        "inputmode" : "text",
        "autocomplete" : "new-password",
        "placeholder" : "Bairro"
    }).prop('required',false);
    
    $('input#city').attr({
        "inputmode" : "text",
        "autocomplete" : "new-password",
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
        "autocomplete" : "new-password",
        "placeholder" : "Ex: SP."
    }).prop('required',false);
    
    $('#seller').attr({
        "minlength" : 3,
        "autocomplete" : "new-password",
        "placeholder" : "Nome do vendedor"
    }).prop('required',false);
    
    $('input#sdate').mask('00/00/0000', {reverse:false}).attr({
        "max" : 10,
        "min" : 10,
        "inputmode" : "numeric",
        "autocomplete" : "new-password",
        "placeholder" : "00/00/0000"
    }).prop('required',false);
    
    $('input#fdate').mask('00/00/0000', {reverse:false}).attr({
        "max" : 10,
        "min" : 10,
        "inputmode" : "numeric",
        "autocomplete" : "new-password",
        "placeholder" : "00/00/0000"
    }).prop('required',false);
    
    $('input#finance').mask('R$ 0 000 000,00', {reverse:true}).attr({
        "inputmode" : "numeric",
        "autocomplete" : "new-password",
        "placeholder" : "R$ 0,00"
    }).prop('required',false);
    
    $('input#nf').attr({
        "inputmode" : "numeric",
        "autocomplete" : "new-password",
        "placeholder" : "Nota fiscal"
    })//.prop('required',true);
}

$('div#form').on('change','input', function(){
    if (currentForm == 'request') {
        SubmitRequest('change')
    }
})

$('div#form').on('focus','input', function(){
    setTimeout(function(){
        if (currentForm == 'request') {
            SubmitRequest('focus')
        }
    },100)
})

$('div#form').on('submit',function(e){
    e.preventDefault()
    
    if (currentForm == 'request') {
        SubmitRequest('submit')
    }
})

function SubmitRequest(event) {
    let allowSubmit
    
    if (event == 'submit') {
        allowSubmit = true
    } else {
        allowSubmit = false
    }
    
    //VALIDATE NUMBER
    let number = $('#number').val()
    if (number.length > 0 || (number == '' && event != 'submit')) {
        $(`#number`).removeClass('form-control-error')

        $('div#form form button#submit').prop('disabled',false)
        $('div#form form button#submit').text('SALVAR E SAIR')

    } else {
        $(`#number`).addClass('form-control-error')

        $('div#form form button#submit').prop('disabled',true)
        $('div#form form button#submit').text('CAMPOS INCORRETOS!')
        allowSubmit = false
    }
    
    //VALIDATE CLIENT
    let clientValue = $("#client").val();
    let clientCPF = $("datalist#data-client").find(`option[value="${clientValue}"]`).attr('cpf');
    let clientCNPJ = $("datalist#data-client").find(`option[value="${clientValue}"]`).attr('cnpj');
    let clientValidate = $("datalist#data-client").find(`option[value="${clientValue}"]`).length;

    if ((clientValue != null && clientValue != '' && clientValidate > 0) || (clientValue == '' && event != 'submit')) {
        $(`#client`).removeClass('form-control-error')

        $('#cpf').val(clientCPF)
        $('#cnpj').val(clientCNPJ)

        $('div#form form button#submit').prop('disabled',false)
        $('div#form form button#submit').text('SALVAR E SAIR')

    } else {
        $(`#client`).addClass('form-control-error')

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

    //VALIDATE SELLER
    let sellerValue = $("#seller").val();
    let sellerValidate = $("datalist#data-seller").find(`option[value="${sellerValue}"]`).length;

    if ((sellerValue != null && sellerValue != '' && sellerValidate > 0) || (sellerValue == '' && event != 'submit')) {
        $(`#seller`).removeClass('form-control-error')

        $('div#form form button#submit').prop('disabled',false)
        $('div#form form button#submit').text('SALVAR E SAIR')

    } else {
        $(`#seller`).addClass('form-control-error')

        $('div#form form button#submit').prop('disabled',true)
        $('div#form form button#submit').text('CAMPOS INCORRETOS!')
        allowSubmit = false
    }

    //VALIDATE START DATE
    let sDate = $('#sdate').val()
    if (ValidDate(sDate) || (sDate == '' && event != 'submit')) {
        $(`#sdate`).removeClass('form-control-error')

        $('div#form form button#submit').prop('disabled',false)
        $('div#form form button#submit').text('SALVAR E SAIR')

    } else {
        $(`#sdate`).addClass('form-control-error')

        $('div#form form button#submit').prop('disabled',true)
        $('div#form form button#submit').text('CAMPOS INCORRETOS!')
        allowSubmit = false
    }
    
    //VALIDATE FINAL DATE
    let fDateValue = $('#fdate').val()
    
    sDate = sDate.split("/")
    sDate = new Date(sDate[2], sDate[1] - 1, sDate[0])
    
    fDate = fDateValue.split("/")
    fDate = new Date(fDate[2], fDate[1] - 1, fDate[0])
    
    let compareDates = fDate > sDate
    
    if ((ValidDate(fDateValue) && compareDates) || (fDateValue == '' && event != 'submit')) {
        $(`#fdate`).removeClass('form-control-error')

        $('div#form form button#submit').prop('disabled',false)
        $('div#form form button#submit').text('SALVAR E SAIR')

    } else {
        $(`#fdate`).addClass('form-control-error')

        $('div#form form button#submit').prop('disabled',true)
        $('div#form form button#submit').text('CAMPOS INCORRETOS!')
        allowSubmit = false
    }
    
    //VALIDATE FINANCE
    let finance = $('#finance').val()
    if (finance.length > 4 || (finance == '' && event != 'submit')) {
        $(`#finance`).removeClass('form-control-error')

        $('div#form form button#submit').prop('disabled',false)
        $('div#form form button#submit').text('SALVAR E SAIR')

    } else {
        $(`#finance`).addClass('form-control-error')

        $('div#form form button#submit').prop('disabled',true)
        $('div#form form button#submit').text('CAMPOS INCORRETOS!')
        allowSubmit = false
    }
    
    if (allowSubmit && event == 'submit') {
        FormSubmit(currentID,'request')
    }
}


