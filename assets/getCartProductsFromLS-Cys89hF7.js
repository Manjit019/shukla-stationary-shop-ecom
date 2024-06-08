(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d=` <header class="w-full bg-white flex justify-between place-items-center px-4 py-2 shadow-md fixed top-0   z-50">
<div class=" flex gap-1 place-items-center text-emerald-800">
  <i class="fa-solid fa-book"></i>
  <h2 class=" capitalize font-bold"> shukla Stationary</h2>
</div>
<nav>
  <ul class="md:flex mobile:hidden gap-3 text-sm  text-emerald-900 font-normal ">

    <li
      class="homeLink hover:bg-slate-200 hover:cursor-pointer rounded-md px-2 py-1  transition duration-200 ease-in-out">
      <a href="index.html">
        Home</a>
    </li>
    <li class=" hover:bg-slate-200 hover:cursor-pointer rounded-md px-2 py-1 transition duration-200 ease-in-out">
      <a href="about.html">
        About</a>
    </li>
    <li class=" hover:bg-slate-200 hover:cursor-pointer rounded-md px-2 py-1 transition duration-200 ease-in-out">
      <a href="products.html">
        Products</a>
    </li>
    <li class=" hover:bg-slate-200 hover:cursor-pointer rounded-md px-2 py-1 transition duration-200 ease-in-out">
      <a href="contactUs.html">
        Contact us</a>
    </li>
  </ul>

</nav>

<div class="cart flex place-items-center gap-5 cursor-pointer">
  <i class="fa-solid fa-magnifying-glass"></i>
  <a href="cart.html">
    <div class="bg-slate-600 hover:bg-slate-700 text-white px-3 py-2 rounded-lg">

      <i class="fa-solid fa-cart-shopping text-emerald-400"></i>
      <span id="cartValue">0</span>
    </div>
  </a>
</div>

</header>`,u=`<nav>
<ul class="w-full bg-white mobile:flex md:hidden justify-around  fixed bottom-0 py-2 z-50 border-t-2">
  <li class="hover:text-orange-600 flex flex-col">
    <a href="index.html">
      <div class=" text-center">
        <i class="fa-solid fa-house"></i>
        <p class="text-[8px]">Home</p>
      </div>
    </a>
  </li>
  <li class="hover:text-orange-600 flex flex-col">
    <a href="products.html">
      <div class=" text-center">
        <i class="fa-solid fa-compass"></i>
        <p class="text-[8px]">Explore</p>
      </div>
    </a>
  </li>
  <li class="hover:text-orange-600 flex flex-col">
    <a href="about.html">
      <div class=" text-center">
      <i class="fa-regular fa-id-badge"></i>
        <p class="text-[8px]">About Us</p>
      </div>
    </a>
  </li>
  <li class="hover:text-orange-600 flex flex-col">
    <a href="contactUs.html">
      <div class=" text-center">
        <i class="fa-solid fa-headset"></i>
        <p class="text-[8px]">Contact Us</p>
      </div>
    </a>
  </li>
  <li class="hover:text-orange-600 flex flex-col relative">
    <a href="cart.html">
      <div class=" text-center">
        <i class="fa-solid fa-cart-shopping"></i>
          <p class="text-[8px]">Cart</p>

          <span id="cartValue" class="bg-teal-400 text-black px-1 rounded-full text-[10px] absolute -top-1 "></span>
      </div>
    </a>
  </li>
</ul>
</nav>`,i=document.querySelector(".header-section");i.insertAdjacentHTML("afterbegin",d);i.insertAdjacentHTML("afterend",u);const l=document.querySelectorAll("nav ul")[0].querySelectorAll("li"),s=document.querySelectorAll("nav ul")[1].querySelectorAll("li");console.log(s);i.classList.contains("home")?(l[0].classList.add("text-orange-500"),s[0].classList.add("text-orange-500")):i.classList.contains("about")?(l[1].classList.add("text-orange-500"),s[2].classList.add("text-orange-500")):i.classList.contains("products")?(l[2].classList.add("text-orange-500"),s[1].classList.add("text-orange-500")):i.classList.contains("contactUs")?(l[3].classList.add("text-orange-500"),s[3].classList.add("text-orange-500")):s[4].classList.add("text-orange-500");const p=` <footer class="bg-neutral-700 text-white text-sm px-5 py-6 flex gap-2 justify-between md:flex-row mobile:flex-col">
<div>
  <div class=" flex gap-1 place-items-center text-emerald-300 ">
    <i class="fa-solid fa-book"></i>
    <h2 class=" capitalize font-bold"> shukla Stationary</h2>
  </div>
  <p class="text-[10px] capitalize my-2">welcome to shukla Stationary and book store located in langanj.</p>
  <div class="">
    <i class="fa-brands fa-cc-visa"></i>
    <i class="fa-brands fa-cc-mastercard"></i>
    <i class="fa-solid fa-credit-card"></i>
    <i class="fa-brands fa-cc-amazon-pay"></i>
    <i class="fa-brands fa-google-pay"></i>
  </div>
</div>
</div>
<div>
  <h2 class="font-semibold">SHOPPING</h2>
  <ul>
    <li class="text-[12px] font-light">Books</li>
    <li class="text-[12px] font-light">NoteBooks </li>
    <li class="text-[12px] font-light">Stationaries</li>
    <li class="text-[12px] font-light">Sales & Discount</li>
  </ul>
</div>
<div>
  <h2 class="font-semibold">EXPERIENCE</h2>
  <ul>
    <li class="text-[12px] font-light">Contact us</li>
    <li class="text-[12px] font-light">Payment method</li>
    <li class="text-[12px] font-light">Delivery</li>
    <li class="text-[12px] font-light">Return & Exchage policy</li>
  </ul>
</div>
<div class=""></div>
</footer>
<div
class="bg-neutral-700 text-slate-100 text-xs text-center  mb-10 md:mb-0  py-4 px-5 border-t-[1px] flex md:flex-row mobile:flex-col justify-between">
<h3>Copyright ©2024 - Shukla Stationary</h3>
<p class="mt-2">Design and Developed by <span class="text-emerald-400 ">Manjit</span> @coder'sSpace</p>
</div>`,m=document.querySelector(".footer-section");m.insertAdjacentHTML("afterbegin",p);const f=[{id:"001",name:"Reynolds 045 Carbure Pen Jar Ball Pen",category:"Writing Instruments",price:166,actualPrice:175,stock:100,image:"./Images/ball pen reynolds D fine pen.webp"},{id:"002",name:"DOMS Paiting Kit",category:"Art supplies",price:186,actualPrice:199,stock:50,image:"./Images/DOMS Paiting Kit.webp"},{id:"003",name:"OFIXO Sticky Notes 400 Sheets Regular, 5 Colors",category:"Paper Products",price:139,actualPrice:299,stock:75,image:"./Images/OFIXO Sticky Notes 400 Sheets Regular, 5 Colors.webp"},{id:"004",name:"Artline Paint Markers",category:"Writing Instruments",price:239,actualPrice:359,stock:100,image:"./Images/Artline Paint Markers.webp"},{id:"005",name:"STORITE 12 PCS Small Metal BINDER CLIP",category:"Office Supplies",price:198,actualPrice:599,stock:70,image:"./Images/STORITE 12 PCS Small Metal BINDER CLIP.webp"},{id:"006",name:"Classmate Pulse Book-size Notebook Unruled 180 Pages",category:"notebooks",price:74,actualPrice:80,stock:100,image:"./Images/Classmate Pulse Book-size Notebook Unruled 180 Pages.webp"},{id:"007",name:"VHD magic writing books for kids",category:"Writing Instruments",price:59,actualPrice:109,stock:70,image:"./Images/VHD magic writing books for kids.webp"},{id:"008",name:"DOMS Blue Kids Smart Kit Combo Bag ",category:"combo offer",price:499,actualPrice:599,stock:50,image:"./Images/DOMS Blue Kids Smart Kit Combo Bag.webp"}],b=[{id:"b001",name:"Lucent General Knowledge",category:"books",price:169,actualPrice:275,stock:120,image:"./Images/books/Lucent General Knowledge.webp"},{id:"b002",name:"BSEB Exam Target Objective Question And Answers ",category:"books",price:199,actualPrice:225,stock:130,image:"./Images/books/BSEB Exam Target Objective.webp"},{id:"b003",name:"BRAHMASTRA Complete Maths Multicolored Formula Book Second Edition BILINGUAL(Aditya Ranjan)",category:"books",price:196,actualPrice:300,stock:70,image:"./Images/books/BRAHMASTRA Complete Maths.webp"},{id:"b004",name:"NCERT Books (Hindi Medium) From Class 6-12th ",category:"books",price:1899,actualPrice:3700,stock:80,image:"./Images/books/NCERT Books.webp"},{id:"b005",name:"Oxford Current English Grammar",category:"books",price:139,actualPrice:205,stock:120,image:"./Images/books/Oxford Current English Grammar.webp"},{id:"b006",name:"Sampuran Bhagwat Gita New Edition",category:"books",price:279,actualPrice:675,stock:140,image:"./Images/books/Sampuran Bhagwat Gita New Edition.webp"}],g=a=>{document.querySelectorAll("#cartValue").forEach(r=>{r.textContent=a.length})},x=()=>{let a=localStorage.getItem("cartProducts");return a?(a=JSON.parse(a),g(a),a):[]};export{b,x as g,f as p,g as u};
