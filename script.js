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


// const menuData = {

//   beverage: {
//     name: "Beverage Menu",
//     categories: {
//       "Hot Beverages": {
//         subcategories: {
//           "Coffee Specialties": [
//             { name: "Espresso", desc: "Intense single shot of pure black coffee with a rich crema on top", price: 120, veg: true, grams: 50, calories: 5 },
//             { name: "Cappuccino", desc: "Equal parts espresso, steamed milk, and velvety foam", price: 150, veg: true, grams: 150, calories: 120 },
//             { name: "Latte", desc: "Smooth espresso with lots of steamed milk and light foam", price: 160, veg: true, grams: 200, calories: 150 },
//             { name: "Americano", desc: "Espresso diluted with hot water for a long black coffee", price: 130, veg: true, grams: 180, calories: 10 },
//             { name: "Flat White", desc: "Velvety microfoam over a double ristretto shot", price: 170, veg: true, grams: 160, calories: 130 },
//             { name: "Mocha", desc: "Espresso blended with rich chocolate and steamed milk", price: 180, veg: true, grams: 200, calories: 220 }
//           ],
//           "Tea Selection": [
//             { name: "Masala Chai", desc: "Classic Indian spiced tea with ginger, cardamom and cinnamon", price: 80, veg: true, grams: 200, calories: 90 },
//             { name: "Green Tea", desc: "Light and refreshing Japanese sencha green tea", price: 90, veg: true, grams: 200, calories: 5 },
//             { name: "Kashmiri Kahwa", desc: "Aromatic saffron tea with almonds and cardamom", price: 110, veg: true, grams: 200, calories: 60 },
//             { name: "Chamomile Tea", desc: "Calming herbal tea with floral honey notes", price: 95, veg: true, grams: 200, calories: 3 },
//             { name: "Earl Grey", desc: "Classic black tea scented with bergamot oil", price: 90, veg: true, grams: 200, calories: 5 }
//           ],
//           "Hot Chocolate": [
//             { name: "Classic Hot Chocolate", desc: "Creamy milk chocolate drink topped with whipped cream", price: 140, veg: true, grams: 250, calories: 200 },
//             { name: "Dark Chocolate", desc: "Intense 70% dark cocoa drink for chocolate lovers", price: 160, veg: true, grams: 250, calories: 220 },
//             { name: "White Chocolate Mocha", desc: "Sweet white chocolate with espresso and steamed milk", price: 170, veg: true, grams: 250, calories: 260 }
//           ]
//         }
//       },
//       "Cold Beverages": {
//         subcategories: {
//           "Iced Coffee": [
//             { name: "Cold Brew", desc: "Slow-steeped 18-hour cold brew coffee, smooth and bold", price: 180, veg: true, grams: 300, calories: 15 },
//             { name: "Iced Latte", desc: "Chilled espresso over ice with cold milk", price: 170, veg: true, grams: 300, calories: 130 },
//             { name: "Iced Mocha", desc: "Cold espresso with chocolate syrup and milk over ice", price: 190, veg: true, grams: 300, calories: 210 },
//             { name: "Dalgona Coffee", desc: "Whipped coffee foam over chilled milk", price: 200, veg: true, grams: 280, calories: 180 }
//           ],
//           "Fresh Juices": [
//             { name: "Orange Juice", desc: "Freshly squeezed Nagpur oranges, pulpy and bright", price: 120, veg: true, grams: 250, calories: 110 },
//             { name: "Watermelon Juice", desc: "Chilled fresh watermelon blended smooth", price: 100, veg: true, grams: 300, calories: 85 },
//             { name: "Mixed Fruit Punch", desc: "Seasonal fruits blended with a hint of mint and lime", price: 130, veg: true, grams: 300, calories: 120 },
//             { name: "Sugarcane Juice", desc: "Fresh pressed sugarcane with ginger and lemon", price: 80, veg: true, grams: 350, calories: 180 }
//           ],
//           "Shakes & Smoothies": [
//             { name: "Mango Shake", desc: "Thick Alphonso mango blended with chilled milk and ice cream", price: 160, veg: true, grams: 300, calories: 280 },
//             { name: "Strawberry Smoothie", desc: "Fresh strawberries blended with yogurt and honey", price: 170, veg: true, grams: 300, calories: 220 },
//             { name: "Banana Peanut Butter Shake", desc: "Protein-rich banana shake with natural peanut butter", price: 180, veg: true, grams: 300, calories: 340 },
//             { name: "Avocado Smoothie", desc: "Creamy avocado blended with coconut milk and lime", price: 190, veg: true, grams: 280, calories: 260 }
//           ]
//         }
//       }
//     }
//   },

//   barbeque: {
//     name: "Barbeque Bay Menu",
//     categories: {
//       "Grilled Meats": {
//         subcategories: {
//           "Chicken Grills": [
//             { name: "BBQ Chicken Wings", desc: "Smoky chargrilled wings glazed with our signature BBQ sauce", price: 320, veg: false, grams: 300, calories: 450 },
//             { name: "Grilled Chicken Breast", desc: "Herb-marinated juicy chicken breast grilled over charcoal", price: 350, veg: false, grams: 250, calories: 400 },
//             { name: "Chicken Tikka", desc: "Tandoor-smoked boneless chicken in spiced yogurt marinade", price: 340, veg: false, grams: 280, calories: 380 },
//             { name: "Peri Peri Chicken", desc: "Fiery African peri peri spiced grilled chicken", price: 360, veg: false, grams: 300, calories: 420 },
//             { name: "Chicken Seekh Kebab", desc: "Minced chicken with herbs grilled on skewers", price: 310, veg: false, grams: 250, calories: 360 }
//           ],
//           "Mutton & Lamb": [
//             { name: "Mutton Seekh Kebab", desc: "Spiced minced mutton skewers cooked over open flame", price: 420, veg: false, grams: 280, calories: 480 },
//             { name: "Lamb Chops", desc: "Tender lamb chops marinated in rosemary and garlic", price: 550, veg: false, grams: 300, calories: 520 },
//             { name: "Raan Platter", desc: "Slow-roasted whole leg of lamb with mint chutney", price: 1200, veg: false, grams: 600, calories: 980 },
//             { name: "Mutton Boti", desc: "Chunky mutton pieces marinated in raw papaya and spices", price: 460, veg: false, grams: 280, calories: 500 }
//           ],
//           "Seafood Grills": [
//             { name: "Tandoori Pomfret", desc: "Whole pomfret fish marinated in carom seeds and lime", price: 580, veg: false, grams: 400, calories: 360 },
//             { name: "Grilled Tiger Prawns", desc: "Jumbo prawns in garlic butter grilled to perfection", price: 620, veg: false, grams: 300, calories: 280 },
//             { name: "Fish Tikka", desc: "Boneless fish cubes in mustard and turmeric marinade", price: 380, veg: false, grams: 280, calories: 320 }
//           ]
//         }
//       },
//       "Vegetarian Grills": {
//         subcategories: {
//           "Paneer & Veg": [
//             { name: "Paneer Tikka", desc: "Thick cottage cheese cubes grilled with peppers and onion", price: 280, veg: true, grams: 250, calories: 380 },
//             { name: "Hara Bhara Kebab", desc: "Spinach and pea patties grilled with a cashew centre", price: 220, veg: true, grams: 200, calories: 280 },
//             { name: "Stuffed Mushroom", desc: "Portobello mushrooms filled with cheese and herbs", price: 240, veg: true, grams: 200, calories: 260 },
//             { name: "Corn & Cheese Kebab", desc: "Sweet corn and cheese mixed kebabs with a crispy coat", price: 230, veg: true, grams: 200, calories: 300 }
//           ],
//           "Grilled Breads": [
//             { name: "Tandoori Roti", desc: "Whole wheat bread baked fresh in the clay tandoor", price: 40, veg: true, grams: 80, calories: 150 },
//             { name: "Butter Naan", desc: "Soft leavened bread brushed generously with butter", price: 60, veg: true, grams: 100, calories: 210 },
//             { name: "Garlic Naan", desc: "Naan topped with roasted garlic and fresh coriander", price: 70, veg: true, grams: 100, calories: 220 },
//             { name: "Laccha Paratha", desc: "Layered flaky whole wheat paratha from the tandoor", price: 65, veg: true, grams: 100, calories: 200 }
//           ]
//         }
//       }
//     }
//   },

