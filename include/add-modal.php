
 <div id="addEmployeeModal" class="modal fade">
     <div class="modal-dialog">
         <div class="modal-content">
             <div class="modal-header">
                 <h4 class="modal-title">Add Employee</h4>
                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
             </div>
             <form id="fileUploadForm" action="" method="post" enctype="multipart/form-data">
                 <div class="modal-body add_employee">
                     <div class="form-group">
                         <label>First Name</label>
                         <input type="text" name="first_name" class="form-control" required>
                     </div>
                     <div class="form-group">
                         <label>Last Name</label>name
                         <input type="text" name="last_name" class="form-control" required>
                     </div>
                     <div class="form-group">
                         <label>Email</label>
                         <input type="email" name="email" class="form-control" required>
                     </div>
                     <div class="form-group">
                         <label>Salary</label>
                         <input type="number" class="form-control" name="salary" required>
                     </div>
                     <div class="form-group">
                         <label>Phone</label>
                         <input type="number" name="phone" class="form-control" required>
                     </div>
                 </div>
                 <div class="modal-footer">
                     <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel">
                     <input type="submit" name='submit' class="btn btn-success" value="Add" id='submitAdd'>
                 </div>
             </form>
         </div>
     </div>
 </div>

 <!-- <script src="../scripts/functions.js"></script> -->