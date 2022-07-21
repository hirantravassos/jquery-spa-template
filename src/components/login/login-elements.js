async function CreateLoginContainer(data) {
    CreateLoginBody(data) 
    CreateLoginForm(data)
    CreateLoginFooter(data)
}

async function CreateLoginForm(data) {
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
        `               <div class="input-fields" style="margin-left:0px;margin-right:0px;">`+
        `                   <span class="login-span">${usernameText}</span>`+
        `                   <input `+
        `                       id="username" `+
        `                       name="username" `+
        `                       autocomplete="email"`+
        `                       placeholder="${usernamePlaceholder}"`+
        `                       class="login-input">`+
        `               </div>`+
        `               <div class="input-fields" style="margin-left:0px;margin-right:0px;">`+
        `                   <span class="login-span">${passwordText}</span>`+
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

async function CreateLoginBody(data) {
    const bodyLogo = data.bodyLogo

    $('.login').append(
        `<div class="login-body">`+
        `    <img class="login-logo" src="${bodyLogo}">`+
        `</div>`
    ) 
}

async function CreateLoginFooter(data) {
    const footerText = data.footerText

    $('.login').append(
        `<div `+
        `   class="login-footer"`+
        `   >`+
        `    <span>${footerText}</span>`+
        `</div>`
    ) 
}