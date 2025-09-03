// src/components/YourPath/GenerateStars.ts

export const generateStars = (count = 150) => {
  return Array.from({ length: count }, () => {
    const top = Math.random() * 80;
    const left = Math.random() * 100;
    const size = Math.floor(Math.random() * 2) + 0.5; // 1 or 2 px
    const opacity = Math.floor(Math.random() * 60) + 40; // 40% to 100%
    const zIndex = Math.floor(Math.random() * 3); // Optional depth layer
    return { top, left, size, opacity, zIndex };
  });
};
