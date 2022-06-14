let deleteID
let deleteTable

function SetupConfirmBox(requestText,id,table) {
    if (table == 'user') {
        $('.toast').toast('show')
        $('#toast').text('Não é permitido deletar usuários!')
        return
    }
    
    $('#confirm-box #confirm-text').text(requestText)
    $('#confirm-box').show(350)
    
    deleteID = id
    deleteTable = table
}

 //Actions
$('#confirm-box #confirm').on('click',function() {
    console.log('confirm delete','id:' + deleteID,'table:' + deleteTable)
    
    if (deleteTable == 'image') {
        imageID = String($(`img#${deleteID}`).attr('src'))
        imageID = imageID.split("/").pop()
        
        Delete(imageID,deleteTable);
        $(`img#${deleteID}`).parent().remove()
    } else {
        Delete(deleteID,deleteTable);
    }
    
    $('#confirm-box').hide(350)
    
    deleteID = ''
    deleteTable = ''
})

$('#confirm-box #cancel').on('click',function() {
    $('#confirm-box').hide(350)
    
    deleteID = ''
    deleteTable = ''
})