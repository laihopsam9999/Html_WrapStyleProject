let signUpInterface = document.querySelector(".signup");
let signInInterface = document.querySelector(".signin");

let phone = document.getElementById("txtPhoneSignUp");
let email = document.getElementById("txtEmailSignUp");
let password = document.getElementById("txtPassSignUp");
let userAccountArr = [];

debutSignUp = (tt) => {
  if (tt === "signup") {
    signUpInterface.style.display = "block";
    signInInterface.style.display = "none";
  } else {
    signInInterface.style.display = "block";
    signUpInterface.style.display = "none";
  }
};

// START SIGN UP
signup = () => {
  let userAccount = new userAccounts(
    phone.value,
    phone.value,
    email.value,
    password.value
  );

  if (isEmailForm && isPhoneForm && isPassForm && isConfirmPassForm) {
    if (localStorage.getItem("UserAcounts") === null) {
      userAccountArr.push(userAccount);
      localStorage.setItem("UserAcounts", JSON.stringify(userAccountArr));
      alert("Thanks you account has been successfully created");
    } else {
      userAccountArr = JSON.parse(localStorage.getItem("UserAcounts"));
      let exist = userAccountArr.some((sp) => {
        return sp.id === userAccount.id;
      });
      // tồn tại hay không thì dùng some(()=>{})
      if (exist === true) {
        alert("Account has exist");
      }
      if (exist === false) {
        userAccountArr.push(userAccount);
        localStorage.setItem("UserAcounts", JSON.stringify(userAccountArr));
        alert("Thanks you account has been successfully created");
      }
    }
  } else {
    alert("Vui lòng điền chính xác và đầy đủ thông tin");
  }
};

// END SIGN UP

// START SIGN IN
signin = (txtPhone, txtPass) => {
  let txtPhoneSignIn = document.getElementById(txtPhone);
  let txtPassSignIn = document.getElementById(txtPass);
  if (isPhoneForm && isPassForm) {
    if (localStorage.getItem("UserAcounts") === null) {
      alert("tài khoản không tồn tại, vui lòng đăng ký");
    } else {
      userAccountArr = JSON.parse(localStorage.getItem("UserAcounts"));
      let exist = userAccountArr.some((sp) => {
        return (
          sp.id === txtPhoneSignIn.value && sp.password === txtPassSignIn.value
        );
      });

      if (exist === true) {
        alert("Đăng nhập thành công");
      }
      if (exist === false) {
        alert("tài khoản không tồn tại, vui lòng đăng ký .");
      }
    }
  } else {
    alert("vui lòng nhập lại thông tin");
  }
};
// END SIGN IN
