/* 
    This is a file example of how to create modules, which work much like pages of the app.
*/

/* 
-----------------------------------------------------------------------------------
MODULES
-----------------------------------------------------------------------------------
Main function used to callout all of your modules and reload it`s components.

Read "SetupModules_Example" as "SetupModules", examples is add to not conflict with the template
real calling, while this file exists over development.

REAL FUNCTION: "async function SetupModules()"
*/
    async function SetupModules_Example()
    /* 
        SetupModules is a function used by the sidebar buttons, whenever the user click a sidebar or 
        subsidebar button, this function will be called to create or reload your modules tables, form,
        and other components used within modules scope. 

        It has a mandatory use as you notice, no module can be shown or created unless this function 
        is used to group your modules.

        And don`t you worry about calling thousands of modules at once within this function, all 
        components can only be reloaded if the path is related, so you won`t be calling APIs or 
        using hardware unless it`s related to the current URL path, which is also set by this
        template. 
    */


/* 
-----------------------------------------------------------------------------------
CONTAINERS
-----------------------------------------------------------------------------------
Creates module`s containers.
Functions bellow returns it`s own IDs to be used easily.
*/

    async function CreateSidebarRelatedModule(sidebarItemName,subsidebarItemName)
    /*
        This function is called by the sidebar or subsidebar click.

        sidebarItemName = Sidebar ID as set inside sidebar.js file.
        subsidebarItemName = Subsidebar ID as set inside sidebar.js file

        ALWAYS USE AWAIT!!
    */

    async function CreateTableRelatedModule(parentId)
    /*
        Whenever you need to click a table and open a form, you should use this function.

        It creates a hidden module related to the desired table, working as a form to edit it's
        table data. You may personalize it's fields as you customize the SidebarRelated module.

        parentId = CreateSidebarRelatedModule ID, if it has a table or else it's useless.

        ALWAYS USE AWAIT!!
    */

/* 
-----------------------------------------------------------------------------------
USES EXAMPLE
-----------------------------------------------------------------------------------
Read "SetupModules_Example" as "SetupModules", examples is add to not conflict with the template
real calling, while this file exists over development.
*/

    async function SetupModules_Example() {
         // Note that all CONST are module's IDs.

        const exampleModuleWithTable = await CreateSidebarRelatedModule("sidebarId", "subsidebarId");
        const exampleHiddenModule_OnTableClickForm = await CreateTableRelatedModule(exampleModuleWithTable);
        /*
            Above you can see both uses of the containers, the "CreateTableRelatedModule" parameter is 
            always the module's ID that contains a table.

            It's not mandatory to use it, unless you want to allow user to edit or provide a module
            related to the table row ID clicked, not necessarily a form. 
        */

        const exampleModuleWithoutTable = await CreateSidebarRelatedModule("sidebarId", "subsidebarId");

        /*
            As your IDs are set, you may use it to create your components, as all of the components are
            created under the "parentId", those "parentId" parameters are always your module's ID.
            
            Bellow there is and example of a simple module:
        */

        ExampleModule(exampleModuleWithoutTable); 
    }

    // As you named, you have the ID at your disposal to easily create your components.

    async function ExampleModule(parentId) {
        ModuleTitle(parentId,"Example Title")
        ModuleSubtitle(parentId,"Example Subtitle.")
    
        ModuleBodySection(parentId,"Example Section")
        ModuleInput(parentId,"Example Shown Title","example-name-that-backend-recognize",100,"Example Placeholder","","text")
        ModuleBodySection(parentId,"Example Section 2")
        ModuleInput(parentId,"Example Shown Title 2","example-name-that-backend-recognize-2",100,"Example Placeholder-2","000-0.0","any")
    
        ModuleFormControl(parentId)
    }

    /*
        Last but not least, you should use "async function" to create your customized function. Also
        you can create files to better organize your app, but don't forget to bind it to the HTML file.
    */