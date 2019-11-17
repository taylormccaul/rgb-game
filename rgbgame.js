$(document).ready(function() {
    $(".target-color").hide();
    $(".user-colors").hide();
    $(".menu").show();
    $(".win-screen").hide();

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

    let inc = 1;

    $("#number-field").defaultValue = 1;

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
    });

    $("#inc-plus").click(() => {
        if (inc >= 0) {
            inc += 1;
            document.querySelector(".iterator-div > h4").innerHTML = inc;
        }
    });

    $("#inc-minus").click(() => {
        if (inc > 0) {
            inc -= 1;
            document.querySelector(".iterator-div > h4").innerHTML = inc;
        }
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
                red += inc;
                $(".user-colors").css("background-color", `rgb(${red}, ${green}, ${blue})`);
                redHead.innerHTML = "rgb(" + red + ", ";
                alertWin();
            }
        });
    
        $("#green-add").click(() => {
            if (green < maxVal) {
                green += inc;
                $(".user-colors").css("background-color", `rgb(${red}, ${green}, ${blue})`);
                greenHead.innerHTML = green + ", ";
                alertWin();
            }
        });
    
        $("#blue-add").click(() => {
            if (blue < maxVal) {
                blue += inc;
                $(".user-colors").css("background-color", `rgb(${red}, ${green}, ${blue})`);
                blueHead.innerHTML = blue + ")";
                alertWin();
            }
        });
    
        $("#red-minus").click(() => {
            if (red > 0) {
                red -= inc;
                $(".user-colors").css("background-color", `rgb(${red}, ${green}, ${blue})`);
                redHead.innerHTML = "rgb(" + red + ", ";
                alertWin();
            }
        });
    
        $("#green-minus").click(() => {
            if (green > 0) {
                green -= inc;
                $(".user-colors").css("background-color", `rgb(${red}, ${green}, ${blue})`);
                greenHead.innerHTML = green + ", ";
                alertWin();
            }
        });
        
        $("#blue-minus").click(() => {
            if (blue > 0) {
                blue -= inc;
                $(".user-colors").css("background-color", `rgb(${red}, ${green}, ${blue})`);
                blueHead.innerHTML = blue + ")";
                alertWin();
            }
        });

        function alertWin() {
            if (red === redRand && green === greenRand && blue === blueRand) {
                $(".menu").hide();
                $(".target-color").hide();
                $(".user-colors").hide();
                document.getElementById("value-show").innerHTML = `YOU WON! The value was ${rgbRand}`;
                $(".win-screen").show();

                $("#play-again").click(() => {
                    $(".menu").toggle();
                    $(".win-screen").toggle();
                });
            }
        }
    }
});
