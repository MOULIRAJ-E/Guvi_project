// function submitForm() {
//   var username = $("input[name=username]").val();
//   var email = $("input[name=email]").val();
//   var password = $("input[name=password]").val();
//   alert(username);
//   var formData = {
//     username: username,
//     email: email,
//     password: password,
//   };
//   $.ajax({
//     url: "http://localhost/Guvi_project/php/register.php",
//     type: "POST",
//     data: formData,
//     success: function (response) {},
//   });
// }

$(document).ready(function() {
  if (localStorage.getItem("redisId")) {
    window.location.replace("http://localhost/Guvi_project/profile.html");
  }
  $("#basic-form").validate({
    rules: {
      username : {
        required: true,
      },
      email: {
          required: true,
          email: true
      },
      password:{
          required:true,
          minlength:6
      },
      confirm_password:{
          required:true,
          minlength:6,
          equalTo:"#password"
      }
      ,
      date: {
        required: true,
      },
      age: {
          required: true,
          number: true,
      },
      contact: {
          required: true,
          minlength:10,
          maxlength:10
        }
    },
    messages : {
      username: {
        required: "Enter the name"
      },
      email: {
          required: "Enter the email",
        email: "The email should be in the format: abc@domain.com"
      },
      password:{
          required:"please Provide a password",
          minlength:"Your password must be atleat 6 chracters long"
      },
      confirm_password:{
          required:"please Provide a password",
          minlength:"Your password must be atleat 6 chracters long",
          equalTo:"please enter same password as above"
      }
      ,
      date: {
        required: "Please enter the date",
      },
      age: {
          required: "Please enter your age",
          number: "Please enter your age as a numerical value",
      },
      contact: {
          required: "Please enter the phone number",
          minlength:"Please specify a valid phone number",
          maxlength:"Please specify a valid phone number"
        }
    }
  },
  submitForm=function(e){
    var username = $("input[name=username]").val();
    var email = $("input[name=email]").val();
    var password = $("input[name=password]").val();
    var contact = $("input[name=contact]").val();
    var age = $("input[name=age]").val();
    var date = $("input[name=date]").val();

    var formData = {
      username: username,
      email: email,
      password: password,
      contact: contact,
      age: age,
      date: date,
    };
    $.ajax({
      url: "http://localhost/Guvi_project/php/register.php",
      type: "POST",
      data: formData,
      success: function (response) {},
    });	
    });
  
});