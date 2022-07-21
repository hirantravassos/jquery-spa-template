async function CreateModule() {
	$("#page").append(`<div id="module" class="module"></div>`);

	// await SetupModules();
}

async function DisplayModule() {
	$(`#logo`).hide(350);
	$(`#module`).show(350);

	await SetupModules();

	const sidebarItemId = String($(`.sidebar .active a`).attr("id")).replace(
		`sidebar-`,
		``
	);
	const subsidebarItemId = String(
		$(`.subsidebar .active`).attr("id")
	).replace(`subsidebar-item-`, ``);
	const constructorTag = `#${sidebarItemId}#${subsidebarItemId}`;

	$(`#module > div`).hide(350);
	$(`#module div[constructor="${constructorTag}"]`).show(350);

	const sidebarActive = $(".sidebar .active").attr("id");
	const subsidebarActive = $(".subsidebar .active").attr("id");
	Routes(sidebarActive, subsidebarActive);
}

async function DisplayHiddenModule(subsidebarItemId) {
	$(`#logo`).hide(350);
	$(`#module`).show(350);

	await SetupModules();

	const sidebarItemId = String($(`.sidebar .active a`).attr("id")).replace(
		`sidebar-`,
		``
	);
	const constructorTag = `#${sidebarItemId}#${subsidebarItemId}`;

	$(`#module > div`).hide(350);
	$(`#module div[constructor="${constructorTag}"]`).show(350);
}

async function PopulateModuleWithApi(moduleById, ApiPath, id) {
	$(`#logo`).hide(350);
	$(`#module`).show(350);

	const requestData = JSON.stringify(JSON.parse(`{"id":"${id}"}`));
	const apiData = await API(ApiPath, requestData);

	let isInputAtDestination = "";
	let targetObj = "";
	$.each(apiData, function (index, value) {
		isInputAtDestination = $(
			`#${moduleById} input[name="${index}"]`
		).length;
		targetObj = $(`#${moduleById} input[name="${index}"]`);

		if (isInputAtDestination > 0) {
			$(targetObj).val(value);
			$(targetObj).trigger(`change`);
		}
	});

	$(`#module > div`).hide(350);
	$(`#module div#${moduleById}`).show(350);

	const sidebarActive = $(".sidebar .active").attr("id");
	const subsidebarActive = $(".subsidebar .active").attr("id");

	console.log(sidebarActive, subsidebarActive, `/id?${id}`);
	Routes(sidebarActive, subsidebarActive, `/id?${id}`);
}

//SUBMIT FORM
$("body").on("submit", "#module form", function (e) {
	const sidebarActive = $(".sidebar .active").attr("name");
	const subsidebarActive = $(".subsidebar .active").attr("name");

	e.preventDefault();
	const formData = JSON.stringify(GetFormData($("#module form")));
	console.log(formData);

	if (subsidebarActive === "new") {
		const path = `${sidebarActive}/${subsidebarActive}`;
		// API(path,formData)
	}

	$("#new form").hide(350);
	setTimeout(() => {
		$("#new form").show(350);
	}, 1500);
});

$("body").on("click", ".module-back", function (e) {
	history.back();
});
