function isBlank(inputField){
  if(inputField.type=="checkbox"){
	   if(inputField.checked) return false;
	return true;
  }
  if (inputField.type=="text"){
	   if(inputField.value.length == 0){
       return true;
     }
    }
  //Deleted blank field from html then...
  if(inputField.type == "textarea"){
    if(inputField.value == ""){
      return true;
    }
  }
    return false;
}

function makeRed(inputDiv){
  inputDiv.style.backgroundColor="#AA0000";
	inputDiv.parentNode.style.backgroundColor="#AA0000";
	inputDiv.parentNode.style.color="#FFFFFF";
}
function makeClean(inputDiv){
  inputDiv.style.backgroundColor = "white";
	inputDiv.parentNode.style.backgroundColor="#FFFFFF";
	inputDiv.parentNode.style.color="#000000";
}

function returnColor(inputDiv){
  inputDiv.onkeydown = function (e) {
    inputDiv.style.backgroundColor="white";
    inputDiv.parentNode.style.backgroundColor="#FFFFFF";
    inputDiv.parentNode.style.color="#000000";
  }
}

window.onload = function(){
    var mainForm = document.getElementById("mainForm");
    var requiredInputs = document.querySelectorAll(".required");
    for (var i=0; i < requiredInputs.length; i++){
	      requiredInputs[i].onfocus = function(){
  	    this.style.backgroundColor = "#EEEE00";
	    }

    }
    mainForm.onsubmit = function(e){
	     var requiredInputs = document.querySelectorAll(".required");
	     for (var i=0; i < requiredInputs.length; i++){
	        if(isBlank(requiredInputs[i])){
		          e.preventDefault();
              makeRed(requiredInputs[i]);
              returnColor(requiredInputs[i]);
	           }
	        else{
		          makeClean(requiredInputs[i]);
	           }
	        }
    }

    mainForm.onreset = function () {
      var requiredInputs = document.querySelectorAll(".required");
      for (var i=0; i < requiredInputs.length; i++){
          makeClean(requiredInputs[i]);
      }
    }

    }
