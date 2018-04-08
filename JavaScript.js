/// <reference path="jquery-2.2.0.js" />
$(document).ready(function(){
	
	$('#Add').click(function(){
			
			var item = $("input[name=textBox]").val();

			$('#bodyDiv').append('<div class ="ToDo"><p>' + item +'</p> <img id ="cross" src = "./icons/cross.png"/></div>');

			// if (typeof(Storage) !== "undefined") {
			// // Store
			// localStorage.setItem("toDoItems", localStorage.getItem("toDoItems") + "\n" + item);
			// }
			//localstorage.clear();
	});
	
	$(document).on('click','p',function(){
		$(this).css("text-decoration","line-through");

	});
	
	$('#ClearDone').click(function()
	{
		$('.ToDo').remove();
	});
	
	$(document).on('click', '#cross' ,function(){
		$(this).parent().remove();
	});

	$('textBox').onfocus = "if (value == 'Enter Item') {value = '';}";

// 	if (typeof(Storage) !== "undefined") {
//     // Retrieve
//     document.getElementById("p").innerHTML = localStorage.getItem("toDoItems");
// } else {
//     document.getElementById("p").innerHTML = "Sorry, your browser does not support Web Storage...";
// }
}
);
