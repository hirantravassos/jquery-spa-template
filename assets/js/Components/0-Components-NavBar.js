var clickfocus 
var divfun = $('#function')
var divtable = $('#table')
var divform = $('#form')

$('img#logo').on('click',function(){
    divfun.hide(350)
    divtable.hide(350)
    divform.hide(350)
})

$('body div a').on('click',function(){
    divfun.hide(350)
    divtable.hide(350)
    divform.hide(350)
    
    divfun.show(350)
    //divtable.show(350)
})

$('body').on("click", function(e){
    const thiselement = e.target.id
    if (thiselement.indexOf('nav-') == 0 || thiselement.indexOf('logo') == 0) {
        $('body div a').removeClass('active')
        $(`#${e.target.id}`).addClass('active')
        SetCookie('lastPage',e.target.id,1)
    }
}); 

function ShowTable(){
    divtable.show(350)
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

$('#section-logout').click(function(){
    SetCookie('username','',0)
    SetCookie('auth','',0)
    $('body').hide(350)
    
    setTimeout(function(){
        window.location = 'login.html'
    },350)
})