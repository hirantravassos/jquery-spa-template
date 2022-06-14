async function ModuleList(update) {
	const templateId = await GetDefinedTemplate("1");
	const template = await GetTemplate(templateId[0].template);
	const listdata = await GetListData(template);

	// if (update) {
	//     Body(template)
	//     Table(template)
	// } else {
	List()
	Header()
	Table(template)
	Body(listdata)
	// }

	function List() {
		$("#module").append(`<div id="list">` + `</div>`);
		$(`#module #list`).hide();
	}

	function Header() {
		$("#list").append(
			`<div class="list-header">` +
				`<label class="">LISTA DE CLIENTES</label>` +
				`</div>`
		);
	}

	function Table(templateActive) {
		if ($(".list-fields").length > 0) {
			$(".list-fields").remove();
		}

		$("#list").append(
			`<table class="list-table">` +
				`   <thead>` +
				`       <tr class="list-title">` +
				`       </tr>` +
				`   </thead>` +
				`   <tbody></tbody>` +
				`</table>`
		);
		$(".list-fields").hide();

		$.each(templateActive, function (index, value) {
			if (value.list !== "show") {
				return;
			}
			$("#list thead tr").append(
				`<th style="min-width:${value.width}">` +
					`${value.innertext}` +
					`</th>`
			);
		});
	}

	async function GetListData(templateActive) {
		console.log(templateActive)
		const request = JSON.stringify(templateActive);
		const response = await API("client/list", request);
		return response;
	}

	function Body(data) {
		$.each(data, function (index, value) {
			$("#list tbody").append(
				`<tr id="${value.id}" `+
                `   name="${value.name}" `+
                `   class=""` +
			    `</tr>`
			);
            
            let currentId = value.id
            $.each(value, function (index, value) { 
                if (index === 'id') {return}
                $(`#list tbody tr#${currentId}`).append(
                    `<td id="${currentId}" `+
                    `   name="${index}" `+
                    `   class="">` +
                    `${value}</td>`
                );
            });
		});

		$(".list-fields").show(350);
	}
}
