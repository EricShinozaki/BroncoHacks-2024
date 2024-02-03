console.log("INJECTED INTO WEBPAGE");

//check for a change in URL
window.addEventListener('hashchange', function(){
    //make sure user is not in the inbox
    if(document.URL.length>40) {
        //grab HTML collections
        const senderHTML = document.getElementsByClassName('gD');
        const emailBodyHTML = document.getElementsByClassName('a3s aiL ');
        const emailSubjectHTML = document.getElementsByClassName('hP');

        //name
        var name = senderHTML[0].innerText;
        console.log(name);
        //email
        var unparsedEmail = senderHTML[0].outerHTML;
        var email = unparsedEmail.substring(7+unparsedEmail.indexOf('email="'),unparsedEmail.indexOf('"',7+unparsedEmail.indexOf('email="')));
        //console.log(unparsedEmail);
        console.log(email);
        //subject
        var subject = emailSubjectHTML[0].outerText;
        console.log(subject);
        //body
        var body = emailBodyHTML[0].innerText;
        console.log(body);

        
        let scanButton = document.createElement("button");
        scanButton.className = "scanButton";
        emailSubjectHTML[0].after(scanButton);
        scanButton.outerHTML = "<button onclick='scanButtonClicked()'>Scan</button>";

        
    }
});

function scanButtonClicked() {
    return null;
}