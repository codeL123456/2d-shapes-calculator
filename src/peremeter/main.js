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
        multiplyBy2AndAddcss(x, y, equationArea, resultArea){
            if (x === "" && y === "") {
                alert("please provide a number!");
                document.getElementById(equationArea).innerHTML = "";
            } else if (x === "" && y !== "") {
                document.getElementById(equationArea). innerHTML = "2(0 + " + y + ") = ";
            } else if (x !== "" && y === "") {
                document.getElementById(equationArea). innerHTML = "2( " + x + " + 0) = ";
            } else {
                document.getElementById(equationArea).innerHTML = "2( " + x + " + " + y + ") =";
            }

            document.getElementById(equationArea).style.backgroundColor = "lightgreen";
            document.getElementById(resultArea).style.backgroundColor = "yellow";
        },
        multiplyBy2AndAdd(x, y, equationArea, resultArea){
            let id = document.getElementById(x).value;
            let id1 = document.getElementById(y).value;
            let result = 2 * (+id + +id1);
            document.getElementById(x).value = "";
            document.getElementById(y).value = "";
            this.multiplyBy2AndAddcss(id, id1, equationArea, resultArea);
            return document.getElementById(resultArea).innerHTML = result;
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
    $("#calRect").click(function () {
        calculator.multiplyBy2AndAdd("rec-length", "rec-width", "form1", "res1");
    })
}
