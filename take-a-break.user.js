// ==UserScript==
// @name take a f*#@ing break
// @version 1.0
// ==/UserScript==
var sec = "";
function timekeep(){
	var d = new Date();
	//a = d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
	sec = d.getTime();
	var x = setTimeout(function(){timekeep()},1000);
}

function getnewtime(){
	var d = new Date();
	return d.getTime();
}

function annoy(){
	var z = sec;
	
	var b = confirm('Take a 10 second break');
	if (getnewtime() < z+10000 && b === true)
		//console.log(z,getnewtime());
		annoy();
	else if (getnewtime() < z+10000 && b === false)
		//console.log(z,getnewtime());
		annoy();
	else
		var m = setTimeout(function(){annoy()},30000);
}
timekeep();
annoy();