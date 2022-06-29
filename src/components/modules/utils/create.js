async function CreateSidebarRelatedModule(sidebarItemName,subsidebarItemName) {
    const constructorTag = `#${sidebarItemName}#${subsidebarItemName}`
    const id = `${sidebarItemName}-${subsidebarItemName}`

	$("#module").append(
        `<div ` + 
        `   id="module-${id}" ` + 
        `   constructor="${constructorTag}"` +
        `   class="module-div"`+
        `>` + 
        `   <div id="${id}-header" class="module-header"></div>` +
        `   <div id="${id}-body" class="module-body"></d></div>` +
        `   <div id="${id}-footer" class="module-footer"></d></div>` +
        `</div>`
    );
    $(`#module div[constructor="${constructorTag}"]`).hide()

    return id
}

// async function CreateTableRelatedModule(sidebarItemName,subsidebarItemName) {
//     const constructorTag = `#${sidebarItemName}#${subsidebarItemName}`
//     const id = `table-module-${sidebarItemName}-${subsidebarItemName}`

// 	$("#module").append(
//         `<div ` + 
//         `   id="${id}" ` + 
//         `   constructor="${constructorTag}"` +
//         `   class="module-div"`+
//         `>` + 
//         `   <div id="${id}-header" class="module-header"></div>` +
//         `   <div id="${id}-body" class="module-body"></d></div>` +
//         `   <div id="${id}-footer" class="module-footer"></d></div>` +
//         `</div>`
//     );
//     $(`#module div[constructor="${constructorTag}"]`).hide()

//     return id
// }