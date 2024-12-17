import fs from "fs";
import https from "https";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    name: "codeium.jpg",
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80", // Code editor
    description: "AI Code Editor",
  },
  {
    name: "windsurf.jpg",
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80", // Developer workspace
    description: "IDE Interface",
  },
  {
    name: "claude.jpg",
    url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80", // AI/ML visualization
    description: "AI Assistant Interface",
  },
  {
    name: "portfolio.jpg",
    url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&q=80", // Clean portfolio design
    description: "Portfolio Website",
  },
  {
    name: "tesla.jpg",
    url: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&q=80", // Tesla app interface
    description: "Tesla Mobile App",
  },
  {
    name: "banking.jpg",
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80", // Banking dashboard
    description: "Banking Dashboard",
  },
];

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          reject(new Error(`Failed to download image: ${response.statusCode}`));
          return;
        }

        const writeStream = fs.createWriteStream(filepath);
        response.pipe(writeStream);

        writeStream.on("finish", () => {
          writeStream.close();
          console.log(`✅ Downloaded: ${path.basename(filepath)}`);
          resolve();
        });

        writeStream.on("error", (err) => {
          fs.unlink(filepath, () => reject(err));
        });
      })
      .on("error", reject);
  });
};

async function downloadAllImages() {
  const outputDir = path.join(__dirname, "..", "public", "images", "projects");

  // Create output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log("📁 Created projects directory");
  }

  console.log("🚀 Starting image downloads...\n");

  try {
    await Promise.all(
      images.map(async (image) => {
        const filepath = path.join(outputDir, image.name);
        await downloadImage(image.url, filepath);
      })
    );
    console.log("\n✨ All images downloaded successfully!");
  } catch (error) {
    console.error("\n❌ Error downloading images:", error);
    process.exit(1);
  }
}

downloadAllImages();
