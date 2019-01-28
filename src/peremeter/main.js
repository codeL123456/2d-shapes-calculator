window.onload = function () {
    
    var cssEdit = {
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
        add3Itmescss(x, y, z, i, equationArea, resultArea){
            i = i || "";

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

            //If the i is present.
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
            
            document.getElementById(equationArea).style.backgroundColor = "lightgreen";
            document.getElementById(resultArea).style.backgroundColor = "yellow";
        },
    };
    var calculator = {
        multiplyBy2AndAdd(x, y, equationArea, resultArea){
            let id = document.getElementById(x).value;
            let id1 = document.getElementById(y).value;
            let result = 2 * (+id + +id1);

            document.getElementById(x).value = "";
            document.getElementById(y).value = "";

            cssEdit.multiplyBy2AndAddcss(id, id1, equationArea, resultArea);
            return document.getElementById(resultArea).innerHTML = result;
        },

        multiplyBy4(x, equationArea, resultArea){
            let id  = document.getElementById(x).value;
            let res = id * 4;

            document.getElementById(x).value = "";

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

        calculator.add3Itmescss(x, y, z, "form2", "res2");
        
        return $("#res2").html(result);
    });
}
