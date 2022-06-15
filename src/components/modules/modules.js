async function CreateModule() {
	$("#page").append(`<div id="module" class="module"></div>`);

  await GetCustomModules()
}

function DisplayModule() {
  $(`#logo`).hide(350)
  $(`#module`).show(350)

  const sidebarItemName = $(`.sidebar .active a`).attr("name");
	const subsidebarItemName = $(`.subsidebar .active`).attr("name");
  const constructorTag = `#${sidebarItemName}#${subsidebarItemName}`

	$(`#module > div`).hide(350);
	$(`#module div[constructor="${constructorTag}"]`).show(350)
}

//SUBMIT FORM
$("body").on("submit", "form", function (e) {
	const sidebarActive = $(".sidebar .active").attr("name");
	const subsidebarActive = $(".subsidebar .active").attr("name");
	console.log(sidebarActive, subsidebarActive);

	e.preventDefault();
	const formData = JSON.stringify(GetFormData($("form")));
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
