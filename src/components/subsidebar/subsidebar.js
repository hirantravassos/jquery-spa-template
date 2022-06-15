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
		});
	}

	async function SubsidebarItem(
		parent,
		id,
		name,
		icon,
		innertext,
		isBottomIndex
	) {
		let setClass = "";
		if (isBottomIndex) {
			setClass = "subsidebar-config";
		}
		// console.log("$(`#subsidebar-"+parent+"`)")

		$(`#subsidebar-${parent}`).append(
			`<li id="${id}" name="${name}" class="${setClass}">` +
				`   <i id="${id}" name="${name}">` +
				`   </i>` +
				`       <span ` +
				`           id="${id}" ` +
				`           name="${name}" ` +
				`           class="iconify subsidebar-icon" ` +
				`           data-icon="${icon}" data-inline="false">` +
				`           </span>` +
				`   <a id="${id}" name="${name}">${innertext}</a>` +
				`</li>`
		);
	}

	async function PopulateSubsidebar() {
		SubsidebarItem(
			"template",
			"1",
			"demo-1",
			"ph:presentation-chart-duotone",
			"Template Child 1",
			false
		);
		SubsidebarItem(
			"template",
			"2",
			"demo-2",
			"icon-park-twotone:add-one",
			"Template Child 2",
			false
		);
		SubsidebarItem(
			"template",
			"3",
			"demo-3",
			"icon-park-twotone:align-text-both-one",
			"Template Child 3",
			false
		);
		SubsidebarItem(
			"template",
			"4",
			"demo-4",
			"icon-park-twotone:setting-two",
			"Template Child 4",
			true
		);
	}
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

function GetSubsidebarItem(sidebarItemId, subsidebarItemId, setRoute, unselectAll=false) {
	if (unselectAll) {
		SelectItem('')
		return
	} else {
		SelectItem(subsidebarItemId)
	}
	
	const sidebarItemName = $(`.sidebar li#${sidebarItemId} a`).attr("name");
	const subsidebarItemName = $(`.subsidebar li#${subsidebarItemId}`).attr("name");

	if (setRoute) {
		Routes(sidebarItemId, subsidebarItemId, sidebarItemName, subsidebarItemName);
	}

	DisplayModule(subsidebarItemName);

	function SelectItem(subsidebarItemId) {
		$(`.subsidebar li svg`).removeClass("subsidebar-icon-target");
		$(`.subsidebar li a`).removeClass("subsidebar-a-target");
		$(`.subsidebar li`).removeClass("active");

		if (subsidebarItemId === '') {return}
	
		$(`.subsidebar li#${subsidebarItemId} svg`).addClass("subsidebar-icon-target");
		$(`.subsidebar li#${subsidebarItemId} a`).addClass("subsidebar-a-target");
		$(`.subsidebar li#${subsidebarItemId}`).addClass("active");
	}
}
