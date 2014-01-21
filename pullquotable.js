// Readable version to work on:
javascript:
if (document.body.contains(pqCount))
    document.body.removeChild(pqCount);
else {
    var pqCount=document.createElement('div');
    pqCount.textContent = window.getSelection().toString().length;
    pqCount.id = 'pqCount';
    pqCount.style.cssText = 'position: fixed; background-color: #66FF66; padding: 8px; font-size: 16px; text-align: center;';
    document.body.insertBefore(pqCount, document.body.firstChild);
    document.onselectionchange = function() {
        document.getElementById('pqCount').textContent = window.getSelection().toString().length;
    };
}

// Without line breaks, for use in bookmarklet:
javascript:if(document.body.contains(pqCount))document.body.removeChild(pqCount);else{var pqCount=document.createElement('div');pqCount.textContent=window.getSelection().toString().length;pqCount.id='pqCount';pqCount.style.cssText='position:fixed;background-color:#66FF66;padding:8px;font-size:16px;text-align:center;';document.body.insertBefore(pqCount, document.body.firstChild); document.onselectionchange=function(){document.getElementById('pqCount').textContent = window.getSelection().toString().length;};}
