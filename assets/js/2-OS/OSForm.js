function CreateForm_OS(id){
    currentForm = 'request'
    currentForm2 = 'os'
    
    if (id == '') {
        $.ajax({
        url: `${APIUrl}/api/v1/os/post`,
        type: "POST",
        data: JSON.stringify(),
        dataType: "json",
        contentType: 'application/json',
        success: function(data) {
            currentID2 = data.ID
            PopulateForm_OS('')
        },
        
        error: function(error) {
            console.log(url.split('/').pop()+' failed',error)
            $('.toast').toast('show')
            $('#toast').text('Servidor indisponível! Por favor, contate KingHost!')
        }
    });
    } else {
        $.getJSON(`${APIUrl}/api/v1/os/${id}`, function(data) {
            PopulateForm_OS(data)
        })
    }
}

function Select_Product(id){
    $.getJSON(`${APIUrl}/api/v1/product`, function(data) {
        $.each(data,function(index,data){
            $(
                `<option id="${data.ID}" value="${TitleCase(data.name)}">`
            ).appendTo($('datalist#data-product'))
        })
        try {
            $('#product').val($(`datalist#data-product option[id=${id}]`).val())
        } catch {}
    })
}
function Select_Responsible(id){
    $.getJSON(`${APIUrl}/api/v1/responsible`, function(data) {
        $.each(data,function(index,data){
            $(
                `<option id="${data.ID}" value="${TitleCase(data.name)}">`
            ).appendTo($('datalist#data-responsible'))
        })
        try {
            $('#responsible').val($(`datalist#data-responsible option[id=${id}]`).val())
        } catch {}
    })
}
function Select_Status(id){
    $(
        `<option id="${0}" value="${'Entregue'}">`+
        `<option id="${1}" value="${'Pendente'}">`
    ).appendTo($('datalist#data-status'))

    try {
        $('#status').val($(`datalist#data-status option[id=${id}]`).val())
    } catch {}
}


function PopulateForm_OS(data){  
    const dataObj = data
    try {
        if (data.ID == null) {data = data[0]}
    } catch (error) {console.log(error)}
    
    
    $('div#form2 > div > form > div').remove()//.contents(':not("#form-title")').remove()
    $('div#form2 > div > form > table').remove()
    $('div#form2 > div > form > button').remove()
    
    let product = ''
    let responsible = ''
    let fdate = ''
    let meters = ''
    let status = ''
    let obs = ''
    
    try {
        if (data.number != null) {number = data.number}  
        if (data.product != null) {product = data.product}  
        if (data.responsible != null) {responsible = data.responsible}  
        if (data.meters != null) {meters = data.meters} 

        if (data.fdate != null) {
            fdate = $.format.date(new Date(data.fdate), 'dd/MM/yyyy')
        }
        if (data.status != null) {status = data.status}  
        if (data.obs != null) {
            obs = data.obs
            obs = TitleCase(obs.charAt(0)) + obs.substring(1).toLowerCase();
        }  
    } catch {
        number = $('div#table2 tr').length
        
        if (number != 1) {
            number = parseInt($('div#table2 tr:last-child td').attr('name')) + 1
        }
    }

    ShowForm2()
    $(
        FormTitle('DADOS DA O.S.')+
        FormSubTitle('O.S.')+
        FormField('number','NÚMERO',number,'25')+
        FormSelect('product','PRODUTO','','75')+
        FormBreakLine()+
        
        FormSubTitle('DATA')+
        FormSelect('fdate','DATA DE ENTREGA',fdate,'25')+
        FormBreakLine()+
        
        FormSubTitle('METRAGEM')+
        FormField('meters','M²',meters,'25')+
        FormBreakLine()+
        
        FormSubTitle('OBSERVAÇÕES')+
        FormField('obs','VALOR DO PEDIDO',obs,'100')+
        FormBreakLine()+
        
        FormSubTitle('STATUS')+
        FormSelect('status','STATUS','','25')+
        FormBreakLine()+
        
        FormSubTitle('IMAGENS')+
        Form2Image('new-image2','IMAGEM','ADICIONAR IMAGEM','100')+
        FormBreakLine()+
        
        FormSubTitle('PEDIDO DE MATERIAIS')+
        // FormField(`requestdate`,`SOLICITAÇÃO`,``,`15`)+
        // FormField(`deliverydate`,`ENTREGA`,``,`15`)+
        // FormField(`status`,`STATUS`,``,`15`)+
        // FormField(`obs`,`OBSERVAÇÕES`,``,`39`)+
        // FormMaterial('add-material','Adicionar','15')+
        `<table id="material" style="width:99%">`+
            `<tbody>`+
            `</tbody>`+
        `</table>`+
        `<button id="add-material" type="button" onclick="AddMaterial(this)" style="width:100%">ADICIONAR PEDIDO DE MATERIAL</input>`+
        FormBreakLine()+
        
        FormControl2()+
        FormBreakLine()
         
    ).appendTo($('div#form2 > div > form'))
    
    //Material
    InsertMaterial(dataObj)
    
    //Necessary Queries
    Select_Product(product)
    Select_Responsible(responsible)
    Select_Status(status)
    GetTable_OS2
    if (currentID2 > 0) {GetImage(currentID,currentID2)}
    ConfigForm_OS()
}

