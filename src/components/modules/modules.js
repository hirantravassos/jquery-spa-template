function CreateModule() {
    $("#page").append(`<div id="module" class="module"></div>`);
    // $("#module").hide();
}

function GetModule(moduleName) {
    $('#module').empty(); // don't remove

    ModuleOverview()
    ModuleNew()
    ModuleList()
    ModuleConfig()
}

function DisplayModule(layoutName) {
    $(`#module > div`).hide(350)
    setTimeout( () => {
        $(`#module #${layoutName}`).show(350)
    },350)
}

//SUBMIT
$('body').on('submit','#new form', function(e) {
  const sidebarActive = $('.sidebar .active').attr('name')
  const subsidebarActive = $('.subsidebar .active').attr('name')
	console.log(sidebarActive,subsidebarActive)

  e.preventDefault();
  const formData = JSON.stringify(GetFormData($('#new form')));
  console.log(formData)

  if (subsidebarActive === "new") {
    const path = `${sidebarActive}/${subsidebarActive}` 
    // API(path,formData)
  }

  $('#new form').hide(350)
  setTimeout(() => {
    $('#new form').show(350)
  },1500)
})