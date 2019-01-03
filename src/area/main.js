window.onload = function () {
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

}