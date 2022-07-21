async function ModuleTable(
	parentId,
	apiPath,
	tableFields,
	onClickPopulateWithThisAPI,
	apiParameters
) {
	if (!ModuleAllowance(parentId)) {return}

	const tableFieldsJSON = JSON.parse(tableFields);
	const tableId = `${parentId}-table`;

	let tableData = ''
	if (apiPath === "table-demo-data") {
		tableData = JSON.stringify({
			0: {
				"id":"0",
				"demo-field-1":"Demo 1",
				"demo-field-2":"Demo 2"
			},
			1: {
				"id":"1",
				"demo-field-1":"Demo 3",
				"demo-field-2":"Demo 4"
			},
		})
		tableData = JSON.parse(tableData)
	} else {
		tableData = await API(apiPath,apiParameters);
	}

	$(`#${parentId}-body`).append(
		`<div style="width:100%"> ` +
			`   <table `+
			`	id="${tableId}" `+
			`	apiPath="${apiPath}" `+
			`	onClickPopulateWithThisAPI="${onClickPopulateWithThisAPI}" `+
			`	class="module-table">` +
			`       <thead></thead>` +
			`       <tbody></tbody>` +
			`   </table>` +
			`</div>`
	);
	$(`#${parentId}-body table`).hide()

	//HEADERS
	$(`#${tableId} thead tr`).remove()
	$(`#${tableId} thead`).append(`<tr id="${tableId}-index"></tr>`);

	$.each(tableFieldsJSON, function (index, value) {
		$(`#${tableId}-index`).append(
			`<th` +
			`	name="${index}"`+
			`   style="width:${value.width}%"` +
			`>${value.title}</th>`
		);
	});

	//BODY
	$(`#${tableId} tbody`).empty()
	let isFieldAvaliable = "";

	$.each(tableData, function (index, value) {
		let trId = value.id;
		let gotoCall = `PopulateModuleWithApi('table-module-${parentId}','${onClickPopulateWithThisAPI}',${trId})`;
		let allowedField = "";
		let allowedValue = "";
		let currentData = value;

		$(`#${tableId} tbody`).append(
			`<tr id="${trId}" ` + 
			`    onclick="${gotoCall};">` + 
			`</tr>`
		);

		$.each(tableFieldsJSON, function (index, value) {
			allowedField = index;

			$.each(currentData, function (index, value) {
				if (allowedField === index) {
					isFieldAvaliable = true;

					allowedValue = "-";
					if (value) {
						allowedValue = value;
					}

					$(`#${tableId} tbody tr#${trId}`).append(
						`<td>${allowedValue}</td>`
					);
					return false;
				} else {
					isFieldAvaliable = false;
				}
			});
		});

		if (!isFieldAvaliable) {
			const alertText =
				`ERROR!! \n` +
				`Module: ${parentId}; \n` +
				`API: ${apiUrl}/${apiPath}; \n` +
				`Field: ${allowedField}; \n \n` +
				`This field is not avaliable through this api data. \n` +
				`Mandatory fix! \n`;
			console.log(alertText);
			alert(alertText);

			$(`#${parentId}`).remove();
			return false;
		}
	});

	setTimeout(function(){
		$(`#${parentId}-body table`).show(350)
	}, 500)	
}