async function CreateSidebar() {

    Init()
    PopulateSidebar()

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

    async function PopulateSidebar() {
        const sidebar = await $.getJSON(`${ftpUrl}/src/components/sidebar/sidebar.json`,
            async function (data) {
                return data
            }
        );
    
        console.log(sidebar)
    
        let icon = ''
        $.each(sidebar, function (index, value) { 
            let id = value.id
            let name = value.name
            let innertext = value.innertext
            let icon = value.icon
    
            $("#sidebar").append(
                `<li id="${id}" name="${name}">` +
                `    <i id="${id}" name="${name}">` +
                `    </i>` +
                `      <span id="${id}" name="${name}" class="iconify sidebar-icon" data-icon="${icon}" data-inline="false"></span>`+
                `      <a id="${id}" name="${name}">${innertext}</a>` +
                `</li>`
            );
        });
    }
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