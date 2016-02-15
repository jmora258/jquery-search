// My scripts: 
alert("hello!"); 
$('#update').html("jquery is working"); 


$(document).ready(function() {
			
    $('#mybutton').click(function(event){
        $.getJSON('data.json', function(data) {
            alert("success!! Yay!"); 
            console.log(data);
        });
    });

    console.log("hey there! From console"); 

				
});