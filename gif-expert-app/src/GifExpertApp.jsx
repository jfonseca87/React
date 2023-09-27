import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Goku"]);

  const addCategory = (value) => {
    if (categories.find((x) => x === value) !== undefined) {
      return;
    }

    setCategories([...categories, value]);
  };

  return (
    <>
      {/* Title */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory setCategory={(value) => addCategory(value)} />

      {/* Gif's list */}
      {categories.map((category) => (
        <GifGrid key={category}  category={category} />
      ))}
    </>
  );
};
