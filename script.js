// document.addEventListener('DOMContentLoaded', () => {
//   const menuBtn = document.getElementById('menuBtn');
//   const menuPanel = document.getElementById('menuPanel');
//   const overlay = document.getElementById('overlay');
//   const categoryItems = document.querySelectorAll('.category-item');

//   function openMenu() {
//     menuPanel.classList.add('active');
//     overlay.classList.add('active');
//     document.body.style.overflow = 'hidden';
//   }

//   function closeMenu() {
//     menuPanel.classList.remove('active');
//     overlay.classList.remove('active');
//     document.body.style.overflow = '';
//   }

//   menuBtn.addEventListener('click', () => {
//     if (menuPanel.classList.contains('active')) {
//       closeMenu();
//     } else {
//       openMenu();
//     }
//   });

//   overlay.addEventListener('click', closeMenu);

//   categoryItems.forEach(item => {
//     item.addEventListener('click', (e) => {
//       e.preventDefault();
//       const targetId = item.getAttribute('href');
//       const targetSection = document.querySelector(targetId);

//       closeMenu();

//       setTimeout(() => {
//         if (targetSection) {
//           const headerOffset = 20;
//           const elementPosition = targetSection.getBoundingClientRect().top;
//           const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

//           window.scrollTo({
//             top: offsetPosition,
//             behavior: 'smooth'
//           });
//         }
//       }, 300);
//     });
//   });

//   const observerOptions = {
//     threshold: 0.1,
//     rootMargin: '0px 0px -50px 0px'
//   };

//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.style.opacity = '1';
//       }
//     });
//   }, observerOptions);

//   document.querySelectorAll('.menu-section').forEach(section => {
//     observer.observe(section);
//   });

//   let touchStartY = 0;
//   let touchEndY = 0;

//   menuPanel.addEventListener('touchstart', (e) => {
//     touchStartY = e.touches[0].clientY;
//   }, { passive: true });

//   menuPanel.addEventListener('touchmove', (e) => {
//     touchEndY = e.touches[0].clientY;
//   }, { passive: true });

//   menuPanel.addEventListener('touchend', () => {
//     if (touchStartY < touchEndY && (touchEndY - touchStartY) > 50) {
//       closeMenu();
//     }
//   });

//   document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape' && menuPanel.classList.contains('active')) {
//       closeMenu();
//     }
//   });
// });


// // Toggle collapsible categories
// document.querySelectorAll('.collapsible .category-header').forEach(header => {
//   header.addEventListener('click', () => {
//     header.parentElement.classList.toggle('active');
//   });
// });

// // Smooth scroll for sub-category items and normal links
// document.querySelectorAll('.sub-category-item, .category-item:not(.collapsible)').forEach(item => {
//   item.addEventListener('click', e => {
//     e.preventDefault();
//     const targetId = item.getAttribute('href');
//     const target = document.querySelector(targetId);
//     if (!target) return;
//     const offset = 20; // optional offset
//     const topPos = target.getBoundingClientRect().top + window.scrollY - offset;
//     window.scrollTo({ top: topPos, behavior: 'smooth' });

//     // Close menu if needed
//     document.getElementById('menuPanel').classList.remove('open');
//     document.getElementById('overlay').classList.remove('active');
//   });
// });


const menuData = {
  beverage: {
    name: "Beverage Menu",
    categories: {
      "Hot Beverages": {
        subcategories: {
          "Coffee Specialties": [
            { name: "Espresso", desc: "Strong black coffee shot", price: 120, veg: true, grams: 50, calories: 5 },
            { name: "Cappuccino", desc: "Coffee with milk foam", price: 150, veg: true, grams: 150, calories: 120 },
            { name: "Latte", desc: "Smooth milk coffee", price: 160, veg: true, grams: 200, calories: 150 }
          ],
          "Tea Selection": [
            { name: "Masala Tea", desc: "Indian spiced tea", price: 80, veg: true, grams: 200, calories: 90 },
            { name: "Green Tea", desc: "Healthy herbal tea", price: 90, veg: true, grams: 200, calories: 5 }
          ],
          "Hot Chocolate": [
            { name: "Classic Hot Chocolate", desc: "Rich cocoa drink", price: 140, veg: true, grams: 250, calories: 200 },
            { name: "Dark Chocolate", desc: "Intense chocolate flavor", price: 160, veg: true, grams: 250, calories: 220 }
          ]
        }
      }
    }
  },
  barbeque: {
    name: "Barbeque Bay Menu",
    categories: {
      "Grilled Meats": {
        subcategories: {
          "Chicken Grills": [
            { name: "BBQ Chicken Wings", desc: "Smoky grilled wings", price: 320, veg: false, grams: 300, calories: 450 },
            { name: "Grilled Chicken Breast", desc: "Juicy grilled chicken", price: 350, veg: false, grams: 250, calories: 400 }
          ]
        }
      }
    }
  },
  roomservice: {
    name: "Room Service Menu",
    categories: {
      "Breakfast Items": {
        subcategories: {
          "Breads & Pastries": [
            { name: "Croissant", desc: "Buttery flaky pastry", price: 120, veg: true, grams: 100, calories: 250 },
            { name: "Toast & Jam", desc: "Classic breakfast", price: 100, veg: true, grams: 80, calories: 200 }
          ]
        }
      }
    }
  }
};

