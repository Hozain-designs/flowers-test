// JavaScript Document
var button = document.getElementById("button");
var first =document.getElementById("first"),
	second=document.getElementById("second");
button.onclick =function(){"use strict";
						   if (first.className==="first")
						   {first.className="second";}
						   else{first.className="first";} if (second.className==="second")
						   {second.className="first";}
						   else{second.className="second";}
						  };