function ConfigForm_OS(){
    // $('field').mask('mask', optionalnumeric -> {reverse:true}).attr({
    //     "max" : 15,
    //     "min" : 15,
    //     "inputmode" : "any",
    //     "autocomplete" : "none",
    //     "placeholder" : "any"
    // }).prop('required',true);
    
    $('div#form2 #number').attr({
        "min" : 1,
        "inputmode" : "numeric",
        "autocomplete" : "new-password",
        "placeholder" : "Número da O.S.",
        "disabled" : 'true'
    }).prop('required',false);
    
    $('div#form2 #product').attr({
        "inputmode" : "text",
        "autocomplete" : "new-password",
        "placeholder" : "Nome do produto"
    }).prop('required',false);
    
    $('div#form2 #responsible').attr({
        "inputmode" : "text",
        "autocomplete" : "new-password",
        "placeholder" : "Nome do instalador"
    }).prop('required',false);
    
    $('div#form2 #fdate').mask('00/00/0000').attr({
        "inputmode" : "numeric",
        "autocomplete" : "new-password",
        "placeholder" : "00/00/0000"
    }).prop('required',false);
    
    $('div#form2 #meters').mask('0,000',{reverse:true}).attr({
        "min" : 4,
        "inputmode" : "numeric",
        "autocomplete" : "new-password",
        "placeholder" : "0,000"
    }).prop('required',false);
    
    $('div#form2 #obs').attr({
        "inputmode" : "text",
        "autocomplete" : "new-password",
        "placeholder" : "Observações livres",
        "onkeydown" : "$(this).val(TitleCase(String($(this).val()).charAt(0)) + String($(this).val()).substring(1).toLowerCase())"
    }).prop('required',false);
    
    $('div#form2 #status').attr({
        "inputmode" : "text",
        "autocomplete" : "new-password",
        "placeholder" : "Status da O.S."
    }).prop('required',false);
    
    $(`div#form2 table#material tr td:nth-child(2) input`).mask('00/00/0000').attr({
        "inputmode" : "numeric",
        "autocomplete" : "new-password",
        "placeholder" : "00/00/0000"
    }).prop('required',false);

    $(`div#form2 table#material tr td:nth-child(3) input`).mask('00/00/0000').attr({
        "inputmode" : "numeric",
        "autocomplete" : "new-password",
        "placeholder" : "00/00/0000"
    }).prop('required',false);

    $(`div#form2 table#material tr td:nth-child(1) input`).attr({
        "inputmode" : "text",
        "autocomplete" : "new-password",
        "placeholder" : "Nome da Fábrica"
    }).prop('required',false);

    $(`div#form2 table#material tr td:nth-child(4) input`).attr({
        "inputmode" : "text",
        "autocomplete" : "new-password",
        "placeholder" : "Observações"
    }).prop('required',false);
}

