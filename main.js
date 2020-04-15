var theButton = document.getElementById("portfolio");

theButton.onclick = function () {
 var password = prompt("Please enter the password.");
    if (password==="pugs!2020"){
        window.open("files/Portfolio2020.pdf","_blank");
    } else{
      password = prompt("oops! wrong password");
    }
}




$(function() {
  $(".translate").click(function() {
    $(".translate").removeClass("on");
    $(this).addClass("on");
  });
});
