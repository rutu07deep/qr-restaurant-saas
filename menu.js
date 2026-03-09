<<<<<<< HEAD
// API URL (Apps Script)
const API_URL = "https://script.google.com/macros/s/AKfycbweZSpENZBqf00yKHtJi2wOdy5sCDV4j8GzNOCDC_QgUHk3mECZoonXj_GlkPldMpRH/exec";

// URL parameters
const params = new URLSearchParams(window.location.search);

const restaurant = params.get("r");
const table = params.get("t");

// menu items
const menu = [
 {name:"Burger", price:100},
 {name:"Pizza", price:150},
 {name:"Pasta", price:120}
];

// menu div
const menuDiv = document.getElementById("menu"); 

// render menu
menu.forEach(item => {

menuDiv.innerHTML += `
<div class="item">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<button onclick="order('${item.name}',${item.price})">
Order
</button>

</div>
`;

});


// order function
function order(item,price){

fetch(API_URL,{

method:"POST",

body:JSON.stringify({

restaurant:restaurant,
table:table,
dish:item,
qty:1,
price:price

})

})

.then(res=>res.text())

.then(data=>{

alert("Order Placed");

})

.catch(err=>{

alert("Error sending order");

});

=======
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

>>>>>>> cf84f41c87b23dd3041be5859c7c0b45d0f89bb3
}