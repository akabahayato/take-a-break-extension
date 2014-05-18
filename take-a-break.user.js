// ==UserScript==
// @name take a break
// @version 0.0.2
// ==/UserScript==

function timekeep(){
	var d = new Date();
	return d.getTime();
}

function annoy(){
	var z = timekeep();
	
	var b = window.confirm('Relax for 10 seconds.');
	
	if (timekeep() < z+10000)
		annoy();
	else
		var m = setTimeout(function(){annoy()},30000);

}

annoy();