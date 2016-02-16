// My Scripts: 
$(document).ready( function() {

	createProfiles(); // create presidential profiles at the bottom of page


	$('#search').keyup( function() {
		var searchQuery = $(this).val();  // retrieve each key value 
		var myRegExp = new RegExp(searchQuery, "i"); // case-insensitive 
		
		$.getJSON('data.json', function(data) {

			var output; 

			$.each(data, function(key, value) {
				
				if( (this.name.search(myRegExp)) != -1 || (this.bio.search(myRegExp)) != -1) {
					
					output += '<div class="item active animated bounceInRight row">'

					output += '<div class="animated slideInLeft col-xs-2">';
					output += '<img src="images/candidates2016/' + this.firstName + '_'+ this.lastName 
						   + '_Small.jpg" alt="portfolio" width="100" class"img-circle img-responsive">'; 
					output += '</div>'



					
					output += '<div class="col-xs-10">'; 
					output += '<p>' + this.immQuote + '</p>' + '<span>' + this.name + ' - <strong>' + this.party + '</strong></span>'; 
					output += '</div>';


					output += '</div>';
				
				}
			});  

			
			$('#update').html(output); 

		});	// retrieve JSON

	}); // retrive search query from search bar

}); // wait for document to load 

function createProfiles() {
	
	$.getJSON('data.json', function(data) {

		var output; 

		$.each(data, function(key, value) {

			output += '<figure class="effect-oscar  wowload fadeInUp">'
			output += '<img src="images/candidates2016/' + this.firstName + '_'+ this.lastName 
					+ '_Large.jpg" atl="' + this.name + '" />'; 
					
			output += '<figcaption>' + '<h2>' + this.name + '</h2>'; 
			output += '<p>' + this.immQuote + '</p>' + '</figcaption>';
			output += '</figure>';
		});  
		
		$('#works').html(output); 
	});	// retrieve JSON
}