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
];

