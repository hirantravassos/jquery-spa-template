function CreatePage() {
    if ($('#page').length > 0) {
        $('#page').hide(300)
        CreatePageElements()
    } else {
        CreatePageElements()
    }

}

function CreatePageElements(){
    setTimeout(function(){
        try {
            $('#page').remove()
        } catch (error) {}

        $('#app').append(
            `<div id="page" class="page">`+
            `</div>`
        );
        CreateNavBar()
        CreateModule()
    },350)
}