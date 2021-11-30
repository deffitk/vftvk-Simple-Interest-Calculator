addEventListener('load', (ev) => {
    //Ensures that the span "rate_val" has exactly the value of the input range "rate" on each reload.
    updateRate()
})

function compute() {
    //First, check the amount entered
    if (!checkdata())
        return;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var reult = document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>, <br/>an interest rate of <mark>" + rate + "% </mark>. <br/>You will receive an amount of <mark>" + interest + "</mark>, <br/>in the year <mark>" + year + "</mark><br/>"
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}

function checkdata() {
    //create reference to the input element 'principal'
    var principal = document.getElementById("principal");

    //Check if principal field is empty
    if (principal.value == "") {
        alert("Please enter the Amount");
        principal.focus();
        return false;
    }
    //Check  if the user enters a negative number or cero
    else if (principal.value <= 0) {
        alert("Please enter a positive number");
        principal.focus();
        return false;
    }
    //If all is well return true.
    return true;
}
