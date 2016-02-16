// My scripts: 
$(document).ready( function() {

	$('#search').keyup( function() {

		var searchQuery = $(this).val();  // retrieve each key value 
		var myRegExp = new RegExp(searchQuery, "i"); // case-insensitive 
		
		$.getJSON('data.json', function(data) {

			var output = '<ul class="results">'; 

			$.each(data, function(key, value) {
				
				if( (this.name.search(myRegExp)) != -1 || (this.bio.search(myRegExp)) != -1) {
					output += '<li>';
					output += '<h2>' + this.name + '</h2>'; 
					output += '<img src="' + 'images/candidates2016/' + this.firstName + '_'+ this.lastName 
						   + '_Small.jpg" atl="' + this.name + '" />'; 
				 	output += '<p>' + this.bio + '</p>';
					output += '</li>'; 
				}
			}); 

			output += '</ul>'; 
			$('#update').html(output); 

		});	// retrieve JSON

	}); // retrive search query from search bar

}); // wait for document to load 