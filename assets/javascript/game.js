console.log('hello')

var crystalsArr = []
var crystals = 0
var generatedNum = 0
var currentGemValue = 0

for (var i=0; i<4; i++){
	crystals = Math.floor(Math.random()*12)+1
	crystalsArr.push(crystals)
}
console.log(crystalsArr)

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

$('#randomNumber').html(generatedNum)
$('#blue').attr("value", crystalsArr[0]);
$('#blue').on('click', function(){
	var blueValue = $('#blue').attr("value");
	console.log("button clicked");
	currentGemValue+=parseInt(blueValue);
	$('#gemsCollected').html(currentGemValue);
})

if (currentGemValue==generatedNum)


