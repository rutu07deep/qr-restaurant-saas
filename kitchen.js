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