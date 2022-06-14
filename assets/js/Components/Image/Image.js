function DisplayImage(){
    const imagesID = $('div#form img').length + 1
    const imageObj = $('input#new-image')[0].files[0]
    const imageSource = URL.createObjectURL(imageObj)
    
    $(
        ImageAdd(imagesID,imageSource,$.format.date(new Date(),'dd/MM/yyyy'))
    ).appendTo($('#form-image'))
    
    if (currentForm == 'request' && currentForm2 != 'os') {
        PostImage(currentID,currentID2,imageObj)
    }
}

function DisplayImage2(){
    const imagesID = $('div#form2 img').length + 1
    const imageObj = $('input#new-image2')[0].files[0]
    const imageSource = URL.createObjectURL(imageObj)
    
    if (imageDisable) {
        $('.toast').toast('show')
        $('#toast').text('Não é possível adicionar uma imagem a O.S. sem salvar antes!')
        return
    }
    
    $(
        ImageAdd(imagesID,imageSource,$.format.date(new Date(),'dd/MM/yyyy'))
    ).appendTo($('#form2-image'))
    
    if (currentForm == 'request' && currentForm2 == 'os') {
        PostImage(currentID,currentID2,imageObj)
    }
}

function GetImage(request,os){
    if (request == ``) {request = '-'}
    if (os == ``) {os = '-'}
    
    $.ajax({
        type: 'POST',
        url: `${APIUrl}/api/v1/image`,
        data: JSON.stringify({
            request:request,
            os:os,
        }),
        dataType:"json",
        contentType: 'application/json',
        success: function (data) {
            $.each(data, function(index,value){
                
                console.log('images:',index,value)
                
                let element = ''
                let source = FTPUrl+/fichas/+value.name
                let date = $.format.date(new Date(value.date),'dd/MM/yyyy')
                
                if (!ValidDate(date)) {date = ''}
                
                if (os == `-`) {
                    element = $('div#form-image')       
                } else if (os > 0) {
                    element = $('div#form2-image')
                }
                
                $(
                    ImageAdd(value.ID,source,date)
                ).appendTo(element)
                
            });
        },
        error: function(error) {
            console.log(error)
        }
    });
}

function PostImage(request,os,obj){
    var formData = new FormData()
    
    console.log('postimage:',obj)
    
    formData.append('file',obj)
    formData.append('request',request)
    formData.append('os',os)
    
    $.ajax({
        type: 'POST',
        url: `${APIUrl}/api/v1/image/post`,
        contentType: false, 
        processData: false, 
        data: formData,
        success: function (response) {
            
        },
        
        error: function(error) {
            console.log(error)
            //getAPI = true
        }
    });
}


$('form').mousedown(function(e){
    const selector = GetCookie('lastPage').substring(4)
    const element = e.target.tagName
    
    if (element == 'SPAN' || element == 'IMG') {
        const elementID = e.target.id
        const elementData = $('#'+elementID).next().text()
        const ImageURL = $(`img#${elementID}`).attr('src')

        if (selector == 'request') {
            switch (event.which) {
                case 1:
                    ImageZoom(ImageURL)
                    break;
                case 2:
                    break;
                case 3:
                    SetupConfirmBox(`Deseja deletar a imagem de data: '${elementData}'?`,elementID,'image')    
            }
        } 
    }
}); 