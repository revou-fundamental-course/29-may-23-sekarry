//Prompt Nama
    var a = prompt("Please insert your name!");
    localStorage.setItem("SubmittedNameValue", a);

//Tarik value prompt
    var b = localStorage.getItem("SubmittedNameValue");
    document.getElementById("nama").innerText = b;

//Display value submit form
    function validateForm() {
        const fullName = document.forms["message-form"]["name-sender"].value;
        const Email = document.forms["message-form"]["email-sender"].value;
        const phoneNumber = document.forms["message-form"]["phone-number-sender"].value;
        const messageUs = document.forms["message-form"]["message-sender"].value;

        document.getElementById("sender-name").innerText = fullName;
        document.getElementById("sender-email").innerText = Email;
        document.getElementById("sender-phone-number").innerText = phoneNumber;
        document.getElementById("sender-message").innerText = messageUs;
        
        return false;
    }





