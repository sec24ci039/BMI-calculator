function bmi(){
    let weightinp = prompt("Enter your weight in kg");
    let heightinp = prompt("Enter your height in cm");
    let weight = parseInt(weightinp);
    let height1 = parseInt(heightinp);
    let height = height1/100;
    let result = weight/(height*height);
    document.getElementById("result").innerHTML = `Your BMI is : ${result.toFixed(2)}`;

    
    

}