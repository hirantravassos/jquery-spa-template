async function PopulateSidebar() {
    // Exmaple: SidebarItem(id,innertext,icon,isBottom)

    SidebarItem("example1","Example 1","ph:user-circle-duotone",false)
    SidebarItem("example2","Example 2","ph:notebook-duotone",false)
    SidebarItem("logout","Logout Example","ph:export-duotone",true)
}

async function PopulateSubsidebar() {
	// Example: SubsidebarItem(parentName,id,icon,innertext,isBottomIndex)

	SubsidebarItem(
		"example1",
		"module1",
		"ph:list-dashes-bold",
		"Module 1",
		false
	);
	SubsidebarItem(
		"example1",
		"module2",
		"ph:list-dashes-bold",
		"Module 2",
		false
	);
	SubsidebarItem(
		"example2",
		"module3",
		"ph:list-dashes-bold",
		"Module 3",
		false
	);
	SubsidebarItem(
		"example2",
		"module4",
		"ph:list-dashes-bold",
		"Module 4",
		false
	);
}