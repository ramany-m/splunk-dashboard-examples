require([
    "jquery",
    "splunkjs/mvc/simplexml/ready!"
], function($) {

		$(document).on("click","#click_button",function(){
				  var elem = document.getElementById("myBar");   
				  var width = 1;
				  var id = setInterval(frame, 5);
				  function frame() {
					if (width >= 100) {
					  clearInterval(id);
					} else {
					  width++; 
					  elem.style.width = width + '%'; 
					}
				  }
		})

}); 
 
 

