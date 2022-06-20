/*
Create your modules in this file!

    Create modules with those functions:
        - CreateSidebarRelatedModule(sidebarItemName,subsidebarItemName,id)
            Usage:
                CreateSidebarRelatedModule(
                    "sidebarItemName", 
                    "subsidebarItemName", 
                    "module-client"
                );
                ModuleBody1("desired-id");

        - CreateTableRelatedModule(tableName)
            Usage:
                const parentTableId = await CreateTableRelatedModule("desired-id");
                ModuleTitle(parentTableId, "I'm and example");
            Obs: CreateTableRelatedModule is an "async function" that returns an 
                new id that can be used for creating a hidden module form related
                to the "onclick" event of the table itself.

        IMPORTANT: For spacing id name, always use "-".

    Elements that can be used inside modules bellow:
        Titles:
            - ModuleTitle(parentId, innerText)
            - ModuleSubtitle(parentId, innerText)

        Tables:
            - ModuleTable(parentId,apiPath,tableFields,onClickPopulateWithThisAPI)
                IMPORTANT: tableFields needs to be a JSON Stringify object.
                    Always set first prop with the same name of your DB field
                    you wish to show, otherwise it won't show up!
                    
                    Example as bellow:
                        {
                            db-field: {
                                innerText":"As desired",
                                width":"100"
                            }
                        }
                    *db-field = DB Table Field Name!!

                IMPORTANT 2: Always provide a field called exactly "id"!!
                    It will be used to populate the hidden related module form
                    if "request.body.id" exists. Always a POST API callout.

                IMPORTANT 3: Only inputs set with DB field name will be 
                    populated as bellow:

                    ModuleInput(
                        parentId,
                        "Name",
                        "DB FIELD NAME",
                        100,
                        "Nome completo",
                        "",
                        "text"
                    )

        Forms:
            - ModuleInput(parentId,title,name,width,placeholder,mask,inputType)
                IMPORTANT: Never uses inputType="number", let the mask do its job.

            - ModuleFormControl(parentId)
                This function call buttons to submit and go back, usually
                necessary to form, this object is NOT mandatory.

        Footers:
            - ModuleFooter(parentId, innerText)
*/

async function GetCustomModules() {
    // CreateSidebarRelatedModule(sidebarItemName,subsidebarItemName,id)
    CreateSidebarRelatedModule("template", "demo-1", "example-1");
    //You can create form with personalized function as this!
    ModuleExample1("example-1"); 

    CreateSidebarRelatedModule("template-2", "demo-1", "example-2");
    ModuleExample2("example-2"); 

    // CreateTableRelatedModule(tableName)
    const parentTableId = await CreateTableRelatedModule("client");
    ModuleTableBody1(parentTableId);
}

//You can create form with personalized function as this!
async function ModuleExample1(parentId) {
    ModuleTitle(parentId,"Module Example 1")
    ModuleSubtitle(parentId,"Subtitle example...")

    ModuleInput(parentId,"Name","name",100,"Nome completo","","text")
    ModuleInput(parentId,"Name","name",100,"Nome completo","","text")
    ModuleInput(parentId,"Name","name",100,"Nome completo","","text")
    ModuleInput(parentId,"Name","name",100,"Nome completo","","text")
    ModuleInput(parentId,"Name","name",100,"Nome completo","","text")
    ModuleInput(parentId,"Name","name",100,"Nome completo","","text")
    ModuleInput(parentId,"Name","name",100,"Nome completo","","text")
    ModuleInput(parentId,"Name","name",100,"Nome completo","","text")
    ModuleInput(parentId,"Name","name",100,"Nome completo","","text")
    ModuleInput(parentId,"Name","name",100,"Nome completo","","text")
    ModuleInput(parentId,"Name","name",100,"Nome completo","","text")
    ModuleInput(parentId,"Name","name",100,"Nome completo","","text")
    ModuleInput(parentId,"CPF","cpf",50,"000.000.000-00","000.000.000-00","any")
    ModuleInput(parentId,"RG","rg",50,"00.000.000-0","00.000.000-0","any")
    ModuleInput(parentId,"Data Nascimento","birthday",25,"00/00/0000","00/00/0000","any")

    ModuleFormControl(parentId)
}

async function ModuleExample2(parentId) {
    $(`#${parentId}`).append(
        `<div style="width:500px;height:500px">`+
        '<canvas id="myChart" ></canvas>'+
        `</div>`
    )
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
    
        // The data for our dataset
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45]
            }]
        },
    
        // Configuration options go here
        options: {}
    });
}

async function ModuleExampleTable1(parentId) {
    const onClickPopulateWithThisAPI = "client-id"
    const tableFields = `{`+
    `"demo-field-1":{`+
    `   "innerText":"Demo 1",`+
    `   "width":"50"`+
    `   },`+
    `"demo-field-2":{`+
    `   "innerText":"Demo 2",`+
    `   "width":"50"`+
    `   }`+
    `}`
    ModuleTable(parentId,'client-list',tableFields,onClickPopulateWithThisAPI)
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