var inputBox = document.getElementById('input-box');
var addBtn = document.getElementById('addBtn');
var ul = document.getElementById('tasks');

addBtn.onclick = function () {
  if (inputBox.value !== "") {
    var li = document.createElement("li");
    ul.appendChild(li);
  }
  else {
    alert("List item cannot be empty");
  }

  var entry = document.createElement("div");
  var entryText = document.createTextNode(inputBox.value);
  entry.className = "userEntry";
  entry.appendChild(entryText);
  li.appendChild(entry);

  var div = document.createElement('div');
  li.appendChild(div);

  var close = document.createElement("i");
  close.classList.add('bx', 'bx-message-square-x');
  div.appendChild(close);
  close.onclick = function () {
    this.parentElement.parentElement.style.display = "none";
    swal({
      icon: 'success',
      text: 'Successfully Deleted',
      button: 'OK',
      closeOnClickOutside: false,
    });
  }

  var edit = document.createElement("i");
  edit.classList.add('bx', 'bx-message-square-edit');
  div.appendChild(edit);
  edit.onclick = function () {
    var p = prompt('Enter a list.')

    if (p === "") {
      swal("Empty Input given..",
        {
        icon:'warning',
        dangerMode: true,
        buttons: true,
        closeOnClickOutside: false,
      });
    }
    else if (p === " "){
      swal("Empty Space is not allowed..",
        {
          icon: 'info',
          text:'Enter a name of your task "space is not allowed here." ',
          dangerMode: true,
          buttons: true,
          closeOnClickOutside: false,
        });
    }
    else {
      swal({
        icon: 'success',
        text: 'Successfully Edited',
        button: 'OK',
        closeOnClickOutside: false,
      });
      var entry = this.parentElement.parentElement.getElementsByClassName("userEntry")[0]; // get sibling userEntry element
      entry.innerText = p;
    }
  }


  inputBox.value = "";
}