var truths =[
	'What is your least favorite thing about family gatherings?', 
	'Tell a secret that you kept from your parents when growing up?', 
	'Say something you look forward to when you retire?', 
	'Tell your favorite place to shop?', 
	'Reveal your weird collection?', 
	'What you do if you turned into the opposite sex for an hour?', 
	'Tell the strangest dream you’ve had in your life', 
	'Which guy/girl would you like to date at this party?', 
	'Say one train you would like to change about you?', 
	'Say one quality you would like to change about your partner?', 
	'What would you do if you had superpowers like Batman?', 
	'Tell us your wildest fantasy?', 
	'Looking us in the eye, tell us if you have ever peed in a pool', 
	'Who is the best dresser among your friends?',
	'Who embarrasses you with their dressing among your friends?' 
];

var dares = [
	'Dance to rock music with no music for 1 minute.', 
	'For guys; put on makeup', 
	'Drink a raw egg in one gulp', 
	'Sing and dance in a busy street with no music.', 
	'With your mouth full of water, say your name.', 
	'Allow the person on your right to tickle you for 20 seconds.', 
	'Eat hot sauce', 
	'Talk to your hand for 3 minutes.', 
	'Taste your bathing soap.', 
	'Make a prank call to your parents.', 
	'Pick someone to slap you on the face', 
	'Declare who is your true love', 
	'Do your best impersonation of the person on your left.', 
	' Act like a dog and act like it until your next turn in the game.',
	'Sing your favorite love song to someone in the group' 
];

function randIndexGenerator() {
	return (Math.floor(Math.random() * truths.length));	
}

function MakeCard() {
	var card = {};
	card.truth = truths[randIndexGenerator()]
	card.dare = dares[randIndexGenerator()]
	// card.display = display;
	return card;
}


$("#start").on('click', function(){
	alert("you need to decide >> TRUTH or DARE?");
	var x = MakeCard();
	$(".xyz").addClass("hidden");
	$("#cardContent").removeClass("hidden");
	$("#truth").text(x.truth);
	$("#dare").text(x.dare);
	});
  
  $("#reset").on('click', function(){
	alert("it's gonna reset!");
	$("#cardContent").addClass("hidden");
	$(".xyz").removeClass("hidden");
	});


  
	// $('#firstCard').html($(this).truth);
	// $("#firstImg").hide();
  	// $("#firstCard").html($(this).truth);
  	// console.log("hi there");
  	// $("#start").click(function(){
  	// $("#firstCard").html('hi there');
  	// $("#firstCard").html($(this).truth);
  	//\\ Hend