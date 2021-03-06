const apiUrl = 'http://localhost:8080/api/v1'
const ftpUrl = 'http://127.0.0.1:8081'

async function API(path,request,type) {
    const token = GetCookie('token')
	const usernameId = GetCookie('usernameId')
	const urlPath = `${apiUrl}/${path}`

	if (token === null && usernameId === null) {
		console.log('Unauthorized token or usernameId')
		return
	}

	if (!isProduction) {
		console.log('API-Request Path: ',path)
		console.log('API-Request: ',request)
	}

    const response = await $.ajax({
		url: `${urlPath}`,
		headers: {
			"token": `${token}`,
			"username": `${usernameId}`,
			"Content-Type": "application/json",
		},
		method: "POST",
		dataType: "json",
		data: request,
		success: function (data) {
			if (!isProduction) {console.log('API-Response: ',data)}
			return data;
		},
	});
    return response
}

async function GetLogin(request) {
	const apiLoginPath = 'login'
    const loginResponse = await $.ajax({
		url: `${apiUrl}/${apiLoginPath}`,
		headers: {
			"Content-Type": "application/json",
		},
		method: "POST",
		dataType: "json",
		data: request,
		success: function (data) {
			return data;
		},
	});

	const usernameId = loginResponse.username[0].id
	SetCookie('usernameId',usernameId,1)

    const token = loginResponse.token
    SetCookie('token',token,1)
}