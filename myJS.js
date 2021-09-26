/*
* Excercise 1
*
*/
document.getElementById('color-block').addEventListener('click', changeColor);


/*
* Then write a function that changes the text and the color inside the div
*
*/

function changeColor(){
    //Write a condition determine what color it should be changed to
    let color = document.getElementById('color-name');
    if(color.innerHTML == "#F08080"){
        //change the background color using JS
        //color.style.backgroundColor = "green";
        document.getElementById('color-block').style.backgroundColor = "#00FF00" ;

        //Change the text of the color using the span id color-name
        document.getElementById('color-name').innerHTML = "#00FF00" ;

    }
    else{
        //change the background color using JS
        document.getElementById('color-block').style.backgroundColor = "#F08080" ;
        //Change the text of the color using the span id color-name
        document.getElementById('color-name').innerHTML = "#F08080" ;

    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/
document.getElementById('convertbtn').addEventListener('click', convertTemp);
function convertTemp(){
    //Calculate the temperature here
    let fah = document.getElementById('f-input').value;
    let cal;
    cal = Math.round((fah - 32)* (5/9));
    //console.log(cal);
    //Send the calculated temperature to HTML
    document.getElementById('c-output').innerHTML = cal;
}


