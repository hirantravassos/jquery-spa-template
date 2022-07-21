/*
    Here you may observe the uses of components as form elements, tables and charts.
    Each section has its own elements for a more scoped approach.
*/

/*
-----------------------------------------------------------------------------------
HEADER
-----------------------------------------------------------------------------------
Top of your module.
*/

    function ModuleTitle(parentId, innerText)
    /*
        Title of the Module.

        parentId = This Module ID;
        innerText = Shown text;
    */

    function ModuleSubtitle(parentId, innerText)
    /*
        Subtitle of the Module, better used for shortly describe your module actions.

        parentId = This Module ID;
        innerText = Shown text;
    */

    ModuleSearch(parentId,searchId,apiPath,width,title,placeholder,type)
    /*
        This component is used to search within your table.
        It relies on your API not on your table!

        For advanced searches, you might want to create many of this type
        and give each one differents IDs.

        Listeners are already set as you use this component.

        parentId = This Module ID;
        searchId = Dev defined ID;
        apiPath = Desired API path;
        width = Width (%);
        title = Shown text as title of this input;
        placeholder = Self-described;
        type = Input type;
    */

    function ModuleButtonNewId(parentId,innerText,width,route)
    /*
        Redirects to an empty Module by ID, used for creating data.
        The Module has to exists!

        parentId = This Module ID;
        innerText = Shown text;
        width = Width (%);
        route = Other Module ID;
    */

/*
-----------------------------------------------------------------------------------
BODY
-----------------------------------------------------------------------------------
Body of your module, where inputs are placed as a form. Also avaliable for another uses as charts and tables.
*/

    function ModuleBodySection(parentId, innerText)
    /*
        A simple title for your forms, used for better describe your input collection. 
        It breaks line for you.

        parentId = This Module ID;
        innerText = Shown text;
    */

    function ModuleInput(parentId,title,name,width,placeholder,mask,inputType)
    /*
        Those are your inputs components. 

        parentId = This Module ID;
        title = Title of the input;
        name = Name of your input, used whenever submit is triggered, name it 
            as your back-end demands;
        width = Width (%);
        placeholder = Self-described;
        mask = Only for numbers, set it as a string. Example: "000.000.000-00";
        inputType = Self-described, for number use "ANY", the mask will do it's job.
    */

    function ModuleChart(parentId,id,title,type,width,heightValue,apiPath,requestBody)
    /*
        PENDING!!!!

        parentId = This Module ID;
        innerText = Shown text;
    */

    function ModuleBreakline(parentId)
    /*
        This is a easy way for you to style your inputs.

        parentId = This Module ID;
    */

    async function ModuleTable(
        parentId,
        apiPath,
        tableFields,
        onClickPopulateWithThisAPI,
        apiParameters
    )
    /*
        Table of your module, by far the trickiest component it has, please follow exactly as described. 

        parentId = This Module ID;
        apiPath = API path that populates your table;
        name = Name of your input, used whenever submit is triggered, name it 
            as your back-end demands;
        width = Width (%);
        placeholder = Self-described;
        mask = Only for numbers, set it as a string. Example: "000.000.000-00";
        inputType = Self-described, for number use "ANY", the mask will do it's job.
    */

/*
-----------------------------------------------------------------------------------
FOOTER
-----------------------------------------------------------------------------------
Top of your module.
*/

    function ModuleFooterControl(parentId)
    /*
        Form controls as Submit and Back.
        On submit trigger is already set, you need to set your API path.
        All inputs and selects will be delivered to your API by Input's NAME Attributes.

        parentId = This Module ID;
    */

    ModuleFooterText(parentId, innerText)
    /* 
        A simple span at the end of the module.

        parentId = This Module ID;
        innerText = Shown text;
    */