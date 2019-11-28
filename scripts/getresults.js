$(function() {
    $.ajax({
        type: 'post',
        url: 'getresults.php',
        dataType: 'json',
        success: function(res) {
            for (let i = 0; i < res.length; i++) {
                var num = res[i]["id"];
                var lotto_num = res[i]["lotto_num"];
                var time = res[i]["lotto_time"];
                var date = res[i]["lotto_date"];
            }
        },
        error: function(err) { console.log(err); }
    });
});