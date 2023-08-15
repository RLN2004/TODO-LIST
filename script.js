function isEmptyOrSpaces(str){
	if (str === null || str.match(/^\s*$/) !== null) {
    	return false;
    }
    else{
    	return true;
    }
}

function addtask() {
	var tsk = document.getElementById('task').value;
	var tsklist = document.getElementById('tasklist');

	if (isEmptyOrSpaces(tsk)) {
		const newtask = document.createElement("div");
		const ntask = document.createTextNode(tsk);
		newtask.appendChild(ntask);
		tsklist.appendChild(newtask);
		newtask.classList.add("task");
	}
	else{
		alert("!..ENTER SOMTHING..!")
	}

	document.getElementById('task').value="";
}

function deletetask() {
	
}