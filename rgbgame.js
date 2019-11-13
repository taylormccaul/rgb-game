$(document).ready(function() {
    $(".target-color").hide();
    $(".user-colors").hide();
    $(".menu").show();
    
    let red = 255;
    let green = 255;
    let blue = 255;

    let redHead = document.getElementById("red-h2");
    let greenHead = document.getElementById("green-h2");
    let blueHead = document.getElementById("blue-h2");

    //let redAdd = document.getElementById("red-add");
    //let greenAdd = document.getElementById("green-add");
    //let blueAdd = document.getElementById("blue-add");

    //let redMinus = document.getElementById("red-minus");
    //let greenMinus = document.getElementById("green-minus");
    //let blueMinus = document.getElementById("blue-minus");

    //let targetColor = document.querySelector(".target-color");

    /*let redMin = 0;
    let redMax = 255;

    let greenMin = 0;
    let greenMax = 255;

    let blueMin = 0;
    let blueMax = 255;*/

    let redRand = Math.floor(Math.random() * 256);
    let greenRand = Math.floor(Math.random() * 256);
    let blueRand = Math.floor(Math.random() * 256);

    console.log(redRand);
    console.log(greenRand);
    console.log(blueRand);

    $(".target-color").css("background-color", `rgb(${redRand}, ${greenRand}, ${blueRand})`);
    /*function addColor(color) {
        //$(`.plus:nth-of-type(${nthOfType})`).click(() => {
            /*if (red >= 255) {
                red = 255;
            } else if (green >= 255) {
                green = 255;
            } else if (blue >= 255) {
                blue = 255;
            }*/

            /*if (color === red && red < 255) {
                $("body").css("background-color", `rgb(${red}, ${green}, ${blue})`);
                red += 1;
                //console.log(`Red: ${red}`);
                redHead.innerHTML = red;
            } else if (color === green && green < 255) {
                $("body").css("background-color", `rgb(${red}, ${green}, ${blue})`);
                green += 1;
                //console.log(`Green: ${green}`);
                greenHead.innerHTML = green;
            } else if (color === blue && blue < 255) {
                $("body").css("background-color", `rgb(${red}, ${green}, ${blue})`);
                blue += 1;
                //console.log(`Blue: ${blue}`);
                blueHead.innerHTML = blue;
            }
        //});
    }*/

    /*function delColor(color) {
        //$(`.plus:nth-of-type(${nthOfType})`).click(() => {
            if (color === red && red > 0) {
                $("body").css("background-color", `rgb(${red}, ${green}, ${blue})`);
                red -= 1;
                //console.log(`Red: ${red}`);
                redHead.innerHTML = red;
            } else if (color === green && green > 0) {
                $("body").css("background-color", `rgb(${red}, ${green}, ${blue})`);
                green -= 1;
                //console.log(`Green: ${green}`);
                greenHead.innerHTML = green;
            } else if (color === blue && blue > 0) {
                $("body").css("background-color", `rgb(${red}, ${green}, ${blue})`);
                blue -= 1;
                //console.log(`Green: ${green}`);
                blueHead.innerHTML = blue;
            }

            /*if (red <= 0) {
                red = 0;
            } else if (green <= 0) {
                green = 0;
            } else if (blue <= 0) {
                blue = 0;
            }*/
        //});
    //}

    /*for (let i = 0; i < 3; i++) {
        $()
    }*/

    $("#red-add").click(() => {
        if (red < 255) {
            $(".user-colors").css("background-color", `rgb(${red}, ${green}, ${blue})`);
            red += 1;
            redHead.innerHTML = "rgb(" + red + ", ";
        }
    });

    $("#green-add").click(() => {
        if (green < 255) {
            $(".user-colors").css("background-color", `rgb(${red}, ${green}, ${blue})`);
            green += 1;
            greenHead.innerHTML = green + ", ";
        }
    });

    $("#blue-add").click(() => {
        if (blue < 255) {
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
});

/*$("body").click(function() {
    $(this).css("background-color", "yellow");
});*/
