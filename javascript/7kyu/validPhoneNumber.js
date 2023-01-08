function validPhoneNumber(phoneNumber) {
    //TODO: Return whether phoneNumber is in the proper form


    if (phoneNumber.length === 14 && phoneNumber[0] === "(" && phoneNumber[4] === ")" && phoneNumber[9] === "-" && phoneNumber[5] === " ") {
        return true;

    } else {
        return false;

    }
}