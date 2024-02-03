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

// below is google's way of modifying a webpage, study and apply

// `document.querySelector` may return null if the selector doesn't match anything.
if (sender) {
  const text = sender.textContent;
  /**
   * Regular expression to find all "words" in a string.
   *
   * Here, a "word" is a sequence of one or more non-whitespace characters in a row. We don't use the
   * regular expression character class "\w" to match against "word characters" because it only
   * matches against the Latin alphabet. Instead, we match against any sequence of characters that
   * *are not* a whitespace characters. See the below link for more information.
   *
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
   */
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement('p');
  // Use the same styling as the publish information in an sender's header
  badge.classList.add('color-secondary-text', 'type--caption');
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = sender.querySelector('h1');
  // Support for sender docs with date
  const date = sender.querySelector('time')?.parentNode;

  // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement
  (date ?? heading).insertAdjacentElement('afterend', badge);
}