let currentMenu = null;

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const menuPanel = document.getElementById('menuPanel');
  const overlay = document.getElementById('overlay');
  const menuItems = document.querySelectorAll('.menu-item');
  const backBtn = document.getElementById('backBtn');
  const menuSelectionView = document.getElementById('menuSelectionView');
  const categoriesView = document.getElementById('categoriesView');
  const categoryList = document.getElementById('categoryList');
  const menuTitle = document.getElementById('menuTitle');
  const menuContainer = document.getElementById('menuContainer');

  function openMenu() {
    menuPanel.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menuPanel.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showMenuSelection() {
    menuSelectionView.style.display = 'block';
    categoriesView.style.display = 'none';
    currentMenu = null;
  }

  function showCategories(menuKey) {
    const menu = menuData[menuKey];
    if (!menu) return;

    currentMenu = menuKey;
    menuTitle.textContent = menu.name;
    menuSelectionView.style.display = 'none';
    categoriesView.style.display = 'block';

    categoryList.innerHTML = '';

    Object.entries(menu.categories).forEach(([categoryName, categoryData]) => {
      const categoryItem = document.createElement('div');
      categoryItem.className = 'category-item';

      const categoryHeader = document.createElement('div');
      categoryHeader.className = 'category-header';
      categoryHeader.innerHTML = `
        <span class="category-name">${categoryName}</span>
        <span class="expand-icon">+</span>
      `;

      const subcategoryList = document.createElement('div');
      subcategoryList.className = 'subcategory-list';

      Object.entries(categoryData.subcategories).forEach(([subcategory, items]) => {
        const itemCount = items.length;
        const subcategoryItem = document.createElement('a');
        subcategoryItem.href = `#`;
        subcategoryItem.className = 'subcategory-item';
        subcategoryItem.textContent = `${subcategory} (${itemCount})`;

        subcategoryItem.addEventListener('click', (e) => {
          e.preventDefault();
          scrollToSection(categoryName, subcategory);
          closeMenu();
        });

        subcategoryList.appendChild(subcategoryItem);
      });

      categoryHeader.addEventListener('click', () => {
        categoryItem.classList.toggle('expanded');
      });

      categoryItem.appendChild(categoryHeader);
      categoryItem.appendChild(subcategoryList);
      categoryList.appendChild(categoryItem);
    });
  }

  function scrollToSection(category, subcategory) {
    const target = document.querySelector(`[data-menu="${currentMenu}"][data-category="${category}"][data-subcategory="${subcategory}"]`);
    if (target) {
      setTimeout(() => {
        const headerOffset = 20;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 300);
    }
  }

function renderMenu(menuKey) {
  const menu = menuData[menuKey];
  const container = document.getElementById("menuContainer");
  if (!menu) return;

  container.innerHTML = "";

  Object.entries(menu.categories).forEach(([categoryName, categoryData]) => {
    const categorySection = document.createElement("section");
    categorySection.className = "menu-category";

    // Category title
    const categoryTitle = document.createElement("h2");
    categoryTitle.className = "category-bold-title";
    categoryTitle.textContent = categoryName;
    categorySection.appendChild(categoryTitle);

    const divider = document.createElement("hr");
    divider.className = "category-divider";
    categorySection.appendChild(divider);

    Object.entries(categoryData.subcategories).forEach(([subName, items]) => {
      // Subcategory header with toggle
      const subHeader = document.createElement("div");
      subHeader.className = "subcategory-header";
      subHeader.innerHTML = `
        <span class="subcategory-label">${subName}</span>
        <span class="subcategory-toggle">+</span>
      `;
      categorySection.appendChild(subHeader);

      // 3-column card grid — hidden by default
      const grid = document.createElement("div");
      grid.className = "items-grid";
      grid.setAttribute("data-menu", menuKey);
      grid.setAttribute("data-category", categoryName);
      grid.setAttribute("data-subcategory", subName);
      grid.style.display = "none";

      items.forEach(item => {
        const card = document.createElement("div");
        card.className = "menu-card";
        const dotClass = item.veg ? "veg-dot" : "nonveg-dot";

        card.innerHTML = `
          <div class="card-dot-row">
            <span class="${dotClass}"></span>
          </div>
          <div class="card-name">${item.name}</div>
          <div class="card-meta">${item.grams}g • ${item.calories} cal • ₹${item.price}</div>
          <div class="card-desc">${item.desc}</div>
        `;
        grid.appendChild(card);
      });

      // Toggle
      subHeader.addEventListener("click", () => {
        const isOpen = grid.style.display !== "none";
        grid.style.display = isOpen ? "none" : "grid";
        subHeader.querySelector(".subcategory-toggle").textContent = isOpen ? "+" : "−";
      });

      categorySection.appendChild(grid);
    });

    container.appendChild(categorySection);
  });
}
  menuBtn.addEventListener('click', () => {
    if (menuPanel.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
      showMenuSelection();
    }
  });

  overlay.addEventListener('click', closeMenu);

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const menuKey = item.getAttribute('data-menu');
      currentMenu = menuKey;

    renderMenu(menuKey); 
     showCategories(menuKey);
    });
  });

  backBtn.addEventListener('click', showMenuSelection);

  let touchStartY = 0;
  let touchEndY = 0;

  menuPanel.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  menuPanel.addEventListener('touchmove', (e) => {
    touchEndY = e.touches[0].clientY;
  }, { passive: true });

  menuPanel.addEventListener('touchend', () => {
    if (touchStartY < touchEndY && (touchEndY - touchStartY) > 50) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuPanel.classList.contains('active')) {
      closeMenu();
    }
  });
});


