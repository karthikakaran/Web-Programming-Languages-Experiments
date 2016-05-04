<html>
<body>
<?php
error_reporting(E_ALL);
function getBooks(){
        $idQuery=end(explode('/',$_SERVER['PHP_SELF']));
        define('DB_SERVER', 'localhost');
        define('DB_USERNAME', 'root');
        define('DB_PASSWORD', 'root');
        define('DB_DATABASE', 'test');
        $conn = mysql_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD);
        if(! $conn ) {
            die('Could not connect: ' . mysql_error());
       }
       if($idQuery == "books"){
            $sql = "SELECT * FROM Book";
       } else {
            $sql = "SELECT * FROM Book where Book_id =".$idQuery;
       }
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
        $bookArr = $ret; 
        foreach($bookArr as $key => $value) {
                $sql1 = "SELECT * from Book_Authors where Book_id =".$value['Book_id'];
                $retval1 = mysql_query( $sql1, $conn );
                while($row1 = mysql_fetch_array($retval1, MYSQL_ASSOC)) {
                   $bookDetailsArr[]=$row1;
                }
                if(!$retval1)  break; 
       }
       foreach($bookDetailsArr as $key => $value) {
                $sql2 = "SELECT * from Authors where Author_id =".$value['Author_id'];
                $retval2 = mysql_query( $sql2, $conn );
                while($row2 = mysql_fetch_array($retval2, MYSQL_ASSOC)) {
                   $authorDetailsArr[]=$row2;
                }
                if(!$retval2)  break; 
      }
      mysql_close($conn);
    
     if(count($ret) == 0)
        echo "No Books in that Id";
     for($i=0;$i<count($ret);$i++){
        echo "<h3>Title : ".$ret[$i]['title']."</h3>
        <h5>Book Id : ".$ret[$i]['Book_id']."</h5>
        <h5>Year : ".$ret[$i]['year']."</h5>
        <h5>Price : ".$ret[$i]['price']."</h5>
        <h5>Category : ".$ret[$i]['category'];
        echo "<h5>Author Names : </h5>";
        for($j=0;$j<count($bookDetailsArr);$j++){
            if($bookDetailsArr[$j]['Book_id'] == $ret[$i]['Book_id'])
                echo "<h5>                           ".$authorDetailsArr[$j]['Author_Name']."</h5>";
        }
     }
}
echo getBooks();
?>
<body>
</html>
