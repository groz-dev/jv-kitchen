export type PersonRating = {
  name: string;
  value: number; // 0..5 (supports halves if you want later)
};

export type Recipe = {
  slug: string;
  title: string;
  image: string; // path under /public
  ingredients: string[];
  directions: string[];
  ratings: PersonRating[];
};

export const recipes: Recipe[] = [
  {
    slug: "rendang",
    title: "Rendang",
    image: "recipes/rendang.svg",
    ratings: [
      { name: "Vanessa", value: 4 },
      { name: "Jake", value: 5 },
    ],
    ingredients: [
      "Beef chuck — 1 kg",
      "Shallots — 3 pcs",
      "Lemongrass — 2 stems",
      "Chilli — 2 pcs",
      "Garlic — 4 cloves",
      "Canned coconut milk — 400 ml",
      "Rendang seasoning — 2 sachets",
    ],
    directions: [
      "Dice up beef chuck.",
      "Fill up water to the top of the meat and pressure cook for 35 mins per kg of meat.",
      "Slice shallots and chilli.",
      "Mince garlic.",
      "Bruise lemongrass.",
      "Put oil on the pot.",
      "Cook shallots, chilli and garlic.",
      "Transfer all the meat to the pot.",
      "Put the seasoning sachet.",
      "Mix up and put lemongrass in.",
      "Pour in coconut milk and cook on medium heat until most of the liquid is reduced and the cream has turned dark brown.",
    ],
  },
  {
    slug: "turkish-pasta",
    title: "Turkish Pasta",
    image: "recipes/turkish-pasta.png",
    ratings: [
      { name: "Vanessa", value: 4 },
      { name: "Jake", value: 4 },
    ],
    ingredients: [
      "Minced meat",
      "Onion",
      "Curry powder",
      "Onion powder, paprika, salt, pepper, magic",
      "Shell pasta",
      "Butter",
      "Yogurt",
      "Cherry tomato",
      "Parsley",
      "Feta cheese",
    ],
    directions: [
      "Pan-fry minced meat and diced onion.",
      "Add a little bit of curry powder.",
      "Add onion powder, paprika, salt, pepper, and magic seasoning.",
      "Pan-fry until crispy.",
      "Boil shell pasta (or any pasta you like).",
      "In a different pan, add butter and paprika.",
      "Mix yogurt with 1–2 cloves of minced garlic and salt.",
      "Assemble: pasta, yogurt, minced meat, butter mixture, cherry tomato, fresh parsley, and feta cheese.",
    ],
  },
];

