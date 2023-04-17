var app = document.querySelector('.app')
var rows = app.querySelectorAll('.accordian')




for(var row of rows){
    row.onclick = onclickRow
}

function onclickRow(){
    this.classList.toggle('active')
}