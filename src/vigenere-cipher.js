const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error();
    const messageUp = message.toUpperCase();
    const keyUp = key.toUpperCase();
    let messageCode = [];
    let keyCode = [];
    let j = 0;
    for (let i = 0; i < messageUp.length; i++) {
      let letterCode = messageUp.charCodeAt(i);
      if (letterCode < 65 || letterCode > 90) {
        messageCode.push(letterCode);
        keyCode.push(letterCode);
      } else {
        messageCode.push(letterCode - 65);
        if (j < keyUp.length) {
          let keyLetterCode = keyUp.charCodeAt(j);
          if (keyLetterCode >= 65 && keyLetterCode <= 90) keyCode.push(keyLetterCode - 65);
          j++;
        } else {
          j = 0;
          let keyLetterCode = keyUp.charCodeAt(j);
          if (keyLetterCode >= 65 && keyLetterCode <= 90) keyCode.push(keyLetterCode - 65);
          j++;
        }
      }
    }
    let encryptMessage = "";
    const countLetter = 26;
    for (let i = 0; i < messageUp.length; i++) {
      let letter = messageUp.charCodeAt(i);
      if (letter >= 65 && letter <= 90) {
        let letterFromCode = String.fromCharCode((messageCode[i] + keyCode[i]) % countLetter + 65);
        encryptMessage += letterFromCode;
      } else {
        encryptMessage += String.fromCharCode(letter);
      }
    }
    return this.type === true ? encryptMessage : Array.from(encryptMessage).reverse().join("");
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error();
    const messageUp = message.toUpperCase();
    const keyUp = key.toUpperCase();
    let messageCode = [];
    let keyCode = [];
    let j = 0;
    for (let i = 0; i < messageUp.length; i++) {
      let letterCode = messageUp.charCodeAt(i);
      if (letterCode < 65 || letterCode > 90) {
        messageCode.push(letterCode);
        keyCode.push(letterCode);
      } else {
        messageCode.push(letterCode - 65);
        if (j < keyUp.length) {
          let keyLetterCode = keyUp.charCodeAt(j);
          if (keyLetterCode >= 65 && keyLetterCode <= 90) keyCode.push(keyLetterCode - 65);
          j++;
        } else {
          j = 0;
          let keyLetterCode = keyUp.charCodeAt(j);
          if (keyLetterCode >= 65 && keyLetterCode <= 90) keyCode.push(keyLetterCode - 65);
          j++;
        }
      }
    }
    let decryptMessage = "";
    const countLetter = 26;
    for (let i = 0; i < messageUp.length; i++) {
      let letter = messageUp.charCodeAt(i);
      if (letter >= 65 && letter <= 90) {
        let letterFromCode = String.fromCharCode((messageCode[i] + countLetter - keyCode[i]) % countLetter + 65);
        decryptMessage += letterFromCode;
      } else {
        decryptMessage += String.fromCharCode(letter);
      }
    }
    return this.type === true ? decryptMessage : Array.from(decryptMessage).reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
