// select the input values
function getElementvalue(){
var firstName=document.getElementById("fname").value
var lastName=document.getElementById("lname").value
var email=document.getElementById("email").value
var male=document.getElementById("male").value
var female=document.getElementById("female").value
var country=document.getElementById("Albania").value
console.log(firstName,lastName,email,male,female,country);

// craete new row
var newRow =document.createElement('tr');
newRow.innerHTML =`
<tr>
<td><textarea id="fname"></textarea></td>
<td><textarea id="lname"></textarea></td>
<td><textarea id="email"></textarea></td>
<td><textarea id="phno"></textarea></td>
<td><textarea id="gender"></textarea></td>
<td><textarea id="country"></textarea></td>
<td><textarea id="msg"></textarea></td>
</tr>
`
// remove content of textareas
// document.getElementById("firstName").value="";
// document.getElementById("fname").value="";
// document.getElementById("email").value="";
// document.getElementById("phno").value="";
// document.getElementById("gender").value="";
// document.getElementById("country").value="";
// document.getElementById("msg").value="";

  // append a new row to the table
  document.getElementById('mytable').appendChild(newRow)

}