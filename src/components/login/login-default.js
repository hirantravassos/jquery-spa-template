async function CreateLogin() {
    $('#app').append(
        `<div class="login">`+
        `</div>`
    )
    await SetupLoginBody()
    await SetupLoginForm()
    setTimeout(()=>{
        InputListener()
    },500)
}

async function CheckCredentials(credentialsData) {

    if (credentialsData[0]) {
        const token = credentialsData[0];
        const userData = credentialsData[1];

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

async function CreateLoginForm(formSetup) {
    const data = JSON.parse(formSetup)

    const logo = data.logo
    const titleText = data.titleText
    const descriptionText = data.descriptionText
    const usernameText = data.usernameText
    const usernamePlaceholder = data.usernamePlaceholder
    const passwordText = data.passwordText
    const passwordPlacehodler = data.passwordPlacehodler
    const buttonText = data.buttonText

    $('.login').append(
        `   <div class="login-sidebar">`+
        `       <form id="login">`+
        `           <div>`+
        `               <div class="login-sidebar-logo">`+
        `                   <img src="${logo}">`+
        `               </div>`+
        `               <div class="login-titles">`+
        `                   <span class="login-title">${titleText}</span>`+
        `                   <span class="login-subtitle">${descriptionText}</span>`+
        `               </div>`+
        `               <div class="login-fields">`+
        `                   <span>${usernameText}</span>`+
        `                   <input `+
        `                       id="username" `+
        `                       name="username" `+
        `                       autocomplete="email"`+
        `                       placeholder="${usernamePlaceholder}"`+
        `                       class="login-input">`+
        `               </div>`+
        `               <div class="login-fields">`+
        `                   <span>${passwordText}</span>`+
        `                   <input `+
        `                       id="password" `+
        `                       name="password" `+
        `                       type="password" `+
        `                       placeholder="${passwordPlacehodler}"`+
        `                       class="login-input">`+
        `               </div>`+
        `               <div class="login-buttons">`+
        `                   <button type="submit">${buttonText}</button>`+
        `               </div>`+
        `           </div>`+
        `       </form>`+
        `   </div>`
    )
}

async function CreateLoginBody(formSetup) {
    const data = JSON.parse(formSetup)
    
    const bodyLogo = data.bodylogo

    $('.login').append(
        `<div class="login-body">`+
        `    <img class="login-logo" src="${bodyLogo}">`+
        `</div>`
    ) 
}