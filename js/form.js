$(document).ready(function () {
    const $form = $(".downloadForm");
    const $inputs = $form.find("input[required]");
    const $submitBtn = $form.find(".downloadBtn");

    $submitBtn.prop("disabled", true);

    $inputs.on("input", function () {
        let allFilled = true;

        $inputs.each(function () {
            if ($(this).val().trim() === "") {
                allFilled = false;
            }
        });

        $submitBtn.prop("disabled", !allFilled); 
    });

    $form.on("submit", function (e) {
        e.preventDefault();
        $submitBtn.hide();
        $form.find(".thankYouMessage").fadeIn();
    });
});