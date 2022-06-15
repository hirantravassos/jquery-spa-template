//Create your modules here:
async function GetCustomModules() {
	CreateCustomModule("template", "demo-1", "module-1");
	ModuleBody1("module-1");
}

function ModuleBody1(targetId) {
    ModuleTitle(targetId,"I'm a title")
    ModuleSubtitle(targetId,"I'm a subtitle")
}
