<?php 
include 'config/connection.php';
$id = $_GET['id'];
$sql = "SELECT * from employee where emp_id='$id'";
$result = mysqli_query($conn,$sql);
$data = mysqli_fetch_assoc($result);
print_r(json_encode($data));
