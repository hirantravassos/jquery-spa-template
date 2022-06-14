async function CreateSidebar() {
    $("#app").append(
        "" +
            `<div ` +
            `id="sidebar" ` +
            `class="sidebar">` +
                `<div class="sidebar-logo">` +
                `FOCUS ` +
                `</div>`+
            `</div>` 
    );

    const usernameId = GetCookie('usernameId')
    await PopulateSidebar(usernameId)
}

async function PopulateSidebar(usernameId) {
    const sidebar = await API(
		'sidebar',
		JSON.stringify({
			username: usernameId
		}),
		'POST'
	)

    let icon = ''
	$.each(sidebar, function (index, value) { 
        let id = value.id
        let title = value.title
        let innertext = value.innertext
        let icon = value.icon

        $("#sidebar").append(
            `     <li id="${id}" name="${title}">` +
            `         <i id="${id}" name="${title}">` +
            `         </i>` +
            `           <span id="${id}" name="${title}" class="iconify sidebar-icon" data-icon="${icon}" data-inline="false"></span>`+
            `           <a id="${id}" name="${title}">${innertext}</a>` +
            `     </li>`
        );
	});
}

$('#app').on('click','#sidebar > li',function(e){
    let sidebarName = ''
    if (e.target.tagName != 'LI' && e.target.tagName != 'A') {
        sidebarName = $(e.target).parent().attr('name')
    } else {
        sidebarName = $(e.target).attr('name')
    }
    GetSidebarItems(sidebarName,'overview',true)
})

function GetSidebarItems(sidebarName,subsidebarName,setRoute) {
    $(`#sidebar li svg`).removeClass('sidebar-icon-target')
    $(`#sidebar li a`).removeClass('sidebar-a-target')
    $(`#sidebar li`).removeClass('active')

    $(`#sidebar li[name=${sidebarName}] svg`).addClass('sidebar-icon-target')
    $(`#sidebar li[name=${sidebarName}] a`).addClass('sidebar-a-target')
    $(`#sidebar li[name=${sidebarName}]`).addClass('active')

    const subsidebar = $(".subsidebar");
	$.each(subsidebar, function (index, value) {
		$(`#${value.id}`).animate(
			{
				left: "0",
			},
			150
		);
	});
	$(`#subsidebar-${sidebarName}`).animate(
		{
			left: "150",
		},
		150
	);

    GetModule()
    GetSubsidebar(sidebarName,subsidebarName,setRoute)
}