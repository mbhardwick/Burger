$(function() {
	//add burger
	$('.addBurger').on('click', function(event){
		event.preventDefault();
		var newBurger = {
			burger_name: $('.newBurger').val().trim()
		}
		$.ajax('/api/burgers', {
			type: 'POST',
			data: newBurger
		}).then(function(){
			console.log('created new burger');
			location.reload();
		});
	});
	//devour button
	$('.devour').on('click', function(event){
		event.preventDefault();
		var id = $(this).data('id');
		var devour = $(this).data('devoured');
		var eaten = {
			devoured: devour
		};
		$.ajax('/api/burgers' + id, {
			type: 'PUT',
			data: eaten
		}).then(function(){
			location.reload();
		});
	});
});