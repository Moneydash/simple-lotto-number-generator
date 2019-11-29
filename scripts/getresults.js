setInterval(function() {
    $.ajax({
        type: 'post',
        url: 'getresults.php',
        dataType: 'json',
        success: function(res) {
            var tbl_lotto = "";
            if (!$.trim(res)) {
                tbl_lotto += "<tr><td class=\"text-center\" colspan=\"4\">No Data</td></tr>"
            } else {
                for (let i = 0; i < res.length; i++) {
                    var num = res[i]["id"];
                    var lotto_num = res[i]["lotto_num"];
                    var time = res[i]["lotto_time"];
                    var date = res[i]["lotto_date"];
                    tbl_lotto += "<tr><td class=\"text-center\">" + lotto_num + "</td><td class=\"text-center\">" + time + "</td><td class=\"text-center\">" + date + "</td></tr>";
                }
            }
            $("table#mytable").dropdown({
                append: "<thead><th class=\"text-center\">Lotto Number</th><th class=\"text-center\">Time</th><th class=\"text-center\">Date</th></thead><tbody>" + tbl_lotto + "</tbody>"
            });
        }
    });
}, 1300);