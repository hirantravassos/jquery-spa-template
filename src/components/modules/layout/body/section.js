function ModuleBodySection(parentId, innerText) {
	if (!ModuleAllowance(parentId)) {return}

	$(`#${parentId}-body`).append(
		`<div ` +
			`   id="title-${innerText}"` +
			`	style="margin-top:30px"` +
			`   class="module-body-subtitle"` +
			`   <span>${innerText}</span>` +
			`</div>`
	);
}