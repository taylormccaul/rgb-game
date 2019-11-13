$(document).ready(function() {
    $(".target-color").hide();
    $(".user-colors").hide();
    $(".menu").show();

    $(".modes").click(() => {
        $(".menu").toggle();
        $(".target-color").toggle();
        $(".user-colors").toggle();
    });

    let red;
    let green;
    let blue;

    let redHead = document.getElementById("red-h2");
    let greenHead = document.getElementById("green-h2");
    let blueHead = document.getElementById("blue-h2");

    function chooseMode(maxVal) {
        red = maxVal;
        green = maxVal;
        blue = maxVal;

        let redRand = Math.floor(Math.random() * (maxVal + 1));
        let greenRand = Math.floor(Math.random() * (maxVal + 1));
        let blueRand = Math.floor(Math.random() * (maxVal + 1));
    
        console.log(redRand);
        console.log(greenRand);
        console.log(blueRand);

        $(".target-color").css("background-color", `rgb(${redRand}, ${greenRand}, ${blueRand})`);

        $("#red-add").click(() => {
            if (red < maxVal) {
                $(".user-colors").css("background-color", `rgb(${red}, ${green}, ${blue})`);
                red += 1;
                redHead.innerHTML = "rgb(" + red + ", ";
            }
        });
    
        $("#green-add").click(() => {
            if (green < maxVal) {
                $(".user-colors").css("background-color", `rgb(${red}, ${green}, ${blue})`);
                green += 1;
                greenHead.innerHTML = green + ", ";
            }
        });
    
        $("#blue-add").click(() => {
            if (blue < maxVal) {
                $(".user-colors").css("background-color", `rgb(${red}, ${green}, ${blue})`);
                blue += 1;
                blueHead.innerHTML = blue + ")";
            }
        });
    
        $("#red-minus").click(() => {
            if (red > 0) {
                $(".user-colors").css("background-color", `rgb(${red}, ${green}, ${blue})`);
                red -= 1;
                redHead.innerHTML = "rgb(" + red + ", ";
            }
        });
    
        $("#green-minus").click(() => {
            if (green > 0) {
                $(".user-colors").css("background-color", `rgb(${red}, ${green}, ${blue})`);
                green -= 1;
                greenHead.innerHTML = green + ", ";
                //$("body").css("background-color", "blue");
            }
        });
        
        $("#blue-minus").click(() => {
            if (blue > 0) {
                $(".user-colors").css("background-color", `rgb(${red}, ${green}, ${blue})`);
                blue -= 1;
                blueHead.innerHTML = blue + ")";
            }
        });
    }

    $(".modes:nth-of-type(1)").click(() => {
        chooseMode(50);
    })

    $(".modes:nth-of-type(2)").click(() => {
        chooseMode(150);
    })

    $(".modes:nth-of-type(3)").click(() => {
        chooseMode(255);
    })
});
