
<script type="text/javascript">
function promptMessage() {

//display the prompt box to get the value from the user
var gavinAwesome = prompt("How awesome do you think Gavin is?", "");

//if the user enters a value display a message in an alert box
//with the value that the user entered
if (gavinAwesome != null){

alert("You think Gavin is " + gavinAwesome);

}

//otherwise display a message informing the user that no value was entered
else {

alert("You did not tell Gavin how awesome he is");

}
}
</script>
