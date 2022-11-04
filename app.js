$("#sendForm").on("click", () => {
    const name = $("#name").val()
    const email = $("#email").val()
    const tel = $("#tel").val()

    $.ajax({
        url: "send-form.php",
        type: "POST",
        cache: false,
        data: { "name": name, "email": email, "tel": tel },
        dataType: "html",
        beforeSend: () => {
            $("#sendForm").prop("disabled", true)
            alert('Ваши данные отправляються на сервер. Нажмите - ОК и ожидайте...')
        },
        success: (data) => {
            alert("Ваши данные - доставлены! Вы получили доступ!")
            $("#sendForm").prop("disabled", false)
        },
        error: function (xhr, exception) {
            let msg = "";
            if (xhr.status === 0) {
                msg = "Not connect.\n Verify Network." + xhr.responseText;
            } else if (xhr.status == 404) {
                msg = "Requested page not found. [404]" + xhr.responseText;
            } else if (xhr.status == 500) {
                msg = "Internal Server Error [500]." + xhr.responseText;
            } else if (exception === "parsererror") {
                msg = "Requested JSON parse failed.";
            } else if (exception === "timeout") {
                msg = "Time out error." + xhr.responseText;
            } else if (exception === "abort") {
                msg = "Ajax request aborted.";
            } else {
                msg = "Error:" + xhr.status + " " + xhr.responseText;
            }
        }
    })
})

function push() {
    console.log('пока что кнопка не работает');
    alert('пока что кнопка не работает');
}
