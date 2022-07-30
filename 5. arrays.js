// Guest list checker

var guestList = ["Fazry","Mahmud", "Fatimah", "Ammar", "Haziq", "Akmal"]
var guestName = prompt("Please Insert Your Name ")

if (guestList.includes(guestName)){
    alert("Welcome")
} else {
    alert("Your name not in the list")
}

//


//Push array 

    var output = [];
    var count = 1;

    function fizzBuzz() {

        output.push(count);

        console.log(output);

        count ++;

    }

//


// Push array Fizzbuz games

var output = [];
var count = 1;


function fizzBuzz() {

for (var count =1; count <101; count++) {

if (count % 3 === 0 && count % 5  === 0){
    output.push("FizzBuzz");
}
else if (count % 3 === 0) {
        output.push("Fizz");
    }   
else if (count % 5 === 0 ){
        output.push("Buzz");
    }
else {
    output.push(count);
    }
}
}

//