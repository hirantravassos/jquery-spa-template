function Routes(sidebar, subsidebar, sidebarText, subsidebarText) {
    SetCookie("sidebar", sidebar, "1");
    SetCookie("subsidebar", subsidebar, "1");
    
    newUrl = sidebar + "#" + subsidebar;

    $("title").text(sidebarText + " - " + subsidebarText);
    history.pushState({}, null, `#${newUrl}`);
}

function OnReadyRoutes() {
    // history.pushState({}, null, `${ftpUrl}`);

    let newURL = window.location.hash;
    newURL = newURL.split("#");

    const sidebar = newURL[1];
    const subsidebar = newURL[2];

    try {
        if (newURL[1] == null) {return}
        if (newURL[2] == null) {return}
    } catch (error) {
        return
    }

    setTimeout(function () {
        GetSidebarItems(sidebar,subsidebar);
    }, 500);
}

$(window).on("popstate", function (e) {
    let newURL = window.location.hash;
    newURL = newURL.split("#");

    const sidebar = newURL[1];
    const subsidebar = newURL[2];

    window.location.hash = '#'+ sidebar + '#' + subsidebar

    GetSidebarItems(sidebar,subsidebar);
});
