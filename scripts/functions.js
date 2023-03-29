$(document).ready(function () {
	employeeList();
	$("#fileUploadForm").validate();
	$("#editForm").validate();
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

/* add employee form
using submit method on form id instead of click on button id as the validation happens on submit not click. if we use click 
the validation will not happen. also preventDefault doesnt work on using submit on button id
*/
// function addEmployee() {
$('#fileUploadForm').submit(function (e) {
	e.preventDefault();

	// using jquery validate plugin to validate the form before submitting it
	let $form = $(this);
	if (!$form.valid()) return false;
	// var first_name = $('.add_employee #first_name_input').val();
	// var last_name = $('.add_employee #last_name_input').val();
	// var salary = $('.add_employee #salary_input').val();
	// var email = $('.add_employee #email_input').val();
	// // var date_of_joining = $('.add_employee #last_name_input').val();
	// var phone = $('.add_employee #phone_input').val();
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
			// $(".error").html(response.message)

			//using jquery to dislay the alert message on a div instead of alert
			$(".error").html(`<div>${response.message}</div>`).delay(2000).fadeOut();
			$('#addEmployeeModal').modal('hide');
			employeeList();
			// alert(response.message);
		}

	})
})

// edit employee form
$('#editForm').submit(function (event) {
	event.preventDefault();
	// console.log('test');
	let $editform = $(this);
	if (!$editform.valid()) return false;
	let form = $('#editForm')[0];
	let data = new FormData(form);
	// console.log(form);return;
	// Display the key/value pairs
	// for (var pair of data.entries()) {
	// 	console.log(pair[0] + ', ' + pair[1]);
	// }
	// return;
	$.ajax({
		type: 'post',
		data: data,
		url: "edit-employee.php",
		contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
		processData: false,
		success: function (data) {
			let response = JSON.parse(data);
			$(".error").html(`<div>${response.message}</div>`).delay(2000).fadeOut();
			// console.log(response);
			$('#editEmployeeModal').modal('hide');
			employeeList();
			// alert(response.message);
		}
	})
})

//view employee
$('#').click((id) => {
	$.ajax({
		type: 'get',
		data: {
			id
		},
		url: 'view-employee.php',
		success: (data) => {
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
			$(".error").html(`<div>${response.message}</div>`).delay(2000).fadeOut();
			$('#deleteEmployeeModal').modal('hide');
			employeeList();
			// alert(response.message);
		}
	})
}

function viewEmployee(id) {
	$.ajax({
		type: 'get',
		data: {
			id
		},
		url: 'view-employee.php',
		success: function (data) {
			// console.log(data);
			let response = JSON.parse(data);
			$('.edit_employee #employee_id').val(response.emp_id);
			// console.log($("input[name=employee_id]").val());
			$('.edit_employee #first_name_input').val(response.first_name);
			$('.edit_employee #last_name_input').val(response.last_name);
			$('.edit_employee #email_input').val(response.email);
			$('.edit_employee #phone_input').val(response.phone_no);
			$('.edit_employee #salary_input').val(response.salary);
		}
	})
}

// $("#submitAdd").click(function(){
// 	let  regex = /^(0|91)?[6-9][0-9]{9}$/;
// 	if (regex.test($("#phone").val())) {
// 		$("#lblError").css("visibility", "hidden");
// 	} else {
// 		$("#lblError").css("visibility", "visible");
// 	}
// })