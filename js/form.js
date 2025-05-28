$(document).ready(function () {
    $(".downloadForm").on("submit", function (e) {
        e.preventDefault(); // フォームの通常送信を止める

        const $form = $(this); // 今送信されたフォーム
        $form.find(".downloadBtn").hide(); // このフォーム内のボタンだけ非表示
        $form.find(".thankYouMessage").fadeIn(); // このフォーム内のメッセージだけ表示
    });
});
