// JavaScript Document

function validateForm() {
    var x = document.forms["contact-form"]["fname"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
	 
	 var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
 }
 
 var x = document.forms["contact-form"]["phone"].value;
    if (x == null || x == "") {
        alert("Phone number must be filled out");
        return false;
    }
	
	var x = document.forms["contact-form"]["comment"].value;
    if (x == null || x == "") {
        alert("Please enter the comments in the text area porvided");
        return false;
    }
}