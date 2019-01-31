window.onload = function () {
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
    })   
}