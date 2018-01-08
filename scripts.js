$(function() {
	$('#arrow').click(function() {
		$('html, body').animate({ 
    	scrollTop: $('#serv').offset().top}, 1000);
  	});
});