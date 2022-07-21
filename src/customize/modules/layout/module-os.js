// //'id, number,client,fdate,product,status'

// async function OsTable(parentId) {
//     const onClickPopulateWithThisAPI = "os-id"
//     const tableFields = `{`+
//     `"number":{`+
//     `   "title":"Nº",`+
//     `   "width":"15"`+
//     `   },`+
//     `"client":{`+
//     `   "title":"NOME DO CLIENTE",`+
//     `   "width":"35"`+
//     `   },`+
//     `"fdate":{`+
//     `   "title":"DATA PREVISTA",`+
//     `   "width":"20"`+
//     `   },`+
//     `"product":{`+
//     `   "title":"PRODUTO",`+
//     `   "width":"15"`+
//     `   },`+
//     `"status":{`+
//     `   "title":"STATUS",`+
//     `   "width":"15"`+
//     `   }`+
//     `}`

//     //ModuleTable(parentId,apiPath,tableFields,onClickPopulateWithThisAPI)
//     //ModuleSearch(parentId,searchId,width,title,placeholder,type)

//     ModuleTitle(parentId,"O.S.")
//     ModuleSearch(parentId,"search",100,"Pesquisar O.S.","Pesquisa nome, número...","any")

//     ModuleTable(parentId,'os-table',tableFields,onClickPopulateWithThisAPI)
// }

// async function OsFormTable(parentId) {
//     ModuleTitle(parentId,"Alterar O.S.")
//     ModuleSubtitle(parentId,"Atualize os dados da O.S.")

//     ModuleBodySubtitle(parentId,"O.S.")
//     ModuleInput(parentId,"Nº do Pedido","request",25,"Nº do Pedido","","any")
//     ModuleInput(parentId,"Nº da O.S.","number",25,"Nº do O.S.","","any")
//     ModuleBreakline(parentId)

//     ModuleBodySubtitle(parentId,"CLIENTE")
//     //CREATE SELECT FOR CLIENTES
//     ModuleInput(parentId,"Nome do Cliente","client",80,"Nome do Cliente","","text")
//     ModuleBreakline(parentId)

//     ModuleBodySubtitle(parentId,"PRODUTO")
//     //CREATE SELECT FOR VENDEDOR
//     ModuleInput(parentId,"Descrição","product",50,"Descrição","","text")
//     ModuleBreakline(parentId)

//     ModuleBodySubtitle(parentId,"INSTALADOR")
//     //CREATE SELECT FOR VENDEDOR
//     ModuleInput(parentId,"Nome","responsible",50,"Nome","","text")
//     ModuleBreakline(parentId)

//     ModuleBodySubtitle(parentId,"DATAS")
//     ModuleInput(parentId,"Data Prevista de Entrega","fdate",50,"","","date")
//     ModuleBreakline(parentId)

//     ModuleFormControl(parentId)
// }

// async function OsForm(parentId) {
//     ModuleTitle(parentId,"Nova O.S.")
//     ModuleSubtitle(parentId,"Insira os dados da O.S.")

//     ModuleBodySubtitle(parentId,"O.S.")
//     ModuleInput(parentId,"Nº do Pedido","request",25,"Nº do Pedido","","any")
//     ModuleInput(parentId,"Nº da O.S.","number",25,"Nº do O.S.","","any")
//     ModuleBreakline(parentId)

//     ModuleBodySubtitle(parentId,"CLIENTE")
//     //CREATE SELECT FOR CLIENTES
//     ModuleInput(parentId,"Nome do Cliente","client",80,"Nome do Cliente","","text")
//     ModuleBreakline(parentId)

//     ModuleBodySubtitle(parentId,"PRODUTO")
//     //CREATE SELECT FOR VENDEDOR
//     ModuleInput(parentId,"Descrição","product",50,"Descrição","","text")
//     ModuleBreakline(parentId)

//     ModuleBodySubtitle(parentId,"INSTALADOR")
//     //CREATE SELECT FOR VENDEDOR
//     ModuleInput(parentId,"Nome","responsible",50,"Nome","","text")
//     ModuleBreakline(parentId)

//     ModuleBodySubtitle(parentId,"DATAS")
//     ModuleInput(parentId,"Data Prevista de Entrega","fdate",50,"","","date")
//     ModuleBreakline(parentId)

//     ModuleFormControl(parentId)
// }
