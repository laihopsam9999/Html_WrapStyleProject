let isEmailForm, isPhoneForm, isPassForm, isConfirmPassForm;

// START REGEX PASSWORD
isPass = (txtObject, messageId, iconError, iconSuccess) => {
  let objectValue = document.getElementById(txtObject).value;
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  if (objectValue !== "") {
    if (re.test(objectValue) == false) {
      regexFail(
        txtObject,
        messageId,
        "Password phải bao gồm chữ hoa và số",
        iconError,
        iconSuccess
      );
      isPassForm = false;
    } else {
      regexSuccess(txtObject, messageId, " ", iconError, iconSuccess);
      isPassForm = true;
    }
  } else {
    regexFail(
      txtObject,
      messageId,
      "Mật khẩu không được bỏ trống ",
      iconError,
      iconSuccess
    );
    isPassForm = false;
  }
};
// END REGEX PASSWORD
// START REGEX CONFIRM PASSWORD
isConFirmPass = (
  txtObject,
  messageId,
  iconError,
  iconSuccess,
  txtObjectConfirm
) => {
  let objectValue = document.getElementById(txtObject).value;
  let objectValueConfirm = document.getElementById(txtObjectConfirm).value;
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  if (objectValue !== "") {
    if (re.test(objectValue) == false) {
      regexFail(
        txtObject,
        messageId,
        "Password phải bao gồm chữ hoa và số",
        iconError,
        iconSuccess
      );
      isConfirmPassForm = false;
    } else {
      if (objectValue === objectValueConfirm) {
        regexSuccess(txtObject, messageId, " ", iconError, iconSuccess);
        isConfirmPassForm = true;
      } else {
        regexFail(
          txtObject,
          messageId,
          "Mật khẩu xác nhận phải giống mật khẩu ",
          iconError,
          iconSuccess
        );
        isConfirmPassForm = false;
      }
    }
  } else {
    regexFail(
      txtObject,
      messageId,
      "Mật khẩu không được bỏ trống ",
      iconError,
      iconSuccess
    );
  }
};
// END REGEX CONFIRM PASSWORD
// START REGEX EMAIL
isEmail = (txtObject, messageId, iconError, iconSuccess) => {
  let objectValue = document.getElementById(txtObject).value;
  const re = /([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com/g;
  if (objectValue !== "") {
    if (re.test(objectValue) == false) {
      regexFail(
        txtObject,
        messageId,
        "Email của bạn không hợp lệ (...@gmail.com)",
        iconError,
        iconSuccess
      );
      isEmailForm = false;
    } else {
      regexSuccess(txtObject, messageId, " ", iconError, iconSuccess);
      isEmailForm = true;
    }
  } else {
    regexFail(
      txtObject,
      messageId,
      "Email của bạn không được bỏ trống ",
      iconError,
      iconSuccess
    );
    isEmailForm = false;
  }
};
// END REGEX EMAIL
// START REGEX PHONE
isPhoneVN = (txtObject, messageId, iconError, iconSuccess) => {
  let objectValue = document.getElementById(txtObject).value;
  var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  if (objectValue !== "") {
    if (vnf_regex.test(objectValue) == false) {
      regexFail(
        txtObject,
        messageId,
        "Số điện thoại của bạn không hợp lệ và phải có 10 số",
        iconError,
        iconSuccess
      );
      isPhoneForm = false;
    } else {
      regexSuccess(txtObject, messageId, " ", iconError, iconSuccess);
      isPhoneForm = true;
    }
  } else {
    regexFail(
      txtObject,
      messageId,
      "Số điện thoại của bạn không được bỏ trống ",
      iconError,
      iconSuccess
    );
    isPhoneForm = false;
  }
};
// END REGEX PHONE

// START REGEX SUCCESS
regexSuccess = (
  txtObject,
  messageId,
  messageContent,
  errorIcon,
  successIcon
) => {
  document.getElementById(messageId).innerHTML = messageContent;
  document.getElementById(errorIcon).style.display = "none";
  document.getElementById(successIcon).style.display = "block";
  document.getElementById(txtObject).style.border = "1px solid green";
};
// END REGEX SUCCESS

// START REGEX FAILED
regexFail = (txtObject, messageId, messageContent, errorIcon, successIcon) => {
  document.getElementById(messageId).innerHTML = messageContent;
  document.getElementById(errorIcon).style.display = "block";
  document.getElementById(successIcon).style.display = "none";
  document.getElementById(txtObject).style.border = "1px solid red";
};
// END REGEX FAILED

// START KHI NGƯỜI DÙNG CHỈNH SỬA
remove = (txtObject, messageId, messageContent, errorIcon, successIcon) => {
  document.getElementById(errorIcon).style.display = "none";
  document.getElementById(successIcon).style.display = "none";
  document.getElementById(messageId).innerHTML = messageContent;
  document.getElementById(txtObject).style.border = "0px solid green";
};

// END KHI NGƯỜI DÙNG CHỈNH SỬA
