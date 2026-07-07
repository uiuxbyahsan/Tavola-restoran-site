export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  signature?: boolean;
};

export type MenuSubsection = {
  title?: string;
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  number: string;
  label: string;
  subsections: MenuSubsection[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: "salads",
    number: "01",
    label: "Salads",
    subsections: [
      {
        items: [
          { name: "Cabbage Salad", price: "5 KM" },
          { name: "Lettuce Salad", price: "6 KM" },
          { name: "Tomato Salad", price: "6 KM" },
          { name: "Rocket Salad", price: "8 KM" },
          { name: "Mixed Salad", price: "8 KM" },
          { name: "Mixed Salad with Cheese", price: "9/10 KM", description: "Šopska" },
          { name: "Insalata Italia", price: "14/16 KM", description: "Egg, house dressing" },
          {
            name: "Insalata Della Casa",
            price: "18/20 KM",
            description: "Grilled chicken breast, house dressing",
          },
          {
            name: "Insalata Tavola",
            price: "20/24 KM",
            description:
              "Veal, cheese, olives, onion, pepper, cucumber, tomato, garlic, spicy dressing",
          },
          {
            name: "Insalata Veneziana",
            price: "21/26 KM",
            description: "Beefsteak, mushrooms, house dressing",
          },
          {
            name: "Insalata Fantasia",
            price: "20/23 KM",
            description: "Tuna, salmon, house dressing",
          },
          {
            name: "Insalata di Branzino",
            price: "18/20 KM",
            description: "Sea bass, rocket, spinach, lime-rosemary marinade",
          },
          {
            name: "Insalata di Manzo",
            price: "28/30 KM",
            description: "Marinated tenderloin, rocket, fried sheep cheese",
            signature: true,
          },
          {
            name: "Insalata “Miamare”",
            price: "28/33 KM",
            description: "Rocket, scampi",
          },
        ],
      },
    ],
  },
  {
    id: "appetizers",
    number: "02",
    label: "Appetizers",
    subsections: [
      {
        title: "Cold Appetizers",
        items: [
          { name: "Bruschetta", price: "6/7 KM" },
          { name: "Olives", price: "7/8 KM" },
          { name: "Olives with Truffle Oil", price: "8/10 KM" },
          { name: "Livanjski Cheese", price: "10/12 KM", description: "Olives, onion, olive oil" },
          { name: "Caprese", price: "13/14 KM" },
          { name: "Smoked Ham / Prosciutto", price: "17/21 KM" },
          {
            name: "Cold Platter",
            price: "20/25 KM",
            description: "Cheese, caprese, prosciutto, olives",
          },
          { name: "Cheese Plate", price: "18/22 KM" },
          { name: "Vitello Tonnato", price: "19/22 KM" },
          { name: "Beef Carpaccio", price: "19/23 KM" },
          { name: "Seafood Salad", price: "21/25 KM" },
          { name: "Salmon Carpaccio", price: "18/22 KM" },
          { name: "Tuna Carpaccio", price: "18/21 KM" },
          { name: "Octopus Carpaccio", price: "21/24 KM" },
          { name: "Octopus Salad", price: "28/30 KM" },
        ],
      },
      {
        title: "Hot Appetizers & Risotto",
        items: [
          { name: "Grilled Mushrooms", price: "12/13 KM" },
          { name: "Grilled Vegetables", price: "13/14 KM" },
          { name: "Risotto with Vegetables", price: "16/17 KM" },
          { name: "Risotto with Chicken & Mushrooms", price: "18/20 KM" },
          { name: "Risotto Gamberetti", price: "20/24 KM" },
          { name: "Black Seafood Risotto", price: "24/27 KM" },
          { name: "Scampi Risotto", price: "30/35 KM" },
        ],
      },
    ],
  },
  {
    id: "soups",
    number: "03",
    label: "Soups",
    subsections: [
      {
        items: [
          { name: "Minestrone Soup", price: "7 KM" },
          { name: "Tomato Soup", price: "7 KM" },
          { name: "Pumpkin Soup", price: "7 KM" },
          { name: "Chicken Soup", price: "8 KM" },
          { name: "Porcini Mushroom Soup", price: "9 KM" },
          { name: "Veal Soup", price: "10 KM" },
          { name: "Goulash Soup", price: "11 KM" },
        ],
      },
    ],
  },
  {
    id: "pasta",
    number: "04",
    label: "Pasta",
    subsections: [
      {
        title: "Spaghetti",
        items: [
          { name: "Napoli", price: "15/16 KM" },
          { name: "Aglio Olio", price: "15/16 KM" },
          { name: "Puttanesca", price: "17/19 KM" },
          { name: "Tonno", price: "18/20 KM" },
          { name: "Carbonara", price: "18/20 KM" },
          { name: "Bolognese", price: "19/22 KM" },
          { name: "Frutti di Mare", price: "24 KM" },
          { name: "Vesuvio", price: "26 KM" },
          { name: "Pesto al Tartufo", price: "28 KM" },
        ],
      },
      {
        title: "Tagliatelle",
        items: [
          { name: "Alle Zucchine", price: "18 KM" },
          { name: "Al Funghi", price: "19 KM" },
          { name: "Pesto Genovese", price: "20 KM" },
          { name: "Ai Porcini", price: "24 KM" },
          { name: "Gamberetti", price: "25 KM" },
          { name: "Al Salmone", price: "27 KM" },
          { name: "Primavera", price: "28 KM" },
          { name: "Scampi", price: "35 KM" },
          { name: "Tagliata", price: "42 KM", description: "300g" },
        ],
      },
      {
        title: "Penne",
        items: [
          { name: "All’Arrabbiata", price: "16 KM" },
          { name: "Con Broccoli", price: "18 KM" },
          { name: "Alla Veneziana", price: "18 KM" },
          { name: "Ai Formaggi", price: "19 KM" },
          { name: "Della Casa", price: "25 KM" },
        ],
      },
      {
        title: "Tortellini",
        items: [
          { name: "Napoletana", price: "21 KM" },
          { name: "Gorgonzola", price: "21 KM" },
        ],
      },
      {
        title: "Homemade Pasta",
        items: [
          {
            name: "Gnocchi al Gorgonzola",
            price: "20 KM",
            signature: true,
          },
          { name: "Gnocchi Della Nonna", price: "25 KM" },
        ],
      },
    ],
  },
  {
    id: "meat",
    number: "05",
    label: "Meat",
    subsections: [
      {
        title: "Veal & Scallopini",
        items: [
          { name: "Natural Veal Scallopini", price: "23 KM" },
          { name: "Veal in White Wine Sauce", price: "25 KM" },
          { name: "Veal with Mushrooms", price: "26 KM" },
          { name: "Veal with Lemon", price: "26 KM" },
          { name: "Veal Alla Casa", price: "27 KM" },
          { name: "Veal Parmigiana", price: "28 KM" },
        ],
      },
      {
        title: "Steaks",
        items: [
          { name: "Veal Steak Grill", price: "35 KM" },
          { name: "Siciliana Steak", price: "38 KM" },
          { name: "Veal Steak with Fried Onion", price: "39 KM" },
          { name: "Carne Mista", price: "40 KM", description: "300g" },
          { name: "Tagliata", price: "42 KM", description: "300g" },
          { name: "Steak with Mushroom Sauce", price: "42 KM" },
          { name: "Grilled Tenderloin", price: "46 KM", description: "300g" },
          { name: "Modenese Steak", price: "47 KM", description: "300g" },
          {
            name: "Steak in Pepper Sauce",
            price: "47 KM",
            signature: true,
          },
          { name: "Steak Tavola Style", price: "48 KM" },
          { name: "Steak with Gorgonzola", price: "48 KM" },
          { name: "Steak with Porcini Mushrooms", price: "49 KM" },
          { name: "Steak with Truffle Sauce", price: "54 KM" },
        ],
      },
      {
        title: "Side Dishes",
        items: [
          { name: "Bread", price: "3 KM" },
          { name: "Sauce", price: "3 KM" },
          { name: "Rice", price: "5 KM" },
          { name: "Vegetables", price: "5 KM" },
          { name: "Pasta", price: "5 KM" },
          { name: "Boiled / Baked Potato", price: "5 KM" },
          { name: "Hollandaise / Gorgonzola Sauce", price: "5 KM" },
          { name: "Mangold & Potato", price: "6 KM" },
          { name: "Fried Onion", price: "6 KM" },
        ],
      },
    ],
  },
  {
    id: "seafood",
    number: "06",
    label: "Seafood",
    subsections: [
      {
        items: [
          { name: "Grilled Calamari", price: "25 KM" },
          { name: "Fried Calamari", price: "26 KM" },
          { name: "Tavola Calamari", price: "28 KM" },
          { name: "Stuffed Calamari", price: "31 KM", signature: true },
          { name: "Sea Bream / Sea Bass", price: "26 KM", description: "350g" },
          { name: "Tuna Steak", price: "35 KM" },
          { name: "Salmon Steak", price: "35 KM" },
          { name: "Salmon in Hollandaise Sauce", price: "37 KM" },
          { name: "Scampi Tavola", price: "42 KM", description: "300g" },
          { name: "Oyster Scallops", price: "6 KM", description: "Per piece" },
          { name: "Pecten Jacobaeus Scallops", price: "10 KM", description: "Per piece" },
          { name: "Clams", price: "On order" },
          { name: "Sea Bream / Sea Bass", price: "90 KM", description: "1kg" },
          { name: "Grilled Scampi", price: "120 KM", description: "1kg" },
        ],
      },
    ],
  },
  {
    id: "desserts",
    number: "07",
    label: "Desserts",
    subsections: [
      {
        items: [
          { name: "Vanilla Parfait with Raspberries", price: "5 KM" },
          { name: "Panna Cotta", price: "6 KM" },
          { name: "Crème Brûlée", price: "6 KM" },
          { name: "Chocolate Mousse", price: "5/7 KM" },
          { name: "Tiramisu", price: "6/7 KM" },
          { name: "Cinnamon Parfait", price: "6/7 KM" },
          { name: "Ice Cream", price: "6/8 KM" },
          { name: "Crepes Tavola", price: "10/13 KM", signature: true },
          { name: "Carousel Tavola", price: "12/13 KM", description: "Dessert mix" },
        ],
      },
    ],
  },
  {
    id: "kids",
    number: "08",
    label: "Kids Menu",
    subsections: [
      {
        items: [
          { name: "Spaghetti Napoli", price: "9 KM" },
          { name: "Spaghetti Bolognese", price: "11 KM" },
          { name: "Penne with Mushrooms & Chicken", price: "11 KM" },
          { name: "Grilled Chicken Fillet", price: "11 KM" },
          { name: "Natural Veal Scallopini", price: "15 KM" },
          { name: "Tenderloin with Spiced Butter", price: "24 KM" },
        ],
      },
    ],
  },
  {
    id: "drinks",
    number: "09",
    label: "Drinks",
    subsections: [
      {
        title: "Fresh Juices",
        items: [
          { name: "Fresh Orange Juice", price: "8 KM" },
          { name: "Fresh Grapefruit Juice", price: "8 KM" },
        ],
      },
      {
        title: "Soft Drinks",
        items: [
          { name: "Fentimans Rose Lemonade", price: "6 KM" },
          { name: "Red Bull", price: "6 KM" },
        ],
      },
      {
        title: "Beer",
        items: [
          { name: "Sarajevsko", price: "5 KM" },
          { name: "Sarajevsko Dark", price: "5 KM" },
          { name: "Tuborg", price: "5 KM" },
          { name: "Radler", price: "5 KM" },
          { name: "Carlsberg", price: "6 KM" },
          { name: "Heineken", price: "6 KM" },
          { name: "Heineken 0.0", price: "6 KM" },
          { name: "Budweiser", price: "6 KM" },
          { name: "Erdinger", price: "7 KM" },
          { name: "Corona", price: "7 KM" },
          { name: "Sarajevsko Premium", price: "9 KM" },
        ],
      },
      {
        title: "White Wines",
        items: [
          { name: "Keža Žilavka", price: "Ask your server" },
          { name: "Marijanović Žilavka", price: "Ask your server" },
          { name: "Nuić Žilavka", price: "Ask your server" },
          { name: "Carska Žilavka Premium Edition", price: "Ask your server" },
          { name: "Vrbnička Zlatna Žlahtina", price: "Ask your server" },
          { name: "De Gotho Graševina", price: "Ask your server" },
          { name: "Teuta Žilavka Selekcija", price: "Ask your server" },
          { name: "De Gotho Sauvignon Blanc", price: "Ask your server" },
        ],
      },
    ],
  },
];

