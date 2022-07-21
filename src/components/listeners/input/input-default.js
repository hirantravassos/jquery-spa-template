$(document).ready(function(){
	setTimeout(()=>{
		InputListener()
	},500)
})

$("body").on("change click focus blur load", "input", () => {
	InputListener();
});

function InputListener() {
	const inputsElements = $("input");

	$.each(inputsElements, function (index, value) {
		if (
			$(value).val().length > 0 ||
			$(value).is(":focus") ||
			$(value).is(":-webkit-autofill")
		) {
			$(value).prev().css("transform", "scale(1)");
		} else {
			$(value).prev().css("transform", "scale(0)");
		}
	});
}