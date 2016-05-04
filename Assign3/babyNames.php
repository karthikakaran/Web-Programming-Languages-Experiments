<?php
error_reporting(E_ALL);
function fetchBabyNames($data){
        define('DB_SERVER', 'localhost:8080');
        define('DB_USERNAME', 'root');
        define('DB_PASSWORD', '28111988');
        define('DB_DATABASE', 'babyNames');
        $conn = mysql_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD);
        if(! $conn ) {
            die('Could not connect: ' . mysql_error());
        }
        $sql = "(SELECT name, gender, ranking from BabyNames where gender = 'f' and year = ".$data." order by ranking asc limit 5) UNION
         (SELECT name, gender, ranking from BabyNames where gender = 'm' and year = ".$data." order by ranking asc limit 5)";
        mysql_select_db(DB_DATABASE);
        $retval = mysql_query( $sql,$conn );
        if (!$retval) {
            echo 'Could not run query: ' . mysql_error();
            exit;
    }
    $val=0;
    while($row = mysql_fetch_array($retval, MYSQL_ASSOC)) {
        $ret[] = $row;
    }
    mysql_close($conn);
    return json_encode($ret);
}
if (isset($_POST['year'])) {
        echo fetchBabyNames($_POST['year']);
}
?>
