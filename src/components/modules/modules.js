async function SetupModules() {
    // CreateSidebarRelatedModule(sidebarItemName,subsidebarItemName,id)
    const formDemoId = await CreateSidebarRelatedModule("form", "form-demo");
    //You can create form with personalized function as this!
    ModuleFormDemo1(formDemoId); 

    const chartDemoId = await CreateSidebarRelatedModule("chart", "chart-demo");
    ModuleChartDemo1(chartDemoId); 

    // CreateTableRelatedModule(tableName)
    const parentTableId = await CreateSidebarRelatedModule("form", "table-demo");
    ModuleTableDemo1(parentTableId);
}

//You can create form with personalized function as this!
async function ModuleFormDemo1(parentId) {
    ModuleTitle(parentId,"Module Example 1")
    ModuleSubtitle(parentId,"Subtitle example...")

    ModuleInput(parentId,"Name","name",100,"Name","","text")
    ModuleInput(parentId,"CPF","cpf",50,"CPF","000.000.000-00","any")
    ModuleInput(parentId,"RG","rg",50,"RG","00.000.000-0","any")
    ModuleInput(parentId,"Birthday","birthday",25,"Birthday","00/00/0000","any")

    ModuleFormControl(parentId)
}

async function ModuleTableDemo1(parentId) {
    const onClickPopulateWithThisAPI = "client-id"
    const tableFields = `{`+
    `"demo-field-1":{`+
    `   "title":"Demo 1",`+
    `   "width":"50"`+
    `   },`+
    `"demo-field-2":{`+
    `   "title":"Demo 2",`+
    `   "width":"50"`+
    `   }`+
    `}`
    ModuleTable(parentId,'table-demo-data',tableFields,onClickPopulateWithThisAPI)
}

// async function ModuleTableDemo1(parentId) {
//     ModuleTitle(parentId,"Active when clicked on table row")
//     ModuleSubtitle(parentId,"Subtitle test...")

//     ModuleInput(parentId,"Name","name",100,"Nome completo","","text")
//     ModuleInput(parentId,"CPF","cpf",50,"000.000.000-00","000.000.000-00","any")
//     ModuleInput(parentId,"RG","rg",50,"00.000.000-0","00.000.000-0","any")
//     ModuleInput(parentId,"Data Nascimento","birthday",25,"00/00/0000","00/00/0000","any")

//     ModuleFormControl(parentId)
// }

async function ModuleChartDemo1(parentId) {
    // ModuleChart(parentId,id,title,type,width,heightValue,apiPath,requestBody as JSON.stringify)
    // types: line, bar, radar, doughnut, polar area, bubble, scatter, area, mixed

    ModuleChart(parentId,"chart-demo-template","Chart Demo","bar","100","6","chart-demo-data","")
}

