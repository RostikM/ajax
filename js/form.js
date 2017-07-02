$(function() {
    $('#btn-send').click(sendForm);
});

function sendForm(e) {
    e.preventDefault();
    var form = document.querySelector('form');
    if (!form[0].checkValidity()){
        form.find(':submit').click();
    }
    $.ajax({
        url: "https://formspree.io/rmidenko2012@gmail.com",
        method: "POST",
        data: {
            name: $('#client-name').val(),
            email: $('#client-email').val(),
            comment: $('#comment').val()
        },
        dataType: "json"
    })
    .done(function() {
        $('form').html('<h1>Thank You!!!</h1>');
    });
}
