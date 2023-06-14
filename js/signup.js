
var citiesByState = {
    Karnataka: ["Bengaluru","Udupi","Shivamogga"],
    Tamilnadu: ["Chennai","Thiruchirappalli","Madurai"],
    Kerala: ["Kochi","Thrissur","Alappuzha","Palakkad"]
    }
    function makeSubmenu(value) {
    if(value.length==0) document.getElementById("citySelect").innerHTML = "<option></option>";
    else {
    var citiesOptions = "";
    for(cityId in citiesByState[value]) {
    citiesOptions+="<option>"+citiesByState[value][cityId]+"</option>";
    }
    document.getElementById("citySelect").innerHTML = citiesOptions;
    }
    }
    function displaySelected() { var state = document.getElementById("stateSelect").value;
    var city = document.getElementById("citySelect").value;
    alert(state+"\n"+city);
    }
    function resetSelection() {
    document.getElementById("stateSelect").selectedIndex = 0;
    document.getElementById("citySelect").selectedIndex = 0;
    }




    function calculateAge() {
var dobInput = document.getElementById("date_of_birth");
var dob = new Date(dobInput.value);
var today = new Date();

var age = today.getFullYear() - dob.getFullYear();
var monthDiff = today.getMonth() - dob.getMonth();

if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
age--;
}

document.getElementById("age").value = age;
}








$(document).ready(function() {

    var value1 = $("#phonenumber").val();

    var value = $("#password").val();

    var value2 = $("#age").val();

    $.validator.addMethod("checkage", function(value2) {
        return /[0-9]{2}/.test(value2);
      });

    $.validator.addMethod("checknumber", function(value1) {
        return /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/.test(value1);
      });

      
$.validator.addMethod("checklower", function(value) {
  return /[a-z]/.test(value);
});
$.validator.addMethod("checkupper", function(value) {
  return /[A-Z]/.test(value);
});
$.validator.addMethod("checkdigit", function(value) {
  return /[0-9]/.test(value);
});
$.validator.addMethod("checkspecial", function(value) {
    return /[!@#$%^&*]/.test(value);
});
$.validator.addMethod("passwordcheck", function(value) {
  return /^[A-Za-z0-9\d=!\-@._]$/.test(value) && /[a-z]/.test(value) && /\d/.test(value) && /[A-Z]/.test(value);
});
    $("#signupform").validate({
        rules:{
            firstname:{
                required:true,
                minlength:1
            },
            date_of_birth:{
                required: true
            },
            age:{
                required: true,
                checkage: true
            },
            gender:{
                required:true
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
            address:{
                required: true
            },
            stateSelect:{
                required: true
            },
            citySelect:{
                required: true
            },
            username:{
                required: true
            },
            password:{
                required:true,
                minlength: 8,
                
                checklower : true,
                checkupper : true,
                checkdigit : true,
                checkspecial : true,
                maxlength: 15
            },
            confirm_password: {
                required: true,
                equalTo: "#password"
            }
    
           
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
            password:{
                required:"This field is required",
                minlength: "Atleast 8 character required",
                checklower : "Atleast 1 lowercase letter",
                checkupper : "Atleast 1 uppercase letter",
                checkdigit : "Atleast 1 Digit",
                checkspecial : "Atleast 1 special character",
                maxlength: "Maximum length 15"
            },
            confirm_password:{
                required:"This field is required",
                equalTo: "Password does not match"
            },
            stateSelect:{
                required: "This field is required"
            },
            citySelect:{
                required: "This field is required"
            },
            gender:"This field is required",
            age:{
                required:"This field is required",
                checkage:"Age not valid"
            },    
            date_of_birth:"This field is required",
            address:"This field is required",
            username:"This field is required",
            phonenumber:{
                checknumber: "Phone number is not valid",
                maxlength: "Phone number is not valid",
                minlength: "Phone number is not valid"
            }

        }
        
    })
    
})    