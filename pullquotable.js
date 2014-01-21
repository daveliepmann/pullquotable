// Readable version to work on:
javascript:if (document.body.contains(counter140)) document.body.removeChild(counter);
else {var counter140=document.createElement("div");
      counter140.textContent = window.getSelection().toString().length;
      counter140.id = "counter140";
      counter140.style.position = "fixed";
      counter140.style.backgroundColor = "#66FF66"; 
      counter140.style.padding = "8px";
      counter140.style.fontSize = "16px";
      counter140.style.textAlign = "center";
      document.body.insertBefore(counter140, document.body.firstChild);document.onselectionchange = function() { document.getElementById("counter140").textContent = window.getSelection().toString().length; };}

// Shortened, no-line-break version to bookmark:
javascript:if (document.body.contains(counter140)) document.body.removeChild(counter140);else {var counter140=document.createElement("div");counter140.textContent = window.getSelection().toString().length;counter140.id = "counter140";counter140.style.position = "fixed";counter140.style.backgroundColor = "#66FF66"; counter140.style.padding = "8px"; counter140.style.fontSize = "16px";counter140.style.textAlign = "center";document.body.insertBefore(counter140, document.body.firstChild);document.onselectionchange = function() { document.getElementById("counter140").textContent = window.getSelection().toString().length; };}
