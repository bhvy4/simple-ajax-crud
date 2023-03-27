<?php 
include 'config/connection.php';
$id = $_GET['id'];
$sql = "DELETE FROM employee WHERE emp_id = '$id'";

if(mysqli_query($conn,$sql)){
    $response = [
        'status'=>'ok',
        'success'=>true,
        'message'=>'Record successfully deleted'
    ];
    print_r(json_encode($response));
} else{
    $response = [
        'status'=>'ok',
        'success'=>false,
        'message'=>'Record could not be deleted'
    ];
    print_r(json_encode($response));
}
