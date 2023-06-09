$(document).ready(function() {

    $("#alertSuccess").hide();
    $("#alertError").hide();
    $("#loading").hide();

});

$("#submit").click(function (){



    let name = document.getElementById('name').value;
    let companyName = document.getElementById('companyName').value;
    let industry = document.getElementById('industry').value;
    let location = document.getElementById('location').value;
    let message = document.getElementById('message').value;

    var status = validateItemForm();
    if (status != true) {
        $("#alertError").text(status);
        $("#alertError").show();
        return;
    }

    let id = "quote";

    let dt = {
        id:id,
        name:name,
        companyName:companyName,
        industry:industry,
        location:location,
        message:message,
    };

    $.ajax({
        url: './dataQuote.php',
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
                $("#alertSuccess").text("Your quotation has been Successfully sent, Thank you.");
                $("#alertSuccess").fadeTo(2000, 500).slideUp(500, function() {
                    $("#alertSuccess").slideUp(500);
                });

                // $("#loading").hide();

                document.getElementById('name').value = "";
                document.getElementById('companyName').value = "";
                document.getElementById('industry').value = "";
                document.getElementById('location').value = "";
                document.getElementById('message').value = "";

                $("#submit").prop("disabled", false);

            }else {
                $("#alertError").text("Error occurred while sending quotation. Please try again later.");
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

    if ($("#companyName").val().trim() == "") {
        return "Enter company name.";
    }

    if ($("#industry").val().trim() == "") {
        return "Enter your industry.";
    }

    if ($("#location").val().trim() == "") {
        return "Enter your location.";
    }
    if ($("#message").val().trim() == "") {
        return "Enter your message.";
    }
    return true;
}