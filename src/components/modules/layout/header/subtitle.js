function ModuleSubtitle(parentId, innerText) {
	if (!ModuleAllowance(parentId)) {return}

	$(`#${parentId}-header`).append(
		`<div ` +
			`   name="subtitle"` +
			`   class="module-subtitle"` +
			`   <span>${innerText}</span>` +
			`</div>`
	);
}