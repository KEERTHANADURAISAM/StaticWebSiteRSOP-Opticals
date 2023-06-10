var mainDiv=document.createElement("div");
mainDiv.setAttribute("class", "mainDiv");

var headDiv=document.createElement("div");
headDiv.setAttribute("class", "headDiv");

var headerh1=document.createElement("h1");
headerh1.setAttribute("class", "headerh1");
headerh1.innerText="Customer - Contact Form";
// ___________________________header________________________

var firstNameLabel=document.createElement("label");
firstNameLabel.setAttribute("class", "firstNameLabel");
firstNameLabel.innerText="First Name";


headDiv.appendChild(headerh1);
mainDiv.appendChild(headDiv);
document.body.append(mainDiv);