export type SignatureDish = {
  name: string;
  price: string;
  tag?: string;
  image: string;
};

export const signatureDishes: SignatureDish[] = [
  {
    name: "Gnocchi al Gorgonzola",
    price: "20 KM",
    tag: "Signature",
    image: "/images/menu/gnocchi-al-gorgonzola.png",
  },
  {
    name: "Steak in Pepper Sauce",
    price: "47 KM",
    tag: "Signature",
    image: "/images/menu/steak-pepper-sauce.png",
  },
  {
    name: "Crepes Tavola",
    price: "10/13 KM",
    image: "/images/menu/crepes-tavola.png",
  },
  {
    name: "Insalata di Manzo",
    price: "28/30 KM",
    image: "/images/menu/insalata-di-manzo.png",
  },
  {
    name: "Stuffed Calamari",
    price: "31 KM",
    image: "/images/menu/stuffed-calamari.png",
  },
];

export const tickerDishes = [
  { name: "Gnocchi al Gorgonzola", image: "/images/menu/gnocchi-al-gorgonzola.png" },
  { name: "Steak in Pepper Sauce", image: "/images/menu/steak-pepper-sauce.png" },
  { name: "Stuffed Calamari", image: "/images/menu/stuffed-calamari.png" },
  { name: "Insalata di Manzo", image: "/images/menu/insalata-di-manzo.png" },
  { name: "Tagliata", image: "/images/menu/tagliata.jpg" },
  { name: "Salmon Steak", image: "/images/menu/salmon-steak.jpg" },
  { name: "Beef Carpaccio", image: "/images/menu/beef-carpaccio.jpg" },
  { name: "Crepes Tavola", image: "/images/menu/crepes-tavola.png" },
];

