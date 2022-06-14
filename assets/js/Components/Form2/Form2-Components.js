let imageDisable

function Form2Image(id,title,value,widthPercent){
    if (currentID2 > 0) {
        imageDisable = false
    } else {
        imageDisable = true
    }
    
    return ''+
    `<div id="${id}" class="float-start" style="width:${widthPercent}%;padding-right:10px;" `+
        `data-bs-toggle="tooltip" `+
        
        `<label `+
            `class="form-label d-inline-block"`+
            `style="margin-left: 8px;"`+
        `>${title}</label>`+
        `<input `+
            `id="${id}" `+
            `style="heigth: 0px;overflow:hidden;display:none;" `+
            `type="file" `+
            `onchange="DisplayImage2()"`+
        `></input>`+
        '<div id="form2-image" class="div-image"></div>'+
        `<button `+
    `       id="${id}" `+
            `style="width:100%;" `+
            `type="button" `+
            `onclick="$('input#${id}').click()" `+
        `>${value}</button>`+
    `</div>`
}

function FormMaterial(id,value,widthPercent){
    return ''+
        '<div>'+
            `<button id="${id}" style="width:${widthPercent}%;" onclick="AddMaterial()" type="button">${value}</button>`+
        '</div>'
}

function FormControl2(){
    return ''+
        '<div>'+
            '<button class="changelog" id="changelog2" type="button">HISTÓRICO</button>'+
        '</div>'+
        '<div>'+
            '<button class="back" id="back2" type="button">SAIR</button>'+
        '</div>'+
        '<div>'+
            '<button class="submit" id="submit2" type="submit">SALVAR E SAIR</button>'+
        '</div>'   
}