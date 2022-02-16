
// Doing all the calculation and Replacing the HTML
input.oninput = function () {

    function roundtoThree(num, scale) {
        if (!("" + num).includes("e")) {
            return +(Math.round(num + "e+" + scale) + "e-" + scale);
        } else {
            var arr = ("" + num).split("e");
            var sig = ""
            if (+arr[1] + scale > 0) {
                sig = "+";
            }
            return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
        }
    }

    // -------Getting the Value-------->>
    var Value = document.getElementById("input").value
    console.log(Value)

    if (Value == 0) {
        return;
    }
    else {


        // -------Length Section-------->>
        // Getting Length Paragraph
        var length = document.getElementById("Length-Value")

        // Length Conversion
        var meters_to_feet = Value * 3.280
        var feet_to_meters = Value * 0.304

        // Replacing the HTML
        var Length_content = Value + " meters = " + meters_to_feet + " feet | " + Value + " feet = " + feet_to_meters + " meters"

        length.innerHTML = Length_content


        // -------Volume section-------->>
        // Getting Volume Paragraph
        var volume = document.getElementById("Volume-Value")

        // Volume conversion
        var liters_to_gallons = Value * 0.264
        var gallons_to_liters = Value * 3.785

        // Replacing the HTML
        var Volume_content = Value + " liters = " + liters_to_gallons + " gallons | " + Value + " gallons = " + gallons_to_liters + " liters"

        volume.innerHTML = Volume_content

        // -------Mass Section-------->>
        // Getting Mass Paragraph
        var mass = document.getElementById("Mass-Value")

        // Volume conversion
        var kilos_to_pounds = Value * 2.205
        var pounds_to_kilos = Value * 0.454

        // Replacing the HTML
        var Mass_content = Value + " kilos = " + kilos_to_pounds + " pounds | " + Value + " pounds = " + pounds_to_kilos + " kilos"

        mass.innerHTML = Mass_content
    }
}


console.log("Here!")
