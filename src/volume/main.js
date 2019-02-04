window.onload = function () {
    var cssEdit = {
        multiplyBy4css(x, equationArea, resultArea){
            if (x === "") {
                //if x equaled nothing
                alert("please provide a number!");
                document.getElementById(equationArea).innerHTML = "";
             } else {
                 //if it was filled
                document.getElementById(equationArea).innerHTML = x + " x 4 = ";
            }
            //highlighting the equation
            document.getElementById(equationArea).style.backgroundColor = "lightgreen";
            //highlighting the answer
            document.getElementById(resultArea).style.backgroundColor = "yellow";
        },

        multiplyBy2AndAddcss(x, y, equationArea, resultArea){
            if (x === "" && y === "") {
                //if nothing was thier
                alert("please provide a number!");
                document.getElementById(equationArea).innerHTML = "";
            } else if (x === "" && y !== "") {
                //if only x equaled nothing
                document.getElementById(equationArea). innerHTML = "2(0 + " + y + ") = ";
            } else if (x !== "" && y === "") {
                //if only y equaled nothing
                document.getElementById(equationArea). innerHTML = "2( " + x + " + 0) = ";
            } else {
                //if every =thing was filled
                document.getElementById(equationArea).innerHTML = "2( " + x + " + " + y + ") =";
            }

            //highliting the equation
            document.getElementById(equationArea).style.backgroundColor = "lightgreen";
            //highlighing the answer
            document.getElementById(resultArea).style.backgroundColor = "yellow";
        },

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
        },

        add4items(x, y, z, i, equationArea, resultArea){
            if (x === "" && y === "" && z === "" && i === "") {
                //if all of them equaled nothing
                alert("please provide a number!");
                document.getElementById(equationArea).innerHTML = "";
            } else if (x === "" && y !== "" && z !== "" && i !== "") {
                //if only x equals nothing
               document.getElementById(equationArea).innerHTML = "0 + " + y + " + " + z + " + " + i + " ="; 
            } else if (x !== "" && y === "" && z !== "" && i !== "") {
                //if only y equals nothing
               document.getElementById(equationArea).innerHTML = x + " + 0 + " + z + " + " + i + " =";
            } else if (x !== "" && y !== "" && z === "" && i !== "") {
                //if only z equals nothing
               document.getElementById(equationArea).innerHTML = x + " + " + y + " + 0 + " + i + " =";
            } else if (x !== "" && y !== "" && z !== "" && i === "") {
                //if only i equals nothing
               document.getElementById(equationArea).innerHTML = x + " + " + y + " + " + z + " + 0 =";
            } else if (x === "" && y === "" && z !== "" && i !== "") {
                //if both x and y equal nothing 
               document.getElementById(equationArea).innerHTML = "0 + 0 + " + z + " + " + i + " + =";                
            } else if (x !== "" && y !== "" && z === "" && i === "") {
                //if both z and i equaled nothing
               document.getElementById(equationArea).innerHTML = x + " + " + y + " + 0 + 0 ="; 
            } else if (x === "" && i === "" && y !== "" && z !== "") {
                //both x and i equal nothing
                document.getElementById(equationArea).innerHTML = "0 + " + y + " + " + " + " + z + " + 0 =";
            } else if (x === "" && y !== "" && z === "" && i !== "") {
                //both x and z equaled nothing
                document.getElementById(equationArea).innerHTML = "0 + " + y + " + " + " + 0 + " + i + " =";                
            } else if (x !== "" && y === "" && z === "" && i !== "") {
                //if both y anad z equaled nothing
                document.getElementById(equationArea).innerHTML = x + " + 0 + 0 + " + i + " =";
            } else if (x !== "" && y === "" && z !== "" && i === "") {
                //if both y and i equaled nothing
                document.getElementById(equationArea).innerHTML = x + " + 0 + " + z + " + 0 =";
            } else {
               document.getElementById(equationArea).innerHTML = x + " + " + y + " + " + z + " + " + i + " =";
            }
            
            //highlighting the equation
            document.getElementById(equationArea).style.backgroundColor = "lightgreen";
            //highlighting the answer
            document.getElementById(resultArea).style.backgroundColor = "yellow";
        }
    };
    $("#calCube").click(function () {
        //gitting the values
        var a = valueAdder("cube-edge");
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
    })
}
