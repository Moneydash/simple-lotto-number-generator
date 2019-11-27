var numbers = [1];

function generateNumber(index) {
    var desired = Math.floor(Math.random() * 9) + 1;
    var duration = 7500;

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
    var trno = $("#trno3").text() + '' + $("#trno2").text() + '' + $("#trno1").text() + '' + $("#trno0").text();
    var output = $("#output2").text() + '' + $("#output1").text() + '' + $("#output0").text();

    request = createRequest();
    if (request == null) {
        alert("Unable to create request!");
    } else {
        var url = 'saveLotto_trans.php?trno=' + trno + '&output=' + output;
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

function generateTrnoNumber(index1) {
    var desired1 = Math.floor(Math.random() * 9) + 1;
    var duration1 = 3500;

    var trno = $('#trno' + index1); // Start ID with letter
    var started1 = new Date().getTime();

    animationTimer1 = setInterval(function() {
        if (trno.text().trim() === desired1 || new Date().getTime() - started1 > duration1) {
            clearInterval(animationTimer1); // Stop the loop
            trno.text(desired1); // Print desired number in case it stopped at a different one due to duration expiration
            generateTrnoNumber(index1 + 1);
        } else {
            trno.text(
                Math.floor(Math.random() * 9)
            );
        }
    }, 100);
}

$(function() {
    $("#trno0, #trno1, #trno2, #trno3").text("0");
    $("#output0, #output1, #output2").text("0");

    $("#reset").on("click", function() {
        location.reload();
    });

    $("#rand_gen").on("click", function() {
        generateTrnoNumber(0);
        setTimeout(function() {
            generateNumber(0);
        }, 17500);

        setTimeout(function() {
            addLotto_num();
        }, 45000);

        $("#rand_gen").attr("disabled", "disabled");
    });

});