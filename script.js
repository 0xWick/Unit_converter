
// Doing all the calculation and Replacing the HTML
input.oninput = function () {

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
        var meters_to_feet = Value * 3.2808
        var feet_to_meters = Value * 0.3048

        // Rounding to 3
        meters_to_feet = meters_to_feet.toFixed(3)
        feet_to_meters = feet_to_meters.toFixed(3)

        // Replacing the HTML
        var Length_content = Value + " meters = " + meters_to_feet + " feet | " + Value + " feet = " + feet_to_meters + " meters"

        length.innerHTML = Length_content


        // -------Volume section-------->>
        // Getting Volume Paragraph
        var volume = document.getElementById("Volume-Value")

        // Volume conversion
        var liters_to_gallons = Value * 0.2641
        var gallons_to_liters = Value * 3.78541

        // Rounding to 3
        liters_to_gallons = liters_to_gallons.toFixed(3)
        gallons_to_liters = gallons_to_liters.toFixed(3)

        // Replacing the HTML
        var Volume_content = Value + " liters = " + liters_to_gallons + " gallons | " + Value + " gallons = " + gallons_to_liters + " liters"

        volume.innerHTML = Volume_content

        // -------Mass Section-------->>
        // Getting Mass Paragraph
        var mass = document.getElementById("Mass-Value")

        // Volume conversion
        var kilos_to_pounds = Value * 2.20462
        var pounds_to_kilos = Value * 0.453592

        // Rounding to 3
        kilos_to_pounds = kilos_to_pounds.toFixed(3)
        pounds_to_kilos = pounds_to_kilos.toFixed(3)

        // Replacing the HTML
        var Mass_content = Value + " kilos = " + kilos_to_pounds + " pounds | " + Value + " pounds = " + pounds_to_kilos + " kilos"

        mass.innerHTML = Mass_content
    }
}


console.log("Here!")
