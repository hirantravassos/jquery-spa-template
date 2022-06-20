async function PopulateSubsidebar() {
	// Example: SubsidebarItem(parentName,id,name,icon,innertext,isBottomIndex)

	SubsidebarItem(
		"template",
		"demo-1",
		"ph:presentation-chart-duotone",
		"Template SubItem 1",
		false
	);
	SubsidebarItem(
		"template-2",
		"demo-1",
		"icon-park-twotone:setting-two",
		"Template SubItem 2",
		true
	);

	SubsidebarItem(
		"template-3",
		"demo-1",
		"icon-park-twotone:setting-two",
		"Template-2 SubItem 1",
		false
	);
}