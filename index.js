var input1 = document.getElementById('inputbox0');
var input2 = document.getElementById('inputbox1');
var addBtn = document.getElementById('add-btn');
var ul = document.getElementById('ul');

addBtn.onclick = function () {
    var input1 = input1.value.trim();
    var input2 = input2.value.trim();

    if(input1 !== "" &&  input2 !== ""){

        var tr = document.createElement('tr');
        var td = document.createElement('td');
        ul.appendChild(tr); 
    }
    else {
        alert('please enter values.')
    }

    // user entry values 
    var entry = document.createElement('td');
    var entrytxt = document.textContent()
    entry.className = "userEntry";
    entry.appendChild(entrytxt);
    tr.appendChild(entry);

    //delete items 
    let del = document.createElement('td');
    del.setAttribute("colspan", "20");
    del.className = 'del';
    del.classList.add('bx','bx-message-square-x');
    tr.appendChild(del);
    del.onclick = function () {
        del.parentElement.remove();
    }

    let edit = document.createElement('td');
    edit.className = 'edit';
    edit.classList.add('bx','bx-message-square-edit');
    tr.appendChild(edit);
    edit.onclick = function () {
        var p = prompt('Edit..');
        var newTxt = entry.parentElement.getElementsByClassName('userEntry')[0];
        newTxt.innerText = p;
    }
    inputBox.value ="";
}
 