//   roomservice: {
//     name: "Room Service Menu",
//     categories: {
//       "Breakfast Items": {
//         subcategories: {
//           "Breads & Pastries": [
//             { name: "Butter Croissant", desc: "Flaky buttery French croissant served warm with jam", price: 120, veg: true, grams: 100, calories: 250 },
//             { name: "Toast & Jam", desc: "Toasted multigrain bread with seasonal fruit jam", price: 100, veg: true, grams: 80, calories: 200 },
//             { name: "Banana Bread", desc: "Moist homemade banana bread with walnut crunch", price: 140, veg: true, grams: 120, calories: 310 },
//             { name: "Blueberry Muffin", desc: "Soft muffin bursting with fresh blueberries", price: 110, veg: true, grams: 100, calories: 280 },
//             { name: "Cinnamon Danish", desc: "Layered pastry with sweet cinnamon swirl and glaze", price: 130, veg: true, grams: 110, calories: 300 }
//           ],
//           "Egg Dishes": [
//             { name: "Masala Omelette", desc: "Three-egg omelette with onion, tomato, green chilli and cheese", price: 160, veg: false, grams: 200, calories: 320 },
//             { name: "Eggs Benedict", desc: "Poached eggs and Canadian bacon on English muffin with hollandaise", price: 220, veg: false, grams: 250, calories: 480 },
//             { name: "Scrambled Eggs", desc: "Creamy butter-scrambled eggs with fresh herbs", price: 150, veg: false, grams: 180, calories: 280 },
//             { name: "Shakshuka", desc: "Eggs poached in spiced tomato and pepper sauce", price: 190, veg: false, grams: 280, calories: 340 }
//           ],
//           "Healthy Start": [
//             { name: "Overnight Oats", desc: "Rolled oats soaked in almond milk with chia seeds and berries", price: 160, veg: true, grams: 250, calories: 310 },
//             { name: "Acai Bowl", desc: "Frozen acai blended smooth with granola, honey and fresh fruit", price: 220, veg: true, grams: 300, calories: 380 },
//             { name: "Fruit Salad", desc: "Seasonal fresh fruits with a mint and honey dressing", price: 130, veg: true, grams: 250, calories: 140 },
//             { name: "Greek Yogurt Parfait", desc: "Creamy yogurt layered with granola and mixed berry compote", price: 170, veg: true, grams: 220, calories: 260 }
//           ]
//         }
//       },
//       "All Day Dining": {
//         subcategories: {
//           "Sandwiches & Wraps": [
//             { name: "Club Sandwich", desc: "Triple-decker with chicken, bacon, egg, lettuce and tomato", price: 280, veg: false, grams: 300, calories: 520 },
//             { name: "Paneer Kathi Roll", desc: "Grilled paneer with pickled onions in a flaky paratha wrap", price: 220, veg: true, grams: 250, calories: 420 },
//             { name: "BLT", desc: "Crispy bacon, iceberg lettuce and tomato on sourdough", price: 240, veg: false, grams: 220, calories: 440 },
//             { name: "Veggie Wrap", desc: "Grilled vegetables and hummus in a whole wheat tortilla", price: 200, veg: true, grams: 240, calories: 360 }
//           ],
//           "Indian Mains": [
//             { name: "Dal Makhani", desc: "Slow-cooked black lentils in buttery tomato gravy", price: 220, veg: true, grams: 300, calories: 380 },
//             { name: "Paneer Butter Masala", desc: "Cottage cheese in a rich, creamy tomato and cashew sauce", price: 260, veg: true, grams: 300, calories: 420 },
//             { name: "Chicken Curry", desc: "Tender chicken pieces in a fragrant onion-tomato masala", price: 300, veg: false, grams: 300, calories: 460 },
//             { name: "Jeera Rice", desc: "Basmati rice tempered with cumin and ghee", price: 150, veg: true, grams: 250, calories: 320 },
//             { name: "Butter Chicken", desc: "Tandoori chicken in a silky makhani tomato cream sauce", price: 320, veg: false, grams: 300, calories: 490 }
//           ],
//           "Soups & Salads": [
//             { name: "Tomato Basil Soup", desc: "Roasted tomato soup blended smooth with fresh basil", price: 160, veg: true, grams: 250, calories: 140 },
//             { name: "Sweet Corn Soup", desc: "Creamy sweet corn soup with a drizzle of chilli oil", price: 150, veg: true, grams: 250, calories: 160 },
//             { name: "Caesar Salad", desc: "Romaine lettuce, parmesan, croutons and Caesar dressing", price: 200, veg: false, grams: 250, calories: 280 },
//             { name: "Greek Salad", desc: "Cucumber, olives, feta, tomato with oregano vinaigrette", price: 190, veg: true, grams: 250, calories: 220 }
//           ]
//         }
//       },
//       "Desserts": {
//         subcategories: {
//           "Indian Sweets": [
//             { name: "Gulab Jamun", desc: "Soft milk dumplings soaked in rose and cardamom syrup", price: 120, veg: true, grams: 150, calories: 340 },
//             { name: "Gajar Halwa", desc: "Slow-cooked carrot dessert with khoya and pistachios", price: 140, veg: true, grams: 180, calories: 380 },
//             { name: "Rasmalai", desc: "Spongy paneer rounds in chilled saffron milk", price: 150, veg: true, grams: 180, calories: 310 },
//             { name: "Kulfi", desc: "Traditional dense Indian ice cream in pista or malai flavour", price: 110, veg: true, grams: 100, calories: 250 }
//           ],
//           "Western Desserts": [
//             { name: "Chocolate Lava Cake", desc: "Warm dark chocolate cake with a molten gooey centre", price: 200, veg: true, grams: 150, calories: 420 },
//             { name: "New York Cheesecake", desc: "Dense and creamy baked cheesecake with berry coulis", price: 220, veg: true, grams: 160, calories: 460 },
//             { name: "Tiramisu", desc: "Classic Italian ladyfinger dessert soaked in espresso and mascarpone", price: 210, veg: true, grams: 160, calories: 390 },
//             { name: "Crème Brûlée", desc: "Silky vanilla custard with a perfectly caramelised sugar crust", price: 230, veg: true, grams: 150, calories: 360 },
//             { name: "Mango Panna Cotta", desc: "Chilled set cream with a fresh Alphonso mango layer on top", price: 190, veg: true, grams: 160, calories: 320 }
//           ]
//         }
//       }
//     }
//   },

