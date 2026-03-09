const params = new URLSearchParams(window.location.search)

const restaurant = params.get("r")

async function loadOrders(){

const res = await fetch("APPS_SCRIPT_URL?action=getOrders&restaurant="+restaurant)

const data = await res.json()

const orders = document.getElementById("orders")

orders.innerHTML=""

data.forEach(o=>{

orders.innerHTML += `

<div class="item">

Table ${o.table}<br>

${o.dish} x ${o.qty}

</div>

`

})

}

loadOrders()

setInterval(loadOrders,3000)