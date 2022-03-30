//modal active
$(function() {
    $("#btn_giris").click(function() {
        $("#myUye").modal("show");
    })

})

//form validation
$(function() {
    $("#btnSubmit").click(function() {
        //input içeriği aldım
        let email, password;
        email = $("#user_email").val();
        password = $("#user_password").val();
        alert(email + " " + password)
    })

})