window.onload = function () {
function resultEditorD(x, y, formulaArea, resultArea) {
    if (x === "" && y === "") {
            alert("please provide a number!");
            document.getElementById(formulaArea). innerHTML = "";
        } else if (x === "" && y !== "") {
            document.getElementById(formulaArea). innerHTML = "0 / " + y + " =";
        } else if (x !== "" && y === "") {
            document.getElementById(formulaArea). innerHTML = x + " / 0" + " =";
        } else {
            document.getElementById(formulaArea).innerHTML = x + " / " + y + " = ";
        }
        document.getElementById(formulaArea).style.backgroundColor = "lightgreen";
        document.getElementById(resultArea).style.backgroundColor = "yellow";
    }
    function resultEditorM(x, y, formula, resultArea) {
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
        document.getElementById(resultArea).style.backgroundColor = "yellow";

    }  
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
    $("#calRect").click(function () {
        //assiging the values to variables
        var x = $("#rec-length").val();      
        var y = $("#rec-width").val();
        
        //assigning the results to a variable
        var result = x * y;

        //resitting the values
        $("#rec-length").val("");
        $("#rec-width").val("");

        //sitting the css
        resultEditorM(x, y, "form1", "res1");

        //displaying the result
        return $("#res1").html(result);
    });
    $("#calTri").click(function () {
       var x = $("#tri-base").val();
       var y = $("#tri-height").val();

       var result = x * y / 2;

       $("#tri-base").val("");
       $("#tri-height").val("");
       if (x === "" && y === "") {
        alert("please provide a number!");
        document.getElementById("form2"). innerHTML = "";
        } else if (x === "" && y !== "") {
            document.getElementById("form2"). innerHTML = "0 x " + y + " / 2 = ";
        } else if (x !== "" && y === "") {
            document.getElementById("form2"). innerHTML = x + " x 0" + " / 2 =";
        } else {
            document.getElementById("form2").innerHTML = x + " x " + y + " / 2 = ";
        }
        document.getElementById("form2").style.backgroundColor = "lightgreen";
        document.getElementById("res2").style.backgroundColor = "yellow";

       return $("#res2").html(result);
    });

}