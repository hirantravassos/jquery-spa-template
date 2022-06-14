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

function FormField(id,title,value,widthPercent){
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

function FormImage(id,title,value,widthPercent){
    return ''+
    `<div id="${id}" class="float-start" style="width:${widthPercent}%;padding-right:10px;">`+
        `<label `+
            `class="form-label d-inline-block"`+
            `style="margin-left: 8px;"`+
        `>${title}</label>`+
        `<input `+
            `id="${id}" `+
            `style="heigth: 0px;overflow:hidden;display:none;" `+
            `type="file" `+
            `onchange="DisplayImage()"`+
        `></input>`+
        '<div id="form-image" class="div-image"></div>'+
        `<button `+
    `       id="${id}" `+
            `style="width:100%;" `+
            `type="button" `+
            `onclick="$('input#${id}').click()"`+
        `>${value}</button>`+
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
            `id="${id}" `+
            `list="data-${id}" `+
            `class="form-control d-inline-block" `+
            `type="text" `+
            `value="${value}" `+
        `>`+
            `<datalist id="data-${id}"> </datalist>`+
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

function FormControl(){
    return ''+
        '<div>'+
            '<button class="changelog" id="changelog" type="button">HISTÓRICO</button>'+
        '</div>'+
        '<div>'+
            '<button class="back" id="back" type="button">SAIR</button>'+
        '</div>'+
        '<div>'+
            '<button class="submit" id="submit" type="submit">SALVAR E SAIR</button>'+
        '</div>'
        
}