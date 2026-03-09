<<<<<<< HEAD
const API_URL="https://rutu07deep.github.io/qr-restaurant-saas/";

const params = new URLSearchParams(window.location.search);

const restaurant = params.get("r");

async function loadOrders(){

const res = await fetch(API_URL+"?restaurant="+restaurant);

const orders = await res.json();

const box=document.getElementById("orders");

box.innerHTML="";

orders.forEach(o=>{

box.innerHTML+=`
<div class="item">
Table ${o.table}
<br>
${o.dish} x ${o.qty}
</div>
`;

});

}

setInterval(loadOrders,2000);
=======
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
>>>>>>> cf84f41c87b23dd3041be5859c7c0b45d0f89bb3
