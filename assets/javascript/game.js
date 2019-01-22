console.log('hello')

var crystalsArr = []
var crystals = 0
var generatedNum = 0
var currentGemValue = 0

// Here we are generating a random number for each variable in the array called crystalsArr
	// Then we are pushing these random numbers into the array
for (var i=0; i<4; i++){
	crystals = Math.floor(Math.random()*12)+1
	crystalsArr.push(crystals)
}
console.log(crystalsArr)

//  This function is used for the random number that we need to guess
	// In the function we are generating a random number between 18 and 120
function numbersGenerated(){
	generatedNum = Math.floor(Math.random()*120)+18
	for (var i=0; i<4; i++){
	crystals = Math.floor(Math.random()*12)+1
	crystalsArr[i]=crystals
}
console.log(crystalsArr)
console.log(generatedNum)
}

numbersGenerated()

// Line 33 we are displaying the randomly generated number we're trying to guess.
// Here we are giving blue crystal a value of a random number generated.
	// We are also adding that value whenever it gets clicked
$('#randomNumber').html(generatedNum)
$('#blue').attr("value", crystalsArr[0]);
$('#blue').on('click', function(){
	var blueValue = $('#blue').attr("value");
	console.log("button clicked");
	currentGemValue+=parseInt(blueValue);
	$('#gemsCollected').html(currentGemValue);
})

$('#yellow').attr("value", crystalsArr[1]);
$('#yellow').on('click', function(){
	var yellowValue = $('#yellow').attr("value");
	console.log("button clicked");
	currentGemValue+=parseInt(yellowValue);
	$('#gemsCollected').html(currentGemValue);
})

$('#red').attr("value", crystalsArr[2]);
$('#red').on('click', function(){
	var redValue = $('#red').attr("value");
	console.log("button clicked");
	currentGemValue+=parseInt(redValue);
	$('#gemsCollected').html(currentGemValue);
})

$('#green').attr("value", crystalsArr[3]);
$('#green').on('click', function(){
	var greenValue = $('#green').attr("value");
	console.log("button clicked");
	currentGemValue+=parseInt(greenValue);
	$('#gemsCollected').html(currentGemValue);
})
// if (currentGemValue==generatedNum)


