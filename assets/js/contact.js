$(document).ready(function() {

    $("#alertSuccess").hide();
    $("#alertError").hide();
    $("#loading").hide();

});

$("#submit").click(function (){



    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    var status = validateItemForm();
    if (status != true) {
        $("#alertError").text(status);
        $("#alertError").show();
        return;
    }

    let id = "contact";

    let dt = {
        id:id,
        name:name,
        email:email,
        subject:subject,
        message:message,
    };

    $.ajax({
        url: './data.php',
        type: 'POST',
        data: dt,
        beforeSend: function(){
            // $("#loading").show();
            $("#submit").attr("disabled", "disabled");
        },
        success:function (res){
            // console.log(res);
            if (res == 1){
                $("#alertError").hide();
                $("#alertSuccess").text("Your email has been Successfully sent, Thank you.");
                $("#alertSuccess").fadeTo(2000, 500).slideUp(500, function() {
                    $("#alertSuccess").slideUp(500);
                });

                // $("#loading").hide();

                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('subject').value = "";
                document.getElementById('message').value = "";

                $("#submit").prop("disabled", false);

            }else {
                $("#alertError").text("Error occurred while sending email. Please try again later.");
                $("#alertError").fadeTo(2000, 500).slideUp(500, function() {
                    $("#alertError").slideUp(500);
                });
                $("#submit").prop("disabled", false);
            }
        },
        error: function (request, error) {
            console.log("Request " +request +"----" + error);
        }
    })

})

function validateItemForm() {

    if ($("#name").val().trim() == "") {
        return "Enter Name.";
    }

    if ($("#email").val().trim() == "") {
        return "Enter Email.";
    }

    if (IsEmail($("#email").val().trim()) == false) {
        $('#invalid_email').show();
        return "Enter valid emaiil.";
    }

    if ($("#subject").val().trim() == "") {
        return "Enter your Subject.";
    }

    if ($("#message").val().trim() == "") {
        return "Enter your message.";
    }
    return true;
}

function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(email)) {
        return false;
    }
    else {
        return true;
    }
}