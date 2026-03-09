function generate(){

const restaurant = document.getElementById("rid").value

const tables = document.getElementById("tables").value

const box = document.getElementById("qrs")

box.innerHTML=""

for(let i=1;i<=tables;i++){

const url=`menu.html?r=${restaurant}&t=${i}`

box.innerHTML+=`

<div>

Table ${i}<br>

<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(url)}">

</div>

`

}

}