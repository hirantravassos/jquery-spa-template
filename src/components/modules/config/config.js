async function ModuleConfig(update) {
	const templates = await templatesAvaliable();
	const templateActive = await templatesAvaliable("active");

	if (update) {
		Select(templates,templateActive);
		Body(templateActive);
	} else {
		Config()
		Header();
		Select(templates,templateActive);
		Body(templateActive);
	}

	//
	//Functions Bellow:
	//

	function Config() {
		$("#module").append(`<div id="config">` + `</div>`);
		$(`#module #config`).hide()
	}

	function Header() {
		$("#config").append(
			`<div class="config-header">` +
				`<label class="">CONFIGURE OS CAMPOS DO MÓDULO CLIENTES.</label>` +
				`</div>`
		);
	}

	async function templatesAvaliable(setMode) {
		const sidebar = $(`div#sidebar .active`).attr(`id`);
		const sidebarName = $(`div#sidebar .active`).attr(`name`);
		const definedTemplate = await GetDefinedTemplate("1");

		if (setMode === "active") {
			const templates = await GetTemplate(
				definedTemplate[0].template
			);
			return templates;
		} else {
			const templates = await GetTemplate();
			return templates;
		}
	}

	function Select(templates,templateActive) {
		if ($('.config-select').length > 0) {
			$('.config-select').remove()
		}

		const title = templateActive.title
		$("#config").append(
			`<div class="config-select">` +
			`   <label class="config-select-title">Templates Disponíveis:</label>` +
			`   <ul id="templates" style="width:100%" class="select">${title}</ul>` +
			`</div>`
		);

		$.each(templates, function (index, value) {
			$("ul#templates").append(
				`<li id="${index}"` + `>${value.title}</li>`
			);
		});
	}

	function Body(templateActive) {
		if ($('.config-fields').length > 0) {
			$('.config-fields').remove()
		}

		$("#config").append(
			`<div class="config-fields">` +
			`</div>`
		);

		$('.config-fields').hide()
		$.each(templateActive, function (index, value) {
			if (index === 'title') {return}

			$(".config-fields").append(
				`<div class="config-fields-field"` +
					`   style="width:${value.width}"` +
					`   id="${value.name}"` +
					`   ` +
					`>` +
					`   <label>${value.innertext}</label>` +
					`   <input ` +
					`       style="" ` +
					`       name="${value.name}" ` +
					`       placeholder="${value.example}">` +
					`</div>`
			);

			// $(`#${value.name}`).hide();
			// setTimeout(() => {
			// 	$(`#${value.name}`).show(350);
			// }, 200 + countFields * 100);
			// countFields++;
		});
		$('.config-fields').show(350)
	}
}

$('body').on('click','#config li', async function(e) {
	const target = e.target
	const templateId = $(target).attr('id')
	const templateText = $(target).text()

    $(`#templates`).text(templateText)

	await PostTemplate(templateId)

	$('.config-fields').hide(350)
	setTimeout(()=> {
		ClientConfig(true)
		ClientNew(true)
		$('.config-fields').show(350)
	},350)
})



// function ConfigTemplate(id) {
// 	const templateChoice = ClientTemplateList();
// 	console.log(templateChoice[id]);

// 	if ($("#config-template-select").length > 0) {
// 		$("#config-body div").remove();
// 	}


// }

// $("body").on("click", "ul#config-template-select", async function (e) {
// 	const selectedId = e.target.id;
// 	const newTemplate = $(e.target).attr("name");
// 	const newText = $(e.target).text();

// 	if (e.target.tagName != "LI") {
// 		return;
// 	}
// 	$("ul#config-template-select").text(newText).trigger("change");
// 	const templateData = await ClientTemplate(selectedId);
// 	LoadFields(templateData);
// 	PostTemplate(selectedId);
// });

// $("body").on("change", "ul#config-template-select", async function (e) {
// 	const templateChoice = ClientTemplateList();
// 	$.each(templateChoice, function (index, value) {
// 		$("ul#config-template-select").append(
// 			`<li id="${index}"` + `>${value}</li>`
// 		);
// 	});
// });

// async function PostTemplate(templateId) {
// 	const usernameId = GetCookie("usernameId");
// 	const sidebar = $(`div#sidebar .active`).attr(`id`);

// }

// function LoadFields(data) {
// 	$("#config-template").hide(350);

// 	setTimeout(function () {

// 	}, 400);
// }