function InsertMaterial(dataObj) {
    //Custom - Materials
    $.each(dataObj,function(index,value){
        let material_factory = ''
        let material_sdate = ''
        let material_fdate = ''
        let material_obs = ''
        
        console.log(value.material_sdate)
        
        if (value.material_factory != null) {material_factory = value.material_factory}
        if (value.material_sdate != null) {material_sdate = $.format.date(new Date(value.material_sdate), 'dd/MM/yyyy')}
        if (value.material_fdate != null) {material_fdate = $.format.date(new Date(value.material_fdate), 'dd/MM/yyyy')}
        if (value.material_obs != null) {material_obs = value.material_obs}
        
        console.log(material_factory,material_sdate,material_fdate,material_obs)
        
        $(
            `<tr >`+
                `<td  tyle="padding:5px;width:15%">`+
                    FormField(``,'Fábrica',material_factory,'100')+
                `</td>`+
                `<td style="padding:5px;width:15%">`+
                    FormField(``,'Solicitação',material_sdate,'100')+
                `</td>`+
                `<td style="padding:5px;width:15%">`+
                    FormField(``,'Recebimento',material_fdate,'100')+
                `</td>`+
                `<td style="padding:5px;width:29%">`+
                    FormField(``,'Observações',material_obs,'100')+
                `</td>`+
                `<td style="padding:5px;width:10%">`+
                    `<button type="button" onclick="RemoveMaterial(this)" style="width:100%;">Remover</input>`+
                `</td>`+
            `</tr>`
        ).appendTo($('table#material tbody'))
    })
}

function AddMaterial(element) {
    $(
        `<tr >`+
            `<td  style="padding:5px;width:15%">`+
                FormField(``,'Fábrica','','100')+
            `</td>`+
            `<td style="padding:5px;width:15%">`+
                FormField(``,'Solicitação','', 'dd/MM/yyyy','100')+
            `</td>`+
            `<td style="padding:5px;width:15%">`+
                FormField(``,'Recebimento','', 'dd/MM/yyyy','100')+
            `</td>`+
            `<td  style="padding:5px;width:29%">`+
                FormField(``,'Observações','','100')+
            `</td>`+
            `<td style="padding:5px;width:10%">`+
                `<button type="button" onclick="RemoveMaterial(this)" style="width:100%;">Remover</input>`+
            `</td>`+
        `</tr>`
    ).appendTo($('table#material tbody'))
    
    $(`div#form2 table#material tr td:nth-child(2) input`).mask('00/00/0000').attr({
        "inputmode" : "numeric",
        "autocomplete" : "new-password",
        "placeholder" : "00/00/0000"
    }).prop('required',false);

    $(`div#form2 table#material tr td:nth-child(3) input`).mask('00/00/0000').attr({
        "inputmode" : "numeric",
        "autocomplete" : "new-password",
        "placeholder" : "00/00/0000"
    }).prop('required',false);

    $(`div#form2 table#material tr td:nth-child(1) input`).attr({
        "inputmode" : "text",
        "autocomplete" : "new-password",
        "placeholder" : "Nome da Fábrica"
    }).prop('required',false);

    $(`div#form2 table#material tr td:nth-child(4) input`).attr({
        "inputmode" : "text",
        "autocomplete" : "new-password",
        "placeholder" : "Observações"
    }).prop('required',false);
}

function RemoveMaterial(element) {
    $(element).parent().parent().remove()
}

$('div#form2').on('change','input', function(){
    if (currentForm2 == 'os') {
        SubmitOS('change')
    }
})

$('div#form2').on('focus','input', function(){
    setTimeout(function(){
        if (currentForm2 == 'os') {
            SubmitOS('focus')
        }
    },100)
})

$('div#form2').on('submit',function(e){
    e.preventDefault()
    
    if (currentForm2 == 'os') {
        SubmitOS('submit')
    }
})

