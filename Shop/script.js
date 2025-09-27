const loader = document.querySelector(".loaderBlock");
const global = document.querySelector(".Global");
const box = document.querySelectorAll(".box");
const navItems2 = document.querySelector("#navItems2");
const homePage = document.querySelector("#homePage");
const headerWrapper = document.querySelector("#headerWrapper");
const shoppingCart = document.getElementById("shoppingCart");

// Loader


window.addEventListener("DOMContentLoaded", () => {
  loader.style.display = "none";
  global.style.opacity = "1";
});

// reloader
window.addEventListener("beforeunload", () => {
  window.history.scrollRestoration = "manual";
  window.scrollTo(0, 0);
});

// Intersection

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.25
  }
);

box.forEach((entry) => {
  observer.observe(entry);
});

// Nav Scroll
// let lastScrollY = window.scrollY;
// window.addEventListener("scroll", () => {
//   if (lastScrollY < window.scrollY) {
//     headerWrapper.style.top = "-100%";
//   } else {
//     headerWrapper.style.top = "0px";
//     headerWrapper.style.backgroundColor = "white";
//   }
//   lastScrollY = scrollY;
// });

// Nav2 Show

document.NavMenu = () => {
  const currentDisplay = window.getComputedStyle(navItems2).display;

  if (currentDisplay === "none") {
    navItems2.style.display = "flex";
  } else {
    navItems2.style.display = "none";
  }
};


// Blocks for html

const supplementsBlock = document.getElementById("supplementsBlock");
const accessoriesBlock = document.getElementById("accessoriesBlock");
const equipmentsBlock = document.getElementById("equipmentsBlock");

// Data Storage

//Supplements Block

const SupplementsCart = [{
    id: 1,
    img: "./Assets/Supplements/Creatine.webp",
    name: "Supplements",
    price: 539,
    description: "Creatine Monohydrate",
    quantity: 1
  },
  {
    id: 2,
    img: "./Assets/Supplements/Creatine orange.webp",
    name: "Supplements",
    price: 574,
    description: "Carnitine Energy Drink",
    quantity: 1
  },
  {
    id: 3,
    img: "./Assets/Supplements/Electrolytes.webp",
    name: "Supplements",
    price: 735,
    description: "MuscleBlaze BCAA Pro Powder",
    quantity: 1
  },
  {
    id: 4,
    img: "./Assets/Supplements/Multi vitamin.webp",
    name: "Supplements",
    price: 529,
    description: "MB- vite Daily Multi vitamin",
    quantity: 1
  },
  {
    id: 5,
    img: "./Assets/Supplements/Omega Oil.webp",
    name: "Supplements",
    description: "Omega 3 Fish Oil",
    price: 699,
    quantity: 1
  },
  {
    id: 6,
    img: "./Assets/Supplements/Pre workout powder.webp",
    name: "Supplements",
    description: "Pre-Workout Powder pack",
    price: 799,
    quantity: 1
  },
  {
    id: 7,
    img: "./Assets/Supplements/Protein powder.webp",
    name: "Supplements",
    description: "Nutririon Powder",
    price: 1599,
    quantity: 1
  },
  {
    id: 8,
    img: "./Assets/Supplements/Pre Workouts.webp",
    name: "Supplements",
    description: "Nutririon Pre-Workout Powder",
    price: 1299,
    quantity: 1
  },
];


// Supplements UI

SupplementsCart.forEach((item, index) => {
  supplementsBlock.innerHTML += `
  <div class="col-lg-3 mb-2 productColumn">
   <div class="productWrapper d-flex align-items-start justify-content-between">
      <div class="wrapper border w-100">
          <div class="ProductImg d-flex align-items-center justify-content-center">
              <img src="${item.img}" class="img-fluid" alt="">
          </div>
          <p class="h5 ps-3">${item.description}</p>
          <p class="h5 ps-3"><sup>₹</sup>${item.price}</p>
                    <div class = "icons d-flex align-items-center justify-content-center w-100">
          <button class="m-2 rounded-2 p-1 bg-primary text-white border-1" onclick = "supplementscart(${index})">Add To Cart</button>
          </div>
      </div>
   </div>
</div>`;
});



// Supplements Cart adder

