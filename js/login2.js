$(document).ready(function() {
    $("#basic-form").validate({
      rules: {
        email: {
            required: true,
            email: true
        },
        password:{
            required:true,
            minlength:6
        }
      },
      messages : {
        email: { 
          email: " The email should be in the format: abc@domain.com"
        },
        password:{
            required:" Please Provide a password",
            minlength:"Your password must be atleat 6 chracters long",
        }
      }
    },
    submitForm=function(){
      // e.preventDefault();
      var email = $("input[name=email]").val();
      var password = $("input[name=password]").val();
      var formData = {
        email: email,
        password: password,
      };
      // alert(email);
      $.ajax({
        type: "POST",
        url: "http://localhost/Guvi_project/php/login.php",
        data: formData,
        success: function (response) {
          console.log((response));
          const res=JSON.parse(response);
          console.log(res);
          if(res.status=="success")
          {
            console.log(res);
            window.location.href="http://localhost/Guvi_project/profile.html";
            console.log(res.session_id);
            // localStorage.setItem("redisid",res.session_id)
          }
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
          // window.location.replace("http://localhost/Guvi_project/profile.html");
          alert(errorThrown);
        }
      });	
      });
  });