$(document).ready(function() {

    var value1 = $("#phonenumber").val();
   
    $.validator.addMethod("checknumber", function(value1) {
        return /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/.test(value1);
      });

      

    $("#contactform").validate({
        rules:{
            firstname:{
                required:true,
                minlength:1
            },
            
            phonenumber:{
                required: true,
                checknumber: true,
                maxlength:10,
                minlength:10
            },
            emailaddress:{
                required:true,
                email: true
            },
            message:{
                required: true
            },
            
        },
        messages:{
            
            firstname:{
                
                required:"This field is required",
                minlength:"Enter valid name"
            },
            emailaddress:{
                required:"This field is required",
                email: "Email not valid"
            },
            message:"This field is required",
            phonenumber:{
                checknumber: "Phone number is not valid",
                maxlength: "Phone number is not valid",
                minlength: "Phone number is not valid"
            }

        }
        
    })



    
    
})    