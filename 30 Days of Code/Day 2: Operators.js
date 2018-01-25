process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}
    mealCost= Math.round(mealCost+(mealCost*tipPercent/100)+(mealCost*taxPercent/100));
    console.log("The total meal cost is "+mealCost+" dollars.");

/////////////// ignore above this line ////////////////////

function main() {
    var meal_cost = parseFloat(readLine());
    var tip_percent = parseInt(readLine());
    var tax_percent = parseInt(readLine());
    main(meal_cost,tip_percent,tax_percent)
}
