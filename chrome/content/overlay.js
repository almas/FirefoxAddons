function toconvert(selectedtext)
{
var sourceareastr = "" + selectedtext;
var strlen = sourceareastr.length;
var str="";

//convert from win1251 to unicode
      for (i = 0; i < strlen;  i++) {
	var codestr = sourceareastr.charCodeAt(i);
	//alert(codestr);
	   switch(codestr) {
		case 184: codestr=1105;break; //eo
		case 168: codestr=1025;break; // capital EO
	
		case 175: codestr=1198; break; //capital UE
		case 191: codestr=1199; break; //ue
		
		case 170: codestr=1256; break; // capital OE
		case 186: codestr=1257; break; //oe
	   }
	   if (256>codestr && codestr>191) codestr=codestr+848;
	        switch(codestr) {
		case 1111: codestr=1199;break;   //u
		case 1031: codestr= 1198; break; //capital U
		
		case 1108: codestr=1257; break; //ou
		case 1028: codestr=1256; break; //capital OU
		}
           str=str+String.fromCharCode(codestr);
           
      } //end for   
      
   return str;
}

var dusalconverter = {
  /*onLoad: function() {
    // initialization code
    this.initialized = true;
    this.strings = document.getElementById("dusalconverter-strings");
  },*/
  getSelection: function() {
    var selection = window.gBrowser.contentWindow.getSelection();
    return selection;
  },
  onMenuItemCommand: function(e) {
	
	e = toconvert(dusalconverter.getSelection());
	
	var range = dusalconverter.getSelection().getRangeAt(0);
	range.deleteContents();
	range.insertNode(document.createTextNode(e));
	/*Old:
	 * window.open('chrome://dusalconverter/content/unicodePopup.html?txt=' + encodeURI(dusalconverter.getSelection()),'unicodePopup','width=550,height=350,left=150,top=100,menubar=no,location=no,resizable=no,scrollbars=yes,status=no');*/
  },
/*
  onToolbarButtonCommand: function(e) {
    // just reuse the function above.  you can change this, obviously!
    dusalconverter.onMenuItemCommand(e);
  }
  */
};

//window.addEventListener("load", dusalconverter.onLoad, false);
