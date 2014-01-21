pullquotable
============

Is this text selection short enough to pull-quote?

Why?
-
I like to tweet links along with a hopefully-interesting pull quote. Frustrated by doing this without knowing *a priori* if the text I'd like to quote is short enough, I built `pullquotable` to tell me how many characters are in the text I'm selecting.

Usage
-
[pullquotable?](javascript:if (document.body.contains(counter140)) document.body.removeChild(counter140);else {var counter140=document.createElement("div");counter140.textContent = window.getSelection().toString().length;counter140.id = "counter140";counter140.style.position = "fixed";counter140.style.backgroundColor = "#66FF66"; counter140.style.padding = "8px"; counter140.style.fontSize = "16px";counter140.style.textAlign = "center";document.body.insertBefore(counter140, document.body.firstChild);document.onselectionchange = function() { document.getElementById("counter140").textContent = window.getSelection().toString().length; };})

Manually: put the javascript into a bookmark. Put that bookmark onto your bookmarks toolbar. Click the bookmark once to toggle `pullquotable` on. Click the bookmark again to toggle `pullquotable` off.

You can customize `pullquotable` to any color you like, as long as it's green, or you modify the javascript yourself :)

**Nota Bene**: Twitter's URL shortener [seems to take up 22 (23 for https) characters](http://support.conversocial.com/entries/23471033-How-many-characters-do-URLs-use-on-Twitter-), making **117** the magic number to come in under, not 140. 
