$(document).ready(function () {
	employeeList();
	$("#fileUploadForm").validate();
})

function employeeList() {
	$.ajax({
		type: 'get',
		url: 'list-employee.php',
		success: function (data) {
			// console.log('data is' + data);
			let response = JSON.parse(data);
			// console.log(response);
			let tr = '';
			for (let i = 0; i < response.length; i++) {
				let id = response[i].emp_id;
				let first_name = response[i].first_name;
				let last_name = response[i].last_name;
				let salary = response[i].salary;
				let email = response[i].email;
				let doj = (response[i].created_on).split(" ");
				let date_of_joining = doj[0];
				let phone = response[i].phone_no;
				tr += '<tr>';
				tr += '<td>' + id + '</td>';
				tr += '<td>' + first_name + '</td>';
				tr += '<td>' + last_name + '</td>';
				tr += '<td>' + salary + '</td>';
				tr += '<td>' + email + '</td>';
				tr += '<td>' + date_of_joining + '</td>';
				tr += '<td>' + phone + '</td>';
				tr += '<td><div class="d-flex">';
				tr += '<a href="#editEmployeeModal" class="m-1 view" data-toggle="modal" onclick=viewEmployee("' + id + '")><i class="fa" data-toggle="tooltip" title="edit">&#9998;</i></a>';
				tr += '<a href="#deleteEmployeeModal" class="m-1 delete" data-toggle="modal" onclick=$("#delete_id").val("' + id + '")><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>';
				tr += '</div></td></tr>';
			}
			$('.loading').hide();
			$('#employee_data').html(tr);
		}
	})
}

// function addEmployee() {
$('#submitAdd').click(function (event) {
	// var first_name = $('.add_employee #first_name_input').val();
	// var last_name = $('.add_employee #last_name_input').val();
	// var salary = $('.add_employee #salary_input').val();
	// var email = $('.add_employee #email_input').val();
	// // var date_of_joining = $('.add_employee #last_name_input').val();
	// var phone = $('.add_employee #phone_input').val();
	event.preventDefault();
	var form = $("#fileUploadForm")[0];
	var data12 = new FormData(form);
	$.ajax({
		type: 'post',
		data: data12,
		url: "add-employee.php",
		contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
		processData: false,
		success: function (data) {

			var response = JSON.parse(data);
			$('#addEmployeeModal').modal('hide');
			employeeList();
			alert(response.message);
		}

	})
})

//view employee
$('#').click((id)=>{
	$.ajax({
		type:'get',
		data:{
			id
		},
		url:'view-employee.php',
		success:(data)=>{
			let response = json.parse(data);
			
		}
	})
})

function deleteEmployee() {
	var id = $('#delete_id').val();
	$.ajax({
		type: 'get',
		data: {
			id: id
		},
		url: 'delete-employee.php',
		success: function (data) {
			let response = JSON.parse(data);
			$('#deleteEmployeeModal').modal('hide');
			employeeList();
			alert(response.message);
		}
	})
}