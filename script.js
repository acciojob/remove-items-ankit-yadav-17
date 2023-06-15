//your JS code here. If required.

function selected(){
	let select = document.getElementById("colorSelect")
	var selectedIndex = select.selectedIndex 
	select.options[selectedIndex].remove();
}