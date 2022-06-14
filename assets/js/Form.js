function ShowForm(){
    $('div#function').hide(350)
    $('div#table').hide(350)
    
    $('div#form').show(350)
}

function FormTitle(title){
    return ''+
        `<div>`+
            `<label class="form-label" style="font-size: 24px;font-weight: bold;">${title}</label>`+
        `</div>`+
        '<div style="margin-top: 30px;"></div>'
}

function FormSubTitle(title){
    return ''+
        `<div style="margin-top: 30px;margin-bottom: 10px">`+
            `<label class="form-label" style="font-size: 16px;font-weight: bold;">${title}</label>`+
        `</div>`+
        '<div ></div>'
}

function FormField(id,title,widthPercent,mask){
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
        `/>`+
    `</div>`
}

function FormBreakLine(){
    return ''+
        '<div style="clear:both;"></div>'
}