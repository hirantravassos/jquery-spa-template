async function ModuleSelect(parentId,title,name,width,placeholder,apiPath,displayValue) {
	if (!ModuleAllowance(parentId)) {return}

	const selectData = await API(apiPath)
	const selectId = `select-${name}`
	console.log('parent id',parentId)

	$(`#${parentId}-body`).append(
		`<div ` +
		`   style="width:${width}%"` +
		`   class="input-fields">` +
		`   <span class="">${title}</span>` +
		`   <input ` +
		`		id="${name}"`+
		`       class="input-select"` +
		`       name="${name}"` +
		`       placeholder="${placeholder}"` +
		`		autocomplete="password"`+
		`		path="${apiPath}"`+
		`		relatedselect="${selectId}"`+
		`		displayvalue="${displayValue}"`+
		`   >` +
		`	<div ` +
		`	   style=""` +
		`	   class="select-div">` +
		`		<ul ` +
		`		    class="select"` +
		`		    id="${selectId}"` +
		`		    value=""` +
		`			relatedinput="${name}"`+
		`		>` +
		`		</ul>`+
		`	</div>`+
		`</div>`
	); 

	const inputId = name
	PopulateSelect(parentId,inputId,selectData,selectId,displayValue)
}

function PopulateSelect(parentId,inputId,selectData,selectId,displayValue) {
	if (!ModuleAllowance(parentId)) {return}

	$(`#${parentId}-body ul#${selectId} li`).remove()

	let appendText = ''
	$.each(selectData, function (index, value) { 
		let attributeValue = ''
		let selectText = ''
		$.each(value, function (index,value) {
			if (displayValue == index) {
				selectText = value
			}
			attributeValue += `${index}="${value}" `
		})

		appendText += `<li ` +
		`	id=${value.id}`+
		`	relatedinput="${name}"`+
		`	${attributeValue}`+
		`	>${selectText}`+
		`</li>`
	});

	$(`#${parentId}-body #${selectId}`).append(
		appendText
	);	
}

$('body').on('blur','.input-select', function(e) {
	const urlPath = String(window.location.hash).split("/");
	const parentId = urlPath[1]+'-'+urlPath[2]
	const selectId = $(e.target).attr('relatedselect')

	if ($(`#${parentId}-body ul#${selectId} li`).length === 1) {
		const selectValue = $(`#${parentId}-body ul#${selectId} li`).text()
		$(e.target).val(selectValue)
	} 
})

$('body').on('dblclick','.input-select', function(e) {
	$(e.target).val('')
})

$('body').on('keyup','.input-select', async function(e) {
	const inputId = $(e.target).attr('id')
	const selectId = $(e.target).attr('relatedselect')
	const displayValue = $(e.target).attr('displayvalue')

	const search = JSON.parse(JSON.stringify(`{"search":"${$(e.target).val()}"}`))
	const apiPath = $(e.target).attr('path')
	const selectData = await API(apiPath,search)

	const urlPath = String(window.location.hash).split("/");
	const parentId = urlPath[1]+'-'+urlPath[2]

	PopulateSelect(parentId,inputId,selectData,selectId,displayValue)
})

$('body').on('mouseover','.select-div li',function(e) {
	const inputId = $(e.target).parent().attr('relatedinput')
	const selectedAttr = $(e.target).attributes
	const selectedText = $(e.target).text()

	if (inputId) {
		$(`input#${inputId}`).val(selectedText)
	}
})