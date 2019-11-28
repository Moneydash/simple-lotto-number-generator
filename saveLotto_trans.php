<?php

$host = 'localhost';
$root = 'root';
$password = '';
$dbname = 'spgc_lotto';
$dbcon = mysqli_connect($host, $root, $password, $dbname);

    if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

    $output = $_REQUEST["output"];

    if (isset($output)) {
        if (!empty($output)) {
            $sql = "INSERT INTO `spgc_lotto`.`tbl_savelotto_num`(lotto_num, lotto_time, lotto_date) VALUES('".$output."', NOW(), NOW())";
            $result = mysqli_query($dbcon, $sql);

            if ($result == TRUE) {
                echo 'okay';
            } else {
                echo 'not okay';
            }
        } else {
            echo 'empty!';
        }
    } else {
        echo 'not exists!';
    }

?>