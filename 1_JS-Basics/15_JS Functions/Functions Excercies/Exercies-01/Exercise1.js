/**
 * Write a function named tellFortune that:
        takes 4 arguments: number of children, partner's name, geographic location, job title.
        outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
        Call that function 3 times with 3 different values for the arguments.
 */

    function tellFortune(jTitle,gloc,pName,childrenNum){
       let futureinfo = `You will be a ${jTitle} in ${gloc}, and married to ${pName} with ${childrenNum} kids`;
       console.log(futureinfo);
    }
    tellFortune("Manager","Dhaka","Marjina",3);
    tellFortune("CEO","Barlin","Jessy",5);
    tellFortune("IT Expert","New Delli","Sabana",7);


/**
 * Write a function named calculateDogAge that:
        takes 1 argument: your puppy's age.
        calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
        outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
        Call the function three times with different sets of values.
        Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
 */

    function calculateDogAge(puppyAge){
        let dogYears = 7*puppyAge;
        let dogAge = `Your doggie is ${dogYears} years old in dog years!`;
        console.log(dogAge);
    }
    calculateDogAge(12);
    calculateDogAge(5);
    calculateDogAge(3);

/**
 * Write a function named calculateSupply that:
        takes 2 arguments: age, amount per day.
        calculates the amount consumed for rest of the life (based on a constant max age).
        outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
        Call that function three times, passing in different values each time.
        Bonus: Accept floating point values for amount per day, and round the result to a round number.
 */












/**
 * The Geometrizer
        Create 2 functions that calculate properties of a circle, using the definitions here.

        Create a function called calcCircumfrence:

        Pass the radius to the function.
        Calculate the circumference based on the radius, and output "The circumference is NN".
        Create a function called calcArea:

        Pass the radius to the function.
        Calculate the area based on the radius, and output "The area is NN".
 */




/**
 * The Temperature Converter
        It's hot out! Let's make a converter based on the steps here.

        Create a function called celsiusToFahrenheit:

        Store a celsius temperature into a variable.
        Convert it to fahrenheit and output "NN°C is NN°F".
        Create a function called fahrenheitToCelsius:

        Now store a fahrenheit temperature into a variable.
        Convert it to celsius and output "NN°F is NN°C."
 */

        
