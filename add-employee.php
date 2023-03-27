<?php 
include 'config/connection.php';


// if(isset($_POST['submit'])){
   

    $first_name = mysqli_real_escape_string($conn,$_POST['first_name']);
    $last_name = mysqli_real_escape_string($conn,$_POST['last_name']);
    $email = mysqli_real_escape_string($conn,$_POST['email']);
    $phone = mysqli_real_escape_string($conn,$_POST['phone']);
    $salary = mysqli_real_escape_string($conn,$_POST['salary']);
    $response = [
        'status'=>'ok',
        'success'=>'',
        'message'=>''
    ];
    //validation for empty fields
    // if(empty($first_name)||empty($last_name)||empty($email)||empty($phone)||empty($salary)){
    //     $response['success'] = false;
    //     $response['message'] = 'Please fill all required fields';
    //     print_r(json_encode($response));
    //     die();
    // }
    //
    $date_of_join = date("Y-m-d");
    // echo($date_of_join);die();
    $sql = "INSERT INTO employee(first_name,last_name,salary,email,phone_no,created_on) VALUES('$first_name','$last_name','$salary','$email','$phone','$date_of_join')";



    if(mysqli_query($conn,$sql)){
        $response['success'] = true;
        $response['message'] = 'created successfully';
        print_r(json_encode($response));
    }else{
        $response['success'] = false;
        $response['message'] = 'record could not be created';
        // echo('fail');
        print_r(json_encode($response));
    }
// }
