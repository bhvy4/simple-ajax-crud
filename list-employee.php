<?php 
include 'config/connection.php';
$sql = "SELECT * FROM employee";
$result = mysqli_query($conn,$sql);
$data = [];
while($row = mysqli_fetch_assoc($result)){
    $data[] = $row;
}
print_r(json_encode($data));
?>