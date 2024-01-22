export const getColors = (color: string | undefined): string[] => {
  if (!color) return ["white", "black"];
  const colors = color.split(" and ");
  if(!CSS.supports('color', colors[0]) || !CSS.supports('color', colors[1])) return ["white",  "black"]
  return colors;
};
