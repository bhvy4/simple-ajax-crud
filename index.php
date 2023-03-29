<?php
include 'config/connection.php';
include "include/head.php";
?>

<body>
    <div class="container-xl">
        <div class="table-responsive">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="bg-light p-2 m-2">
                        <h5 class="text-dark text-center">PHP Ajax CRUD operation</h5>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <h2>Manage <b>Employees</b></h2>
                        </div>
                        <div class="col-sm-6">
                            <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i class="material-icons">&#xE147;</i><span>Add New Employee</span></a>
                        </div>
                    </div>
                </div>
                <div class = 'error'></div>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Salary</th>
                            <th>Email</th>
                            <th>Date of Joining</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="employee_data">
                    </tbody>
                </table>
                <p class="loading">Loading Data</p>
            </div>
        </div>
    </div>
    <?php
    include 'include/add-modal.php';
    include 'include/delete-modal.php';
    include 'include/edit-modal.php';
    ?>

    <?php include 'view.php'; ?>
    <?php include "include/footer.php" ?>