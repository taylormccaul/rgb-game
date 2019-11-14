$(document).ready(function() {
    $(".target-color").hide();
    $(".user-colors").hide();
    $(".menu").show();

    $(".modes").click(() => {
        $(".menu").toggle();
        $(".target-color").show();
        $(".user-colors").show();
    });

    let red;
    let green;
    let blue;

    let redHead = document.getElementById("red-h2");
    let greenHead = document.getElementById("green-h2");
    let blueHead = document.getElementById("blue-h2");

    //let easyMaxVal = 50;
    //let medMaxVal = 150;
    //let hardMaxVal = 255;

    //let redRand;
    //let greenRand;
    //let blueRand;

    $(".modes:nth-of-type(1)").click(() => {
        chooseMode(50);
    });

    $(".modes:nth-of-type(2)").click(() => {
        chooseMode(150);
    });

    $(".modes:nth-of-type(3)").click(() => {
        chooseMode(255);
    });

    $("#back-link").click(() => {
        window.location.reload();
        /*$(".menu").toggle();
        $(".target-color").toggle();
        $(".user-colors").toggle();

        $(".modes:nth-of-type(1)").click(() => {
            chooseMode(50);
        });
    
        $(".modes:nth-of-type(2)").click(() => {
            chooseMode(150);
        });
    
        $(".modes:nth-of-type(3)").click(() => {
            chooseMode(255);
        });*/
    });

    //let redRand = Math.floor(Math.random() * (maxVal + 1));
    //let greenRand = Math.floor(Math.random() * (maxVal + 1));
    //let blueRand = Math.floor(Math.random() * (maxVal + 1));

    function chooseMode(maxVal) {
    //$(".modes").click((maxVal) => {
        let redRand = Math.floor(Math.random() * (maxVal + 1));
        let greenRand = Math.floor(Math.random() * (maxVal + 1));
        let blueRand = Math.floor(Math.random() * (maxVal + 1));
        let rgbRand = `rgb(${redRand}, ${greenRand}, ${blueRand})`;

        red = maxVal;
        green = maxVal;
        blue = maxVal;

        redHead.innerHTML = `rgb(${red}, `;
        greenHead.innerHTML = `${green}, `;
        blueHead.innerHTML = `${blue})`;

        $(".target-color").css("background-color", rgbRand);
        $(".user-colors").css("background-color", `rgb(${red}, ${green}, ${blue})`);

        console.log(rgbRand);

        $("#red-add").click(() => {
            if (red < maxVal) {
                red += 1;
                $(".user-colors").css("background-color", `rgb(${red}, ${green}, ${blue})`);
                redHead.innerHTML = "rgb(" + red + ", ";
            }
        });
    
        $("#green-add").click(() => {
            if (green < maxVal) {
                green += 1;
                $(".user-colors").css("background-color", `rgb(${red}, ${green}, ${blue})`);
                greenHead.innerHTML = green + ", ";
            }
        });
    
        $("#blue-add").click(() => {
            if (blue < maxVal) {
                blue += 1;
                $(".user-colors").css("background-color", `rgb(${red}, ${green}, ${blue})`);
                blueHead.innerHTML = blue + ")";
            }
        });
    
        $("#red-minus").click(() => {
            if (red > 0) {
                red -= 1;
                $(".user-colors").css("background-color", `rgb(${red}, ${green}, ${blue})`);
                redHead.innerHTML = "rgb(" + red + ", ";
            }
        });
    
        $("#green-minus").click(() => {
            if (green > 0) {
                green -= 1;
                $(".user-colors").css("background-color", `rgb(${red}, ${green}, ${blue})`);
                greenHead.innerHTML = green + ", ";
            }
        });
        
        $("#blue-minus").click(() => {
            if (blue > 0) {
                blue -= 1;
                $(".user-colors").css("background-color", `rgb(${red}, ${green}, ${blue})`);
                blueHead.innerHTML = blue + ")";
            }
        });
    }
});
