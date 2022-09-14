var Checklong = document.getElementById("settingslength");

window.addEventListener("load", function () {
  Checklong.value = 10;
});

function Verifysettings() {
  var CheckUpper = document.getElementById("settingsupper-case");
  var CheckLower = document.getElementById("settingslower-case");
  var CheckNumber = document.getElementById("settingsnumbers");

  var Uppercase = false;
  var Lowercase = false;
  var Numbers = false;

  if (CheckUpper.checked == true) {
    Uppercase = true;
  }

  if (CheckLower.checked == true) {
    Lowercase = true;
  }

  if (CheckNumber.checked == true) {
    Numbers = true;
  }

  console.log(CheckUpper, CheckLower, CheckNumber);

  if (Uppercase == true && Lowercase == true && Numbers == true) {
    var password =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  } else if (Uppercase == true && Lowercase == true && Numbers == false) {
    var password = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  } else if (Uppercase == true && Lowercase == false && Numbers == false) {
    var password = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if (Uppercase == false && Lowercase == false && Numbers == false) {
    var password = "Veuillez choisir au moins un parametre";
    alert(password);
  } else if (Uppercase == true && Lowercase == false && Numbers == true) {
    var password = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  } else if (Uppercase == false && Lowercase == true && Numbers == true) {
    var password = "abcdefghijklmnopqrstuvwxyz0123456789";
  } else if (Uppercase == false && Lowercase == true && Numbers == false) {
    var password = "abcdefghijklmnopqrstuvwxyz";
  }

  console.log(Uppercase, Lowercase, Numbers);

  return password;
}

function Passwordlength() {
  var pswlong = 0;

  var Checklong = document.getElementById("settingslength");

  pswlong = Checklong.value;

  if (pswlong > 15) {
    Checklong.value = 15;
    pswlong = 15;
  }

  return pswlong;
}

function Generation() {
  var password = Verifysettings();
  var passwordgenerated = "";

  for (var i = 0; i < Passwordlength(); i++) {
    passwordgenerated += password.charAt(
      Math.floor(Math.random() * password.length)
    );
  }

  return passwordgenerated;
}

function Password() {
  var passwordword = document.getElementById("password");

  passwordword.value = Generation();

  console.log(passwordword);
}