function SubmitOS(event) {
    console.log('submit')
    let allowSubmit
    
    if (event == 'submit') {
        allowSubmit = true
    } else {
        allowSubmit = false
    }
    
    //VALIDATE PRODUCT
    let productValue = $("#product").val();
    let productCPF = $("datalist#data-product").find(`option[value="${productValue}"]`).attr('cpf');
    let productCNPJ = $("datalist#data-product").find(`option[value="${productValue}"]`).attr('cnpj');
    let productValidate = $("datalist#data-product").find(`option[value="${productValue}"]`).length;

    if ((productValue != null && productValue != '' && productValidate > 0) || (productValue == '' && event != 'submit')) {
        $(`#product`).removeClass('form-control-error')

        $('#cpf').val(productCPF)
        $('#cnpj').val(productCNPJ)

        $('div#form2 form button#submit2').prop('disabled',false)
        $('div#form2 form button#submit2').text('SALVAR E SAIR')

    } else {
        $(`#product`).addClass('form-control-error')

        $('div#form2 form button#submit2').prop('disabled',true)
        $('div#form2 form button#submit2').text('CAMPOS INCORRETOS!')
        allowSubmit = false
    }
    
    //VALIDATE RESPONSIBLE
//     let responsibleValue = $("#responsible").val();
//     let responsibleCPF = $("datalist#data-responsible").find(`option[value="${responsibleValue}"]`).attr('cpf');
//     let responsibleCNPJ = $("datalist#data-responsible").find(`option[value="${responsibleValue}"]`).attr('cnpj');
//     let responsibleValidate = $("datalist#data-responsible").find(`option[value="${responsibleValue}"]`).length;

//     if ((responsibleValue != null && responsibleValidate > 0) || 
//         (responsibleValue == '') || 
//         (responsibleValue == '' && event != 'submit')) {
//         $(`#responsible`).removeClass('form-control-error')

//         $('#cpf').val(responsibleCPF)
//         $('#cnpj').val(responsibleCNPJ)

//         $('div#form2 form button#submit2').prop('disabled',false)
//         $('div#form2 form button#submit2').text('SALVAR E SAIR')

//     } else {
//         $(`#responsible`).addClass('form-control-error')

//         $('div#form2 form button#submit2').prop('disabled',true)
//         $('div#form2 form button#submit2').text('CAMPOS INCORRETOS!')
//         allowSubmit = false
//     }
    
    //VALIDATE FINAL DATE
    let fDateValue = $('div#form2 #fdate').val()
    let sDate = $('div#form #sdate').val()
    
    sDate = sDate.split("/")
    sDate = new Date(sDate[2], sDate[1] - 1, sDate[0])
    
    fDate = fDateValue.split("/")
    fDate = new Date(fDate[2], fDate[1] - 1, fDate[0])
    
    let compareDates = fDate > sDate
    
    if ((ValidDate(fDateValue) && compareDates) || (fDateValue == '' && event != 'submit')) {
        $(`div#form2 #fdate`).removeClass('form-control-error')

        $('div#form2 form button#submit2').prop('disabled',false)
        $('div#form2 form button#submit2').text('SALVAR E SAIR')

    } else {
        $(`div#form2 #fdate`).addClass('form-control-error')

        $('div#form2 form button#submit2').prop('disabled',true)
        $('div#form2 form button#submit2').text('CAMPOS INCORRETOS!')
        allowSubmit = false
    }
    
    //VALIDATE METERS
    let meters = $('#meters').val()
    if (meters.length > 4 || (meters == '' && event != 'submit')) {
        $(`#meters`).removeClass('form-control-error')

        $('div#form2 form button#submit2').prop('disabled',false)
        $('div#form2 form button#submit2').text('SALVAR E SAIR')

    } else {
        $(`#meters`).addClass('form-control-error')

        $('div#form2 form button#submit2').prop('disabled',true)
        $('div#form2 form button#submit2').text('CAMPOS INCORRETOS!')
        allowSubmit = false
    }
    
    //VALIDATE STATUS
    let statusValue = $("#status").val();
    let statusCPF = $("datalist#data-status").find(`option[value="${statusValue}"]`).attr('cpf');
    let statusCNPJ = $("datalist#data-status").find(`option[value="${statusValue}"]`).attr('cnpj');
    let statusValidate = $("datalist#data-status").find(`option[value="${statusValue}"]`).length;

    if ((statusValue != null && statusValue != '' && statusValidate > 0) || (statusValue == '' && event != 'submit')) {
        $(`#status`).removeClass('form-control-error')

        $('#cpf').val(statusCPF)
        $('#cnpj').val(statusCNPJ)

        $('div#form2 form button#submit2').prop('disabled',false)
        $('div#form2 form button#submit2').text('SALVAR E SAIR')

    } else {
        $(`#status`).addClass('form-control-error')

        $('div#form2 form button#submit2').prop('disabled',true)
        $('div#form2 form button#submit2').text('CAMPOS INCORRETOS!')
        allowSubmit = false
    }
    
    if (allowSubmit && event == 'submit') {
        $('div#table2').hide(350)
        FormSubmit2(currentID2,'os')
        //CUSTOM
        setTimeout(function(){
            $('div#form2').hide(350)
            CreateForm_Request(currentID)
        },3000)
    }
    

}
