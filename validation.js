function focusElement(){

	// var x = document.activeElement.id

	if("name" == document.activeElement.id)
	{
		var name = document.getElementById("name");
		name.setAttribute("class", "focus");

		var phone = document.getElementById("phone");
		phone.setAttribute("class", "");

		var email = document.getElementById("email");
		email.setAttribute("class", "");

		var feedback = document.getElementById("feedback");
		feedback.setAttribute("class", "");
	}
	else if("phone" == document.activeElement.id)
	{
		var phone = document.getElementById("phone");
		phone.setAttribute("class", "focus");

		var name = document.getElementById("name");
		name.setAttribute("class", "");

		var email = document.getElementById("email");
		email.setAttribute("class", "");

		var feedback = document.getElementById("feedback");
		feedback.setAttribute("class", "");
	}
	else if("email" == document.activeElement.id)
	{
		var email = document.getElementById("email");
		email.setAttribute("class", "focus");

		var name = document.getElementById("name");
		name.setAttribute("class", "");

		var phone = document.getElementById("phone");
		phone.setAttribute("class", "");

		var feedback = document.getElementById("feedback");
		feedback.setAttribute("class", "");
	}
	else if("feedback" == document.activeElement.id)
	{
		var feedback = document.getElementById("feedback");
		feedback.setAttribute("class", "focus");

		var email = document.getElementById("email");
		email.setAttribute("class", "");

		var name = document.getElementById("name");
		name.setAttribute("class", "");

		var phone = document.getElementById("phone");
		phone.setAttribute("class", "");
	}
	else if("body" == document.activeElement.id)
	{
		var email = document.getElementById("email");
		email.setAttribute("class", "");

		var name = document.getElementById("name");
		name.setAttribute("class", "");

		var phone = document.getElementById("phone");
		phone.setAttribute("class", "");

		var feedback = document.getElementById("feedback");
		feedback.setAttribute("class", "");
	}


	// var field = document.getElementById(x);

 // 	field.setAttribute("class", "focus");
}

/*
 * Does all the error checking for the form.
 *
 * return errorFlag:   True if an error was found; False if no errors were found
 */
function formHasErrors(){

	var errorFlag = false;

	var name = document.getElementById("name");

	if (!formFieldHasInput(name))
	 {
	 	document.getElementById("name_error").style.display = "block";
	 	

		 if(!errorFlag)
		 {
		 	name.focus();
		 }

		 errorFlag = true;

	 }

 	var phoneRegex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);

 	var phone = document.getElementById("phone").value;

 	if(!phoneRegex.test(phone))
 	{
 		document.getElementById("phone_error").style.display = "block";

 		if(!errorFlag)
 		{
 			document.getElementById("phone").focus();
 			document.getElementById("phone").select();
 		}

 		errorFlag = true;
 	}

 	var emailRegex = new RegExp(/\S+@\S+\.\S+/);

 	var email = document.getElementById("email").value;

 	if(!emailRegex.test(email))
 	{
 		document.getElementById("email_error").style.display = "block";

 		if(!errorFlag)
 		{
 			document.getElementById("email").focus();
 			document.getElementById("email").select();
 		}

 		errorFlag = true;
 	}


 	return errorFlag;
}

/*
 * Removes white space from a string value.
 *
 * return  A string with leading and trailing white-space removed.
 */
function trim(str) {

	// Uses a regex to remove spaces from a string.
	return str.replace(/^\s+|\s+$/g,"");
}

/*
 * Determines if a text field element has input
 *
 * param   fieldElement A text field input element object
 * return  True if the field contains input; False if nothing entered
 */
function formFieldHasInput(fieldElement){

	if ( fieldElement.value == null || trim(fieldElement.value) == "" )
	{
		return false;
	}

	return true;
}

/*
 * Handles the submit event of the survey form
 *
 * param e  A reference to the event object
 * return   True if no validation errors; False if the form has
 *          validation errors
 */
function validate(e){

	hideErrors();

	if(formHasErrors())
	{
		e.preventDefault();

		return false;
	}
	else
	{
		alert("Thank you for your feedback!");
		return true;
	}
}


function resetForm(e){

	// Confirm that the user wants to reset the form.
	if ( confirm('Clear order?') )
	{
		// Ensure all error fields are hidden
		hideErrors();
		
		// Set focus to the first text field on the page
		document.getElementById("name").focus();
		
		// When using onReset="resetForm()" in markup, returning true will allow
		// the form to reset
		return true;
	}

	// Prevents the form from resetting
	e.preventDefault();
	
	// When using onReset="resetForm()" in markup, returning false would prevent
	// the form from resetting
	return false;	
}

/*
 * Hides all of the error elements.
 */
function hideErrors(){

	var errorFields = document.getElementsByClassName("error");

	for(var i=0; i < errorFields.length; i++)
	{
		errorFields[i].style.display = "none";
	}
}

/*
 * Handles the load event of the document.
 */
function load(){

	hideErrors();

	document.getElementById("contributeForm").addEventListener("submit", validate, false);

	document.getElementById("contributeForm").reset();

	document.getElementById("contributeForm").addEventListener("reset", resetForm, false);

	document.getElementById("name").addEventListener("focus", focusElement, false);
	document.getElementById("phone").addEventListener("focus", focusElement, false);
	document.getElementById("email").addEventListener("focus", focusElement, false);
	document.getElementById("feedback").addEventListener("focus", focusElement, false);
	document.getElementById("body").addEventListener("click", focusElement, false);
}




document.addEventListener("DOMContentLoaded", load, false);