//   poolside: {
//     name: "Poolside Menu",
//     categories: {
//       "Light Bites": {
//         subcategories: {
//           "Starters": [
//             { name: "Nachos & Salsa", desc: "Crispy tortilla chips with house salsa, guacamole and sour cream", price: 220, veg: true, grams: 200, calories: 380 },
//             { name: "Bruschetta", desc: "Toasted sourdough with fresh tomato, basil and extra virgin olive oil", price: 180, veg: true, grams: 150, calories: 240 },
//             { name: "Spring Rolls", desc: "Crispy vegetable spring rolls with a sweet chilli dipping sauce", price: 160, veg: true, grams: 180, calories: 280 },
//             { name: "Fish & Chips", desc: "Beer-battered fish fillet with seasoned fries and tartar sauce", price: 340, veg: false, grams: 350, calories: 580 },
//             { name: "Chicken Popcorn", desc: "Bite-sized crispy fried chicken tossed in spicy seasoning", price: 260, veg: false, grams: 200, calories: 420 }
//           ],
//           "Poolside Pizzas": [
//             { name: "Margherita", desc: "San Marzano tomato, fresh mozzarella and basil on thin crust", price: 320, veg: true, grams: 300, calories: 560 },
//             { name: "BBQ Chicken Pizza", desc: "Grilled chicken, red onion and BBQ sauce on crispy base", price: 380, veg: false, grams: 320, calories: 620 },
//             { name: "Pepperoni", desc: "Classic pepperoni with mozzarella and oregano", price: 360, veg: false, grams: 300, calories: 600 },
//             { name: "Pesto Veggie", desc: "Basil pesto, zucchini, sun-dried tomatoes and goat cheese", price: 340, veg: true, grams: 300, calories: 540 }
//           ]
//         }
//       },
//       "Cocktails & Mocktails": {
//         subcategories: {
//           "Mocktails": [
//             { name: "Virgin Mojito", desc: "Fresh lime, mint, sugar and soda over crushed ice", price: 160, veg: true, grams: 300, calories: 90 },
//             { name: "Watermelon Cooler", desc: "Fresh watermelon juice with rose water and lychee", price: 170, veg: true, grams: 300, calories: 110 },
//             { name: "Blue Lagoon", desc: "Blue curacao syrup with lemonade and a citrus float", price: 180, veg: true, grams: 300, calories: 120 },
//             { name: "Shirley Temple", desc: "Ginger ale with grenadine and orange juice on ice", price: 150, veg: true, grams: 280, calories: 100 }
//           ],
//           "Beers & Seltzers": [
//             { name: "Kingfisher Premium", desc: "Chilled Kingfisher Premium lager served in a frosted glass", price: 180, veg: true, grams: 330, calories: 145 },
//             { name: "Heineken", desc: "Refreshing Dutch lager with a crisp clean finish", price: 220, veg: true, grams: 330, calories: 150 },
//             { name: "Bira White", desc: "Crafted wheat beer with a light citrusy flavour", price: 200, veg: true, grams: 330, calories: 140 },
//             { name: "Hard Seltzer", desc: "Low-calorie sparkling water with a hint of lime and berries", price: 190, veg: true, grams: 330, calories: 95 }
//           ]
//         }
//       }
//     }
//   }

// };
// const menuData = {

//   gourmetexpress: {
//     name: "Gourmet Express Menu",
//     categories: {

//       "Breakfast Selections": {
//         subcategories: {
//           "Baker's Basket & Cereals": [
//             { name: "Baker's Basket", desc: "Choice of 3 pieces of muffins and toast served with butter and preserves", price: 300, veg: true },
//             { name: "Choice Of Cereals", desc: "Choose from corn flakes, wheat flakes, or choco flakes with hot milk or cold milk", price: 250, veg: true },
//             { name: "Seasonal Fresh Fruits Platter", desc: "Choice of fresh seasonal fruits", price: 290, veg: true },
//             { name: "Seasonal Fresh Fruits Juice", desc: "Choose from fresh seasonal fruits", price: 255, veg: true }
//           ],
//           "Egg Dishes": [
//             { name: "Eggs To Order", desc: "2 eggs cooked to your choice served with rosti, toast and preserves", price: 315, veg: false }
//           ],
//           "Indian Breakfast": [
//             { name: "Idli / Vada / Uttapam", desc: "Served with sambar and coconut chutney", price: 260, veg: true },
//             { name: "Choice Of Paratha", desc: "Aloo / gobi / paneer paratha served with curd and pickle", price: 405, veg: true },
//             { name: "South Indian Combo", desc: "Idli & medu vada served with sambar and coconut chutney", price: 525, veg: true },
//             { name: "Indian Combo", desc: "2 pieces of aloo paratha, 2 pieces of idly, 1 vada, fresh fruits platter served with accompaniment", price: 605, veg: true }
//           ],
//           "Beverages": [
//             { name: "Tea / Coffee", desc: "Choice of tea or coffee", price: 150, veg: true },
//             { name: "Turmeric Milk", desc: "Warm turmeric-infused milk", price: 150, veg: true },
//             { name: "Herbal Tea", desc: "Ginger, basil, cinnamon, jaggery and pepper tea without milk", price: 150, veg: true }
//           ]
//         }
//       },

//       "Appetizers & Comfort Food": {
//         subcategories: {
//           "Vegetarian Starters": [
//             { name: "Paneer Chilli Dry", desc: "Paneer tossed with onions, capsicums and fresh chillies", price: 625, veg: true },
//             { name: "Chilli Cheese Toast", desc: "Toasted fresh bread grilled with cheese, fresh green chillies and coriander", price: 520, veg: true },
//             { name: "Cauliflower Or Mushroom 65", desc: "Marinated & deep-fried cauliflower or mushroom", price: 575, veg: true },
//             { name: "Jumbo Club Sandwich Combo", desc: "Double decker sandwich with tomato, cucumber, grilled vegetables, cheese served with french fry and pastry of the day", price: 600, veg: true },
//             { name: "Veg Burger Combo", desc: "Crispy fried vegetable patty with lettuce, tomato and cheese served with French fries and pastry of the day", price: 600, veg: true },
//             { name: "Make Your Own Pizza - Veg", desc: "Please ask for the toppings available", price: 590, veg: true },
//             { name: "Desi Pizza - Veg", desc: "Sliced paneer tikka on pizza base", price: 590, veg: true }
//           ],
//           "Non-Vegetarian Starters": [
//             { name: "Chilli Chicken", desc: "Chicken tossed with onions, capsicums and fresh chillies", price: 805, veg: false },
//             { name: "Fish Fingers", desc: "Fish fillets marinated and crisp-fried served with french fries and creamy mustard mayonnaise", price: 800, veg: false },
//             { name: "Chicken Burger Combo", desc: "Marinated grilled chicken, cheese in a soft bun served with French fries and pastry of the day", price: 585, veg: false },
//             { name: "Chicken Club Sandwich Combo", desc: "Chicken, fried egg, tomato lettuce and cheese served with French fries and pastry of the day", price: 575, veg: false },
//             { name: "Make Your Own Pizza - Non-Veg", desc: "Please ask for the toppings available", price: 735, veg: false },
//             { name: "Desi Pizza - Non-Veg", desc: "Sliced chicken tikka on pizza base", price: 735, veg: false }
//           ]
//         }
//       },

//       "Kebabs": {
//         subcategories: {
//           "Clay Oven Specialties": [
//             { name: "Chicken Tikka", desc: "Marinated chicken cooked in clay oven", price: 735, veg: false },
//             { name: "Fish Tikka", desc: "Marinated fish fillets cooked in clay oven", price: 770, veg: false },
//             { name: "Paneer Tikka", desc: "Marinated cottage cheese cooked in clay oven", price: 615, veg: true }
//           ]
//         }
//       },

