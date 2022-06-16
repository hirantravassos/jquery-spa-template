function ModuleTitle(parentId,innerText) {
    $(`#${parentId}-header`).append(
        `<div `+
        `   name="title"`+
        `   class="module-title">`+
        `    <span>`+
        `${innerText}</span>`+
        `</div>`
    )
}

function ModuleSubtitle(parentId,innerText) {
    $(`#${parentId}-header`).append(
        `<div `+
        `   name="title"`+
        `   class="module-subtitle"`+
        `   <span>${innerText}</span>`+
        `</div>`
    )
}

async function ModuleTable(parentId, apiPath, tableFields, onClickPopulateWithThisAPI) {
    
    const tableFieldsJSON = JSON.parse(tableFields)
    const tableData = await API(apiPath)
    const tableId = `${parentId}-table`

    console.log(parentId,apiPath, tableFieldsJSON)

    $(`#${parentId}-body`).append(
        `<div style="width:100%"> `+
        `   <table id="${tableId}" class="module-table">`+
        `       <thead></thead>`+
        `       <tbody></tbody>`+
        `   </table>`+
        `</div>`
    )

    //HEADERS
    $(`#${tableId} thead`).append(
        `<tr id="${tableId}-index"></tr>`
    )

    $.each(tableFieldsJSON, function(index,value) {
        $(`#${tableId}-index`).append(
            `<th`+
            `   style="width:${value.width}%"`+
            `>${value.innerText}</th>`
        )
    })

    //BODY
    $.each(tableData, function(index,value){
        let trId = value.id
        let gotoCall = `GetSelectedModule('${parentId}')`
        let apiCall = `API('${onClickPopulateWithThisAPI}','{&quot;id&quot;:&quot;${trId}&quot;}')`

        $(`#${tableId} tbody`).append(
            `<tr id="${trId}" `+
            `    onclick="${gotoCall}; ${apiCall}"`+
            `></tr>`
        )

        $.each(value, function (index, value) { 
            let allowedField = index
            let allowedValue = "-"
            if (value) {allowedValue = value}

            $.each(tableFieldsJSON, function (index, value) { 
                 if (index === allowedField) {
                    $(`#${tableId} tbody tr#${trId}`).append(
                        `<td>${allowedValue}</td>`
                    )
                 }
            });
        });
    })
}

function ModuleInput(parentId,title,name,width,placeholder,mask,inputType) {
    $(`#${parentId}-body`).append(
        `<div `+
        `   style="width:${width}%"`+
        `   class="module-input">`+
        `   <span class="module-input-element">${title}</span>`+
        `   <input `+
        `       class="module-input-element"`+
        `       name="${name}"`+
        `       placeholder="${placeholder}"`+
        `       type="${inputType}"`+
        `   >`+
        `</div>`
    )

    if (mask !== "") {$(`input[name="${name}"]`).mask(`${mask}`)}
}

function ModuleFooter(parentId,innerText) {
    let setStyle = ""
    if (innerText === "") {setStyle = "display: none;"}
    
    $(`#${parentId}-footer`).append(
        `<div `+
        `   style="${setStyle}"`+
        `   class="module-footer">`+
        `   <span class="">${innerText}</span>`+
        `</div>`
    )
}

function ModuleFormControl(parentId) {
    $(`#${parentId}-footer`).append(
        `<div `+
        `   class="module-form-control">`+
        `   <button class="module-back" type="button">Voltar</span>`+
        `   <button class="module-submit" type="submit">SALVAR</span>`+
        `</div>`
    )
}