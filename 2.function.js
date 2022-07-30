// 1. Math.floor function. How many items you can buy within the money you have

function getMilk(money) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    
  console.log("buy " + calcBottles(money,1.5) + " bottles of getMilk");
    
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  
    return calChange(money,1.5);

}

    function calcBottles(startingMoney, costPerBottle) {
        var numberOfBottles = Math.floor(startingMoney / costPerBottle);
        return numberOfBottles;
      }
      
      function calChange(startingAmount, costPerBottle) {
        var change = startingAmount % costPerBottle;
        return change;
      }
      
      console.log("Hello Master. here is your " + getMilk(5) + " change.");
//


// 2. Calculate remaining months, weeks and days until 90 years old

    function lifeInWeeks(age) {  
        
        var monthsAge = (90-age)*12;
        var weeksAge = (90-age)*52;
        var daysAge = (90-age)*365;
        
        console.log("You have " + daysAge +"  days, " + weeksAge + " weeks, and " + monthsAge + " months left.")       
    }
        
    lifeInWeeks(90);

//  



// 3. Determine output from a function by using return

function bmiCalculator (weight, height) {
    var bmi = weight / Math.pow(height, 2);
    var interpretation = " "
    
    if (bmi < 18.5) {
        interpretation =  (" Your BMI is " + bmi + ", so you are underweight");
    }
    
    if (bmi > 18.5 && bmi <= 24.9) {
        interpretation = (" Your BMI is " + bmi + ", so you have a normal weight");
    }
    
    if (bmi > 24.9) {
        interpretation = ("Your BMI is " + bmi + ", so you are overweight");
    }
    
    return interpretation;
}

var bmiTotal = bmiCalculator (60,2)
console.log(bmiTotal)
//