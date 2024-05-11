import { existsSync } from "fs";
import { join } from "path";
import { kebabCase } from "change-case";

export const checkProjectImages = (name) => {
  const imagePath = join("public", "assets", "images", name);
  const requiredImages = [
    `${kebabCase(name)}-preview.webp`,
    `${kebabCase(name)}-hero-desktop.webp`,
    `${kebabCase(name)}-hero-mobile.webp`,
  ];

  requiredImages.forEach((image) => {
    const imagePath = join("public", "assets", "images", name, image);
    if (!existsSync(imagePath)) {
      console.log(`Missing image file: ${imagePath}`);
      return false;
    }
  });

  return true;
};
