const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members === null || members === undefined) {
    return false;
  }

  let firstLetter;
  let teamName = "";

  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      firstLetter = members[i].trim().slice(0, 1);
      teamName = teamName.concat(firstLetter);
    }
  }

  const result = teamName.toUpperCase().split("").sort().join("");
  
  if (teamName === "") {
    return false;
  } else {
    return result;
  }
};
