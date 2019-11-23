document.body.onload = dark; // this function relies on the DOM being loaded, so it won't run if you place the script in the head.

function dark() {

    var myButton = document.createElement("button");
    myButton.innerHTML = "🌓"; //sets text of the button
    var body = document.getElementById("body"); //creates a  variable representing the body
    body.appendChild(myButton); //adds the button to the body (so that it appears in the html)

    body.classList.add("dark"); //it's like saying <body class = "dark">
    var site_element_list = document.getElementsByClassName("site_content"); //returns multiple elements that have the class; a list.

    myButton.addEventListener("click", function() { //activate toggle
        if (body.classList.contains("dark")) { //this if statement activates dark mode
            document.getElementById("body").style.backgroundColor = "black"; //sets the body'd background to black

            for (let step = 0; step < site_element_list.length; step++) { //set's site content (words) to white; iterates through site_element_list
                site_element_list[step].style.color = "white";
            }
            body.classList.remove("dark"); // the theme has been switched, so we remove the dark class from body. Now when we want to toggle back,
            //the else statement activating light mode will run rather than the if statement because body DOES NOT contain the dark class
        } else { //this else statement activates light mode. Basically inverting back the colors.
            document.getElementById("body").style.backgroundColor = "white";
            for (let step = 0; step < site_element_list.length; step++) {
                site_element_list[step].style.color = "black";
            }
            body.classList.add("dark"); //adds back the dark class to body so that when we press the toggle again, dark mode is activated.
        }
    })
}
