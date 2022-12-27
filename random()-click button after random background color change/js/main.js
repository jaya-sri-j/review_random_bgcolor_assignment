var div=document.createElement("div");
document.body.appendChild(div); 
var inputElement=document.createElement("input");
inputElement.setAttribute("id","inputid");
div.appendChild(inputElement);
document.write("</br>");
var divElement=document.createElement("div");
div.appendChild(divElement);
var buttonElement=document.createElement("button");
buttonElement.innerHTML="TEST";
divElement.appendChild(buttonElement);
document.write("</br>");

var output=document.createElement("h1");
output.setAttribute("id","output");
div.appendChild(output);
buttonElement.onclick=function()
{
	document.getElementById("output").innerHTML="jayasri";
	document.getElementById("output").style.color=String(document.getElementById("inputid").value);
}




