async function CreateSidebar() {

    await Init()
    await PopulateSidebar()
    await CreateSubsidebar()

    async function Init() {
        const Logo = await GetLogo()
        $("#app").append(
            "" +
                `<div ` +
                `id="sidebar" ` +
                `class="sidebar">` +
                    `<div class="sidebar-logo">` +
                    `<img src="${Logo}"> ` +
                    `</div>`+
                `</div>` 
        );
        $(`#sidebar`).hide()
        $(`#sidebar`).show(450)
    } 
}

async function SidebarItem(id,innertext,icon,isBottomIndex) {
    let setClass = "";
    if (isBottomIndex) {
        setClass = "sidebar-bottom";
    }

    $("#sidebar").append(
        `<li id="sidebar-${id}" name="sidebar-${id}" class="${setClass}">` +
        `    <i id="sidebar-${id}" name="sidebar-${id}">` +
        `    </i>` +
        `      <span id="sidebar-${id}" name="sidebar-${id}" class="iconify sidebar-icon" data-icon="${icon}" data-inline="false"></span>`+
        `      <a id="sidebar-${id}" name="sidebar-${id}">${innertext}</a>` +
        `</li>`
    );
    $(`#sidebar li#${id}`).hide()
    $(`#sidebar li#${id}`).show(450)
}

$('#app').on('click','#sidebar > li',function(e){
    let sidebarItemId = ''
    if (e.target.tagName != 'LI' && e.target.tagName != 'A') {
        sidebarItemId = $(e.target).parent().attr('id')
    } else {
        sidebarItemId = $(e.target).attr('id')
    }

    const subsidebarItemId = $(`#subsidebar-${sidebarItemId} li:first`).attr('id')
    GetSidebarRelatedItems(sidebarItemId,subsidebarItemId,true)
})

function GetSidebarRelatedItems(sidebarItemId,subsidebarItemId,setRoute,unselectAll=false) {
    if (unselectAll) {
		SelectItem('')
		return
	} else {
		SelectItem(sidebarItemId)
	}

    GetSubsidebarItem(sidebarItemId,subsidebarItemId,setRoute)

    function SelectItem(sidebarItemId) {
        $(`#sidebar li svg`).removeClass('sidebar-icon-target')
        $(`#sidebar li a`).removeClass('sidebar-a-target')
        $(`#sidebar li`).removeClass('active')

        const subsidebar = $(".subsidebar");
        $.each(subsidebar, function (index, value) {
            $(`#${value.id}`).animate(
                {
                    left: "0",
                },
                150
            );
        });

        if (sidebarItemId === '') {return}

        $(`#sidebar li#${sidebarItemId} svg`).addClass('sidebar-icon-target')
        $(`#sidebar li#${sidebarItemId} a`).addClass('sidebar-a-target')
        $(`#sidebar li#${sidebarItemId}`).addClass('active')


        $(`#subsidebar-${sidebarItemId}`).animate(
            {
                left: "150",
            },
            150
        );
    }
}