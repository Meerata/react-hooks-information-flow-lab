import React, { useState } from "react";
import "./App.css"; // Assuming your CSS file is named App.css
import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";

const items = [
  { id: 1, name: "Apples", category: "Produce" },
  { id: 2, name: "Milk", category: "Dairy" },
  { id: 3, name: "Cake", category: "Dessert" },
  // Add more items as needed
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDarkModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeToggle} />
      <ShoppingList
        items={items}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}

export default App;
