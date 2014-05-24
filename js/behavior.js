$(document).ready(function(){

	$( "a.actiontaker" ).click(function() {
		$( "h1.question" ).fadeOut( 200, "linear" );
		$( "h1.answer" ).delay(200).fadeIn( "fast", "linear" );
		$( "h2.find-out" ).delay(800).fadeIn( "fast", "linear" );		
		});
		
	$("input.input").keypress(function(e) {
  if(e.which === 13) {
    $( "h1.question" ).fadeOut( 200, "linear" );
		$( "h1.answer" ).delay(200).fadeIn( "fast", "linear" );
		$( "h2.find-out" ).delay(800).fadeIn( "fast", "linear" );
  }
});
});