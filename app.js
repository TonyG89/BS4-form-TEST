$("#sendForm").on("click", () => {
    const name = $("#name").val()
    const email = $("#email").val()
    const tel = $("#tel").val()


    $.ajax({
        url: "send-form.php",
        type: "POST",
        cache: false,
        data: { "Имя": name, "Почта": email, "Телефон": tel },
        dataType: "html",
        beforeSend: ()=>{
            $("#sendForm").prop("disable", true)
        },
        success
    })
})