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
    } 

    async function SidebarItem(id,name,innertext,icon) {
        $("#sidebar").append(
            `<li id="${id}" name="${name}">` +
            `    <i id="${id}" name="${name}">` +
            `    </i>` +
            `      <span id="${id}" name="${name}" class="iconify sidebar-icon" data-icon="${icon}" data-inline="false"></span>`+
            `      <a id="${id}" name="${name}">${innertext}</a>` +
            `</li>`
        );
    }

    async function PopulateSidebar() {
        SidebarItem("0","template","Template","ph:users-duotone")
    }
}



$('#app').on('click','#sidebar > li',function(e){
    let sidebarItem = ''
    if (e.target.tagName != 'LI' && e.target.tagName != 'A') {
        sidebarItemId = $(e.target).parent().attr('id')
    } else {
        sidebarItemId = $(e.target).attr('id')
    }

    GetSidebarRelatedItems(sidebarItemId,'1',true)
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

        $(`#sidebar li[id=${sidebarItemId}] svg`).addClass('sidebar-icon-target')
        $(`#sidebar li[id=${sidebarItemId}] a`).addClass('sidebar-a-target')
        $(`#sidebar li[id=${sidebarItemId}]`).addClass('active')

        const sidebarItemName = $(`.sidebar li#${sidebarItemId}`).attr("name")
        $(`#subsidebar-${sidebarItemName}`).animate(
            {
                left: "150",
            },
            150
        );
    }
}