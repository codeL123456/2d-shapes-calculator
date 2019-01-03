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

        //displaying the values
        return $("#res").html(result);
    });
    $("#calRect").click(function () {
        var x = $("#rec-length");      
        var y = $("#rec-width");
        
        var result = x * y;

        $("#rec-length").val("");
        $("#rec-width").val("");

        resultEditorM(x, y, "form1", "res1");

        return $("#res1").html(result);
    });
}