window.onload = function () { 
    var calculator = {
        multiply : function (x, y, result, formula) {
            var id  = document.getElementById(x).value;
            var id1 = document.getElementById(y).value;
            var res = id * id1;

            document.getElementById(x).value = ""
            document.getElementById(y).value = ""
            if (x === "" && y === "") {
                alert("please provide a number!");
                document.getElementById(formula). innerHTML = "";
            } else if (x === "" && y !== "") {
                document.getElementById(formula). innerHTML = "0 x " + id1 + " =";
            } else if (x !== "" && y === "") {
                document.getElementById(formula). innerHTML = id + " x 0" + " =";
            } else {
                document.getElementById(formula).innerHTML = id + " x " + id1 + " = ";
            }

            document.getElementById(formula).style.backgroundColor = "lightgreen";
            document.getElementById(result).style.backgroundColor = "yellow";
            return document.getElementById(result).innerHTML = res;
        }, 
        multiplyAndDivide: function (x, y, formula, result) {
            var id  = document.getElementById(x).value;
            var id1 = document.getElementById(y).value;
            var res = id * id1 / 2;

            document.getElementById(x).value = ""
            document.getElementById(y).value = ""
            if (x === "" && y === "") {
                alert("please provide a number!");
                document.getElementById(formula). innerHTML = "";
            } else if (x === "" && y !== "") {
                document.getElementById(formula). innerHTML = "0 x " + id1 + " /2 =";
            } else if (x !== "" && y === "") {
                document.getElementById(formula). innerHTML = id + " x 0" + " /2 =";
            } else {
                document.getElementById(formula).innerHTML = id + " x " + id1 + " /2 = ";
            }

            document.getElementById(formula).style.backgroundColor = "lightgreen";
            document.getElementById(result).style.backgroundColor = "yellow";
            return document.getElementById(result).innerHTML = res;
        },
        
    };
    $("#calSquare").click(function () {
        //assigning the value(s) to (a) variable(s)
        var x = $("#sq-side").val();

        //assiging the result to a variable
        var result= Math.pow(x, 2);

        //resitting the value(s)
        $("#sq-side").val("");

        //sitting the css
        $("#res").css("background-color", "yellow");
        $("#form").css("background-color", "lightgreen");
        if (x === "") {
            alert("please provide a number");
        }
        $("#form").html(x + "<sup>2</sup>" + " = ");

        //displaying the values
        return $("#res").html(result);
    });
    $("#calRect").click(function() {
        calculator.multiply("rec-length", "rec-width", "res1", "form1")
    });
    $("#calTri").click(function () {
        calculator.multiplyAndDivide("tri-base", "tri-height", "form2", "res2");
    });
    $("#calCir").click(function () {
        var x = $("#rad").val();
        var result = 3.14 * Math.pow(x, 2);

        //sitting the css
        $("#res3").css("background-color", "yellow");
        $("#form3").css("background-color", "lightgreen");
        if (x === "") {
            alert("please provide a number");
        }
        $("#form3").html("&pi;" + x + "<sup>2</sup>" + " = ");

        //displaying the values
        return $("#res3").html(result);
    })
}