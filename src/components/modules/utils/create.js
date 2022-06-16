async function CreateSidebarRelatedModule(sidebarItemName,subsidebarItemName,id) {
    const constructorTag = `#${sidebarItemName}#${subsidebarItemName}`

	$("#module").append(`<div ` + 
        `   style="width:100%;box-sizing: border-box;"`+
        `   id="${id}" ` + 
        `   constructor="${constructorTag}"` +
        `   class="">` + 
        `   <div id="${id}-header" class="module-header"></div>` +
        `   <div id="${id}-body" class="module-body"></d></div>` +
        `   <div id="${id}-footer" class="module-footer"></d></div>` +
        `</div>`
    );
    $(`#module div[constructor="${constructorTag}"]`).hide()
}

async function CreateTableRelatedModule(tableName) {
    const constructorTag = `#table#${tableName}`

	$("#module").append(`<div ` + 
        `   style="width:100%;box-sizing: border-box;"`+
        `   id="table-module-${tableName}" ` + 
        `   constructor="${constructorTag}"` +
        `   class="">` + 
        `   <div id="table-module-${tableName}-header" class="module-header"></div>` +
        `   <div id="table-module-${tableName}-body" class="module-body"></d></div>` +
        `   <div id="table-module-${tableName}-footer" class="module-footer"></d></div>` +
        `</div>`
    );
    $(`#module div[constructor="${constructorTag}"]`).hide()

    return `table-module-${tableName}`
}