const params = new URLSearchParams(window.location.search)

const restaurant = params.get("r")
const table = params.get("t")

const menu = [
{ name:"Burger", price:100 },
{ name:"Pizza", price:150 },
{ name:"Pasta", price:120 }
]

const menuDiv = document.getElementById("menu")

menu.forEach(item => {

menuDiv.innerHTML += `
<div class="item">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<button onclick="order('${item.name}',${item.price})">

Order

</button>

</div>
`

})

function order(item,price){

fetch("APPS_SCRIPT_URL",{

method:"POST",

body:JSON.stringify({

restaurant:restaurant,

table:table,

dish:item,

qty:1,

price:price

})

})

alert("Order Sent")

}