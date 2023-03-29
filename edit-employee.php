<?php 

include 'config/connection.php';
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$salary = $_POST['salary'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$id = $_POST['employee_id'];

$sql = "UPDATE employee SET first_name = '$first_name', last_name = '$last_name', salary = '$salary', email = '$email', phone_no = '$phone' where emp_id = '$id'";

// print_r(json_encode($_POST['employee_id'] ));

if(mysqli_query($conn,$sql)){
    $data = [
        'status' => 'ok',
        'success' => true,
        'message' => 'record updated successfully'
    ];
    print_r(json_encode($data));
} else{
    $data = [
        'status' => 'ok',
        'success' => false,
        'message' => 'record could not be updated'
    ];
    print_r(json_encode($data));
}
