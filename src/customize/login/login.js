async function OnSuccessSetCookies(token,userData) {
	SetCookie("token", token, "1");
}

async function ValidateCredentials() {
	const formData = JSON.stringify(GetFormData($("form")));
	let token;
	let userData;

	if (isProduction) {
		const response = await API("login", formData);
		token = response.token;
	} else {
		token = 'postman'
	}

	return [token, userData];
}

async function SetupLogin() {
	const logo = await GetLogo();
	const bodylogo = await GetLogoBody();

	const formSetup = JSON.stringify({
		logo: logo,
		bodyLogo: bodylogo,
		titleText: "Bem vindo de volta!",
		descriptionText:
			"Sistema de gestão Visual Box!",
		usernameText: "Usuário",
		usernamePlaceholder: "Usuário",
		passwordText: "Senha",
		passwordPlacehodler: "Senha",
		buttonText: "Entrar",
		footerText: "Made and developed by Hiran Travassos - 2022."
	});

	await CreateLoginContainer(JSON.parse(formSetup));
}
