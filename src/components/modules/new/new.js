async function ModuleNew(update) {
	const templateId = await GetDefinedTemplate()
	const template = await GetTemplate(templateId[0].template)

    if (update) {
        Body(template)
    } else {
        New()
        Header()
        Body(template)
    }

    function New() {
		$("#module").append(`<div id="new">` + `</div>`);
		$(`#module #new`).hide()
	}

	function Header() {
		$("#new").append(
			`<div class="new-header">` +
				`<label class="">NOVO CLIENTE</label>` +
				`</div>`
		);
	}

    function Body(templateActive) {
		if ($('.new-fields').length > 0) {
			$('.new-fields').remove()
		}

		$("#new").append(
			`<form class="new-fields">` +
			`</form>`
		);

		$('.new-fields').hide()
		$.each(templateActive, function (index, value) {
			if (index === 'title') {return}

			$(".new-fields").append(
				`<div class="new-fields-field"` +
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
			
			if (value.mask) {
				$(`div#${value.name} input`).mask(`${value.mask}`, {reverse:false}).attr({
					// "maxlength" : 16,
					// "minlength" : 16,
					"inputmode" : `${value.type}`,
					"autocomplete" : "none"
				}).prop('required',false);
			}
		});

        $(".new-fields").append(
			`<div class="form-buttons">` +
            `   <button type="reset" class="form-cancel">CANCELAR</button>`+
            `   <button type="submit" class="form-submit">SALVAR</button>`+
			`</div>`
		);

        $('.new-fields').show(350)
	}

    // const subsidebarActive = $('.subsidebar .active').attr('name')
	// if (subsidebarActive !== 'new') {}
}


