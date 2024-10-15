(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const a=[{id:1,icon:"/images/temp/categories/woman.svg",name:"Для женщин",announcementCount:4142,subcategoriesCount:12,subcategories:[{id:11,slug:"smartphones",name:"Смартфоны"},{id:12,slug:"accessories",name:"Аксессуары для смартфонов и телефонов"},{id:13,slug:"smart-watches",name:"Смарт-часы"}]},{id:2,icon:"/images/temp/categories/cosmetics.svg",name:"Красота",announcementCount:4142,subcategoriesCount:12},{id:3,icon:"fridge",icon:"/images/temp/categories/fridge.svg",name:"Бытовая техника",announcementCount:4142,subcategoriesCount:12,subcategories:[{id:31,slug:"smartphones",name:"Фитнес браслеты"},{id:32,slug:"accessories",name:"Ремешки для часов и смарт-часов"},{id:33,slug:"smart-watches",name:"Запчасти для смартфонов"}]},{id:4,icon:"/images/temp/categories/man.svg",name:"Для мужчин",announcementCount:4142,subcategoriesCount:12},{id:4,icon:"/images/temp/categories/man.svg",name:"Для мужчин",announcementCount:4142,subcategoriesCount:12},{id:4,icon:"/images/temp/categories/man.svg",name:"Для мужчин",announcementCount:4142,subcategoriesCount:12},{id:4,icon:"/images/temp/categories/man.svg",name:"Для мужчин",announcementCount:4142,subcategoriesCount:12}],g=(e,t="block")=>{t&&e.classList.remove(t),e.classList.add("hidden")},u=(e,t="block")=>{e.classList.remove("hidden"),t&&e.classList.add(t)},m=(e,t)=>`
    <div
      class="category transition-all duration-200 rounded-xl border border-grey-4 hover:border-blue flex items-center gap-3 shadow-category py-[22px] pr-3 bg-white cursor-pointer group"
      data-index="${t}"
      onclick="toggleDropdown(${t})"
    >
      <div
        class="category__img border boder-gray-4 shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] rounded-xl p-4 -ml-8 bg-white transition-all duration-200 group-hover:bg-blue group-hover:border-white/20"
      >
        <img src="${e.icon}" :alt="${e.name}" class="w-8 h-8 icon-blue group-hover:icon-white" />
      </div>
      <div class="flex-grow">
        <h3>${e.name}</h3>
        <p>${e.announcementCount} объявлений</p>
      </div>
      <img src="/images/svg/chevron-right.svg" "checvron-righ" class="category__chevron transition-[transform] duration-200" />
    </div>
  `,l=()=>{const e=document.querySelector("section.categories");a.forEach((t,s)=>{e.innerHTML=e.innerHTML+m(t,s)})};l();const d=e=>`
    <a href="#" class="flex items-center justify-between gap-3 p-3">
      <h4>${e.name}</h4>
      <img src="/images/svg/chevron-right.svg" alt="chevron-right" />
    </a>
  `;let r=null;const p=(e,t)=>{const s=Math.floor(e/3)+2;t.style.gridRow=s},h=(e,t)=>{t.classList.contains("hidden")?u(t,"grid"):r===e&&g(t,"grid")},f=(e,t)=>{t.innerHTML=e?e.map(d).join(""):"Empty"},v=e=>{const t=document.querySelectorAll("section.categories .category");t.forEach(s=>s.classList.remove("active")),r===e?t[e].classList.remove("active"):t[e].classList.toggle("active")};window.toggleDropdown=e=>{const t=a[e].subcategories,s=document.querySelector(".subcategories-dropdown");p(e,s),h(e,s),v(e),f(t,s),r=e};