export type CategoryShowcase = {
  label: string;
  tagline: string;
  tab: string;
  image: string;
};

export const categoryShowcase: CategoryShowcase[] = [
  {
    label: "Salads",
    tagline: "Fresh & crisp",
    tab: "salads",
    image: "/images/menu/insalata-veneziana.jpg",
  },
  {
    label: "Cold & Hot Appetizers",
    tagline: "To begin",
    tab: "appetizers",
    image: "/images/menu/beef-carpaccio.jpg",
  },
  {
    label: "Soups",
    tagline: "Warm comfort",
    tab: "soups",
    image: "/images/menu/veal-mushroom-sauce.jpg",
  },
  {
    label: "Pasta",
    tagline: "The heart of the menu",
    tab: "pasta",
    image: "/images/menu/penne.jpg",
  },
  {
    label: "Meat",
    tagline: "From the grill",
    tab: "meat",
    image: "/images/menu/steak-pepper-sauce.png",
  },
  {
    label: "Seafood",
    tagline: "From the Adriatic",
    tab: "seafood",
    image: "/images/menu/grilled-calamari.jpg",
  },
  {
    label: "Desserts",
    tagline: "A sweet finish",
    tab: "desserts",
    image: "/images/menu/tiramisu.jpg",
  },
  {
    label: "Kids Menu",
    tagline: "For the little ones",
    tab: "kids",
    image: "/images/menu/spaghetti-bolognese.jpg",
  },
  {
    label: "Drinks",
    tagline: "Raise a glass",
    tab: "drinks",
    image: "/images/menu/table-drinks.jpg",
  },
];

