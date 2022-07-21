async function CreateSubsidebar() {
	await Init();
	await PopulateSubsidebar();

	async function Init() {
		const sidebarItems = $(`div#sidebar li`);

		$.each(sidebarItems, async function (index, value) {
			let sidebarName = $(value).attr("name");
			let sidebarText = $(value).text();

			$("#app").append(
				"" +
					`<div ` +
					`	id="subsidebar-${sidebarName}" ` +
					`	class="subsidebar">` +
					`<div class="subsidebar-title">` +
					`${sidebarText}</div>` +
					`</div>`
			);

			$(`.subsidebar`).hide();
			setTimeout(() => {
				$(`.subsidebar`).show(350);
			}, 350);
		});
	}
}

async function SubsidebarItem(
    parent,
    id,
    icon,
    innertext,
    isBottomIndex
) {
    let setClass = "";
    if (isBottomIndex) {
        setClass = "subsidebar-bottom";
    }

    $(`#subsidebar-sidebar-${parent}`).append(
        `<li id="subsidebar-item-${id}" name="subsidebar-item-${id}" class="${setClass}">` +
            `   <i id="subsidebar-item-${id}" name="subsidebar-item-${id}">` +
            `   </i>` +
            `       <span ` +
            `           id="subsidebar-item-${id}" ` +
            `           name="subsidebar-item-${id}" ` +
            `           class="iconify subsidebar-icon" ` +
            `           data-icon="${icon}" data-inline="false">` +
            `           </span>` +
            `   <a id="subsidebar-item-${id}" name="subsidebar-item-${id}">${innertext}</a>` +
            `</li>`
    );
}

$("#app").on("click", ".subsidebar li", function (e) {
	let subsidebarItemId = "";
	if (e.target.tagName != "LI" && e.target.tagName != "A") {
		subsidebarItemId = $(e.target).parent().attr("id");
	} else {
		subsidebarItemId = $(e.target).attr("id");
	}

	const sidebarItem = $("#sidebar .active").attr("id");
	GetSubsidebarItem(sidebarItem, subsidebarItemId, true);
});

function GetSubsidebarItem(
	sidebarItemId,
	subsidebarItemId,
	setRoute,
	unselectAll = false
) {
	if (unselectAll) {
		SelectItem("");
		return;
	} else {
		SelectItem(subsidebarItemId);
	}

	if (setRoute) {
		Routes(
			sidebarItemId,
			subsidebarItemId
		);
	}

	DisplayModule();

	function SelectItem(subsidebarItemId) {
		$(`.subsidebar li svg`).removeClass("subsidebar-icon-target");
		$(`.subsidebar li a`).removeClass("subsidebar-a-target");
		$(`.subsidebar li`).removeClass("active");

		if (subsidebarItemId === "") {
			return;
		}

		$(`.subsidebar li#${subsidebarItemId} svg`).addClass(
			"subsidebar-icon-target"
		);
		$(`.subsidebar li#${subsidebarItemId} a`).addClass(
			"subsidebar-a-target"
		);
		$(`.subsidebar li#${subsidebarItemId}`).addClass("active");
	}
}
