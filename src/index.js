const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click",() => {
   if (menu.classList.contains("hidden")){
    menu.classList.remove("hidden");
   } else{
    menu.classList.add("hidden");
   }
} );

const pizza = document.querySelector("#pizza");
const men = document.querySelector("#men");

pizza.addEventListener("click",() => {
   if (men.classList.contains("hidden")){
    men.classList.remove("hidden");
   } else{
    men.classList.add("hidden");
   }
} );