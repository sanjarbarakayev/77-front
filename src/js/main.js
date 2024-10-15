import { categories } from "../data/categories";

const hideEl = (el, display = "block") => {
  if (display) {
    el.classList.remove(display);
  }

  el.classList.add("hidden");
};

const showEl = (el, display = "block") => {
  el.classList.remove("hidden");

  if (display) {
    el.classList.add(display);
  }
};

const getCateogryTemplate = (category, idx) => {
  return `
    <div
      class="category transition-all duration-200 rounded-xl border border-grey-4 hover:border-blue flex items-center gap-3 shadow-category py-[22px] pr-3 bg-white cursor-pointer group"
      data-index="${idx}"
      onclick="toggleDropdown(${idx})"
    >
      <div
        class="category__img border boder-gray-4 shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] rounded-xl p-4 -ml-8 bg-white transition-all duration-200 group-hover:bg-blue group-hover:border-white/20"
      >
        <img src="${category.icon}" :alt="${
    category.name
  }" class="w-8 h-8 icon-blue group-hover:icon-white" />
      </div>
      <div class="flex-grow">
        <h3>${category.name}</h3>
        <p>${category.announcementCount} объявлений</p>
      </div>
      <img src="/images/svg/chevron-right.svg" "checvron-righ" class="category__chevron transition-[transform] duration-200" />
    </div>
  `;
};

const renderCatetories = () => {
  const categoriesSection = document.querySelector("section.categories");

  categories.forEach((category, idx) => {
    categoriesSection.innerHTML =categoriesSection.innerHTML +  getCateogryTemplate(category, idx);
  });
};

renderCatetories();

const getSubcategoryTemplate = (subcategory) => {
  return `
    <a href="#" class="flex items-center justify-between gap-3 p-3">
      <h4>${subcategory.name}</h4>
      <img src="/images/svg/chevron-right.svg" alt="chevron-right" />
    </a>
  `;
};

let activeIdx = null;

const adjustDropdownPosition = (categoryIdx, dropdownContainer) => {
  const activeRow = Math.floor(categoryIdx / 3) + 2;
  dropdownContainer.style.gridRow = activeRow;
};

const toggleDropdownVisibility = (categoryIdx, dropdownContainer) => {
  if (dropdownContainer.classList.contains("hidden")) {
    showEl(dropdownContainer, "grid");
  } else if (activeIdx === categoryIdx) {
    hideEl(dropdownContainer, "grid");
  }
};

const renderSubcategories = (subcategories, dropdownContainer) => {
  dropdownContainer.innerHTML = subcategories
    ? subcategories.map(getSubcategoryTemplate).join("")
    : "Empty";
};

const toggleCategoryActive = (categoryIdx) => {
  const categories = document.querySelectorAll("section.categories .category");

  categories.forEach((c) => c.classList.remove("active"));

  if (activeIdx === categoryIdx) {
    categories[categoryIdx].classList.remove("active");  
  } else {
    categories[categoryIdx].classList.toggle("active");
  }
};

window.toggleDropdown = (categoryIdx) => {
  const subcategories = categories[categoryIdx].subcategories

  const dropdownContainer = document.querySelector(".subcategories-dropdown");

  adjustDropdownPosition(categoryIdx, dropdownContainer);

  toggleDropdownVisibility(categoryIdx, dropdownContainer);

  toggleCategoryActive(categoryIdx);

  renderSubcategories(subcategories, dropdownContainer);

  activeIdx = categoryIdx;
};
