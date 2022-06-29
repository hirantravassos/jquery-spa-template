async function PopulateSidebar() {
    // Exmaple: SidebarItem(id,innertext,icon,isBottom)

    SidebarItem("form","Form & Table","ph:users-duotone",false)
    SidebarItem("chart","Chart Example","ph:presentation-chart-duotone",false)
    SidebarItem("settings","Settings","icon-park-twotone:setting-two",true)
}

async function PopulateSubsidebar() {
	// Example: SubsidebarItem(parentName,id,icon,innertext,isBottomIndex)

	SubsidebarItem(
		"form",
		"form-demo",
		"ph:presentation-chart-duotone",
		"Form Demo",
		false
	);
	SubsidebarItem(
		"form",
		"table-demo",
		"ph:presentation-chart-duotone",
		"Table Demo",
		false
	);

	SubsidebarItem(
		"chart",
		"chart-demo",
		"ph:presentation-chart-duotone",
		"Chart Demo",
		false
	);

	SubsidebarItem(
		"settings",
		"settings-demo",
		"ph:presentation-chart-duotone",
		"Settings Demo",
		false
	);

    SubsidebarItem(
		"settings",
		"logout",
		"material-symbols:logout",
		"Logout",
		true
	);
}