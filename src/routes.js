function Routes(sidebarItemName, subsidebarItemName, parameters) {
	if (sidebarItemName === 'sidebar-logout' || subsidebarItemName === 'subsidebar-item-logout') {
		Logout()
	}

	if (sidebarItemName === "logo") {
		newUrl = sidebarItemName;
		$("title").text(sidebarItemName);
	} else {
		sidebarItemName = sidebarItemName.replace("sidebar-", "");
		subsidebarItemName = subsidebarItemName.replace("subsidebar-item-", "");
	
		SetCookie("sidebar", sidebarItemName, "1");
		SetCookie("subsidebar", subsidebarItemName, "1");

		if (!parameters) {parameters=""}


		newUrl = sidebarItemName + "/" + subsidebarItemName + parameters;
		// $("title").text(sidebarItemName + " - " + subsidebarItemName);
	}

	const newURL = String(window.location.hash).split("/");
	if (newURL[1] !== sidebarItemName || newURL[2] !== subsidebarItemName || parameters !== '') {
		history.pushState({}, null, `#/${newUrl}`);
	}
}

function OnReadyRoutes() {
	const newURL = String(window.location.hash).split("/");
	const sidebarItemId = `sidebar-${newURL[1]}`;

	if ((newURL[1] === "logo") || 
	(newURL[1] === 'logout' || newURL[2] === 'logout')) {
		DisplayLogo();
	} else {
		const subsidebarItemId = `subsidebar-item-${newURL[2]}`;
		setTimeout(function () {
			GetSidebarRelatedItems(sidebarItemId, subsidebarItemId, false);
		}, 500);
	}
}

$(window).on("popstate", function (e) {
	const newURL = String(window.location.hash).split("/");
	const sidebarItemId = `sidebar-${newURL[1]}`;

	if (newURL[1] === "logo") {
		DisplayLogo();
	} else {
		const subsidebarItemId = `subsidebar-item-${newURL[2]}`;
		GetSidebarRelatedItems(sidebarItemId, subsidebarItemId, false);
	}
});
