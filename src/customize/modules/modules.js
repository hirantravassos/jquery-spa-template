async function SetupModules() {

	//CLIENT
	const tableClient = await CreateSidebarRelatedModule("client", "table");
	ClientTable(tableClient);
	const tableClientForm = await CreateTableRelatedModule(tableClient);
	ClientFormTable(tableClientForm);

	const formClient = await CreateSidebarRelatedModule("client", "new");
	ClientForm(formClient);

	//REQUEST
	const tableRequest = await CreateSidebarRelatedModule("request", "table");
	RequestTable(tableRequest);
	const tableRequestForm = await CreateTableRelatedModule(tableRequest);
	RequestFormTable(tableRequestForm,tableRequest);

	const formRequest = await CreateSidebarRelatedModule("request", "new");
	RequestForm(formRequest);

	// //SELLER
	// const tableSeller = await CreateSidebarRelatedModule("seller", "table");
	// SellerTable(tableSeller);
	// const tableSellerForm = await CreateTableRelatedModule(tableSeller);
	// SellerFormTable(tableSellerForm);

	// const formSeller = await CreateSidebarRelatedModule("seller", "new");
	// SellerForm(formSeller);

	// //OS
	// const tableOs = await CreateSidebarRelatedModule("os", "table");
	// OsTable(tableOs);
	// const tableOsForm = await CreateTableRelatedModule(tableOs);
	// OsFormTable(tableOsForm);

	// const formOs = await CreateSidebarRelatedModule("os", "new");
	// OsForm(formOs);

	// //FINANCE
	// // const tableFinance = await CreateSidebarRelatedModule("finance", "table");
	// // FinanceTable(tableFinance);
	// // const tableFinanceForm = await CreateTableRelatedModule(tableFinance);
	// // FinanceFormTable(tableFinanceForm);

	// // const formFinance = await CreateSidebarRelatedModule("finance", "new");
	// // FinanceForm(formFinance);

	// //PRODUCT
	// const tableProduct = await CreateSidebarRelatedModule("product", "table");
	// ProductTable(tableProduct);
	// const tableProductForm = await CreateTableRelatedModule(tableProduct);
	// ProductFormTable(tableProductForm);

	// const formProduct = await CreateSidebarRelatedModule("product", "new");
	// ProductForm(formProduct);

	// //RESPONSIBLE
	// const tableResponsible = await CreateSidebarRelatedModule(
	// 	"responsible",
	// 	"table"
	// );
	// ResponsibleTable(tableResponsible);
	// const tableResponsibleForm = await CreateTableRelatedModule(tableResponsible);
	// ResponsibleFormTable(tableResponsibleForm);

	// const formResponsible = await CreateSidebarRelatedModule(
	// 	"responsible",
	// 	"new"
	// );
	// ResponsibleForm(formResponsible);

	// //USER
	// const tableUser = await CreateSidebarRelatedModule("user", "table");
	// UserTable(tableUser);
	// const tableUserForm = await CreateTableRelatedModule(tableUser);
	// UserFormTable(tableUserForm);

	// const formUser = await CreateSidebarRelatedModule("user", "new");
	// UserForm(formUser);
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

// async function ModuleChartDemo1(parentId) {
// 	// ModuleChart(parentId,id,title,type,width,heightValue,apiPath,requestBody as JSON.stringify)
// 	// types: line, bar, radar, doughnut, polar area, bubble, scatter, area, mixed

// 	ModuleChart(
// 		parentId,
// 		"chart-demo-template",
// 		"Chart Demo",
// 		"bar",
// 		"100",
// 		"6",
// 		"chart-demo-data",
// 		""
// 	);
// }
