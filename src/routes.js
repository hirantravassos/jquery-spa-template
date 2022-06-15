function Routes(
	sidebarItemId,
	subsidebarItemId,
	sidebarItemName,
	subsidebarItemName
) {
	SetCookie("sidebar", sidebarItemId, "1");
	SetCookie("subsidebar", subsidebarItemId, "1");

	if (sidebarItemName === "logo") {
		newUrl = sidebarItemName;
		$("title").text(sidebarItemName);
	} else {
		newUrl = sidebarItemName + "/" + subsidebarItemName;
		$("title").text(sidebarItemName + " - " + subsidebarItemName);
	}

	history.pushState({}, null, `#/${newUrl}`);
}

function OnReadyRoutes() {
	const newURL = String(window.location.hash).split("/");
	const sidebarItemName = newURL[1];

    if (sidebarItemName === 'logo') {
        DisplayLogo()
    } else {
        const sidebarItemId = $(`.sidebar li[name="${sidebarItemName}"] a`).attr(
            "id"
        );
        const subsidebarItemName = newURL[2];
        const subsidebarItemId = $(
            `.subsidebar li[name="${subsidebarItemName}"]`
        ).attr("id");

        setTimeout(function () {
            GetSidebarRelatedItems(sidebarItemId, subsidebarItemId, false);
        }, 500);
    }


}

$(window).on("popstate", function (e) {
	const newURL = String(window.location.hash).split("/");
	const sidebarItemName = newURL[1];

	if (sidebarItemName === "logo") {
		window.location.hash = "#/" + sidebarItemName;
        DisplayLogo()
	} else {
		const subsidebarItemName = newURL[2];
		window.location.hash =
			"#/" + sidebarItemName + "/" + subsidebarItemName;

		const sidebarItemId = $(
			`.sidebar li[name="${sidebarItemName}"] a`
		).attr("id");
		const subsidebarItemId = $(
			`.subsidebar li[name="${subsidebarItemName}"]`
		).attr("id");

		GetSidebarRelatedItems(sidebarItemId, subsidebarItemId);
	}
});
