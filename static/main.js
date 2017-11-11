/**
 * Created by Rushi on 11/10/17.
 */

var myVar = setInterval(function(){ myTimer() }, 1000);
var i=0;
function myTimer() {
    i=i%360+1;
    document.getElementById("demo").innerHTML = i;
}