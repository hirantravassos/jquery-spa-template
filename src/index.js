const isProduction = false;

$(document).ready(async function () {
	await CreateLogin();
});

async function LoggedIn() {
	$('#app').empty()

	await CreateSidebar();
	await CreatePage();
	await OnReadyRoutes();

	setTimeout(() => {
		CheckForErrors();
	}, 1000);
}
