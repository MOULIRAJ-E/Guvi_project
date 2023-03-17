$(document).ready(function () {
    console.log("Hi");
    if (localStorage.getItem("redisId")) {
      window.location.replace("http://localhost/Guvi_project/profile.html");
    }
    $("#basic-form").submit(function (event) {
      event.preventDefault();
    //   var email = $("input[name=email]").val();
    //   var password = $("input[name=password]").val();
    //   var formData = {
    //     email: email,
    //     password: password,
    //   };
      let formData = {
        email: $("#email").val(),
        password: $("#password").val(),
      };
      console.log(formData);
      $.ajax({
        type: "POST",
        url: "http://localhost/Guvi_project/php/login.php",
        data: formData,
  
        success: function (response) {
          let res = JSON.parse(response);
          if (res.status == "success") {
            console.log(res.session_id);
            localStorage.setItem("redisId", res.session_id);
  
            if (localStorage.getItem("redisId") != null) {
              window.location.href = "http://localhost/Guvi_project/profile.html";
            }
          } else {
            console.log(res.message);
            // showErrorMessage(res.message);
          }
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(errorThrown); // log error message to console
        },
      });
    });
  });