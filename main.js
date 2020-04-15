var theButton = document.getElementById("portfolio");

theButton.onclick = function () {
 var password = prompt("Please enter the password.");
    if (password==="pugs!2020"){
        window.open("files/Portfolio2020.pdf","_blank");
    } else{
        while(password !="pugs!2020"){
            password = prompt("oops! wrong password");
        }
        window.open("files/Portfolio2020.pdf","_blank");
    }
}


$(function() {
  $(".translate").click(function() {
    $(".translate").removeClass("on");
    $(this).addClass("on");
  });
});
