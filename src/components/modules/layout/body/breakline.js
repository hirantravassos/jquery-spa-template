function ModuleBreakline(parentId) {
	if (!ModuleAllowance(parentId)) {return}

	$(`#${parentId}-body`).append(
		`<div ` +
			`   class="module-breakline">` +
			`</div>`
	);
}