//       "Lunch & Dinner": {
//         subcategories: {
//           "Soups & Salads": [
//             { name: "Tandoori Chicken Tikka Chaat", desc: "Tandoori chicken chunks with vegetables and tangy citrus dressing", price: 435, veg: false },
//             { name: "Greek Salad", desc: "Exotic vegetables in vinegar with feta cheese", price: 315, veg: true },
//             { name: "Roasted Tomato Basil Soup", desc: "Oven-roasted tomatoes flavoured with celery and fresh basil", price: 265, veg: true },
//             { name: "Sweet Corn Soup - Veg", desc: "Pleasant flavour of corn", price: 285, veg: true },
//             { name: "Sweet Corn Soup - Non-Veg", desc: "Pleasant flavour of corn", price: 325, veg: false },
//             { name: "Manchow Soup - Veg", desc: "Hot & spicy soup", price: 285, veg: true },
//             { name: "Manchow Soup - Non-Veg", desc: "Hot & spicy soup", price: 325, veg: false }
//           ],
//           "Combo Meals - Vegetarian": [
//             { name: "Western Combo - Veg", desc: "Cheese balls, tossed salad, veg stew, french fries, herb rice, garlic bread and dessert of the day", price: 775, veg: true },
//             { name: "Biryani And Kebab Combo - Veg", desc: "Vegetable biryani, paneer tikka, raita and dessert of the day", price: 775, veg: true },
//             { name: "Regional Veg Combo", desc: "Batata vada, zunka bhakri, paneer kolhapuri, dal varan with masala bath, barli vangi, kukum masala sharbat & dessert", price: 776, veg: true },
//             { name: "Indian Combo - Veg", desc: "Paneer tikka, kadhai veg, aloo jeera, dal tadka, steam rice, tandoori roti, dessert of the day", price: 775, veg: true }
//           ],
//           "Combo Meals - Non-Vegetarian": [
//             { name: "Western Combo - Non-Veg", desc: "Fish Finger, Tossed Salad, Chicken Stroganoff, french fry, herbs rice, garlic bread and dessert of the day", price: 905, veg: false },
//             { name: "Biryani and Kebab Combo - Non-Veg", desc: "Chicken biryani, chicken tikka, raita and dessert of the day", price: 905, veg: false },
//             { name: "Regional Non-Veg Combo", desc: "Combination of fish koliwada, chicken kolhapuri, dal varan served with masala bath, bhakri and dessert", price: 905, veg: false },
//             { name: "Indian Combo - Non-Veg", desc: "Chicken malai tikka, kadai chicken, aloo jeera, dal tadka, steam rice, tandoori roti and dessert of the day", price: 905, veg: false },
//             { name: "Asian Combo - Non-Veg", desc: "Chicken sate, chicken thai curry with rice or egg noodles with chicken chilly and dessert of the day", price: 905, veg: false }
//           ],
//           "Main Course": [
//             { name: "Mix Veg Curry", desc: "Vegetables cooked with freshly grounded spices", price: 550, veg: true },
//             { name: "Veg Kadai", desc: "Vegetables tempered with tomatoes, onions and green chillies in Indian wok", price: 550, veg: true },
//             { name: "Aloo Gobi Adraki", desc: "Potatoes and cauliflower tempered with ginger and Indian spices", price: 515, veg: true },
//             { name: "Paneer Butter Masala", desc: "Fresh cottage cheese simmered in rich tomato and cream curry", price: 575, veg: true },
//             { name: "Mutton Rogan Josh", desc: "Traditional delicacy from Kashmir", price: 785, veg: false },
//             { name: "Radai Chicken", desc: "Chicken tempered with tomatoes, onions and green chillies in Indian wok", price: 785, veg: false },
//             { name: "Pasta With Choice Of Sauce - Veg", desc: "Penne or fusilli pasta in rich tomato or cheese sauce", price: 480, veg: true },
//             { name: "Pasta With Choice Of Sauce - Non-Veg", desc: "Penne or fusilli pasta in rich tomato or cheese sauce", price: 580, veg: false },
//             { name: "Chicken Butter Masala", desc: "Fine rich cooked tomato with tandoori chicken", price: 835, veg: false }
//           ]
//         }
//       },

//       "Sides": {
//         subcategories: {
//           "Rice & Breads": [
//             { name: "Biryani - Veg", desc: "Traditional fragrant Indian rice preparation served with raita", price: 545, veg: true },
//             { name: "Biryani - Non-Veg", desc: "Traditional fragrant Indian rice preparation served with raita", price: 655, veg: false },
//             { name: "Choice Of Rice", desc: "Steamed rice / jeera rice / peas pulao — small / large", price: 200, veg: true },
//             { name: "Roti / Naan", desc: "Freshly baked roti or naan from the tandoor", price: 80, veg: true },
//             { name: "Kulcha / Paratha / Garlic Naan", desc: "Choice of kulcha, paratha or garlic naan", price: 140, veg: true }
//           ],
//           "Lentils & Accompaniments": [
//             { name: "Dal Aap Ki Pasand", desc: "Choose from dal tadka, dal makhani or sambhar with vegetables", price: 410, veg: true },
//             { name: "Dal Khichdi", desc: "Wholesome and delicious meal — lentils cooked with rice and tempered with cumin", price: 410, veg: true }
//           ]
//         }
//       },

//       "Desserts": {
//         subcategories: {
//           "Sweet Endings": [
//             { name: "Hot Gulab Jamun", desc: "Deep-fried cottage cheese dumplings soaked in hot sugar syrup", price: 250, veg: true },
//             { name: "Moong Dal Halwa", desc: "Made with moong lentils, sugar, ghee and cardamom powder", price: 250, veg: true },
//             { name: "Nutty Brownie", desc: "Baked chocolate cake with nuts", price: 365, veg: true },
//             { name: "Pastry Of The Day", desc: "Chef's choice of freshly made pastry", price: 250, veg: true }
//           ]
//         }
//       }

//     }
//   }

// };

