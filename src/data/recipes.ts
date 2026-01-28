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
  {
    slug: "schnitzel-sandwich",
    title: "Schnitzel Sandwich",
    image: "recipes/schnitzel-sandwich.png",
    ratings: [
      { name: "Vanessa", value: 3 },
      { name: "Jake", value: 3 },
    ],
    ingredients: [
      "Turkish bread",
      "Pesto",
      "Chicken schnitzel",
      "Mozzarella",
      "Tomatoes",
      "Basil",
      "Rocket salad",
    ],
    directions: [
      "Cook schnitzel.",
      "Torch mozzarella.",
      "Pan-fry tomatoes with basil.",
      "Arrange the sandwich with bread, pesto, schnitzel, mozzarella, tomatoes with basil, and rocket salad.",
    ],
  },
  {
    slug: "sushi-bake",
    title: "Sushi Bake",
    image: "recipes/sushi-bake.png",
    ratings: [
      { name: "Vanessa", value: 3 },
      { name: "Jake", value: 2 },
    ],
    ingredients: [
      "Rice — 2 cups",
      "Salmon — 250 g",
      "Crab kani meat — 4 pcs",
      "Soy sauce",
      "Kewpie mayo",
      "Siracha",
      "Furikake",
      "Green onions",
      "Salt and pepper",
      "Magic seasoning",
    ],
    directions: [
      "Cook rice.",
      "Preheat oven to 200°C.",
      "Cut salmon and crab kani meat into bite pieces.",
      "Season salmon and crab with 1 tbsp soy sauce, lots of mayo, some siracha, salt, pepper, magic seasoning, furikake, and chopped green onions.",
      "After the rice is cooked, put rice into a glass baking dish and mix with a lot of furikake and 1 tbsp of sushi seasoning/mirin (optional).",
      "Press the rice flat and put the seasoned salmon mixture on top.",
      "Drizzle more mayo, siracha, green onions, and a little bit more furikake over the top.",
      "Bake for 15 minutes.",
    ],
  },
  {
    slug: "thai-minced-meat",
    title: "Thai Minced Meat",
    image: "recipes/thai-minced-meat.png",
    ratings: [
      { name: "Vanessa", value: 4 },
      { name: "Jake", value: 3 },
    ],
    ingredients: [
      "Minced meat",
      "Chili",
      "Garlic",
      "Thai basil leaves",
      "Egg",
      "Spring onion",
      "Oyster sauce",
      "Soy sauce",
      "Fish sauce",
      "Sugar",
      "Magic seasoning",
    ],
    directions: [
      "Grind chilli & garlic together.",
      "Heat wok and put chilli and garlic.",
      "Put mince.",
      "Add oyster sauce.",
      "Add soy sauce.",
      "Add fish sauce.",
      "Add thai basil leaves.",
      "Add sugar.",
      "Add MSG.",
      "Garnish with spring onion.",
      "Add runny egg on top.",
    ],
  },
];

