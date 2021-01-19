document.getElementById("add").onclick = function() {
    //alert("ok");
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    if (isNaN(Number(n1)) || isNaN(Number(n2))) {
        alert("Required numbers only");
    }
    else {

        document.getElementById("adding").innerHTML = "Sum: " + (Number(n1) + Number(n2)).toString();
    }
} 