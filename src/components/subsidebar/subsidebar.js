async function CreateSubsidebar() {
	const sidebarItems = $(`div#sidebar li`);

	$.each(sidebarItems, async function (index, value) {
		let subsidebarName = $(value).attr("name");
		let subsidebarText = $(value).text();

		$("#app").append(
			"" +
				`<div ` +
				`id="subsidebar-${subsidebarName}" ` +
				`class="subsidebar">` +
				`<div class="subsidebar-title">` +
				`${subsidebarText}` +
				`</div>` +
				`</div>`
		);

		const subsidebarItems = await $.getJSON(
			`${ftpUrl}/src/components/subsidebar/items/subsidebar-${subsidebarName}.json`,
			async function (data) {
				return data;
			}
		);

		$.each(subsidebarItems, function (index, value) {
			let sClass = "";
			let id = value.id;
			let title = value.title;
			let innertext = value.text;
			let icon = value.icon;

			if (title == "config") {
				icon = `icon-park-twotone:setting-two`;
				sClass = "subsidebar-config";
			}

			$(`#subsidebar-${subsidebarName}`).append(
				`<li id="${id}" name="${title}" class="${sClass}">` +
					`   <i id="${id}" name="${title}">` +
					`   </i>` +
					`       <span ` +
					`           id="${id}" ` +
					`           name="${title}" ` +
					`
                                            class="iconify subsidebar-icon" ` +
					`           data-icon="${icon}" data-inline="false">` +
					`           </span>` +
					`   <a id="${id}" name="${title}">${innertext}</a>` +
					`</li>`
			);
		});
	});
}

$("#app").on("click", ".subsidebar li", function (e) {
	let subsidebarName = "";
	if (e.target.tagName != "LI" && e.target.tagName != "A") {
		subsidebarName = $(e.target).parent().attr("name");
	} else {
		subsidebarName = $(e.target).attr("name");
	}

	const sidebarName = $("#sidebar .active").attr("name");
	GetSubsidebar(sidebarName, subsidebarName, true);
});

function GetSubsidebar(sidebarName, subsidebarName, setRoute) {
	$(`.subsidebar li svg`).removeClass("subsidebar-icon-target");
	$(`.subsidebar li a`).removeClass("subsidebar-a-target");
	$(`.subsidebar li`).removeClass("active");

	$(`.subsidebar li[name=${subsidebarName}] svg`).addClass(
		"subsidebar-icon-target"
	);
	$(`.subsidebar li[name=${subsidebarName}] a`).addClass(
		"subsidebar-a-target"
	);
	$(`.subsidebar li[name=${subsidebarName}]`).addClass("active");

	const sidebarText = $(`#sidebar li[name=${sidebarName}]`).text();
	const subsidebarText = $(`#subsidebar-${sidebarName} .active a`).text();

	if (setRoute) {
		Routes(sidebarName, subsidebarName, sidebarText, subsidebarText);
	}
	
	DisplayModule(subsidebarName);
}
