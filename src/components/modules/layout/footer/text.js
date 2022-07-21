function ModuleFooterText(parentId, innerText) {
	if (!ModuleAllowance(parentId)) {return}

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
