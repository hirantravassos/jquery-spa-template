async function CreateLogin() {
    const token = GetCookie('token')

    if (!token) {
        window.location.hash = ""

        $('#app').append(
            `<div class="login">`+
            `</div>`
        )
        await SetupLogin()
    } else {
        LoggedIn()
    }
}

async function CheckCredentials(credentialsData) {

    if (credentialsData[0]) {
        let token = ''
        let userData = ''

        token = credentialsData[0];
        userData = credentialsData[1];

        OnSuccessSetCookies(token,userData)

        $('#login').hide(350)

        setTimeout(() => {
            $('.login-sidebar').animate({
                "margin-left": "2000px"
            },350)
        },350)

        setTimeout(() => {
            $('.login-body').hide(350)
        },350)

        setTimeout(() => {
            LoggedIn()
        },1200)
    } else {
        InvalidCredentials()
    }
}

$('body').on('submit','#login', async function(e){
    e.preventDefault();
    $('.login-buttons button').blur()

    const credentialsData = await ValidateCredentials()
    CheckCredentials(credentialsData)
})

async function InvalidCredentials() {
    $(`#username`)
        .css( "border-color","var(--red)" )
        .css( "outline-color","var(--red)" )
        .css( "color","var(--red)" )

    $(`#password`)
        .css( "border-color","var(--red)" )
        .css( "outline-color","var(--red)" )
        .css( "color","var(--red)" )

    $(`.login-buttons button`)
        .css( "background-color","var(--red)" )
        .css( "color","white" )
}

async function ClearInvalidCredentials() {
    $(`#username`)
        .css( "border-color","" )
        .css( "outline-color","" )
        .css( "color","" )

    $(`#password`)
        .css( "border-color","" )
        .css( "outline-color","" )
        .css( "color","" )

    $(`.login-buttons button`)
        .css( "background-color","" )
        .css( "color","" )
}

$('body').on('focus','#username',function() {
    ClearInvalidCredentials()
})

$('body').on('focus','#password',function() {
    ClearInvalidCredentials()
})

async function Logout() {
    $('#app').hide(350)
    $('#app').empty()

    SetCookie('token','',0)

    await CreateLogin()
    $('#app').show(350)
}