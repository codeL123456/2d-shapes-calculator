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
    var calculator = {
        multiplyBy2AndAdd(x, y, equationArea, resultArea){
            //getting the values
            let id = document.getElementById(x).value;
            let id1 = document.getElementById(y).value;

            //calculating the result
            let result = 2 * (+id + +id1);

            //sitting the values to 0
            document.getElementById(x).value = "";
            document.getElementById(y).value = "";

            //editing the css
            cssEdit.multiplyBy2AndAddcss(id, id1, equationArea, resultArea);
            
            //displaying the result
            return document.getElementById(resultArea).innerHTML = result;
        },

        multiplyBy4(x, equationArea, resultArea){
            //gitting the values
            let id  = document.getElementById(x).value;

            //calculating the results
            let res = id * 4;

            //sitting the inputs to 0
            document.getElementById(x).value = "";

            //
            cssEdit.multiplyBy4css(id, equationArea, resultArea);
            return document.getElementById(resultArea).innerHTML = res;
        },
    };
    $("#calSquare").click(function () {
        calculator.multiplyBy4("sq-side", "form", "res");
    });

    $("#calRect").click(function () {
        calculator.multiplyBy2AndAdd("rec-length", "rec-width", "form1", "res1");
    });

    $("#calTri").click(function () {
        var x = $("#tri-side1").val();
        var y = $("#tri-side2").val();
        var z = $("#tri-base").val();
        var result = +x + +y + +z;

        $("#tri-side1").val("");
        $("#tri-side2").val("");
        $("#tri-base").val("");

        cssEdit.add3Itmescss(x, y, z, "form2", "res2");
        
        return $("#res2").html(result);
    });

    $("#calCir").click(function () {
        var radius = $("#rad").val();
        var result = 2 * Math.PI * radius;
        var resultArea = $("#res3");
        var formulaArea = $("#form3");

        $("#rad").val("");

        if (radius === "") {
            formulaArea.html("2 &pi; 0");
        } else {
            formulaArea.html("2 &pi; " + radius);
        }

        resultArea.css("backgroundColor", "yellow");
        formulaArea.css("backgroundColor", "lightgreen");

        return resultArea.html(result)
    });
    $("#calPara").click(function () {
        calculator.multiplyBy2AndAdd("para-base", "para-height", "form4", "res4");
    });
    $("#calRom").click(function () {
        var side1 = $("#side1").val();
        var side2 = $("#side2").val();
        var side3 = $("#side3").val();
        var side4 = $("#side4").val();
        
        var result = +side1 + +side2 + +side3 + +side4;

        $("#side1").val("");
        $("#side2").val("");
        $("#side3").val("");
        $("#side4").val("");  
        
        cssEdit.add4items(side1, side2, side3, side4, "form5", "res5");

        return $("#res5").html(result);
    })
}