window.supplementscart = (index) => {
  let noItemMsg = document.getElementById("noItemMsg")
  noItemMsg.style.display = "none";
  cartAdd();
  myCart.innerHTML += `
                  <div class="row w-100 py-2">
                    <div class="col-2 d-flex align-items-center justify-content-center">
                        <img src="${SupplementsCart[index].img}" alt="" class="img-fluid" style="max-height:60px;">
                    </div>
                    <div class="col-10 h-50">
                        <p class="proDescription">${SupplementsCart[index].description}</p>
                        <p class="proPrice"><sup>₹</sup>${SupplementsCart[index].price}</p>
                        <div class="increment d-flex align-items-center justify-content-around">
                            <button class="px-2 rounded-pill bg-primary text-white" onclick = "increment(${SupplementsCart[index].id})">+</button><p id = "Count-${SupplementsCart[index].id}">${SupplementsCart[index].quantity}</p><button class="px-2 rounded-pill bg-danger text-white" onclick = "decrement(${SupplementsCart[index].id})">-</button>
                        </div>
                    </div>
                </div>`

  priceArray.push({
    id: SupplementsCart[index].id,
    price: SupplementsCart[index].price,
    quantity: 1
  })
  totalPriceCal()
}


// Equipments Block

const EquipmentsCart = [{
    id: 9,
    img: "./Assets/Equipments/Back press.webp",
    price: 17499,
    type: "Equipments",
    description: "Multiple Muscle Workout",
    quantity: 1
  },
  {
    id: 10,
    img: "./Assets/Equipments/Bench press.webp",
    price: 4499,
    type: "Equipments",
    description: "Adjustable Bench Press",
    quantity: 1
  },
  {
    id: 11,
    img: "./Assets/Equipments/Cycle.webp",
    price: 7499,
    type: "Equipments",
    description: "Exercise Bike",
    quantity: 1
  },
  {
    id: 12,
    img: "./Assets/Equipments/Dumbell set.webp",
    price: 1550,
    type: "Equipments",
    description: "Dumbells Gym set",
    quantity: 1
  },
  {
    id: 13,
    img: "./Assets/Equipments/Dumbell.webp",
    price: 999,
    type: "Equipments",
    description: "Dumbbells",
    quantity: 1
  },
  {
    id: 14,
    img: "./Assets/Equipments/Gripper.webp",
    price: 199,
    type: "Equipments",
    description: "Adjustable Hand-Gripper",
    quantity: 1
  },
  {
    id: 15,
    img: "./Assets/Equipments/Gym kit.webp",
    price: 1499,
    type: "Equipments",
    description: "Home Gym Set",
    quantity: 1
  },
  {
    id: 16,
    img: "./Assets/Equipments/Roller.webp",
    price: 200,
    type: "Equipments",
    description: "ABS Roller",
    quantity: 1
  },

]
EquipmentsCart.forEach((item, index) => {
  equipmentsBlock.innerHTML += `
  <div class="col-lg-3 mb-2 productColumn">
   <div class="productWrapper d-flex align-items-center justify-content-between">
      <div class="wrapper border w-100">
          <div class="ProductImg d-flex align-items-center justify-content-center">
              <img src="${item.img}" class="img-fluid" alt="">
          </div>
          <p class="h5 ps-3">${item.description}</p>
          <p class="h5 ps-3"><sup>₹</sup>${item.price}</p>
                    <div class = "icons d-flex align-items-center justify-content-center w-100">
          <button class="m-2 rounded-2 p-1 bg-primary text-white border-1" onclick = "equipmentscart(${index})">Add To Cart</button>
          </div>
      </div>
   </div>
  </div>

    `;
});

window.equipmentscart = (index) => {
  let noItemMsg = document.getElementById("noItemMsg")
  noItemMsg.style.display = "none";
  cartAdd();
  myCart.innerHTML += `
                  <div class="row w-100 py-2">
                    <div class="col-2 d-flex align-items-center justify-content-center">
                        <img src="${EquipmentsCart[index].img}" alt="" class="img-fluid" style="max-height:60px;">
                    </div>
                    <div class="col-10 h-25">
                        <p class="proDescription">${EquipmentsCart[index].description}</p>
                        <p class="proPrice"><sup>₹</sup>${EquipmentsCart[index].price}</p>
                        <div class="increment d-flex align-items-center justify-content-around">
                            <button class="px-2 rounded-pill bg-primary text-white" onclick = "increment(${EquipmentsCart[index].id})">+</button><p id = "Count-${EquipmentsCart[index].id}">${EquipmentsCart[index].quantity}</p><button class="px-2 rounded-pill bg-danger text-white" onclick = "decrement(${EquipmentsCart[index].id})">-</button>
                        </div>
                    </div>
                </div>

`
  priceArray.push({
    id: EquipmentsCart[index].id,
    price: EquipmentsCart[index].price,
    quantity: 1
  })
  totalPriceCal()

}




