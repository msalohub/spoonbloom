const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const convertToWebP = async (inputPath, outputPath) => {
  await sharp(inputPath)
    .webp({ quality: 80 }) // Adjust quality (1-100)
    .toFile(outputPath);
};

// Process all images in public/images
const processImages = async () => {
  const imageDir = path.join(process.cwd(), 'public/images');
  const files = fs.readdirSync(imageDir);

  for (const file of files) {
    if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const inputPath = path.join(imageDir, file);
      const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      
      await convertToWebP(inputPath, outputPath);
      console.log(`Converted ${file} to WebP`);
    }
  }
};

processImages();