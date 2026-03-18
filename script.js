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
            { name: "Espresso", desc: "Intense single shot of pure black coffee with a rich crema on top", price: 120, veg: true, grams: 50, calories: 5 },
            { name: "Cappuccino", desc: "Equal parts espresso, steamed milk, and velvety foam", price: 150, veg: true, grams: 150, calories: 120 },
            { name: "Latte", desc: "Smooth espresso with lots of steamed milk and light foam", price: 160, veg: true, grams: 200, calories: 150 },
            { name: "Americano", desc: "Espresso diluted with hot water for a long black coffee", price: 130, veg: true, grams: 180, calories: 10 },
            { name: "Flat White", desc: "Velvety microfoam over a double ristretto shot", price: 170, veg: true, grams: 160, calories: 130 },
            { name: "Mocha", desc: "Espresso blended with rich chocolate and steamed milk", price: 180, veg: true, grams: 200, calories: 220 }
          ],
          "Tea Selection": [
            { name: "Masala Chai", desc: "Classic Indian spiced tea with ginger, cardamom and cinnamon", price: 80, veg: true, grams: 200, calories: 90 },
            { name: "Green Tea", desc: "Light and refreshing Japanese sencha green tea", price: 90, veg: true, grams: 200, calories: 5 },
            { name: "Kashmiri Kahwa", desc: "Aromatic saffron tea with almonds and cardamom", price: 110, veg: true, grams: 200, calories: 60 },
            { name: "Chamomile Tea", desc: "Calming herbal tea with floral honey notes", price: 95, veg: true, grams: 200, calories: 3 },
            { name: "Earl Grey", desc: "Classic black tea scented with bergamot oil", price: 90, veg: true, grams: 200, calories: 5 }
          ],
          "Hot Chocolate": [
            { name: "Classic Hot Chocolate", desc: "Creamy milk chocolate drink topped with whipped cream", price: 140, veg: true, grams: 250, calories: 200 },
            { name: "Dark Chocolate", desc: "Intense 70% dark cocoa drink for chocolate lovers", price: 160, veg: true, grams: 250, calories: 220 },
            { name: "White Chocolate Mocha", desc: "Sweet white chocolate with espresso and steamed milk", price: 170, veg: true, grams: 250, calories: 260 }
          ]
        }
      },
      "Cold Beverages": {
        subcategories: {
          "Iced Coffee": [
            { name: "Cold Brew", desc: "Slow-steeped 18-hour cold brew coffee, smooth and bold", price: 180, veg: true, grams: 300, calories: 15 },
            { name: "Iced Latte", desc: "Chilled espresso over ice with cold milk", price: 170, veg: true, grams: 300, calories: 130 },
            { name: "Iced Mocha", desc: "Cold espresso with chocolate syrup and milk over ice", price: 190, veg: true, grams: 300, calories: 210 },
            { name: "Dalgona Coffee", desc: "Whipped coffee foam over chilled milk", price: 200, veg: true, grams: 280, calories: 180 }
          ],
          "Fresh Juices": [
            { name: "Orange Juice", desc: "Freshly squeezed Nagpur oranges, pulpy and bright", price: 120, veg: true, grams: 250, calories: 110 },
            { name: "Watermelon Juice", desc: "Chilled fresh watermelon blended smooth", price: 100, veg: true, grams: 300, calories: 85 },
            { name: "Mixed Fruit Punch", desc: "Seasonal fruits blended with a hint of mint and lime", price: 130, veg: true, grams: 300, calories: 120 },
            { name: "Sugarcane Juice", desc: "Fresh pressed sugarcane with ginger and lemon", price: 80, veg: true, grams: 350, calories: 180 }
          ],
          "Shakes & Smoothies": [
            { name: "Mango Shake", desc: "Thick Alphonso mango blended with chilled milk and ice cream", price: 160, veg: true, grams: 300, calories: 280 },
            { name: "Strawberry Smoothie", desc: "Fresh strawberries blended with yogurt and honey", price: 170, veg: true, grams: 300, calories: 220 },
            { name: "Banana Peanut Butter Shake", desc: "Protein-rich banana shake with natural peanut butter", price: 180, veg: true, grams: 300, calories: 340 },
            { name: "Avocado Smoothie", desc: "Creamy avocado blended with coconut milk and lime", price: 190, veg: true, grams: 280, calories: 260 }
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
            { name: "BBQ Chicken Wings", desc: "Smoky chargrilled wings glazed with our signature BBQ sauce", price: 320, veg: false, grams: 300, calories: 450 },
            { name: "Grilled Chicken Breast", desc: "Herb-marinated juicy chicken breast grilled over charcoal", price: 350, veg: false, grams: 250, calories: 400 },
            { name: "Chicken Tikka", desc: "Tandoor-smoked boneless chicken in spiced yogurt marinade", price: 340, veg: false, grams: 280, calories: 380 },
            { name: "Peri Peri Chicken", desc: "Fiery African peri peri spiced grilled chicken", price: 360, veg: false, grams: 300, calories: 420 },
            { name: "Chicken Seekh Kebab", desc: "Minced chicken with herbs grilled on skewers", price: 310, veg: false, grams: 250, calories: 360 }
          ],
          "Mutton & Lamb": [
            { name: "Mutton Seekh Kebab", desc: "Spiced minced mutton skewers cooked over open flame", price: 420, veg: false, grams: 280, calories: 480 },
            { name: "Lamb Chops", desc: "Tender lamb chops marinated in rosemary and garlic", price: 550, veg: false, grams: 300, calories: 520 },
            { name: "Raan Platter", desc: "Slow-roasted whole leg of lamb with mint chutney", price: 1200, veg: false, grams: 600, calories: 980 },
            { name: "Mutton Boti", desc: "Chunky mutton pieces marinated in raw papaya and spices", price: 460, veg: false, grams: 280, calories: 500 }
          ],
          "Seafood Grills": [
            { name: "Tandoori Pomfret", desc: "Whole pomfret fish marinated in carom seeds and lime", price: 580, veg: false, grams: 400, calories: 360 },
            { name: "Grilled Tiger Prawns", desc: "Jumbo prawns in garlic butter grilled to perfection", price: 620, veg: false, grams: 300, calories: 280 },
            { name: "Fish Tikka", desc: "Boneless fish cubes in mustard and turmeric marinade", price: 380, veg: false, grams: 280, calories: 320 }
          ]
        }
      },
      "Vegetarian Grills": {
        subcategories: {
          "Paneer & Veg": [
            { name: "Paneer Tikka", desc: "Thick cottage cheese cubes grilled with peppers and onion", price: 280, veg: true, grams: 250, calories: 380 },
            { name: "Hara Bhara Kebab", desc: "Spinach and pea patties grilled with a cashew centre", price: 220, veg: true, grams: 200, calories: 280 },
            { name: "Stuffed Mushroom", desc: "Portobello mushrooms filled with cheese and herbs", price: 240, veg: true, grams: 200, calories: 260 },
            { name: "Corn & Cheese Kebab", desc: "Sweet corn and cheese mixed kebabs with a crispy coat", price: 230, veg: true, grams: 200, calories: 300 }
          ],
          "Grilled Breads": [
            { name: "Tandoori Roti", desc: "Whole wheat bread baked fresh in the clay tandoor", price: 40, veg: true, grams: 80, calories: 150 },
            { name: "Butter Naan", desc: "Soft leavened bread brushed generously with butter", price: 60, veg: true, grams: 100, calories: 210 },
            { name: "Garlic Naan", desc: "Naan topped with roasted garlic and fresh coriander", price: 70, veg: true, grams: 100, calories: 220 },
            { name: "Laccha Paratha", desc: "Layered flaky whole wheat paratha from the tandoor", price: 65, veg: true, grams: 100, calories: 200 }
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
            { name: "Butter Croissant", desc: "Flaky buttery French croissant served warm with jam", price: 120, veg: true, grams: 100, calories: 250 },
            { name: "Toast & Jam", desc: "Toasted multigrain bread with seasonal fruit jam", price: 100, veg: true, grams: 80, calories: 200 },
            { name: "Banana Bread", desc: "Moist homemade banana bread with walnut crunch", price: 140, veg: true, grams: 120, calories: 310 },
            { name: "Blueberry Muffin", desc: "Soft muffin bursting with fresh blueberries", price: 110, veg: true, grams: 100, calories: 280 },
            { name: "Cinnamon Danish", desc: "Layered pastry with sweet cinnamon swirl and glaze", price: 130, veg: true, grams: 110, calories: 300 }
          ],
          "Egg Dishes": [
            { name: "Masala Omelette", desc: "Three-egg omelette with onion, tomato, green chilli and cheese", price: 160, veg: false, grams: 200, calories: 320 },
            { name: "Eggs Benedict", desc: "Poached eggs and Canadian bacon on English muffin with hollandaise", price: 220, veg: false, grams: 250, calories: 480 },
            { name: "Scrambled Eggs", desc: "Creamy butter-scrambled eggs with fresh herbs", price: 150, veg: false, grams: 180, calories: 280 },
            { name: "Shakshuka", desc: "Eggs poached in spiced tomato and pepper sauce", price: 190, veg: false, grams: 280, calories: 340 }
          ],
          "Healthy Start": [
            { name: "Overnight Oats", desc: "Rolled oats soaked in almond milk with chia seeds and berries", price: 160, veg: true, grams: 250, calories: 310 },
            { name: "Acai Bowl", desc: "Frozen acai blended smooth with granola, honey and fresh fruit", price: 220, veg: true, grams: 300, calories: 380 },
            { name: "Fruit Salad", desc: "Seasonal fresh fruits with a mint and honey dressing", price: 130, veg: true, grams: 250, calories: 140 },
            { name: "Greek Yogurt Parfait", desc: "Creamy yogurt layered with granola and mixed berry compote", price: 170, veg: true, grams: 220, calories: 260 }
          ]
        }
      },
      "All Day Dining": {
        subcategories: {
          "Sandwiches & Wraps": [
            { name: "Club Sandwich", desc: "Triple-decker with chicken, bacon, egg, lettuce and tomato", price: 280, veg: false, grams: 300, calories: 520 },
            { name: "Paneer Kathi Roll", desc: "Grilled paneer with pickled onions in a flaky paratha wrap", price: 220, veg: true, grams: 250, calories: 420 },
            { name: "BLT", desc: "Crispy bacon, iceberg lettuce and tomato on sourdough", price: 240, veg: false, grams: 220, calories: 440 },
            { name: "Veggie Wrap", desc: "Grilled vegetables and hummus in a whole wheat tortilla", price: 200, veg: true, grams: 240, calories: 360 }
          ],
          "Indian Mains": [
            { name: "Dal Makhani", desc: "Slow-cooked black lentils in buttery tomato gravy", price: 220, veg: true, grams: 300, calories: 380 },
            { name: "Paneer Butter Masala", desc: "Cottage cheese in a rich, creamy tomato and cashew sauce", price: 260, veg: true, grams: 300, calories: 420 },
            { name: "Chicken Curry", desc: "Tender chicken pieces in a fragrant onion-tomato masala", price: 300, veg: false, grams: 300, calories: 460 },
            { name: "Jeera Rice", desc: "Basmati rice tempered with cumin and ghee", price: 150, veg: true, grams: 250, calories: 320 },
            { name: "Butter Chicken", desc: "Tandoori chicken in a silky makhani tomato cream sauce", price: 320, veg: false, grams: 300, calories: 490 }
          ],
          "Soups & Salads": [
            { name: "Tomato Basil Soup", desc: "Roasted tomato soup blended smooth with fresh basil", price: 160, veg: true, grams: 250, calories: 140 },
            { name: "Sweet Corn Soup", desc: "Creamy sweet corn soup with a drizzle of chilli oil", price: 150, veg: true, grams: 250, calories: 160 },
            { name: "Caesar Salad", desc: "Romaine lettuce, parmesan, croutons and Caesar dressing", price: 200, veg: false, grams: 250, calories: 280 },
            { name: "Greek Salad", desc: "Cucumber, olives, feta, tomato with oregano vinaigrette", price: 190, veg: true, grams: 250, calories: 220 }
          ]
        }
      },
      "Desserts": {
        subcategories: {
          "Indian Sweets": [
            { name: "Gulab Jamun", desc: "Soft milk dumplings soaked in rose and cardamom syrup", price: 120, veg: true, grams: 150, calories: 340 },
            { name: "Gajar Halwa", desc: "Slow-cooked carrot dessert with khoya and pistachios", price: 140, veg: true, grams: 180, calories: 380 },
            { name: "Rasmalai", desc: "Spongy paneer rounds in chilled saffron milk", price: 150, veg: true, grams: 180, calories: 310 },
            { name: "Kulfi", desc: "Traditional dense Indian ice cream in pista or malai flavour", price: 110, veg: true, grams: 100, calories: 250 }
          ],
          "Western Desserts": [
            { name: "Chocolate Lava Cake", desc: "Warm dark chocolate cake with a molten gooey centre", price: 200, veg: true, grams: 150, calories: 420 },
            { name: "New York Cheesecake", desc: "Dense and creamy baked cheesecake with berry coulis", price: 220, veg: true, grams: 160, calories: 460 },
            { name: "Tiramisu", desc: "Classic Italian ladyfinger dessert soaked in espresso and mascarpone", price: 210, veg: true, grams: 160, calories: 390 },
            { name: "Crème Brûlée", desc: "Silky vanilla custard with a perfectly caramelised sugar crust", price: 230, veg: true, grams: 150, calories: 360 },
            { name: "Mango Panna Cotta", desc: "Chilled set cream with a fresh Alphonso mango layer on top", price: 190, veg: true, grams: 160, calories: 320 }
          ]
        }
      }
    }
  },

  poolside: {
    name: "Poolside Menu",
    categories: {
      "Light Bites": {
        subcategories: {
          "Starters": [
            { name: "Nachos & Salsa", desc: "Crispy tortilla chips with house salsa, guacamole and sour cream", price: 220, veg: true, grams: 200, calories: 380 },
            { name: "Bruschetta", desc: "Toasted sourdough with fresh tomato, basil and extra virgin olive oil", price: 180, veg: true, grams: 150, calories: 240 },
            { name: "Spring Rolls", desc: "Crispy vegetable spring rolls with a sweet chilli dipping sauce", price: 160, veg: true, grams: 180, calories: 280 },
            { name: "Fish & Chips", desc: "Beer-battered fish fillet with seasoned fries and tartar sauce", price: 340, veg: false, grams: 350, calories: 580 },
            { name: "Chicken Popcorn", desc: "Bite-sized crispy fried chicken tossed in spicy seasoning", price: 260, veg: false, grams: 200, calories: 420 }
          ],
          "Poolside Pizzas": [
            { name: "Margherita", desc: "San Marzano tomato, fresh mozzarella and basil on thin crust", price: 320, veg: true, grams: 300, calories: 560 },
            { name: "BBQ Chicken Pizza", desc: "Grilled chicken, red onion and BBQ sauce on crispy base", price: 380, veg: false, grams: 320, calories: 620 },
            { name: "Pepperoni", desc: "Classic pepperoni with mozzarella and oregano", price: 360, veg: false, grams: 300, calories: 600 },
            { name: "Pesto Veggie", desc: "Basil pesto, zucchini, sun-dried tomatoes and goat cheese", price: 340, veg: true, grams: 300, calories: 540 }
          ]
        }
      },
      "Cocktails & Mocktails": {
        subcategories: {
          "Mocktails": [
            { name: "Virgin Mojito", desc: "Fresh lime, mint, sugar and soda over crushed ice", price: 160, veg: true, grams: 300, calories: 90 },
            { name: "Watermelon Cooler", desc: "Fresh watermelon juice with rose water and lychee", price: 170, veg: true, grams: 300, calories: 110 },
            { name: "Blue Lagoon", desc: "Blue curacao syrup with lemonade and a citrus float", price: 180, veg: true, grams: 300, calories: 120 },
            { name: "Shirley Temple", desc: "Ginger ale with grenadine and orange juice on ice", price: 150, veg: true, grams: 280, calories: 100 }
          ],
          "Beers & Seltzers": [
            { name: "Kingfisher Premium", desc: "Chilled Kingfisher Premium lager served in a frosted glass", price: 180, veg: true, grams: 330, calories: 145 },
            { name: "Heineken", desc: "Refreshing Dutch lager with a crisp clean finish", price: 220, veg: true, grams: 330, calories: 150 },
            { name: "Bira White", desc: "Crafted wheat beer with a light citrusy flavour", price: 200, veg: true, grams: 330, calories: 140 },
            { name: "Hard Seltzer", desc: "Low-calorie sparkling water with a hint of lime and berries", price: 190, veg: true, grams: 330, calories: 95 }
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
  const target = document.querySelector(
    `.subcategory-header[data-menu="${currentMenu}"][data-category="${category}"][data-subcategory="${subcategory}"]`
  );
  if (!target) return;

  const grid = target.nextElementSibling;
  if (grid && grid.style.display === 'none') {
    grid.style.display = 'grid';
    target.querySelector('.subcategory-toggle').textContent = '−';
  }

  setTimeout(() => {
    const offsetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }, 100);
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
      subHeader.setAttribute("data-menu", menuKey);
      subHeader.setAttribute("data-category", categoryName);
      subHeader.setAttribute("data-subcategory", subName);
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


