function ModuleButtonNewId(parentId,innerText,width,route) {
	if (!ModuleAllowance(parentId)) {return}

	const sidebarId = String($(`#module-${parentId}`).attr(`constructor`)).split('#')
	const gotoFunction = `Routes('${sidebarId[1]}','${route}');DisplayHiddenModule('${route}')` 

	$(`#${parentId}-header`).append(
		`<div ` +
		`   style="width:${width}%"` +
		`   class="module-button-div"`+
		`>` +
		`   <button `+
		`		class="module-button" `+
		`		type="button"`+
		`		onclick="${gotoFunction}"` +
		`	>${innerText}</button>` +
		`</div>`
	)
}