/* 
    LOGIN OVERALL:
    OnSuccessSetCookies(): Self explanatory, it setup your cookies on login,
    highly recommended to give it a check.

    ValidateCredentials(): Don't break it's structure, listeners and handlers
    dependencies are linked to this structure. Call as many API you want, but
    return only "token" as string and "userData" as JSON.

    OBS: "formData" contains "username" and "password" as a JSON string.

    CreateLogin(): Setup your login page, text and logo can be modify there.
*/

async function OnSuccessSetCookies(token,userData) {
	SetCookie("token", token, "1");
	// SetCookie("usernameId", userData.id, "1");
}

async function ValidateCredentials() {
	const formData = JSON.stringify(GetFormData($("form")));
	let token;
	let userData;

	// Modify
	const response = await API("login", formData);
	token = response.token;
	// End Modify

	return [token, userData];
}

async function SetupLoginBody() {
	const bodylogo = await GetLogoBody();

	const formSetup = JSON.stringify({
		bodylogo: bodylogo,
	});

	CreateLoginBody(formSetup);
}

async function SetupLoginForm() {
	const logo = await GetLogo();

	const formSetup = JSON.stringify({
		logo: logo,
		titleText: "Welcome back!",
		descriptionText:
			"Here is an example of a subtitle, please insert what you want!",
		usernameText: "E-mail or Username",
		usernamePlaceholder: "E-mail or Username",
		passwordText: "Password",
		passwordPlacehodler: "Password",
		buttonText: "Submit",
	});

	CreateLoginForm(formSetup);
}
