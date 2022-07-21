function ModuleTitle(parentId, innerText) {
	if (!ModuleAllowance(parentId)) {return}

	$(`#${parentId}-header`).empty()
	$(`#${parentId}-body`).empty()
	$(`#${parentId}-footer`).empty()

	$(`#${parentId}-header`).append(
		`<div ` +
			`   name="title"` +
			`   class="module-title">` +
			`    <span>` +
			`${innerText}</span>` +
			`</div>`
	);
}