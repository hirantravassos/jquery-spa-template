async function CreateLogoPage() {
	const Logo = await GetLogoBody();

	$("#page").append(`<div id="logo">` + `   <img src=${Logo}>` + `</div>`);

	$("#logo").hide();
}

async function GetLogo() {
	return "assets/img/default-square-logo.png";
}

async function GetLogoBody() {
	return "assets/img/default-cover-logo.png";
}

function DisplayLogo() {
    GetSubsidebarItem("", "", "", true);
	GetSidebarRelatedItems("", "", "", true);
	Routes("", "", "logo", "");

	$("#module").hide(350);
	$("#logo").show(350);
}

$("body").on("click", ".sidebar-logo", function () {
    DisplayLogo()
});
