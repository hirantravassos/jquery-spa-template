function ModuleFooterControl(parentId,apiPath) {
	if (!ModuleAllowance(parentId)) {return}

	$(`#${parentId}-footer`).append(
		`<div ` +
			`   class="module-form-control">` +
			`	apiPath="${apiPath}"`
			`   <button class="module-back" type="button">Voltar</span>` +
			`   <button class="module-submit" type="submit">SALVAR</span>` +
			`</div>`
	);
}