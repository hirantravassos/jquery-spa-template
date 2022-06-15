async function CreateCustomModule(sidebarItemName,subsidebarItemName,id) {
    const constructorTag = `#${sidebarItemName}#${subsidebarItemName}`

	$("#module").append(`<div ` + 
        `   id="${id}" ` + 
        `   constructor="${constructorTag}"` +
        `   class="">` + 
        `   <div id="${id}-header"></div>` +
        `   <div id="${id}-body"></div>` +
        `   <div id="${id}-footer"></div>` +
        `</div>`
    );
    $(`#module div[constructor="${constructorTag}"]`).hide()
}
