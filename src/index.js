$(document).ready(async function () {
	//TEMPORARY
    await GetLogin(
		JSON.stringify({
			username: 'hirantravassos',
			password: '123'
		})
	);

	await CreatePage();
	await CreateSidebar()
	await CreateSubsidebar();
	await OnReadyRoutes()
	
});