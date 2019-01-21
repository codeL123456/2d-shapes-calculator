window.onload = function () { 
    var calculate = {
        resultEditorMD(x, y, result, formula) {
            if (x === "" && y === "") {
                alert("please provide a number!");
                document.getElementById(formula).innerHTML = "";
            } else if (x === "" && y !== "") {
                document.getElementById(formula). innerHTML = "0 x " + y + " / 2 =";
            } else if (x !== "" && y === "") {
                document.getElementById(formula). innerHTML = x + " x 0 / 2 = ";
            } else {
                document.getElementById(formula).innerHTML = x + " x " + y + " / 2 = ";
            }

            document.getElementById(formula).style.backgroundColor = "lightgreen";
            document.getElementById(result).style.backgroundColor = "yellow";
        },
        resultEditorM(x, y, result, formula){
            if (x === "" && y === "") {
                alert("please provide a number!");
                document.getElementById(formula). innerHTML = "";
            } else if (x === "" && y !== "") {
                document.getElementById(formula). innerHTML = "0 x " + y + " =";
            } else if (x !== "" && y === "") {
                document.getElementById(formula). innerHTML = x + " x 0" + " =";
            } else {
                document.getElementById(formula).innerHTML = x + " x " + y + " = ";
            }

            document.getElementById(formula).style.backgroundColor = "lightgreen";
            document.getElementById(result).style.backgroundColor = "yellow";
        },
        mulitply(x, y, result, formula) {
            let id  = document.getElementById(x).value;
            let id1 = document.getElementById(y).value;
            let res = id * id1;
            document.getElementById(x).value = ""
            document.getElementById(y).value = ""
            this.resultEditorM(id, id1, result, formula);
            return document.getElementById(result).innerHTML = res;
        },
        multiplyAndDivide(x, y, result, formula){
            let id  = document.getElementById(x).value;
            let id1 = document.getElementById(y).value;
            let res = id * id1 / 2;
            document.getElementById(x).value = ""
            document.getElementById(y).value = ""
            this.resultEditorMD(id, id1, result, formula);
            return document.getElementById(result).innerHTML = res;
        }
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
        calculate.mulitply("rec-length", "rec-width", "res1", "form1")
    });
    $("#calTri").click(function () {
        calculate.multiplyAndDivide("tri-base", "tri-height", "res2", "form2")
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
        $("#form3").html("&pi; " + x + "<sup>2</sup>" + " = ");

        //displaying the values
        return $("#res3").html(result);
    })
    
}
