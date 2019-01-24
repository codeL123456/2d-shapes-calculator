window.onload = function () {
    var calculator = {
        multiplyBy4css(x, equationArea, resultArea){
            if (x === "") {
                alert("please provide a number!");
                document.getElementById(equationArea).innerHTML = "";
             } else {
                document.getElementById(equationArea).innerHTML = x + " x 4 = ";
            }

            document.getElementById(equationArea).style.backgroundColor = "lightgreen";
            document.getElementById(resultArea).style.backgroundColor = "yellow";
        },
        multiplyBy4(x, equationArea, resultArea){
            let id  = document.getElementById(x).value;
            let res = id * 4;
            document.getElementById(x).value = ""
            this.multiplyBy4css(id, equationArea, resultArea);
            return document.getElementById(resultArea).innerHTML = res;
        }
    };
    $("#calSquare").click(function () {
        calculator.multiplyBy4("sq-side", "form", "res");
    });
}
