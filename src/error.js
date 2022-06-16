function CheckForErrors() {
    if (isProduction) {return}

	const sidebarElements = $(".sidebar").children();
	const subsidebarElements = $(".subsidebar").children();
	const modulesElements = $("#module").children();

    //Check if Subsidebar has modules related
	$.each(subsidebarElements, function (index, value) {
		let relatedSidebar = String($(value).parent().attr(`id`)).replace(
			`subsidebar-`,
			``
		);
		let subsidebarItem = $(value).attr(`name`);

		if (!subsidebarItem) {
			return;
		}

		let checkModulesFromSubsidebar = $(
			`div[constructor="#${relatedSidebar}#${subsidebarItem}"]`
		).length;

		if (checkModulesFromSubsidebar === 0) {
			const alertText1 =
				`ERROR!! \n\n` +
				`Sidebar: ${relatedSidebar}; \n` +
				`Subsidebar: ${subsidebarItem}; \n\n` +
				`No modules found for this application path. \n` +
				`Optional fix! \n`;
			console.log(alertText1);
		}
	});

    $.each(modulesElements, function (index, value) { 
         let moduleTableId = $(value).attr('id')
         let moduleIdSplit = moduleTableId.split('-')

         if (moduleIdSplit[0] === "table") {
            let moduleId = moduleTableId.replace('table-','')
            let checkForRelatedTable = $(`#${moduleId}`).length

            if (checkForRelatedTable === 0) {
                const alertText2 =
                    `ERROR!! \n\n` +
                    `Table Module: ${moduleTableId}; \n\n` +
                    `No form found for this table. \n` +
                    `The async function "CreateTableRelatedModule()" returns the parent ` +
                    `id that you can use for creating a hidden module only related to ` +
                    `"onclick" event of the table. \n\n` +
                    `Optional fix! \n`;
                console.log(alertText2);
            }
         }
    });
}
