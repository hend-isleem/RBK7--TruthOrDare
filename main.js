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

// function display () {
// 	console.log("hehe");
// 	MakeCard();
// 	$('#firstImg').hide();

// 	$("#firstCard").text('hi there');

// }



$("#start").on('click', function(){
	console.log("hehe");
	var x = MakeCard();
	console.log(document.getElementById("firstImg"));

	$(".xyz").addClass("hidden");
	$("#cardContent").removeClass();
	$("#truth").text(x.truth);
	$("#dare").text(x.dare);

  });
  
  $("#reset").on('click', function(){

	alert("it's gonna reset!");
	console.log(document.getElementById("firstImg"));
	$("#cardContent").addClass("hidden");
	$(".xyz").removeClass();
	});


  
	// $('#firstCard').html($(this).truth);
	// $("#firstImg").hide();
  	// $("#firstCard").html($(this).truth);
  	// console.log("hi there");
  	// $("#start").click(function(){
  // 	$("#firstCard").html('hi there');
  // 	// $("#firstCard").html($(this).truth);
  // 	console.log("i'm there btw");
  // });
