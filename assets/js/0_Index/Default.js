//NAVBAR Target
$('img#logo').on('click', function() {
    $('#indexDefault').show('2000')
})

$('body #navbar').on('click', function(){
    $('body').on("click", function(e){
        if (e.target.id != 'logo' && $(event.target).parent().attr('id') == 'navbar') {
            $('#indexDefault').hide('300')
        }   
    }); 
})

