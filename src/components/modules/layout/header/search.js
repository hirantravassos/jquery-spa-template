async function ModuleSearch(parentId,searchId,apiPath,width,title,placeholder,type) {
	if (!ModuleAllowance(parentId)) {return}

	$(`#${parentId}-header`).append(
		`<div ` +
			`   style="width:${width}%"` +
			`   class="input-fields">` +
			`   <span style="transform: scale(1.0);" class="module-search-span">${title}</span>` +
			`   <input ` +
			`       class="input-search-table"` +
			`       id="${parentId}-${searchId}"` +
			`		apiPath="${apiPath}"` +
			`       placeholder="${placeholder}"` +
			`       type="${type}"` +
			`   >` +
			`</div>`
	);
}

$('body').on('dblclick','.input-search-table', function(e) {
	$(e.target).val('')
})

$('body').on('keyup','.input-search-table', async function(e) {
	const parentId = $(e.target).parent().parent().parent().attr("id")
	const apiPath = $(e.target).attr('apiPath')
	const onClickPopulateWithThisAPI = $(`#${parentId} table`).attr('onClickPopulateWithThisAPI')

	const tableHeaders = $(`#${parentId} table th`)
	let tableFields = '{'
	$.each(tableHeaders, function (index, value) { 
		const headerText = $(value).text()
		const headerName = $(value).attr('name')
		const headerWidth = $(value).attr('width')

		tableFields += `"${headerName}": {"title":"${headerText}", "width:":"${headerWidth}"},`
	});
	tableFields = tableFields.slice(0, -1)
	tableFields = '}'
	const apiParameters = JSON.stringify({
		search: $(e.target).val()
	})

	console.log(parentId,apiPath,tableFields,onClickPopulateWithThisAPI,apiParameters)

	ModuleTable(parentId,apiPath,tableFields,onClickPopulateWithThisAPI)
})