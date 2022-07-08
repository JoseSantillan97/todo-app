var tareas = [];

var button = document.getElementById("button"),
  list = document.getElementById("list"),
  orderList = document.getElementById("order-list"),
  li = document.getElementById("li"),
  input = document.getElementById("input"),
  containerInputs = document.getElementById("containerInputs");

function addTask() {
  var nuevaTarea = tareas.push(input.value);

  var newElement = document.createElement("li");
  var valor = document.createTextNode(input.value);
  newElement.appendChild(valor);
  newElement.setAttribute("class", "li");
  orderList.insertBefore(newElement, orderList.lastChild);
}

function validaInput() {
  if (input.value == "") { // Aquí hay un bug, tal ves falte una validación más o modificar la que ya hay
    var errorTxt = document.createTextNode("El input no puede estar vacío");
    var errorMsg = document.createElement("p");
    errorMsg.appendChild(errorTxt);
    errorMsg.setAttribute("class", "error");
    containerInputs.insertBefore(errorMsg, button);

    if (containerInputs.childElementCount > 2) {
      setTimeout(eliminaMsg, 2000);
      function eliminaMsg(){
        containerInputs.removeChild(errorMsg);
      }
    }
  } else {
    button.addEventListener("click", addTask, false);
  }
}
input.addEventListener("blur", validaInput);

function deleteTask(e){
  orderList.removeChild(e.target);
}

orderList.addEventListener("click", deleteTask);