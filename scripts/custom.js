(function () {

    $('#contact_form').validator();

    $('#contact_form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact_form/contact_form.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data) {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact_form').find('.messages').html(alertBox);
                        $('#contact_form')[0].reset();
                    }
                }
            });
            return false;
        }
    });
});
function fizzbuzz() {
    let userNum1 = parseInt(document.getElementById("fizz1").value);
    let userNum2 = parseInt(document.getElementById("fizz2").value);
    let rangeStart = parseInt(document.getElementById("start").value);
    let rangeEnd = parseInt(document.getElementById("end").value);
    let newArr = [];
    for (i = rangeStart; i <= rangeEnd; i++) {
        if (i % userNum1 == 0 && i % userNum2 == 0) {
            newArr.push("<span class ='fizzbuzz fizzbuzzGradient'>Fizzbuzz</span>");
        }
        else if (i % userNum1 == 0) newArr.push("<span class = 'fizz'>Fizz</span>");
        else if (i % userNum2 == 0) newArr.push("<span class= 'buzz'>Buzz</span>");
        else newArr.push(i);
    }
    let resultfb = newArr.join(", ");
    document.getElementById("resultfb").innerHTML = `<b>${resultfb}</b>`;
}