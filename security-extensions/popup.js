console.log("POPUP JS RUNNING");

document.getElementById("keySub").addEventListener("click", saveKey);

function saveKey() {
    const apiKey = document.getElementById('keyField').value;
  
    // Save API key to storage
    chrome.storage.sync.set({ 'apiKey': apiKey }, function() {
      console.log('API key saved:', apiKey);
    });
}