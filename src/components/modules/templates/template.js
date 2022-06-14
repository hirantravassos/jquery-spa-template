const jsonUrl = "/src/components/modules/templates/"

async function GetDefinedTemplate() {
	const sidebarId = $(`div#sidebar .active`).attr(`id`);
	const sidebarName = $(`div#sidebar .active`).attr(`name`);
	const subsidebarId = $(`div#subsidebar-${sidebarName} .active`).attr(`id`);

	// if (subsidebarId === undefined) {
	// 	console.log(subsidebarId)
	// 	return
	// }

    const template = await API(
		`template`,
		JSON.stringify({
			sidebar: sidebarId,
			subsidebar: '1',
		}),
		"POST"
	);
    return template
}

async function GetTemplate(templateId) {
	const sidebarName = $(`div#sidebar .active`).attr(`name`);
	const selectedTemplate = await $.getJSON(`${ftpUrl}${jsonUrl}${sidebarName}.json`,
		function (data) {
			return data
		}
	);

	if (templateId != null && templateId != '') {
		return selectedTemplate[templateId]
	} else {
		return selectedTemplate
	}
}

async function PostTemplate(templateId) {
	const sidebarId = $(`div#sidebar .active`).attr(`id`);
	await API(
		`post-template`,
		JSON.stringify({
			sidebar: sidebarId,
			subsidebar: `1`,
			template: templateId,
		}),
		"POST"
	);
}
