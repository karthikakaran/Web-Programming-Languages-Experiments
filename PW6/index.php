<html>
<body>

<?php
error_reporting(E_ALL);
function getBooks(){
        define('DB_SERVER', 'localhost');
        define('DB_USERNAME', 'root');
        define('DB_PASSWORD', '28111988');
        define('DB_DATABASE', 'test');
        $conn = mysql_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD);
        if(! $conn ) {
            die('Could not connect: ' . mysql_error());
        }
        $sql = "SELECT * FROM Book";
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
   // echo json_encode($ret);
    for($i=0;$i<count($ret);$i++){
       echo "<h3>Title : ".$ret[$i]['title']."</h3>
        <h5>Book Id : ".$ret[$i]['Book_id']."</h5>
        <h5>Year : ".$ret[$i]['year']."</h5>
        <h5>Price : ".$ret[$i]['price']."</h5>
        <h5>Category : ".$ret[$i]['category']."</h5><br>";
   }
}
echo getBooks();
?>
<body>
</html>
