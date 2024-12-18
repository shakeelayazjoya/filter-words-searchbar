import React, { useState } from "react";

const App = () => {
  // Sample dataset (you can replace this with any large dataset)
  const sampleSuggestions = [
    "apple",
    "banana",
    "orange",
    "grape",
    "watermelon",
    "pineapple",
    "mango",
    "strawberry",
    "blueberry",
    "kiwi",
    "peach",
    "plum",
    "cherry",
    "apricot",
    "pear",
    "grapefruit",
    "lemon",
    "lime",
    "melon",
    "nectarine",
    "pomegranate",
    "papaya",
    "fig",
    "coconut",
    "avocado",
    "tomato",
    "carrot",
    "cucumber",
    "lettuce",
    "spinach",
    "broccoli",
    "cauliflower",
    "kale",
    "zucchini",
    "potato",
    "onion",
    "garlic",
    "pumpkin",
    "asparagus",
    "artichoke",
    "celery",
    "sweet potato",
    "radish",
    "beetroot",
    "parsnip",
    "chili",
    "bell pepper",
    "eggplant",
    "ginger",
    "mint",
    "rosemary",
    "basil",
    "oregano",
    "thyme",
    "coriander",
    "parsley",
    "cilantro",
    "sage",
    "tarragon",
    "dill",
    "chives",
    "chicken",
    "beef",
    "pork",
    "lamb",
    "salmon",
    "tuna",
    "shrimp",
    "lobster",
    "scallops",
    "squid",
    "mushrooms",
    "tofu",
    "tempeh",
    "cheese",
    "yogurt",
    "butter",
    "milk",
    "cream",
    "eggs",
    "bread",
    "bagel",
    "croissant",
    "pasta",
    "pizza",
    "sushi",
    "hamburger",
    "hot dog",
    "sandwich",
    "wrap",
    "burrito",
    "taco",
    "salad",
    "soup",
    "stew",
    "curry",
    "stir fry",
    "gravy",
    "salsa",
    "ketchup",
    "mustard",
    "mayo",
    "vinegar",
    "soy sauce",
    "olive oil",
    "vegetable oil",
    "balsamic vinegar",
    "sesame oil",
    "coconut oil",
    "sunflower oil",
    "peanut butter",
    "jam",
    "honey",
    "syrup",
    "chocolate",
    "cookies",
    "cake",
    "pie",
    "donut",
    "brownie",
    "ice cream",
    "pudding",
    "candy",
    "popcorn",
    "chips",
    "crisps",
    "soda",
    "juice",
    "coffee",
    "tea",
    "beer",
    "wine",
    "whiskey",
    "vodka",
    "rum",
    "champagne",
    "cocktail",
    "smoothie",
    "milkshake",
    "lemonade",
    "iced tea",
    "water",
    "sparkling water",
    "iced coffee",
    "iced latte",
    "mocha",
    "espresso",
    "cappuccino",
    "latte",
    "macchiato",
    "flat white",
    "americano",
    "hot chocolate",
    "chai",
    "matcha",
    "ginger tea",
    "green tea",
    "black tea",
    "herbal tea",
    "iced matcha",
    "kombucha",
    "fruit punch",
    "energy drink",
    "protein shake",
    "sports drink",
    "kombucha",
    "smoothie bowl",
    "yogurt parfait",
    "granola",
    "oatmeal",
    "cereal",
  ];

  // State to hold the user input and filtered suggestions
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  // Handle user input and filter the dataset
  const handleChange = (e) => {
    const userInput = e.target.value;
    setQuery(userInput);

    // Filter suggestions based on input (case-insensitive)
    if (userInput.length > 0) {
      const filtered = sampleSuggestions.filter((item) =>
        item.toLowerCase().startsWith(userInput.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setFilteredSuggestions([]); // Clear suggestions when one is selected
  };

  return (
    <div
      className="App"
      style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}
    >
      <h1>Search Autocomplete</h1>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Type something..."
        style={{
          width: "300px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
      {filteredSuggestions.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "10px 0",
            border: "1px solid #ddd",
            width: "300px",
            backgroundColor: "#fff",
            position: "absolute",
            zIndex: 1,
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {filteredSuggestions.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(item)}
              style={{
                padding: "10px",
                borderBottom: "1px solid #ddd",
                cursor: "pointer",
                backgroundColor: "#f9f9f9",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
