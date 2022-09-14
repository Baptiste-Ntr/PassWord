function Verification() {
  var checkboxchar = document.getElementById("settingscharacters-verification");
  var checkboxupper = document.getElementById("settingsupper-verification");
  var checkboxlower = document.getElementById("settingslower-verification");
  var checkboxnumber = document.getElementById("settingsnumbers-verification");
  var psw = document.getElementById("verificationtxt").value;

  lowerupper(psw);
  Checkboxcase(psw);
  pswlength(psw);
  number(psw);

  function pswlength(psw) {
    if (psw.length >= 7) {
      checkboxchar.checked = true;
    } else if (psw.length < 7) {
      checkboxchar.checked = false;
    }
  }

  function number(psw) {
    if (numberverif(psw) === true) {
      checkboxnumber.checked = true;
    } else if (numberverif(psw) !== true) {
      checkboxnumber.checked = false;
    }
  }

  function numberverif(password) {
    return /[0-9]/.test(password);
  }

  function lowerupper(password) {
    if (password.toUpperCase() === password && psw.toLowerCase() !== psw) {
      // console.log("oui");
      checkboxupper.checked = true;
    } else if (
      password.toUpperCase() !== password &&
      psw.toLowerCase() === psw
    ) {
      // console.log("non");
      checkboxlower.checked = true;
    } else if (
      password.toUpperCase() !== password &&
      psw.toLowerCase() !== psw
    ) {
      // console.log("ouaip");
      checkboxupper.checked = true;
      checkboxlower.checked = true;
    } else {
      checkboxupper.checked = false;
      checkboxlower.checked = false;
    }
  }

  function Checkboxcase(password) {
    console.log(password.toUpperCase());
    // if (checkboxupper.checked === true && password.toUppercase() !== password) {
    //   checkboxupper.checked = false;
    //   console.log("epfk");
    // }

    // if (checkboxlower.checked === true && password.toLowerCase() !== password) {
    //   checkboxlower.checked = false;
    //   console.log("ntm");
    // }
  }
}
