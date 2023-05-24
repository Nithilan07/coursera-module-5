import React from 'react';
import Tile from './Tile';

const App = () => {
  const categories = ['Lunch', 'Dinner', 'Sushi', 'Breakfast']; // Replace with your actual categories

  const handleSpecialsClick = () => {
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    window.location.href = `/category/${randomCategory}`; // Redirect to the random category page
  };

  return (
    <div>
      <Tile title="Menu" />
      <Tile title="Specials" onClick={handleSpecialsClick} />
      <Tile title="Map" />
    </div>
  );
};

export default App;
