function SetupConfirmBox(requestText,callback,parameters) {
    $('#confirm-box #confirm-text').text(requestText)
    $('#confirm-box').show(350)
    
    //Actions
    $('#confirm-box #confirm').on('click',function() {
        callback(parameters);
        $('#confirm-box').hide(350)
    })
    $('#confirm-box #cancel').on('click',function() {
        $('#confirm-box').hide(350)
    })
}