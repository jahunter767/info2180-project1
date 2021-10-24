/* Add your JavaScript to this file */
"use strict";

window.onload = function(){
    let subBtn = document.getElementsByClassName("btn")[1];
    let msg = document.getElementsByClassName("message")[0];

    subBtn.addEventListener("click", (event) => {
        event.preventDefault();

        let alpha = "A-Za-z";
        let alphaNum = `${alpha}0-9`;
        let tld = `\\.[${alpha}][${alphaNum}]*`;
        let hostname = `[${alpha}][${alphaNum}\\-]*[${alphaNum}]*`;
        let username = `[${alpha}][${alphaNum}\\-\\.]*[${alphaNum}]*`;
        let emailRegExp = new RegExp(`^${username}@${hostname}${tld}$`);
        let email = document.getElementById("email").value.trim().match(emailRegExp);

        if (email != null){
            msg.textContent = `Thank you! Your email address ${email} ` +
                `has been added to our mailing list!`;
        }else{
            msg.textContent = "Please enter a valid email address.";
        } // End-if
    }); // End-subBtn.eventListener
}; // End-window.onload
