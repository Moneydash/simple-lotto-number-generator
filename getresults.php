<?php

    $host = 'localhost';
    $user = 'root';
    $pass = '';
    $dbname = 'spgc_lotto';
    $dbcon = mysqli_connect($host, $user, $pass, $dbname);

    if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    $sql = "SELECT * FROM `spgc_lotto`.`tbl_savelotto_num`";
    $result = mysqli_query($dbcon, $sql);

    $data = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $row["lotto_time"] = date('h:i a', strtotime($row["lotto_time"]));
        $row["lotto_date"] = date('m-d-Y', strtotime($row["lotto_date"]));
        $data[] = $row;
    }
    echo json_encode($data);

?>