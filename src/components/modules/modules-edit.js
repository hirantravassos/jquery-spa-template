//Create your modules here:
async function GetCustomModules() {
	CreateSidebarRelatedModule("template", "demo-1", "module-1");
	ModuleBody1("module-1");

    CreateSidebarRelatedModule("template", "demo-2", "module-2");
    ModuleBody2("module-2");

    CreateSidebarRelatedModule("template", "demo-3", "module-3");
    ModuleBody3("module-3");

    const parentTableId = await CreateTableRelatedModule("client");
    ModuleTableBody1(parentTableId);
}

function ModuleBody1(parentId) {
    ModuleTitle(parentId,"I'm a title")
    ModuleSubtitle(parentId,"I'm a subtitle")
    ModuleInput(parentId,"I'm a Input 1","input1",100,"Placeholder 1","000.000","number")
    ModuleInput(parentId,"I'm a Input 2","input2",50,"Placeholder 2","","text")
    ModuleInput(parentId,"I'm a Input 3","input3",50,"Placeholder 3","","number")
    ModuleFooter(parentId,"I'm a Footer")
}

function ModuleBody2(parentId) {
    ModuleTitle(parentId,"I'm a title")
    ModuleSubtitle(parentId,"I'm a subtitle")
    ModuleInput(parentId,"I'm a Input 1","input1",100,"Placeholder 1","000.000","number")
    ModuleInput(parentId,"I'm a Input 2","input2",50,"Placeholder 2","","text")
    ModuleInput(parentId,"I'm a Input 3","input3",50,"Placeholder 3","","number")
    ModuleInput(parentId,"I'm a Input 4","input4",100,"Placeholder 4","","number")
    ModuleInput(parentId,"I'm a Input 5","input5",100,"Placeholder 5","","number")
    ModuleFormControl(parentId)
}

async function ModuleBody3(parentId) {
    ModuleTitle(parentId,"I'm a title")

    const onClickGotoThis = "module-2"
    const onClickPopulateWithThisAPI = "client-id"
    const tableFields = `{`+
    `"name":{`+
    `   "innerText":"Nome",`+
    `   "width":"40"`+
    `   },`+
    `"cpf":{`+
    `   "innerText":"CPF",`+
    `   "width":"20"`+
    `   },`+
    `"rg":{`+
    `   "innerText":"RG",`+
    `   "width":"20"`+
    `   },`+
    `"cellphone":{`+
    `   "innerText":"Contato",`+
    `   "width":"20"`+
    `   }`+
    `}`
    ModuleTable(parentId,'client-list',tableFields,'client-id')
}

async function ModuleTableBody1(parentId) {

}