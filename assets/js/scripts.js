function setColor(element, color) {
    element.style.backgroundColor = color;
}


var elems = document.getElementsByClassName("butn");
for ( let i = 0; i < elems.length; ++i) {
//     console.log(typeof(elems[i].innerHTML));
// console.log(typeof("shop"));
    console.log(elems[i].innerHTML);
    if (elems[i].innerText == "shop") {
      setColor(elems[i], "lightcoral");
    }
    else if (elems[i].innerText == "personal") {
        setColor(elems[i], "yellow");
      }
    else if (elems[i].innerText == "work") {
    setColor(elems[i], "lightblue");
    }
    else if (elems[i].innerText == "school") {
        setColor(elems[i], 'lightgreen');
      }
    else{
        setColor(elems[i],'burlywood');
    }
}


// script for checking if atleast one checkbox is ticked

function valthisform() {
    var checkboxs = document.getElementsByName("checkbox[]");
    var okay = false;
    for (var i = 0, l = checkboxs.length; i < l; i++) {
        if (checkboxs[i].checked) {
            okay = true;
            break;
        }
    }
    if (okay)
        // alert("Thank you for checking a checkbox");
        return true;
    else {
        alert("Please check a checkbox");
        return false;
    }

}

