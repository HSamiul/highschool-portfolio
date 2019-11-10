document.body.onload = dark; // this function relies on the DOM being loaded, so it won't run if you place the script in the head.

function dark() {

    var myButton = document.createElement("button");
    myButton.innerHTML = "🌓";
    var body = document.getElementById("body");
    var div1 = document.getElementById("div1");
    body.appendChild(myButton);

    body.classList.add("dark");
    var site_element_list = document.getElementsByClassName("site_content");

    myButton.addEventListener("click", function() { //activate dark mode
        if (body.classList.contains("dark")) {
            document.getElementById("body").style.backgroundColor = "black";

            for (let step = 0; step < site_element_list.length; step++) {
                site_element_list[step].style.color = "white";
            }
            body.classList.remove("dark");
        } else {
            document.getElementById("body").style.backgroundColor = "white";
            for (let step = 0; step < site_element_list.length; step++) {
                site_element_list[step].style.color = "black";
            }
            body.classList.add("dark");
        }
    })
}
