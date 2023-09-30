


var getul = document.getElementById('ul')

function sclick() {

    var a = document.getElementById('inpu')
    var li = document.createElement('li')
    var litext = document.createTextNode(a.value)
    li.appendChild(litext)
    getul.appendChild(li)
    a.value = " "

    var delBtn = document.createElement('button')
    var delBtnTxt = document.createTextNode('Delete')
    delBtn.appendChild(delBtnTxt)
    li.appendChild(delBtn)
    delBtn.setAttribute('onclick', 'del(this)')
    delBtn.setAttribute('class', 'btn btn-danger btnGaps')

    var editBtn = document.createElement('button')
    var editBtnTxt = document.createTextNode('Edit')
    editBtn.appendChild(editBtnTxt)
    li.appendChild(editBtn)
    editBtn.setAttribute('onclick', 'editFun(this)')
    editBtn.setAttribute('class', 'btn btn-info btnGaps')



}

function deleteAll() {

    getul.innerHTML = " "

}

function del(e) {

    e.parentNode.remove();

}
function editFun(e) {
    var editValue = prompt('Enter Edit Value', e.parentNode.firstChild.nodeValue)

    e.parentNode.firstChild.nodeValue = editValue

}