// One representative thumbnail per /menu tab. Used by the horizontal tab
// row — every category needs an entry here even where no exact dish photo
// exists (e.g. Soups, Kids, Drinks use the closest available shot).
export const categoryTabImages: Record<string, string> = {
  salads: "/images/menu/insalata-veneziana.jpg",
  appetizers: "/images/menu/beef-carpaccio.jpg",
  soups: "/images/menu/veal-mushroom-sauce.jpg",
  pasta: "/images/menu/penne.jpg",
  meat: "/images/menu/steak-pepper-sauce.png",
  seafood: "/images/menu/grilled-calamari.jpg",
  desserts: "/images/menu/tiramisu.jpg",
  kids: "/images/menu/spaghetti-bolognese.jpg",
  drinks: "/images/menu/table-drinks.jpg",
};

// Hover-preview photo per menu item, keyed by exact item name. Only items
// with a real photo on file get an entry — rows without a match here skip
// the hover preview rather than showing a placeholder.
export const menuItemImages: Record<string, string> = {
  "Gnocchi al Gorgonzola": "/images/menu/gnocchi-al-gorgonzola.png",
  "Steak in Pepper Sauce": "/images/menu/steak-pepper-sauce.png",
  "Crepes Tavola": "/images/menu/crepes-tavola.png",
  "Insalata di Manzo": "/images/menu/insalata-di-manzo.png",
  "Stuffed Calamari": "/images/menu/stuffed-calamari.png",
  Tagliata: "/images/menu/tagliata.jpg",
  "Salmon Steak": "/images/menu/salmon-steak.jpg",
  "Beef Carpaccio": "/images/menu/beef-carpaccio.jpg",
  "Insalata Della Casa": "/images/menu/insalata-della-casa.jpg",
  "Grilled Calamari": "/images/menu/grilled-calamari.jpg",
  Tiramisu: "/images/menu/tiramisu.jpg",
  "Insalata Veneziana": "/images/menu/insalata-veneziana.jpg",
  "Insalata Italia": "/images/menu/insalata-italia.jpg",
  Napoletana: "/images/menu/tortellini-napoletana.jpg",
  "Spaghetti Bolognese": "/images/menu/spaghetti-bolognese.jpg",
};
