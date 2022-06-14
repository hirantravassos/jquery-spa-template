$('#section-logout').click(function(){
    SetCookie('username','',0)
    SetCookie('auth','',0)
    $('body').hide(350)
    
    setTimeout(function(){
        window.location = 'login.html'
    },350)
})