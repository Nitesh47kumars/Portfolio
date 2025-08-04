export const generateStars = (count = 30) => {
    return Array.from({ length: count }, () => {
      const top = Math.random() * 73;
      const left = Math.random() * 100;
      const size = Math.floor(Math.random() * 2);
      const opacity = Math.floor(Math.random() * 60) + 40;
      return [top, left, size, opacity];
    });
  };
  