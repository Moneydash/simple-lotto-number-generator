var numbers = [1];
var tm1;

function generateNumber(index) {
    console.log(status);
    var desired = Math.floor(Math.random() * 9) + 1;
    var duration = 15000;

    var output = $('#output' + index); // Start ID with letter
    var started = new Date().getTime();

    animationTimer = setInterval(function() {
        if (output.text().trim() === desired || new Date().getTime() - started > duration) {
            clearInterval(animationTimer); // Stop the loop
            output.text(desired); // Print desired number in case it stopped at a different one due to duration expiration
            generateNumber(index + 1);
        } else {
            output.text(
                Math.floor(Math.random() * 9)
            );
        }
    }, 100);
}

function addLotto_num() {
    var output = $("#output2").text() + '' + $("#output1").text() + '' + $("#output0").text();

    request = createRequest();
    if (request == null) {
        alert("Unable to create request!");
    } else {
        var url = 'saveLotto_trans.php?&output=' + output;
        request.onreadystatechange = showSaveStatus;
        request.open("GET", url, true);
        request.send(null);
    }
}

function showSaveStatus() {
    if (request.readyState == 4) {
        if (request.status == 200) {
            if (request.responseText == "okay") {
                console.log("Saved!");
            } else {
                console.log('Not Okay!');
            }
        } else {
            console.log("404 not Found");
        }
    } else {
        console.log("Error");
    }
}

$(function() {
    $("#output0, #output1, #output2").text("0");
    $("#result_div").hide();

    $(".container").prepend("<div class=\"row justify-content-center\" id=\"spgc_intro\"><p id=\"intro\">SPGC LOTTO<p></div>")
    $("#spgc_intro").css({ 'position': 'absolute', 'background': '#fff', 'width': '1000px', 'height': '650px', 'z-index': '99' });
    $("p#intro").css({ 'font-size': '8em', 'margin-left': '1.5em', 'margin-top': '1.3em' });

    setTimeout(function() {
        $(".container #spgc_intro").fadeOut('slow');
    }, 2000)

    $("#reset").on("click", function() {
        clearInterval(animationTimer);
        $("#output0").text('0');
        $("#output1").text('0');
        $("#output2").text('0');
        $("#rand_gen").show("slow");
        clearTimeout(tm1);
        setTimeout(function() {
            $("#reset_div").removeClass("col-8").addClass("col-4");
            $("#result_div").fadeIn();
        }, -500);
    });

    $(document).on("keyup", function(e) {
        if (e.which == 8) {
            clearInterval(animationTimer);
            $("#output0").text('0');
            $("#output1").text('0');
            $("#output2").text('0');
            $("#rand_gen").show("slow");
            clearTimeout(tm1);
            setTimeout(function() {
                $("#reset_div").removeClass("col-8").addClass("col-4");
                $("#result_div").fadeIn();
            }, -500);
        }
    });

    for (let i = 0; i < 4; i++) {
        if ($("#output" + i).text() == "1" || $("#trno").text() == "1") {
            $("#output" + i).css({ 'margin-left': '11px' });
        }
    }

    $("#rand_gen").on("click", function() {
        generateNumber(0);
        tm1 = setTimeout(function() {
            addLotto_num();
        }, 46000);

        $("#rand_gen").hide('slow');
        setTimeout(function() {
            $("#reset_div").removeClass("col-4").addClass("col-8");
            $("#result_div").fadeOut();
        }, 500);
    });

    // $(document).on("keypress", function(e) {
    //     if (e.which == 13 && status != 1) {
    //         generateNumber(0);
    //         tm1 = setTimeout(function() {
    //             addLotto_num();
    //         }, 46000);

    //         setTimeout(function() {
    //             $(".container").append("<div class=\"row justify-content-center mb-4\"></div>")
    //         });

    //         $("#rand_gen").hide('slow');
    //         setTimeout(function() {
    //             $("#reset_div").removeClass("col-4").addClass("col-8");
    //             $("#result_div").fadeOut();
    //         }, 500);
    //     }

    // });

});