function ModuleInput(
	parentId,
	title,
	name,
	width,
	placeholder,
	mask,
	inputType
) {
	if (!ModuleAllowance(parentId)) {return}

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

	maskReverse = true
	try {
		if (mask.indexOf(')') > -1) {maskReverse = false} else {maskReverse = true}
	} catch (e) {
		maskReverse = true
	}

	if (mask !== "") {
		$(`input[name="${name}"]`).mask(`${mask}`, {reverse: maskReverse});
	}
}
