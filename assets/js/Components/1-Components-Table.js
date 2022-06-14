'use strict';
let tableRows;
let limitRows

let APIData;
let setTableTitles
let setTableRows

function HideTable(){
    $('div#table').hide(350)
}
function ShowTable(){
    $('div#table').show(350)
}

//CREATE
function CreateTable(fun_TableTitles){   
    setTableTitles = fun_TableTitles
    
    $('div#table table thead tr').remove()
    fun_TableTitles()
    
    $('div#table table tbody tr').remove()
}

//POPULATE
function PopulateTable(data,fun_TableRows){
    APIData = data
    setTableRows = fun_TableRows
    
    let i = 0
    do {
        if (data[i] != undefined) {
            setTableRows(data[i])
        }
        i++
    } while (i < 40)
}

//SCROLL
$(window).scroll(function (event) {
    ScrollTable()
}); 
    
function ScrollTable(){
    let scrollPosition = $(window).scrollTop();
    let scrollBottomPosition = $(document).height() - $(window).height();
    
    if (tableRows > 0) {} else {tableRows = 0}
    if (limitRows > 0) {} else {limitRows = 40}
    
    if (scrollPosition+10 > scrollBottomPosition && scrollBottomPosition > 100) {
        do {
            setTableRows(APIData[tableRows])
            tableRows++
        } while (tableRows < limitRows)
        limitRows = tableRows + 40
    } else if ($('table tbody tr').length < 1) {
        do {
            setTableRows(APIData[tableRows])
            tableRows++
        } while (tableRows < 40)
    }
}


//TITLES
function CreateTableHeader(title,widthPercent){
    return ''+
        `<th style="width: ${widthPercent}%;">${title}</th>`
}
    
//ROWS
function CreateTableRow(id,name,title,widthPercent){
    return ''+
        `<td id="${id}" name="${name}" style="width: ${widthPercent}%;">${title}</td>`
}

    
 