// Accessories Block Data Storage
const AccessoriesCart = [{
    id: 17,
    type: "Accessories",
    img: "./Assets/Accessories/Bag.webp",
    description: "Basic Polyster Bag",
    price: 399,
    quantity: 1,
    dub: false
  },
  {
    id: 18,
    type: "Accessories",
    img: "./Assets/Accessories/Gymkit2.webp",
    description: "Gym Bag Kit",
    price: 1599,
    quantity: 1,
    dub: false
  },
  {
    id: 19,
    type: "Accessories",
    img: "./Assets/Accessories/Grips.webp",
    description: "Weight Lifiting Grips",
    price: 599,
    quantity: 1,
    dub: false
  },
  {
    id: 20,
    type: "Accessories",
    img: "./Assets/Accessories/AnkelBands.webp",
    description: "Ankle Bands",
    price: 289,
    quantity: 1,
    dub: false
  },
  {
    id: 21,
    type: "Accessories",
    img: "./Assets/Accessories/Kit2.webp",
    description: "Gym Bag Combo",
    price: 785,
    quantity: 1,
    dub: false
  },
  {
    id: 22,
    type: "Accessories",
    img: "./Assets/Accessories/Belt.webp",
    description: "Weight Lifting Belts",
    price: 2455,
    quantity: 1,
    dub: false
  },
  {
    id: 23,
    type: "Accessories",
    img: "./Assets/Accessories/Knee Caps.webp",
    description: "Knee Caps",
    price: 299,
    quantity: 1,
    dub: false
  },
  {
    id: 24,
    type: "Accessories",
    img: "./Assets/Accessories/WristBand3.webp",
    description: "Weight Lifing Gloves",
    price: 299,
    quantity: 1,
    dub: false
  },
  {
    id: 25,
    type: "Accessories",
    img: "./Assets/Accessories/Jumping ropes.webp",
    description: "Skipping Ropes",
    price: 299,
    quantity: 1,
    dub: false
  },
];


// Accessories Block
AccessoriesCart.forEach((item, index) => {
  accessoriesBlock.innerHTML += `
<div class="col-lg-3 mb-2 productColumn">
   <div class="productWrapper d-flex align-items-center justify-content-between">
      <div class="wrapper border w-100">
          <div class="ProductImg d-flex align-items-center justify-content-center">
              <img src="${item.img}" class="img-fluid p-2" alt="">
          </div>
          <p class="h5 ps-3">${item.description}</p>
          <p class="h5 ps-3"><sup>₹</sup>${item.price}</p>
          <div class = "icons d-flex align-items-center justify-content-center w-100">
          <button class="m-2 rounded-2 p-1 bg-primary text-white border-1" onclick = "accessoriescart(${index})">Add To Cart</button>
          </div>
      </div>
   </div>
</div>`;
});


// Addcart-icon
let a = 0;

function cartAdd() {
  const cartNum = document.getElementById("cartNum")
  cartNum.innerText = ++a;
}

function cartMinus() {
  if (a < 1) {
    return
  }
  const cartNum = document.getElementById("cartNum")
  cartNum.innerText = --a;
}

let myCart = document.getElementById("myCart")

// Products

// Price cal
let totalPrice = document.getElementById("totalPrice")
let priceArray = []


// total price calculation
function totalPriceCal() {
  let tot = priceArray.reduce((acc, ele) => {
    return acc + (ele.price * ele.quantity);
  }, 0);

  totalPrice.innerHTML = tot;
}


