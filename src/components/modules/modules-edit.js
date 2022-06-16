/*
Create your modules in this file!

    Create modules with those functions:
        - CreateSidebarRelatedModule(sidebarItemName,subsidebarItemName,id)
        - CreateTableRelatedModule(tableName)
            Obs: CreateTableRelatedModule is an "async function" that returns an 
                new id that can be used for creating a hidden module form related
                to the "onclick" event of the table itself.

    Elements that can be used inside modules bellow:
        Titles:
            - ModuleTitle(parentId, innerText)
            - ModuleSubtitle(parentId, innerText)

        Tables:
            - ModuleTable(parentId,apiPath,tableFields,onClickPopulateWithThisAPI)

        Forms:
            - ModuleInput(parentId,title,name,width,placeholder,mask,inputType)
            - ModuleFormControl(parentId)

        Footers:
            - ModuleFooter(parentId, innerText)
*/

async function GetCustomModules() {
    CreateSidebarRelatedModule("template", "demo-1", "module-client");
    ModuleBody1("module-client");

    const parentTableId = await CreateTableRelatedModule("client");
    ModuleTableBody1(parentTableId);
}

async function ModuleBody1(parentId) {
    ModuleTitle(parentId,"I'm a title")

    const onClickGotoThis = "module-2"
    const onClickPopulateWithThisAPI = "client-id"
    const tableFields = `{`+
    `"name":{`+
    `   "innerText":"Nome",`+
    `   "width":"40"`+
    `   },`+
    `"rg":{`+
    `   "innerText":"RG",`+
    `   "width":"20"`+
    `   },`+
    `"cellphone2":{`+
    `   "innerText":"Contato",`+
    `   "width":"20"`+
    `   }`+
    `}`
    ModuleTable(parentId,'client-list',tableFields,'client-id')
}

async function ModuleTableBody1(parentId) {
    ModuleTitle(parentId,"Active when clicked on table row")
    ModuleSubtitle(parentId,"Subtitle test...")

    ModuleInput(parentId,"Name","name",100,"Nome completo","","text")
    ModuleInput(parentId,"CPF","cpf",50,"000.000.000-00","000.000.000-00","any")
    ModuleInput(parentId,"RG","rg",50,"00.000.000-0","00.000.000-0","any")
    ModuleInput(parentId,"Data Nascimento","birthday",25,"00/00/0000","00/00/0000","any")

    ModuleFormControl(parentId)
}