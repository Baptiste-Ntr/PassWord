function Verification() {
  var checkbox = document.getElementById("settingscharacters-verification");
  var psw = document.getElementById("verificationtxt").value;

  if (psw.length >= 7) {
    checkbox.checked = true;
  } else if (psw.length < 7) {
    checkbox.checked = false;
  }

  if (psw.toUpperCase() === psw && psw !== psw.toLowerCase()) {
    console.log("uppercase");
  } else if (psw.toUpperCase() !== psw && psw === psw.toLowerCase()) {
    console.log("lowercase");
  } else if (psw.toUpperCase() === psw && psw.toLowerCase() === psw) {
    console.log("oui");
  }

  if (numberverif(psw) === true) {
    checkbox.checked = true;
  }

  function numberverif(password) {
    return /[0-9]/.test(password);
  }
}