// For Accessories Cart adder
window.accessoriescart = (index) => {

  let noItemMsg = document.getElementById("noItemMsg")
  noItemMsg.style.display = "none";

  myCart.innerHTML += `
                  <div class="row py-2 w-100" id=productShow${AccessoriesCart[index].id}>
<div class="col-2 d-flex align-items-center justify-content-center">
    <img src="${AccessoriesCart[index].img}" alt="" class="img-fluid" style="max-height:60px;">
</div>

                    <div class="col-10 h-25">
                        <p class="proDescription">${AccessoriesCart[index].description}</p>
                        <p class="proPrice"><sup>₹</sup>${AccessoriesCart[index].price}</p>
                        <div class="increment d-flex align-items-center justify-content-around">
                            <button class="px-2 rounded-pill bg-primary text-white" onclick = "increment(${AccessoriesCart[index].id})">+</button><p id = "Count-${AccessoriesCart[index].id}">${AccessoriesCart[index].quantity}</p><button class="px-2 rounded-pill bg-danger text-white" onclick = "decrement(${AccessoriesCart[index].id})">-</button>
                        </div>
                            <!-- <button class="px-2 rounded-pill" onclick = "itemDelete(${AccessoriesCart[index].id})">Remove Item</button> -->
                    </div>
                </div>`

  // Adding 1 in icon cart
  cartAdd();

  // Setting dub for not dub
  priceArray.push({
    id: AccessoriesCart[index].id,
    price: AccessoriesCart[index].price,
    quantity: 1
  })
  // Price Calculation
  totalPriceCal()
}



window.itemDelete = (id) => {
  cartMinus()
  let cartShow = document.querySelectorAll(`#productShow${id}`)
  let item = priceArray.find(p => p.id === id)

  let index = priceArray.indexOf(item)
  priceArray.splice(index, 1)
  decrement(id)
}


// Increment Function
window.increment = (id) => {
  let item = priceArray.find(p => p.id === id)
  if (item) {
    item.quantity++;
    document.getElementById(`Count-${id}`).innerHTML = item.quantity;
  }
  totalPriceCal();
}
let productShow = document.getElementById("productShow");

// Decrement function
window.decrement = (id) => {
  let item = priceArray.find(p => p.id === id)
  if (item && item.quantity > 1) {
    item.quantity--;
    document.getElementById(`Count-${id}`).innerHTML = item.quantity;
  } else {

  }
  totalPriceCal()
}



//Search

const searchInput = document.getElementById("searchInput");
let productColumn = document.querySelectorAll(".productColumn");
const productHolder = document.querySelector(".productHolder")


// No product Para
let noProductmsg = document.createElement("p")
noProductmsg.innerText = "There Is no Item";
noProductmsg.classList.add("noproducts", "text-center", "h4", "pt-5")
noProductmsg.style.display = "none";
productHolder.appendChild(noProductmsg)

let headText = document.querySelectorAll(".headText")
headText.forEach(item => item.style.display = "block")


window.Search = () => {
  let found = false;

  const filterItem = searchInput.value.toLocaleLowerCase();
  productColumn.forEach((col => {
    const text = col.innerText.toLocaleLowerCase();


    if (text.includes(filterItem)) {
      col.style.display = "";
      found = true;
    } else {
      col.style.display = "none";
      headText.forEach(item => item.style.display = "none")
    }
  }))


  if (found) {
    noProductmsg.style.display = "none"
    headText.forEach(item => item.style.display = "block")
  } else {
    noProductmsg.style.display = "block"
  }
  //  For Empty Search
  if (filterItem == "" || filterItem == " ") {
    category("all")
    headText.forEach(item => item.style.display = "block")
  }
}

const searchbtn = document.getElementById("searchbtn");


// products Category

window.category = (tag) => {
  let productId = document.querySelectorAll(".Supplements, .Equipments, .Accessories");
  productId.forEach((items) => {
    if ((items.getAttribute("id").toLocaleLowerCase()).includes(tag.toLocaleLowerCase()) || tag == "all") {
      items.style.display = ""
    } else {
      items.style.display = "none"
    }
  })
}

// CartAdder

const cartAdder = document.getElementById("cartAdder");
const productWrapper = document.getElementById("productWrapper")

shoppingCart.addEventListener("click", () => {
  productWrapper.classList.toggle("opacityShow")
  // productWrapper.style.pointerEvents = "none"
  cartAdder.classList.toggle("active");

});

