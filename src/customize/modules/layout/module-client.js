async function ClientTable(parentId) {
    const onClickPopulateWithThisAPI = "client-id"
    const tableFields = `{`+
    `"name":{`+
    `   "title":"NOME",`+
    `   "width":"50"`+
    `   },`+
    `"cellphone":{`+
    `   "title":"CELULAR",`+
    `   "width":"50"`+
    `   }`+
    `}`

    //ModuleTable(parentId,apiPath,tableFields,onClickPopulateWithThisAPI)
    //ModuleSearch(parentId,searchId,width,title,placeholder,type)

    ModuleTitle(parentId,"CLIENTES")
    // ModuleSearch(parentId,"search",100,"Pesquisar Clientes","Pesquisa somente nomes...","any")
    ModuleButtonNewId(parentId,"NOVO CLIENTE",100,"new")

    ModuleTable(parentId,'client-table',tableFields,onClickPopulateWithThisAPI)
}

async function ClientFormTable(parentId) {
    ModuleTitle(parentId,"Alterar Cliente")
    ModuleSubtitle(parentId,"Atualize os dados do cliente.")

    ModuleBodySection(parentId,"DOCUMENTOS")
    ModuleInput(parentId,"Nome","name",60,"Nome","","text")
    ModuleInput(parentId,"CPF","cpf",20,"CPF","000.000.000-00","any")
    ModuleInput(parentId,"CNPJ","cnpj",20,"CNPJ","00.000.000/0000-00","any")

    ModuleBodySection(parentId,"ENDEREÇO")
    ModuleInput(parentId,"CEP","cep",15,"CEP","00000-000","any")
    ModuleInput(parentId,"Endereço","street",50,"Endereço","","text")
    ModuleInput(parentId,"Nº","num",10,"Nº","00/00/0000","any")
    ModuleInput(parentId,"Complemento","com",25,"Complemento","","text")
    ModuleInput(parentId,"Edifícil","building",30,"Edifícil","","text")
    ModuleInput(parentId,"Bairro","district",30,"Bairro","","text")
    ModuleInput(parentId,"Cidade","city",30,"Cidade","","text")
    ModuleInput(parentId,"UF","uf",10,"UF","","text")

    ModuleBodySection(parentId,"CONTATO")
    ModuleInput(parentId,"Email","email",100,"Email","","email")
    ModuleInput(parentId,"Telefone Residencial","phone",30,"Telefone Residencial","(00) 0000-0000","any")
    ModuleInput(parentId,"Celular","cellphone",35,"Celular","(00) 0 0000-0000","any")
    ModuleInput(parentId,"Celular 2","cellphone2",35,"Celular 2","(00) 0 0000-0000","any")

    ModuleFormControl(parentId)
}

async function ClientForm(parentId) {
    ModuleTitle(parentId,"Novo Cliente")
    ModuleSubtitle(parentId,"Insira os dados do cliente.")

    ModuleBodySection(parentId,"DOCUMENTOS")
    ModuleInput(parentId,"Nome","name",60,"Nome","","text")
    ModuleInput(parentId,"CPF","cpf",20,"CPF","000.000.000-00","any")
    ModuleInput(parentId,"CNPJ","cnpj",20,"CNPJ","00.000.000/0000-00","any")
    ModuleBreakline(parentId)

    ModuleBodySection(parentId,"ENDEREÇO")
    ModuleInput(parentId,"CEP","cep",15,"CEP","00000-000","any")
    ModuleInput(parentId,"Endereço","street",50,"Endereço","","text")
    ModuleInput(parentId,"Nº","num",10,"Nº","00/00/0000","any")
    ModuleInput(parentId,"Complemento","com",25,"Complemento","","text")
    ModuleInput(parentId,"Edifícil","building",30,"Edifícil","","text")
    ModuleInput(parentId,"Bairro","district",30,"Bairro","","text")
    ModuleInput(parentId,"Cidade","city",30,"Cidade","","text")
    ModuleInput(parentId,"UF","uf",10,"UF","","text")
    ModuleBreakline(parentId)

    ModuleBodySection(parentId,"CONTATO")
    ModuleInput(parentId,"Email","email",100,"Email","","email")
    ModuleInput(parentId,"Telefone Residencial","phone",30,"Telefone Residencial","(00) 0000-0000","any")
    ModuleInput(parentId,"Celular","cellphone",35,"Celular","(00) 0 0000-0000","any")
    ModuleInput(parentId,"Celular 2","cellphone2",35,"Celular 2","(00) 0 0000-0000","any")
    ModuleBreakline(parentId)

    ModuleFormControl(parentId)
}
