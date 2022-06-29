function ModuleTitle(parentId, innerText) {
	$(`#${parentId}-header`).append(
		`<div ` +
			`   name="title"` +
			`   class="module-title">` +
			`    <span>` +
			`${innerText}</span>` +
			`</div>`
	);
}

function ModuleSubtitle(parentId, innerText) {
	$(`#${parentId}-header`).append(
		`<div ` +
			`   name="title"` +
			`   class="module-subtitle"` +
			`   <span>${innerText}</span>` +
			`</div>`
	);
}

async function ModuleTable(
	parentId,
	apiPath,
	tableFields,
	onClickPopulateWithThisAPI
) {
	console.log(parentId,
		apiPath,
		tableFields,
		onClickPopulateWithThisAPI)

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
		tableData = await API(apiPath);
	}

	console.log(tableData)

	$(`#${parentId}-body`).append(
		`<div style="width:100%"> ` +
			`   <table id="${tableId}" class="module-table">` +
			`       <thead></thead>` +
			`       <tbody></tbody>` +
			`   </table>` +
			`</div>`
	);

	//HEADERS
	$(`#${tableId} thead`).append(`<tr id="${tableId}-index"></tr>`);

	$.each(tableFieldsJSON, function (index, value) {
		$(`#${tableId}-index`).append(
			`<th` +
			`   style="width:${value.width}%"` +
			`>${value.title}</th>`
		);
	});

	//BODY
	let isFieldAvaliable = "";
	$.each(tableData, function (index, value) {
		let trId = value.id;
		let gotoCall = `PopulateModuleWithApi('table-${parentId}','${onClickPopulateWithThisAPI}',${trId})`;
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
}

async function ModuleChart(parentId,id,title,type,width,heightValue,apiPath,requestBody) {
	const height = heightValue * 56;

	$(`#${parentId}-body`).append(
			`<div style="width:${width}%;height:${height}px">`+
			`	<canvas id="${id}" height="${height}"></canvas>`+
			`</div>`
	);

	let apiData = ''
	if (apiPath === "chart-demo-data") {
		apiData = JSON.stringify({
			1:"17",
			2:"10",
			3:"5",
			4:"2",
			5:"20",
			6:"30"
		})
		apiData = JSON.parse(apiData)
	} else {
		apiData = API(apiPath,requestParameters)
	}

	const dataLabels = []
	const dataSet = []
	$.each(apiData, function (index, value) { 
		dataLabels.push(index)
		dataSet.push(value)
	});

	console.log(dataLabels,dataSet)
	console.log('id',id)

	const ctx = document.getElementById(`${id}`).getContext("2d");
	new Chart(ctx, {
		type: `${type}`,

		data: {
			labels: dataLabels,
			datasets: [
				{
					label: title,
					backgroundColor: "rgb(255, 99, 132)",
					borderColor: "rgb(255, 99, 132)",
					data: dataSet,
				},
			],
		},

		options: {
			responsive: true,
			maintainAspectRatio: false,
			layout: {
				padding: {
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
				},
			},
		},
	});
}

function ModuleInput(
	parentId,
	title,
	name,
	width,
	placeholder,
	mask,
	inputType
) {
	$(`#${parentId}-body`).append(
		`<div ` +
			`   style="width:${width}%"` +
			`   class="input-fields">` +
			`   <span class="">${title}</span>` +
			`   <input ` +
			`       class=""` +
			`       name="${name}"` +
			`       placeholder="${placeholder}"` +
			`       type="${inputType}"` +
			`   >` +
			`</div>`
	);

	if (mask !== "") {
		$(`input[name="${name}"]`).mask(`${mask}`);
	}
}

function ModuleFooter(parentId, innerText) {
	let setStyle = "";
	if (innerText === "") {
		setStyle = "display: none;";
	}

	$(`#${parentId}-footer`).append(
		`<div ` +
			`   style="${setStyle}"` +
			`   class="module-footer">` +
			`   <span class="">${innerText}</span>` +
			`</div>`
	);
}

function ModuleFormControl(parentId) {
	const isTableRelated = parentId.split("-");
	if (isTableRelated[0] === "table") {
		$(`#${parentId}-footer`).append(
			`<div ` +
				`   class="module-form-control">` +
				`   <button ` +
				`   class="module-back" ` +
				`   type="button" ` +
				`   onclick="DisplayModule();"` +
				`>Voltar</span>` +
				`   <button class="module-submit" type="submit">SALVAR</span>` +
				`</div>`
		);
	} else {
		$(`#${parentId}-footer`).append(
			`<div ` +
				`   class="module-form-control">` +
				`   <button class="module-back" type="button">Voltar</span>` +
				`   <button class="module-submit" type="submit">SALVAR</span>` +
				`</div>`
		);
	}
}
