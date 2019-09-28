var truths =[
	'truth1', 'truth2', 'truth3', 'truth4', 'truth5', 'truth6', 'truth7', 
	'truth8', 'truth9', 'truth10', 'truth11', 'truth12', 'truth13', 'truth14' 
];

var dares = [
	'dare1', 'dare2', 'dare3', 'dare4', 'dare5', 'dare6', 'dare7', 'dare8', 
	'dare9', 'dare10', 'dare11', 'dare12', 'dare13', 'dare14' 
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