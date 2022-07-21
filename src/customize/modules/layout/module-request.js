async function RequestTable(parentId) {
    const onClickPopulateWithThisAPI = "request-id"
    const tableFields = `{`+
    `"number":{`+
    `   "title":"Nº",`+
    `   "width":"15"`+
    `   },`+
    `"client":{`+
    `   "title":"CLIENTE",`+
    `   "width":"60"`+
    `   },`+
    `"fdate":{`+
    `   "title":"DATA PREVISTA",`+
    `   "width":"15"`+
    `   }`+
    `}`

    //ModuleTable(parentId,apiPath,tableFields,onClickPopulateWithThisAPI)
    //ModuleSearch(parentId,searchId,width,title,placeholder,type)

    ModuleTitle(parentId,"PEDIDOS")
    ModuleSearch(parentId,"search",100,"Pesquisar Pedido","Pesquisa por nome, e número...","any")
    ModuleButtonNewId(parentId,"NOVO PEDIDO",100,"new")

    ModuleTable(parentId,'request-table',tableFields,onClickPopulateWithThisAPI)
}

async function RequestFormTable(parentId) {
    ModuleTitle(parentId,"Alterar Pedido")
    ModuleSubtitle(parentId,"Atualize os dados do pedido.")

    ModuleBodySubtitle(parentId,"PEDIDO")
    ModuleInput(parentId,"Nº do Pedido","number",30,"Nº do Pedido","","any")
    ModuleBreakline(parentId)

    ModuleBodySubtitle(parentId,"CLIENTE")
    //CREATE SELECT FOR CLIENTES
    await ModuleSelect(parentId,"Nome do Cliente","client",60,"Nome do Cliente","client-table","name")
    ModuleInput(parentId,"CPF","cpf",20,"CPF","000.000.000-00","any")
    ModuleInput(parentId,"CNPJ","cnpj",20,"CNPJ","00.000.000/0000-00","any")
    ModuleBreakline(parentId)

    ModuleBodySubtitle(parentId,"ENDEREÇO")
    ModuleInput(parentId,"CEP","cep",15,"CEP","00000-000","any")
    ModuleInput(parentId,"Endereço","street",50,"Endereço","","text")
    ModuleInput(parentId,"Nº","num",10,"Nº","00/00/0000","any")
    ModuleInput(parentId,"Complemento","com",25,"Complemento","","text")
    ModuleInput(parentId,"Edifícil","building",30,"Edifícil","","text")
    ModuleInput(parentId,"Bairro","district",30,"Bairro","","text")
    ModuleInput(parentId,"Cidade","city",30,"Cidade","","text")
    ModuleInput(parentId,"UF","uf",10,"UF","","text")
    ModuleBreakline(parentId)

    ModuleBodySubtitle(parentId,"VENDAS")
    //CREATE SELECT FOR VENDEDOR
    ModuleInput(parentId,"Vendedor","seller",30,"Nome do Vendedor","","text")
    ModuleBreakline(parentId)

    ModuleBodySubtitle(parentId,"DATAS")
    ModuleInput(parentId,"Data de Criação","sdate",30,"","","date")
    ModuleInput(parentId,"Data Prevista de Entrega","fdate",30,"","","date")
    ModuleBreakline(parentId)

    ModuleBodySubtitle(parentId,"FINANCEIRO")
    ModuleInput(parentId,"Valor Total","finance",30,"Valor Total em R$","000 000 000,00","any")
    ModuleInput(parentId,"Nota Fiscal","nf",30,"Nota Fiscal","00000000000000","any")

    ModuleFormControl(parentId)
}

async function RequestForm(parentId) {
    ModuleTitle(parentId,"Novo Pedido")
    ModuleSubtitle(parentId,"Insira os dados do pedido.")

    ModuleBodySubtitle(parentId,"PEDIDO")
    ModuleInput(parentId,"Nº do Pedido","number",30,"Nº do Pedido","","any")
    ModuleBreakline(parentId)

    ModuleBodySubtitle(parentId,"CLIENTE")
    //CREATE SELECT FOR CLIENTES
    await ModuleSelect(parentId,"Nome do Cliente","client",60,"Nome do Cliente","client-select","name")
    ModuleInput(parentId,"CPF","cpf",20,"CPF","000.000.000-00","any")
    ModuleInput(parentId,"CNPJ","cnpj",20,"CNPJ","00.000.000/0000-00","any")
    ModuleBreakline(parentId)

    ModuleBodySubtitle(parentId,"ENDEREÇO")
    ModuleInput(parentId,"CEP","cep",15,"CEP","00000-000","any")
    ModuleInput(parentId,"Endereço","street",50,"Endereço","","text")
    ModuleInput(parentId,"Nº","num",10,"Nº","00/00/0000","any")
    ModuleInput(parentId,"Complemento","com",25,"Complemento","","text")
    ModuleInput(parentId,"Edifícil","building",30,"Edifícil","","text")
    ModuleInput(parentId,"Bairro","district",30,"Bairro","","text")
    ModuleInput(parentId,"Cidade","city",30,"Cidade","","text")
    ModuleInput(parentId,"UF","uf",10,"UF","","text")
    ModuleBreakline(parentId)

    ModuleBodySubtitle(parentId,"VENDAS")
    //CREATE SELECT FOR VENDEDOR
    ModuleInput(parentId,"Vendedor","seller",30,"Nome do Vendedor","","text")
    ModuleBreakline(parentId)

    ModuleBodySubtitle(parentId,"DATAS")
    ModuleInput(parentId,"Data de Criação","sdate",30,"","","date")
    ModuleInput(parentId,"Data Prevista de Entrega","fdate",30,"","","date")
    ModuleBreakline(parentId)

    ModuleBodySubtitle(parentId,"FINANCEIRO")
    ModuleInput(parentId,"Valor Total","finance",30,"Valor Total em R$","000 000 000,00","any")
    ModuleInput(parentId,"Nota Fiscal","nf",30,"Nota Fiscal","00000000000000","any")

    ModuleFormControl(parentId)
}