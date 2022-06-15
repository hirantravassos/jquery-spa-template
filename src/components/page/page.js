async function CreatePage() {
	await CreatePageElements();
    await CreateNavBar();
    await CreateModule();
    await CreateLogoPage();

	async function CreatePageElements() {
		$("#app").append(`<div id="page" class="page">` + `</div>`);
	}
}
