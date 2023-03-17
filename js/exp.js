function submitForm(e){
  var email = $("input[name=email]").val();
  var password = $("input[name=password]").val();
  alert(email);
  var formData = {
    email: email,
    password: password,
  };
  $.ajax({
    url: "http://localhost/Guvi_project/php/login.php",
    type: "POST",
    data: formData,
    success: function (response) {},
  });	
  }