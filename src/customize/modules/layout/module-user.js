// async function UserTable(parentId) {
//     const onClickPopulateWithThisAPI = "user-id"
//     const tableFields = `{`+
//     `"username":{`+
//     `   "title":"USUÁRIO",`+
//     `   "width":"50"`+
//     `   },`+
//     `"auth":{`+
//     `   "title":"AUTENTICAÇÃO",`+
//     `   "width":"50"`+
//     `   }`+
//     `}`

//     //ModuleTable(parentId,apiPath,tableFields,onClickPopulateWithThisAPI)
//     //ModuleSearch(parentId,searchId,width,title,placeholder,type)

//     ModuleTitle(parentId,"Usuário")
//     ModuleSearch(parentId,"search",100,"Pesquisar Usuários","Pesquisa somente nomes...","any")

//     ModuleTable(parentId,'user-table',tableFields,onClickPopulateWithThisAPI)
// }

// async function UserFormTable(parentId) {
//     ModuleTitle(parentId,"Alterar Usuário")
//     ModuleSubtitle(parentId,"Atualize os dados do usuário.")

//     ModuleBodySubtitle(parentId,"IDENTIFICAÇÃO")
//     ModuleInput(parentId,"Nome","firstname",50,"Nome","","text")
//     ModuleInput(parentId,"Sobrenome","lastname",50,"Sobrenome","","text")
//     ModuleBreakline(parentId)

//     ModuleBodySubtitle(parentId,"AUTENTICAÇÃO")
//     ModuleInput(parentId,"Nível","auth",50,"Nível","","text")

//     ModuleFormControl(parentId)
// }

// async function UserForm(parentId) {
//     ModuleTitle(parentId,"Novo Instalador")
//     ModuleSubtitle(parentId,"Insira os dados do Instalador.")

//     ModuleBodySubtitle(parentId,"IDENTIFICAÇÃO")
//     ModuleInput(parentId,"Nome","firstname",50,"Nome","","text")
//     ModuleInput(parentId,"Sobrenome","lastname",50,"Sobrenome","","text")
//     ModuleBreakline()

//     ModuleBodySubtitle(parentId,"AUTENTICAÇÃO")
//     ModuleInput(parentId,"Nível","auth",50,"Nível","","text")

//     ModuleFormControl(parentId)
// }