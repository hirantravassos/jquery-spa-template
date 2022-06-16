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
	const tableFieldsJSON = JSON.parse(tableFields);
	const tableData = await API(apiPath);
	const tableId = `${parentId}-table`;

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
				`>${value.innerText}</th>`
		);
	});

	//BODY
    let isFieldAvaliable = ''
	$.each(tableData, function (index, value) {
		let trId = value.id;
		let gotoCall = `PopulateModuleWithApi('table-${parentId}','${onClickPopulateWithThisAPI}',${trId})`;
        let allowedField = ''
        let allowedValue = '';
        let currentData = value;

		$(`#${tableId} tbody`).append(
			`<tr id="${trId}" ` + `    onclick="${gotoCall};"` + `></tr>`
		);

		$.each(tableFieldsJSON, function (index, value) {
			allowedField = index;

			$.each(currentData, function (index, value) {
				if (allowedField === index) {
                    isFieldAvaliable = true

					allowedValue = "-";
					if (value) {
						allowedValue = value;
					}

					$(`#${tableId} tbody tr#${trId}`).append(
						`<td>${allowedValue}</td>`
					);
                    return false
				} else {
                    isFieldAvaliable = false
                }
			});
		});

        if (!isFieldAvaliable) {
            const alertText =
                `ERROR!! \n` +
                `Table: ${parentId}; \n` +
                `API: ${apiUrl}/${apiPath}; \n` +
                `Field: ${allowedField}; \n \n` +
                `This field is not avaliable through this api data. \n` +
                `Mandatory fix! \n`;
            console.log(alertText)
            alert(alertText);

            $(`#${parentId}`).remove()
            return false
        }
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
			`   class="module-input">` +
			`   <span class="module-input-element">${title}</span>` +
			`   <input ` +
			`       class="module-input-element"` +
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
