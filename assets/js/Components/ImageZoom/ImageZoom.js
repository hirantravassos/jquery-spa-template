let rotateDeg = 7200

function ImageZoom(ImageURL) {
    rotateDeg = 7200
    $('#image-zoom img').css("transform","rotate(-"+rotateDeg+"deg)")
    $('div#image-zoom img').attr('src',ImageURL)
    $('div#image-zoom').show(500)
    $('div#image-zoom').attr('status',true)
}

$('div#image-zoom .closebutton').click(function(){
    $('div#image-zoom').hide(500)
})

$('#rotate-left').on('click',function() {
    rotateDeg = rotateDeg + 90
    console.log(rotateDeg)
    $('#image-zoom img').css("transform","rotate(-"+rotateDeg+"deg)")
})

$('#rotate-right').on('click',function() {
    rotateDeg = rotateDeg - 90
    console.log(rotateDeg)
    $('#image-zoom img').css("transform","rotate(-"+rotateDeg+"deg)")
})

// $('body').mousedown(function(event) {
//     const selector = GetCookie('lastPage').substring(4)
    
//     if (selector == 'request' && $('div#image-zoom').attr('status') == 'true') {
        
//         switch (event.which) {
//             case 1:
//                 console.log('case 1')
//                 ImageZoom('')
//                 return
//             case 2:
//                 break;
//             case 3:
//                 // SetupConfirmBox(`Deseja deletar '${targetName}'?`,targetID,selector)    
//         }  
//     }
// }) 