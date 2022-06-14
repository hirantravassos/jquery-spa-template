$(`form`).submit(function(e){
    e.preventDefault()
    
    username = $('#username').val()
    password = $('#password').val()
    
    $.ajax({
        url: APIUrl+"/api/v1/login",
        type: "POST",
        headers: {  'Access-Control-Allow-Origin': '*' },
        data: JSON.stringify({
            username:username,
            password:password
        }),
        dataType: "json",
        contentType: 'application/json',
        
        success: function(response) {
            $('form').hide(350)
            SetCookie('username',response.username,1)
            SetCookie('id',response.ID,1)
            SetCookie('auth',response.auth,1)
            SetCookie('lastPage','index',1)
            
            setTimeout(function(){
                window.location = 'index.html'
            },350)
        },
        
        error: function(response) {
            console.log('error',response.responseJSON,response.status)
            if (response.status == 401) {
                $("form").effect("shake", {times:2, distance:4}, 50);
                $('.toast').toast('show')
                $('#toast').text('O usuário ou senha estão incorretos, caso necessário entrar em contato com seu adminsitrador')
                return
            }
            if (response.status == 503) {
                $('.toast').toast('show')
                $('#toast').text('Login falhou! O servidor está fora do ar, favor entrar em contato com KingHost!')
                return
            }
            $('.toast').toast('show')
            $('#toast').text('Erro desconhecido! Verifique sua conexão.')
        }
    })
})