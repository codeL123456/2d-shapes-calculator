window.onload = function () {
    var cssEdit = {
        add3Itmescss(x, y, z, equationArea, resultArea){

            if (x === "" && y === "" && z === "") {
                //if three of them equals nothing
                alert("please provide a number!");
                document.getElementById(equationArea).innerHTML = "";
            } else if (x === "" && y !== "" && z !== "") {
                //if only x equals nothing
               document.getElementById(equationArea).innerHTML = "0 + " + y + " + " + z + " = "; 
            } else if (x !== "" && y === "" && z !== "") {
                //if only y equals nothing
               document.getElementById(equationArea).innerHTML = x + " + 0 + " + z + " = ";
            } else if (x !== "" && y !== "" && z === "") {
                //if only z equals nothing
               document.getElementById(equationArea).innerHTML = x + " + " + y + " + 0 = ";
            } else if (x !== "" && y === "" && z === "") {
                //if both y and z equals nothing
               document.getElementById(equationArea).innerHTML = x + " + 0 + 0 =";
            } else if (x === "" && y !== "" && z === "") {
                //if both of x and z equals nothing
               document.getElementById(equationArea).innerHTML = "0 + " + y + " + 0 =";                
            } else if (x === "" && y === "" && z !== "") {
                //if both of x and y equals nothing
               document.getElementById(equationArea).innerHTML = "0 + 0 + " + z + " =";
            } else {
                //if somthing else happend
               document.getElementById(equationArea).innerHTML = x + " + " + y + " + " + z + " = ";
            }
            //highlighting the equation
            document.getElementById(equationArea).style.backgroundColor = "lightgreen";
            //highlighting the answer
            document.getElementById(resultArea).style.backgroundColor = "yellow";
        }
    };
    $("#calCube").click(function () {
        //gitting the values
        var a = $("#cube-edge").val();
        //gitting the result and formula a areas
        var resultArea = $("#res");
        var equationArea = $("#form");

        //calculating the result
        var result = Math.pow(a, 2);

        //resetting the values
        $("#cube-edge").val("");

        //css editing.
        if (a === "") {
            alert("Please provide a number");
            equationArea.html("");
        } else {
            equationArea.html(a + "<sup>3</sup>" + " =");
        }
        resultArea.css("background-color", "yellow")
        equationArea.css("background-color", "lightgreen")
        //displaying the result
        return resultArea.html(result);
    });
    $("#calRectPri").click(function () {
        //gitting the val
        var l = $("#rect-length").val();
        var w = $("#rect-width").val();
        var h = $("#rect-height").val();
        
        //calculating the result
        var result = l * w * h;

        //restting the inputs
        $("#rect-length").val("");
        $("#rect-width").val("");
        $("#rect-height").val("");

        //css editing
        cssEdit.add3Itmescss(l, w, h, "form1", "res1");
       
        //displaying the result
        return $("#res1").html(result);
    });
    $("#calSqrPir").click(function () {
        
    })
}
