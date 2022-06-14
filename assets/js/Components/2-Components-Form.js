function ShowForm(){
    $('div#function').hide(350)
    $('div#table').hide(350)
    
    setTimeout(function(){
        $('div#form').show(350)
    },200)
    
}
function HideForm(){
    $('div#form').hide(350)
    
    setTimeout(function(){
        $('div#function').show(350)
        $('div#table').show(350) 
    },200)
}

function FormTitle(title){
    return ''+
        `<div>`+
            `<label class="form-label" style="font-size: 24px;font-weight: bold;">${title}</label>`+
        `</div>`
        //'<div style="margin-top: 30px;"></div>'
}

function FormSubTitle(title){
    return ''+
        `<div style="margin-top: 30px;margin-bottom: 10px">`+
            `<label class="form-label" style="font-size: 16px;font-weight: bold;">${title}</label>`+
        `</div>`+
        '<div ></div>'
}

function FormField(id,title,value,widthPercent,mask){
    return ''+
    `<div class="float-start" style="width:${widthPercent}%;padding-right:10px;">`+
        `<label `+
            `class="form-label d-inline-block"`+
            `style="margin-left: 8px;"`+
        `>${title}</label>`+
        `<input `+
            `id="${id}" `+
            `class="form-control d-inline-block" `+
            `type="text" `+
            `value="${value}" `+
        `></input>`+
    `</div>`
}

function FormSelect(id,title,value,widthPercent,mask){
    return ''+
    `<div class="float-start" style="width:${widthPercent}%;padding-right:10px;">`+
        `<label `+
            `class="form-label d-inline-block"`+
            `style="margin-left: 8px;"`+
        `>${title}</label>`+
        `<input `+
            `id="input${id}" `+
            `list="${id}" `+
            `class="form-control d-inline-block" `+
            `type="text" `+
            `value="${value}" `+
        `>`+
            `<datalist id="${id}"> </datalist>`+
        `</input>`+
    `</div>`
}

function FormBreakLine(){
    return ''+
        '<div style="clear:both;"></div>'
}

function FormButton(id,value,widthPercent){
    return ''+
        '<div>'+
            `<button id="${id}" style="width:${widthPercent}%;"  type="button">${value}</button>`+
        '</div>'
}

function FormButtons(){
    return ''+
        '<div>'+
            '<button id="changelog" type="button">HISTÓRICO</button>'+
        '</div>'+
        '<div>'+
            '<button id="back" type="button">SAIR</button>'+
        '</div>'+
        '<div>'+
            '<button id="sumbit" type="submit">SALVAR E SAIR</button>'+
        '</div>'
        
}

$('body').on("click", function(e){
    const thiselement = e.target.id
    if (thiselement == `back`) {
        HideForm()
    }
}); 

$('body').on("click", function(e){
    e.preventDefault
    const thiselement = e.target.id
    if (thiselement == `submit`) {
        $("#form div div form div div input").each(function() {
            console.log($("#form div div form div div input").val())
        });
    }
}); 

function GetFormData(id) {
    let formData = ''

    let submitData = '{"id":"' + id + '",'
    submitData += '"user":"' + GetCookie('id') + '",'

    $.each($("div#form form input"), function(i, field){
        submitData += ('"'+field.id + '":"' + field.value + '",');
    })

    submitData = submitData.substring(0, submitData.length - 1);
    submitData += '}'

    return eval('('+submitData+')')
}
