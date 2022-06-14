$(document).ready(function(){
    const userid = GetCookie('id')
    const username = GetCookie('username')
    
    if (userid == '' || username == '') {
        Logout()
    }
    
    Init()
})

$(document).click(function(){
    const userid = GetCookie('id')
    const username = GetCookie('username')
    
    if (userid == '' || username == '') {
        Logout()
    }
})

function Init() {
    $(`#section-status`).text('')
    $(`#section-status`).text(`${GetCookie(`username`)} - ${GetCookie(`auth`)}`)

    $('#image-zoom').hide()
    $('#confirm-box').hide()
    $('#changelog').hide()
    $('div#indexDefault').hide()
    $('div#function').hide()
    $('div#table').hide()
    $('div#table2').hide()
    $('div#form').hide()
    $('div#form2').hide()

    $('body').hide()
    $('body').show('350')

    setTimeout(function(){
        PageState()
    },100)

    // $('.toast').toast('show')
    // $('#toast').text('O servidor está fora do ar, favor entrar em contato com KingHost!')
}

function PageState(){
    try {
        if (GetCookie('lastPage') == 'index') {
            $(`#logo`).click()
        } else {
            $(`#${GetCookie('lastPage')}`).click()
        }
    } catch (error) {
        // console.log('PageState Error:',error)
    }
}

function Logout() {
    SetCookie('username','',0)
    SetCookie('auth','',0)
    $('body').hide(350)
    
    setTimeout(function(){
        window.location = 'login.html'
    },350)
}