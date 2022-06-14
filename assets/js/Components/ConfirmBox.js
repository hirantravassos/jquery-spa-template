function SetupConfirmBox(requestText,id,table) {
    $('#confirm-box #confirm-text').text(requestText)
    $('#confirm-box').show(350)
    
    //Actions
    $('#confirm-box #confirm').on('click',function() {
        Delete(id,table);
        $('#confirm-box').hide(350)
    })
    $('#confirm-box #cancel').on('click',function() {
        $('#confirm-box').hide(350)
    })
}