console.log('hello')

var crystalsArr = [];
var crystals = 0;
var generatedNum = 0;
var currentGemValue = 0;
var wins = 0;
var losses = 0;

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
	if (currentGemValue<generatedNum){
		var blueValue = $('#blue').attr("value");
		console.log("button clicked");
		currentGemValue+=parseInt(blueValue);
		$('#gemsCollected').html(currentGemValue);
	}
	else if(currentGemValue==generatedNum){
		numbersGenerated()
		$('#blue').attr("value", crystalsArr[0]);
		wins++
		currentGemValue = 0;
		


	}
	else if (currentGemValue>generatedNum){
		numbersGenerated()
		$('#blue').attr("value", crystalsArr[0]);
		losses++
		currentGemValue = 0;
	}
display()
})

// Yellow gem value

$('#yellow').attr("value", crystalsArr[1]);
$('#yellow').on('click', function(){
	
	if (currentGemValue<generatedNum){
		var yellowValue = $('#yellow').attr("value");
		console.log("button clicked");
		currentGemValue+=parseInt(yellowValue);
		$('#gemsCollected').html(currentGemValue);
	}
	else if(currentGemValue==generatedNum){
		numbersGenerated()
		$('#yellow').attr("value", crystalsArr[1]);
		wins++
		currentGemValue = 0;
		


	}
	else if (currentGemValue>generatedNum){
		numbersGenerated()
		$('#yellow').attr("value", crystalsArr[1]);
		losses++
		currentGemValue = 0;
	}
display()
})


//Red gem value 

$('#red').attr("value", crystalsArr[2]);
$('#red').on('click', function(){
	if(currentGemValue<generatedNum){
	var redValue = $('#red').attr("value");
	console.log("button clicked");
	currentGemValue+=parseInt(redValue);
	$('#gemsCollected').html(currentGemValue);
	}
	else if(currentGemValue==generatedNum){
		numbersGenerated()
		$('#red').attr("value", crystalsArr[2]);
		wins++
		currentGemValue = 0;
		
	}
	else if (currentGemValue>generatedNum){
		numbersGenerated()
		$('#red').attr("value", crystalsArr[2]);
		losses++
		currentGemValue = 0;
	}
display()
	
})

// Green gem value
$('#green').attr("value", crystalsArr[3]);
$('#green').on('click', function(){

	if (currentGemValue<generatedNum){
	var greenValue = $('#green').attr("value");
	console.log("button clicked");
	currentGemValue+=parseInt(greenValue);
	$('#gemsCollected').html(currentGemValue);	
	}
	else if(currentGemValue==generatedNum){
		numbersGenerated()
		$('#green').attr("value", crystalsArr[3]);
		wins++
		currentGemValue = 0;
		
	}
	else if (currentGemValue>generatedNum){
		numbersGenerated()
		$('#green').attr("value", crystalsArr[3]);
		losses++
		currentGemValue = 0;
	}
display()
	
})



function display(){
	document.getElementById('wins').innerHTML = wins;
 	document.getElementById('losses').innerHTML = losses;
 	document.getElementById('randomNumber').innerHTML = generatedNum;
 	document.getElementById('gemsCollected').innerHTML = currentGemValue;

}



	



