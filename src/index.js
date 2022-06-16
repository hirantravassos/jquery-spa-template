const isProduction = false

$(document).ready(async function () {
	//TEMPORARY
	await GetLogin(
		JSON.stringify({
			username: "hirantravassos",
			password: "123",
		})
	);

	await CreateSidebar();
	await CreatePage();
	await OnReadyRoutes();

	setTimeout(() => {
		CheckForErrors()
	}, 1000)
});