const menuData = {
  // ─────────────────────────────────────────────
// BEVERAGE MENU  (replace existing beverage key)
// ─────────────────────────────────────────────

beverage: {
  name: "Beverage Menu",
  categories: {

    "Conventional And Classic": {
      subcategories: {
        "Sparkling": [
          { name: "Bellini", desc: "Variants - Mellini, Rossini, Vanillin", price: 600, veg: true },
          { name: "Bucks Fizz", desc: "The quality - fratelli tilt, orange juice", price: 600, veg: true }
        ],
        "Golden": [
          { name: "Rob Roy", desc: "The stylish – jim beam, martini rosso", price: 550, veg: true },
          { name: "Whisky Sour", desc: "The original - jim beam, sweet & sour", price: 550, veg: true },
          { name: "Old Fashioned", desc: "So ubiquitous – jim beam, bitters", price: 550, veg: true },
          { name: "Mint Julip", desc: "Ultimate and leisurely – jim beam, lemon, mint sprig", price: 550, veg: true },
          { name: "Scofflaw", desc: "The unique one – jack daniel, martini extra dry, lemon juice, grenadine, bitters", price: 550, veg: true }
        ],
        "Magical": [
          { name: "Screwdriver", desc: "The classic – artic, orange juice", price: 450, veg: true },
          { name: "Black Russian", desc: "The cocktail – artic, kahlua", price: 450, veg: true },
          { name: "Sex On The Beach", desc: "Refreshing – artic, peach, orange juice, cranberry juice", price: 450, veg: true }
        ],
        "Nectar": [
          { name: "Cuba Libra", desc: "Natural companions – bacardi carta oro, coke", price: 450, veg: true },
          { name: "Planters Punch", desc: "The traditional - bacardi carta blanca, dark rum, grenadine dash, orange, pineapple", price: 450, veg: true },
          { name: "Rum Cooler", desc: "Fruity – bacardi black, banana crush, pineapple", price: 450, veg: true },
          { name: "Daiquiry", desc: "Variants - peach, watermelon, pomegranate", price: 450, veg: true }
        ],
        "Juniper": [
          { name: "Negroni", desc: "Aristocratic – greater than, campari, martini rosso", price: 450, veg: true },
          { name: "Gimlet", desc: "The ultimate – greater than, lime juice, syrup", price: 450, veg: true },
          { name: "Clover Club", desc: "The privileged one – greater than, egg white, lime juice, raspberry", price: 450, veg: true },
          { name: "Singapore Sling", desc: "Thirst quencher – greater than, marachino, lemon juice, grenadine, pineapple juice", price: 450, veg: true }
        ],
        "Agave": [
          { name: "Tequila Sunrise", desc: "Attractive one – desmond ji, grenadine, orange juice", price: 450, veg: true },
          { name: "Paloma", desc: "Exciting – desmond ji, grape juice, lime juice, topped with sparkling water", price: 450, veg: true },
          { name: "Jalisco Maid", desc: "Literary pun – desmond ji, mint spring, cucumber, sweet & sour", price: 450, veg: true },
          { name: "Brave Bull", desc: "Legacy – desmond ji khalua", price: 450, veg: true },
          { name: "Carolina", desc: "Hearty one – desmond ji, cinnamon, vanilla essence, grated nutmeg", price: 450, veg: true }
        ],
        "All In One": [
          { name: "Long Island Iced Tea", desc: "Long mix – artic, greater than, desmond ji, bacardi carta blanca, cointreau, cola", price: 650, veg: true }
        ]
      }
    },

    "Luxury Tini": {
      subcategories: {
        "Martini Specials": [
          { name: "Lemon And Basil Martini", desc: "Smirnoff, martini bianco, fresh basil, lemon", price: 500, veg: true },
          { name: "Thai Lemon Grass And Jalapeno Tini", desc: "Smirnoff, infused lemon grass and jalapeno", price: 500, veg: true },
          { name: "Watermelon Martini", desc: "Smirnoff, infused watermelon", price: 500, veg: true },
          { name: "Ananas And Thai Basil Tini", desc: "Smirnoff, infused barbequed pineapple, sweet basil", price: 500, veg: true },
          { name: "Cucumber And Mint Tini", desc: "Greater than, infused cucumber and mint", price: 500, veg: true },
          { name: "Granny Smith Appletini", desc: "Smirnoff, infused green apple, vanilla, demerara syrup", price: 500, veg: true },
          { name: "Orange Tini", desc: "Smirnoff, infused bitter orange peel, fresh mint", price: 500, veg: true }
        ]
      }
    },

    "Exotic Margarita": {
      subcategories: {
        "Margarita Specials": [
          { name: "Pearl Margarita", desc: "Sauza gold, triple sec, pomegranate, sweet & sour", price: 500, veg: true },
          { name: "Strawberry And Basil Margarita", desc: "Sauza silver, triple sec, fresh strawberry, basil crush", price: 500, veg: true },
          { name: "Peach Margarita", desc: "Sauza gold, triple sec, fruit puree, sweet & sour", price: 500, veg: true },
          { name: "Kafir Leaf Margarita", desc: "Sauza silver, thai kafir lime leaves, cointreau, sweet & sour", price: 500, veg: true },
          { name: "Alphonso Margarita", desc: "Sauza silver, cointreau, riped mango puree, sweet & sour", price: 500, veg: true }
        ]
      }
    },

    "All About Mojito": {
      subcategories: {
        "Mojito Specials": [
          { name: "Watermelon Mojito", desc: "Bacardi carta blanca, mint sprig, watermelon, club soda", price: 500, veg: true },
          { name: "Peach Mojito", desc: "Bacardi carta blanca, peach, mint sprig", price: 500, veg: true },
          { name: "Mango Mojito", desc: "Bacardi silver, ripe mango puree, mint sprig, sweet & sour", price: 500, veg: true },
          { name: "Zesty Orange Mojito", desc: "Bacardi carta blanca, orange chunks, mint, sweet & sour", price: 500, veg: true },
          { name: "Green Tea Mojito", desc: "Bacardi carta blanca, brewed green tea, mint, sweet & sour", price: 500, veg: true },
          { name: "Classic Mojito", desc: "Bacardi carta blanca, lime chunks, castor sugar syrup, mint leaves, sparkling water", price: 500, veg: true },
          { name: "Smokey Lychee Mojito", desc: "Bacardi carta blanca, lychees, lime chunks, mint, sparkling water", price: 500, veg: true }
        ]
      }
    },

    "Shooters": {
      subcategories: {
        "Shooter Specials": [
          { name: "B52", desc: "Kahlua, baileys, cointreau", price: 600, veg: true },
          { name: "Slippery Nipple", desc: "Sambuca, baileys", price: 600, veg: true },
          { name: "Baileys Bitch", desc: "Baileys, banana, artic, whipped cream", price: 600, veg: true },
          { name: "Jager Bomb", desc: "Jägermeister, red bull", price: 600, veg: true },
          { name: "Three Wise Men", desc: "Jack daniels, jim beam, johnnie walker black", price: 600, veg: true }
        ]
      }
    },

    "World Of Whiskey": {
      subcategories: {
        "Single Malt": [
          { name: "Singleton 12 YO", desc: "Premium single malt Scotch whisky", price: 550, veg: true },
          { name: "Talisker 10 YO", desc: "Island single malt Scotch whisky", price: 550, veg: true },
          { name: "Glenfiddich 12 YO", desc: "Classic Speyside single malt Scotch whisky", price: 550, veg: true },
          { name: "The Glenlivit 12 YO", desc: "Smooth Speyside single malt Scotch whisky", price: 550, veg: true }
        ],
        "Premium Scotch": [
          { name: "Johnnie Walker Blue Label", desc: "The pinnacle of blended Scotch whisky", price: 1600, veg: true },
          { name: "Johnnie Walker Double Black", desc: "Intensely smoky blended Scotch whisky", price: 500, veg: true },
          { name: "Johnnie Walker Black Label", desc: "Classic 12-year aged blended Scotch", price: 450, veg: true },
          { name: "Monkey Shoulder", desc: "Triple malt blended Scotch whisky", price: 450, veg: true },
          { name: "Teacher's 50", desc: "Blended Scotch whisky", price: 300, veg: true },
          { name: "Black Dog Triple Gold", desc: "Triple gold reserve blended Scotch", price: 300, veg: true },
          { name: "Chivas Regal", desc: "Iconic blended Scotch whisky", price: 450, veg: true },
          { name: "Black And White", desc: "Classic blended Scotch whisky", price: 275, veg: true }
        ],
        "Regular Scotch": [
          { name: "Johnnie Walker Red Label", desc: "The world's best-selling Scotch whisky", price: 300, veg: true },
          { name: "Oaksmith Gold", desc: "Blended Scotch whisky", price: 200, veg: true },
          { name: "100 Pipers", desc: "Smooth blended Scotch whisky", price: 200, veg: true },
          { name: "Teacher's Highland Cream", desc: "Rich and smoky blended Scotch", price: 200, veg: true },
          { name: "Black Dog Centenary", desc: "Smooth blended Scotch whisky", price: 200, veg: true }
        ],
        "Bourbon": [
          { name: "Jim Beam", desc: "America's finest bourbon whiskey", price: 350, veg: true }
        ],
        "Tennessee": [
          { name: "Jack Daniel No 7", desc: "Classic Tennessee sipping whiskey", price: 450, veg: true }
        ],
        "Irish": [
          { name: "Jameson", desc: "Triple distilled Irish whiskey", price: 450, veg: true }
        ]
      }
    },

    "Spirits": {
      subcategories: {
        "Vodka": [
          { name: "Grey Goose", desc: "Premium French wheat vodka", price: 450, veg: true },
          { name: "Artic", desc: "Italian grain vodka", price: 200, veg: true },
          { name: "Ciroc", desc: "French grape-based premium vodka", price: 450, veg: true },
          { name: "Sky", desc: "American grain vodka", price: 350, veg: true },
          { name: "Belvedere", desc: "Polish rye premium vodka", price: 450, veg: true },
          { name: "Absolut Blue", desc: "Swedish winter wheat vodka", price: 350, veg: true },
          { name: "Smirnoff Red", desc: "Classic triple distilled vodka", price: 200, veg: true }
        ],
        "Rum": [
          { name: "Bacardi Diez 10 YO", desc: "Aged premium Bacardi rum", price: 650, veg: true },
          { name: "Bacardi Ocho 8 YO", desc: "8-year aged Bacardi rum", price: 550, veg: true },
          { name: "Bacardi Aneho 4 YO", desc: "4-year aged Bacardi rum", price: 450, veg: true },
          { name: "Bacardi Carta Oro", desc: "Golden aged Bacardi rum", price: 200, veg: true },
          { name: "Bacardi Carta Blanca", desc: "Classic white Bacardi rum", price: 200, veg: true },
          { name: "Bacardi Black", desc: "Rich dark Bacardi rum", price: 200, veg: true },
          { name: "Cabo", desc: "Smooth rum spirit", price: 200, veg: true },
          { name: "Old Monk", desc: "Iconic Indian dark rum", price: 200, veg: true }
        ],
        "Gin": [
          { name: "Hendricks", desc: "Scottish gin with rose and cucumber", price: 450, veg: true },
          { name: "Greater Than", desc: "Indian craft gin", price: 200, veg: true },
          { name: "Bombay Sapphire", desc: "Classic London dry gin", price: 450, veg: true },
          { name: "Roku", desc: "Japanese craft gin with six botanicals", price: 650, veg: true },
          { name: "Hapusa", desc: "Himalayan dry gin with juniper", price: 450, veg: true }
        ],
        "Tequila": [
          { name: "Corralejo Blanco", desc: "Premium Mexican silver tequila", price: 550, veg: true },
          { name: "Villa Vercelli", desc: "Silver tequila", price: 350, veg: true },
          { name: "Desmond Ji", desc: "Indian agave spirit", price: 300, veg: true }
        ],
        "Cognac": [
          { name: "Henessey VSOP", desc: "Very superior old pale Hennessy cognac", price: 800, veg: true },
          { name: "Henessey VS", desc: "Very special Hennessy cognac", price: 650, veg: true },
          { name: "Honeey Bee", desc: "Indian brandy", price: 200, veg: true }
        ],
        "Liqueur": [
          { name: "Jagermister", desc: "German herbal liqueur", price: 500, veg: true },
          { name: "Absinthe", desc: "Anise-flavoured spirit", price: 500, veg: true },
          { name: "Baileys Irish Cream", desc: "Irish whiskey and cream liqueur", price: 300, veg: true },
          { name: "Sambuca", desc: "Italian anise liqueur", price: 500, veg: true },
          { name: "Kahlua", desc: "Mexican coffee liqueur", price: 300, veg: true }
        ],
        "Feni": [
          { name: "Cashew Feni", desc: "Traditional Goan cashew feni", price: 200, veg: true },
          { name: "Palm Feni", desc: "Traditional Goan palm feni", price: 200, veg: true }
        ]
      }
    },

    "Aperitif & Beer": {
      subcategories: {
        "Aperitif": [
          { name: "Campari", desc: "Italian bitter aperitif", price: 300, veg: true },
          { name: "Martini Rosso", desc: "Sweet red vermouth", price: 300, veg: true },
          { name: "Martini Extra Dry", desc: "Dry white vermouth", price: 300, veg: true },
          { name: "Martini Bianco", desc: "Sweet white vermouth", price: 300, veg: true },
          { name: "Martini Fierro", desc: "Italian vermouth aperitivo", price: 300, veg: true }
        ],
        "Beer": [
          { name: "Corona 355 ml", desc: "Mexican lager beer", price: 300, veg: true },
          { name: "Heiniken 330 ml", desc: "Dutch premium lager", price: 255, veg: true },
          { name: "Kingfisher Ultra 330 ml", desc: "Indian premium lager", price: 175, veg: true },
          { name: "Bira 91", desc: "Indian craft beer", price: 175, veg: true },
          { name: "Bira 91 Summer Biond", desc: "Indian wheat craft beer", price: 125, veg: true },
          { name: "Hoegaarden 330 ml", desc: "Belgian witbier", price: 300, veg: true },
          { name: "Budweiser 330 ml", desc: "American lager", price: 175, veg: true },
          { name: "Kingfisher 330 ml", desc: "Classic Indian lager", price: 125, veg: true },
          { name: "Brezzer 275 ml", desc: "Flavoured alcoholic beverage", price: 200, veg: true }
        ]
      }
    },

    "Non-Alcoholic Beverage": {
      subcategories: {
        "Refreshing Mocktails": [
          { name: "Nectar", desc: "Guava juice, lemon juice, vanilla syrup, topped with lemonade", price: 250, veg: true },
          { name: "Sensation", desc: "Litchi juice, fresh lime, strawberry crush", price: 250, veg: true },
          { name: "Cardinal Punch", desc: "Cranberry juice, orange juice, lemon, ginger ale", price: 250, veg: true },
          { name: "Refresher", desc: "Mint leaves, lemon chunks, lemonade", price: 250, veg: true },
          { name: "Cinderella", desc: "Orange juice, pineapple juice, lime juice, grenadine syrup with dash of soda", price: 250, veg: true },
          { name: "Sangria", desc: "Sliced apple, pineapple, orange, grape juice and club soda", price: 250, veg: true }
        ],
        "Teetotaller's Pick": [
          { name: "Virgin Mojito", desc: "Mango and lychee / Coconut and berries", price: 350, veg: true },
          { name: "Virgin Margarita", desc: "Thai jasmin margarita / Lavender", price: 350, veg: true },
          { name: "Amaretto And Maple Collins", desc: "Non-alcoholic amaretto inspired collins", price: 350, veg: true },
          { name: "Virgin Negroni Spritz", desc: "Non-alcoholic negroni spritz", price: 350, veg: true },
          { name: "Apple Pie", desc: "Virgin amaro surprise", price: 350, veg: true }
        ],
        "Soft Beverages": [
          { name: "Freshly Squeezed Seasonal Juice", desc: "Choice of fresh seasonal fruit juice", price: 200, veg: true },
          { name: "Tonic", desc: "Chilled tonic water", price: 125, veg: true },
          { name: "Iced Tea", desc: "Chilled brewed iced tea", price: 175, veg: true },
          { name: "Ginger Ale", desc: "Refreshing ginger ale", price: 125, veg: true },
          { name: "Aerated Beverages", desc: "Choice of soft drinks", price: 110, veg: true },
          { name: "Fresh Lime Soda / Water", desc: "Fresh lime with soda or water", price: 125, veg: true },
          { name: "Red Bull", desc: "Energy drink", price: 225, veg: true },
          { name: "Packaged Drinking Water 750 ml", desc: "Packaged mineral water", price: 110, veg: true }
        ]
      }
    }

  }
},


// ─────────────────────────────────────────────
// GOURMET EXPRESS MENU  (new key)
// ─────────────────────────────────────────────

gourmetexpress: {
  name: "Gourmet Express Menu",
  categories: {

    "Breakfast Selections": {
      timing: "07:30 am – 10:30 am",
      subcategories: {
        "Baker's Basket & Cereals": [
          { name: "Baker's Basket", desc: "Choice of 3 pieces of muffins and toast served with butter and preserves", price: 300, veg: true },
          { name: "Choice Of Cereals", desc: "Choose from corn flakes, wheat flakes, or choco flakes with hot milk or cold milk", price: 250, veg: true },
          { name: "Seasonal Fresh Fruits Platter", desc: "Choice of fresh seasonal fruits", price: 290, veg: true },
          { name: "Seasonal Fresh Fruits Juice", desc: "Choose from fresh seasonal fruits", price: 255, veg: true }
        ],
        "Egg Dishes": [
          { name: "Eggs To Order", desc: "2 eggs cooked to your choice served with rosti, toast and preserves", price: 315, veg: false }
        ],
        "Indian Breakfast": [
          { name: "Idli / Vada / Uttapam", desc: "Served with sambar and coconut chutney", price: 260, veg: true },
          { name: "Choice Of Paratha", desc: "Aloo / gobi / paneer paratha served with curd and pickle", price: 405, veg: true },
          { name: "South Indian Combo", desc: "Idli & medu vada served with sambar and coconut chutney", price: 525, veg: true },
          { name: "Indian Combo", desc: "2 pieces of aloo paratha, 2 pieces of idly, 1 vada, fresh fruits platter served with accompaniment", price: 605, veg: true }
        ],
        "Beverages": [
          { name: "Tea / Coffee", desc: "Choice of tea or coffee", price: 150, veg: true },
          { name: "Turmeric Milk", desc: "Warm turmeric-infused milk", price: 150, veg: true },
          { name: "Herbal Tea", desc: "Ginger, basil, cinnamon, jaggery and pepper tea without milk", price: 150, veg: true }
        ]
      }
    },

    "Appetizers & Comfort Food": {
       timing: "11:00 am – 10:30 pm",
      subcategories: {
        "Vegetarian Starters": [
          { name: "Paneer Chilli Dry", desc: "Paneer tossed with onions, capsicums and fresh chillies", price: 625, veg: true },
          { name: "Chilli Cheese Toast", desc: "Toasted fresh bread grilled with cheese, fresh green chillies and coriander", price: 520, veg: true },
          { name: "Cauliflower Or Mushroom 65", desc: "Marinated & deep-fried cauliflower or mushroom", price: 575, veg: true },
          { name: "Jumbo Club Sandwich Combo", desc: "Double decker sandwich with tomato, cucumber, grilled vegetables, cheese served with french fry and pastry of the day", price: 600, veg: true },
          { name: "Veg Burger Combo", desc: "Crispy fried vegetable patty with lettuce, tomato and cheese served with French fries and pastry of the day", price: 600, veg: true },
          { name: "Make Your Own Pizza - Veg", desc: "Please ask for the toppings available", price: 590, veg: true },
          { name: "Desi Pizza - Veg", desc: "Sliced paneer tikka on pizza base", price: 590, veg: true }
        ],
        "Non-Vegetarian Starters": [
          { name: "Chilli Chicken", desc: "Chicken tossed with onions, capsicums and fresh chillies", price: 805, veg: false },
          { name: "Fish Fingers", desc: "Fish fillets marinated and crisp-fried served with french fries and creamy mustard mayonnaise", price: 800, veg: false },
          { name: "Chicken Burger Combo", desc: "Marinated grilled chicken, cheese in a soft bun served with French fries and pastry of the day", price: 585, veg: false },
          { name: "Chicken Club Sandwich Combo", desc: "Chicken, fried egg, tomato lettuce and cheese served with French fries and pastry of the day", price: 575, veg: false },
          { name: "Make Your Own Pizza - Non-Veg", desc: "Please ask for the toppings available", price: 735, veg: false },
          { name: "Desi Pizza - Non-Veg", desc: "Sliced chicken tikka on pizza base", price: 735, veg: false }
        ]
      }
    },

    "Kebabs": {
      timing: "Lunch 12:30 pm – 03:30 pm  |  Dinner 07:30 pm – 10:30 pm",
      subcategories: {
        "Clay Oven Specialties": [
          { name: "Chicken Tikka", desc: "Marinated chicken cooked in clay oven", price: 735, veg: false },
          { name: "Fish Tikka", desc: "Marinated fish fillets cooked in clay oven", price: 770, veg: false },
          { name: "Paneer Tikka", desc: "Marinated cottage cheese cooked in clay oven", price: 615, veg: true }
        ]
      }
    },

    "Lunch & Dinner": {
      timing: "12:30 pm – 03:30 pm  &  07:30 pm – 10:30 pm",
      subcategories: {
        "Soups & Salads": [
          { name: "Tandoori Chicken Tikka Chaat", desc: "Tandoori chicken chunks with vegetables and tangy citrus dressing", price: 435, veg: false },
          { name: "Greek Salad", desc: "Exotic vegetables in vinegar with feta cheese", price: 315, veg: true },
          { name: "Roasted Tomato Basil Soup", desc: "Oven-roasted tomatoes flavoured with celery and fresh basil", price: 265, veg: true },
          { name: "Sweet Corn Soup - Veg", desc: "Pleasant flavour of corn", price: 285, veg: true },
          { name: "Sweet Corn Soup - Non-Veg", desc: "Pleasant flavour of corn", price: 325, veg: false },
          { name: "Manchow Soup - Veg", desc: "Hot & spicy soup", price: 285, veg: true },
          { name: "Manchow Soup - Non-Veg", desc: "Hot & spicy soup", price: 325, veg: false }
        ],
        "Combo Meals - Vegetarian": [
          { name: "Western Combo - Veg", desc: "Cheese balls, tossed salad, veg stew, french fries, herb rice, garlic bread and dessert of the day", price: 775, veg: true },
          { name: "Biryani And Kebab Combo - Veg", desc: "Vegetable biryani, paneer tikka, raita and dessert of the day", price: 775, veg: true },
          { name: "Regional Veg Combo", desc: "Batata vada, zunka bhakri, paneer kolhapuri, dal varan with masala bath, barli vangi, kukum masala sharbat & dessert", price: 776, veg: true },
          { name: "Indian Combo - Veg", desc: "Paneer tikka, kadhai veg, aloo jeera, dal tadka, steam rice, tandoori roti, dessert of the day", price: 775, veg: true }
        ],
        "Combo Meals - Non-Vegetarian": [
          { name: "Western Combo - Non-Veg", desc: "Fish Finger, Tossed Salad, Chicken Stroganoff, french fry, herbs rice, garlic bread and dessert of the day", price: 905, veg: false },
          { name: "Biryani and Kebab Combo - Non-Veg", desc: "Chicken biryani, chicken tikka, raita and dessert of the day", price: 905, veg: false },
          { name: "Regional Non-Veg Combo", desc: "Combination of fish koliwada, chicken kolhapuri, dal varan served with masala bath, bhakri and dessert", price: 905, veg: false },
          { name: "Indian Combo - Non-Veg", desc: "Chicken malai tikka, kadai chicken, aloo jeera, dal tadka, steam rice, tandoori roti and dessert of the day", price: 905, veg: false },
          { name: "Asian Combo - Non-Veg", desc: "Chicken sate, chicken thai curry with rice or egg noodles with chicken chilly and dessert of the day", price: 905, veg: false }
        ],
        "Main Course": [
          { name: "Mix Veg Curry", desc: "Vegetables cooked with freshly grounded spices", price: 550, veg: true },
          { name: "Veg Kadai", desc: "Vegetables tempered with tomatoes, onions and green chillies in Indian wok", price: 550, veg: true },
          { name: "Aloo Gobi Adraki", desc: "Potatoes and cauliflower tempered with ginger and Indian spices", price: 515, veg: true },
          { name: "Paneer Butter Masala", desc: "Fresh cottage cheese simmered in rich tomato and cream curry", price: 575, veg: true },
          { name: "Mutton Rogan Josh", desc: "Traditional delicacy from Kashmir", price: 785, veg: false },
          { name: "Kadai Chicken", desc: "Chicken tempered with tomatoes, onions and green chillies in Indian wok", price: 785, veg: false },
          { name: "Pasta With Choice Of Sauce - Veg", desc: "Penne or fusilli pasta in rich tomato or cheese sauce", price: 480, veg: true },
          { name: "Pasta With Choice Of Sauce - Non-Veg", desc: "Penne or fusilli pasta in rich tomato or cheese sauce", price: 580, veg: false },
          { name: "Chicken Butter Masala", desc: "Fine rich cooked tomato with tandoori chicken", price: 835, veg: false }
        ]
      }
    },

    "Sides": {
      timing: "12:30 pm – 03:30 pm  &  07:30 pm – 10:30 pm",
      subcategories: {
        "Rice & Breads": [
          { name: "Biryani - Veg", desc: "Traditional fragrant Indian rice preparation served with raita", price: 545, veg: true },
          { name: "Biryani - Non-Veg", desc: "Traditional fragrant Indian rice preparation served with raita", price: 655, veg: false },
          { name: "Choice Of Rice", desc: "Steamed rice / jeera rice / peas pulao", price: 200, veg: true },
          { name: "Roti / Naan", desc: "Freshly baked roti or naan from the tandoor", price: 80, veg: true },
          { name: "Kulcha / Paratha / Garlic Naan", desc: "Choice of kulcha, paratha or garlic naan", price: 140, veg: true }
        ],
        "Lentils & Accompaniments": [
          { name: "Dal Aap Ki Pasand", desc: "Choose from dal tadka, dal makhani or sambhar with vegetables", price: 410, veg: true },
          { name: "Dal Khichdi", desc: "Wholesome and delicious meal — lentils cooked with rice and tempered with cumin", price: 410, veg: true }
        ]
      }
    },

    "Desserts": {
      timing: null,
      subcategories: {
        "Sweet Endings": [
          { name: "Hot Gulab Jamun", desc: "Deep-fried cottage cheese dumplings soaked in hot sugar syrup", price: 250, veg: true },
          { name: "Moong Dal Halwa", desc: "Made with moong lentils, sugar, ghee and cardamom powder", price: 250, veg: true },
          { name: "Nutty Brownie", desc: "Baked chocolate cake with nuts", price: 365, veg: true },
          { name: "Pastry Of The Day", desc: "Chef's choice of freshly made pastry", price: 250, veg: true }
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

// function renderMenu(menuKey) {
//   const menu = menuData[menuKey];
//   const container = document.getElementById("menuContainer");
//   if (!menu) return;

//   container.innerHTML = "";

//   Object.entries(menu.categories).forEach(([categoryName, categoryData]) => {
//     const categorySection = document.createElement("section");
//     categorySection.className = "menu-category";

//     // Category title
//     const categoryTitle = document.createElement("h2");
//     categoryTitle.className = "category-bold-title";
//     categoryTitle.textContent = categoryName;
//     categorySection.appendChild(categoryTitle);

//     const divider = document.createElement("hr");
//     divider.className = "category-divider";
//     categorySection.appendChild(divider);

//     Object.entries(categoryData.subcategories).forEach(([subName, items]) => {
//       // Subcategory header with toggle
//     const subHeader = document.createElement("div");
//       subHeader.className = "subcategory-header";
//       subHeader.setAttribute("data-menu", menuKey);
//       subHeader.setAttribute("data-category", categoryName);
//       subHeader.setAttribute("data-subcategory", subName);
//       subHeader.innerHTML = `
//         <span class="subcategory-label">${subName}</span>
//         <span class="subcategory-toggle">+</span>
//       `;
//       categorySection.appendChild(subHeader);

//       // 3-column card grid — hidden by default
//       const grid = document.createElement("div");
//       grid.className = "items-grid";
//       grid.setAttribute("data-menu", menuKey);
//       grid.setAttribute("data-category", categoryName);
//       grid.setAttribute("data-subcategory", subName);
//       grid.style.display = "none";

//       items.forEach(item => {
//         const card = document.createElement("div");
//         card.className = "menu-card";
//         const dotClass = item.veg ? "veg-dot" : "nonveg-dot";

//         card.innerHTML = `
//           <div class="card-dot-row">
//             <span class="${dotClass}"></span>
//           </div>
//           <div class="card-name">${item.name}</div>
//           <div class="card-meta">${item.grams}g • ${item.calories} cal • ₹${item.price}</div>
//           <div class="card-desc">${item.desc}</div>
//         `;
//         grid.appendChild(card);
//       });

//       // Toggle
//       subHeader.addEventListener("click", () => {
//         const isOpen = grid.style.display !== "none";
//         grid.style.display = isOpen ? "none" : "grid";
//         subHeader.querySelector(".subcategory-toggle").textContent = isOpen ? "+" : "−";
//       });

//       categorySection.appendChild(grid);
//     });

//     container.appendChild(categorySection);
//   });
// }
// function renderMenu(menuKey) {
//   const menu = menuData[menuKey];
//   const container = document.getElementById("menuContainer");
//   if (!menu) return;

//   container.innerHTML = "";

//   Object.entries(menu.categories).forEach(([categoryName, categoryData]) => {
//     const categorySection = document.createElement("section");
//     categorySection.className = "menu-category";

//     const categoryTitle = document.createElement("h2");
//     categoryTitle.className = "category-bold-title";
//     categoryTitle.textContent = categoryName;
//     categorySection.appendChild(categoryTitle);

//     const divider = document.createElement("hr");
//     divider.className = "category-divider";
//     categorySection.appendChild(divider);

//     Object.entries(categoryData.subcategories).forEach(([subName, items]) => {
//       const subHeader = document.createElement("div");
//       subHeader.className = "subcategory-header";
//       subHeader.setAttribute("data-menu", menuKey);
//       subHeader.setAttribute("data-category", categoryName);
//       subHeader.setAttribute("data-subcategory", subName);
//       subHeader.innerHTML = `
//         <span class="subcategory-label">${subName}</span>
//         <span class="subcategory-toggle">+</span>
//       `;
//       categorySection.appendChild(subHeader);

//       const grid = document.createElement("div");
//       grid.className = "items-grid";
//       grid.setAttribute("data-menu", menuKey);
//       grid.setAttribute("data-category", categoryName);
//       grid.setAttribute("data-subcategory", subName);
//       grid.style.display = "none";

//       items.forEach(item => {
//         const card = document.createElement("div");
//         card.className = "menu-card";
//         const dotClass = item.veg ? "veg-dot" : "nonveg-dot";

//         // Build meta string conditionally
//         const metaParts = [];
//         if (item.grams != null) metaParts.push(`${item.grams}g`);
//         if (item.calories != null) metaParts.push(`${item.calories} cal`);
//         metaParts.push(`₹${item.price}`);
//         const metaString = metaParts.join(" • ");

//         card.innerHTML = `
//           <div class="card-dot-row">
//             <span class="${dotClass}"></span>
//           </div>
//           <div class="card-name">${item.name}</div>
//           <div class="card-meta">${metaString}</div>
//           <div class="card-desc">${item.desc}</div>
//         `;
//         grid.appendChild(card);
//       });

//       subHeader.addEventListener("click", () => {
//         const isOpen = grid.style.display !== "none";
//         grid.style.display = isOpen ? "none" : "grid";
//         subHeader.querySelector(".subcategory-toggle").textContent = isOpen ? "+" : "−";
//       });

//       categorySection.appendChild(grid);
//     });

//     container.appendChild(categorySection);
//   });
// }

function renderMenu(menuKey) {
  const menu = menuData[menuKey];
  const container = document.getElementById("menuContainer");
  if (!menu) return;

  container.innerHTML = "";

  Object.entries(menu.categories).forEach(([categoryName, categoryData]) => {
    const categorySection = document.createElement("section");
    categorySection.className = "menu-category";

    const categoryTitle = document.createElement("h2");
    categoryTitle.className = "category-bold-title";
    categoryTitle.textContent = categoryName;
    categorySection.appendChild(categoryTitle);
    if (categoryData.timing) {
  const timingEl = document.createElement("p");
  timingEl.className = "category-timing";
  timingEl.textContent = categoryData.timing;
  categorySection.appendChild(timingEl);
}

    const divider = document.createElement("hr");
    divider.className = "category-divider";
    categorySection.appendChild(divider);

    Object.entries(categoryData.subcategories).forEach(([subName, items]) => {
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

        // Build extra meta (grams + calories only, no price here)
        const metaParts = [];
        if (item.grams != null) metaParts.push(`${item.grams}g`);
        if (item.calories != null) metaParts.push(`${item.calories} cal`);
        const metaString = metaParts.join(" • ");

        card.innerHTML = `
          <div class="card-dot-row">
            <span class="${dotClass}"></span>
          </div>
          <div class="card-name-price">
            <span class="card-name">${item.name}</span>
            <span class="card-price">₹${item.price}</span>
          </div>
          ${metaString ? `<div class="card-meta">${metaString}</div>` : ""}
          <div class="card-desc">${item.desc}</div>
        `;
        grid.appendChild(card);
      });

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


